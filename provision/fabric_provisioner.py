# vi: syntax=python
import os
import fabric

from inspect import getsource
from textwrap import dedent
from fabric.api import run, sudo, cd

fabric.state.env.colorize_errors = True
fabric.state.output['stdout'] = False

# task const variables
VARS = dict(
    current_user=fabric.state.env.user,

    # project settings
    project_name='foo',
    user_data=dict(username='root', email='root@e.co', password='123123'),

    # dirs configs
    templates_dir='./provision/templates',
    root_dir='/home/vagrant/proj',
    client_dir='/home/vagrant/proj/client',
    venv_path='/home/vagrant/venv',
    base_dir='/home/vagrant',

    # nginx config
    http_host='10.1.1.27',
    http_port='80',

    # locale conf
    locale='ru_RU',
    encoding='UTF-8',
)


def sentinel(sentinel_name=None):
    def sentinel_wrapp(function):
        hashed_func_name = '_'.join((function.__name__, str(hash(getsource(function)))))

        def wrapped():
            sentinel_path = '/usr/{}'.format(sentinel_name or hashed_func_name)
            if fabric.contrib.files.exists(sentinel_path):
                fabric.utils.warn('skip {}'.format(sentinel_name or hashed_func_name))
                return
            function()
            sudo('touch {}'.format(sentinel_path))
        return wrapped
    return sentinel_wrapp


def common():
    """ Common tasks """
    locale()
    apt_packages()
    python_packages()


@sentinel()
def locale():
    """ Set locale to enviroment """
    fabric.contrib.files.upload_template(
        'environment.j2', '/etc/environment',
        context=VARS, use_jinja=True, backup=False, use_sudo=True, template_dir=VARS['templates_dir'])
    sudo('localedef {locale}.{encoding} -i {locale} -f {encoding}'.format(**VARS))
    # sudo('locale-gen')


@sentinel()
def apt_packages():
    """ Install common packages """
    sudo('apt-get -y update')
    sudo('apt-get -y install libcurl4-gnutls-dev libexpat1-dev gettext libz-dev libssl-dev git')


@sentinel()
def python_packages():
    """ Install python components """

    sudo('apt-get -y install python-dev python-pip python-virtualenv build-essential python3')


def nginx():
    """ Install and configure nginx tasks """
    nginx_install()
    # create nginx config file for project
    fabric.contrib.files.upload_template(
        'nginx-host.j2', '/etc/nginx/sites-available/{project_name}'.format(**VARS),
        context=VARS, use_jinja=True, backup=False, use_sudo=True, template_dir=VARS['templates_dir'])
    # make s-link to enabled sites
    sudo('ln -sf /etc/nginx/sites-available/{project_name} /etc/nginx/sites-enabled/{project_name}'.format(**VARS))
    # remove default nginx config
    sudo('rm -f /etc/nginx/sites-*/default')
    # restart nginx
    sudo('service nginx restart')


@sentinel()
def nginx_install():
    """ Install nginx """
    # install nginx
    sudo('apt-get -y install nginx')


@sentinel()
def database():
    """ Install database tasks """
    pass



def app():
    """ Run application tasks """
    with cd(VARS['root_dir']):
        # Create venv and install requirements
        run('python3.4 -m virtualenv -p /usr/bin/python3.4 {venv_path}'.format(**VARS))
        # Install required python packages with pip from wheels archive
        # make wheels for python packages for first running
        if not fabric.contrib.files.exists(os.path.join(VARS['root_dir'], 'wheels')):
            run('{venv_path}/bin/pip install -U pip wheel'.format(**VARS))
            run('mkdir -p wheels')
            run('{venv_path}/bin/pip wheel -w wheels/ -r requirements-remote.txt --pre'.format(**VARS))
        run('make wheel_install')
        # run app tasks for devserver start
        # start django project
        if not fabric.contrib.files.exists(os.path.join(VARS['root_dir'], 'manage.py')):
            run('{venv_path}/bin/django-admin startproject {project_name} .'.format(**VARS))
        # Copy settings local
        if not fabric.contrib.files.exists(os.path.join(VARS['root_dir'], VARS['project_name'], 'settings_local.py')):
            run('cd {project_name} && cp settings_local.py.example settings_local.py'.format(**VARS))


def localserver():
    with cd(VARS['root_dir']):
        # collect static files
        for command in ('migrate --noinput', 'collectstatic --noinput', ):  # 'compilemessages', ):
            run('{venv_path}/bin/python manage.py {command}'.format(command=command, **VARS))
        # make root dir available to read
        # sudo('chmod 755 {base_dir}/static -R'.format(**VARS))
        # Create user
        create_user_py = dedent('''\
            from django.contrib.auth import get_user_model
            User = get_user_model()
            User.objects.create_superuser(**{user_data})
        ''').format(**VARS)

        with fabric.context_managers.settings(warn_only=True):
            run('echo "{create_user_py}" | {venv_path}/bin/python manage.py shell'.format(
                create_user_py=create_user_py, **VARS))
        run('mkdir var -p')

        # Start runserver
        run('make start', pty=False)


def frontend():
    with cd('/tmp'):
        run('wget https://deb.nodesource.com/setup_6.x')
        sudo('bash setup_6.x')
        sudo('apt-get install -y nodejs')
        sudo('npm install -g npm@latest')
    with cd(VARS['client_dir']):
        run('npm i')
        run('npm run build')
