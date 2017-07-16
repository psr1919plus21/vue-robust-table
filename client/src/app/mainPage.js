import './components/MyComponent';

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  },
  mounted: function() {
    this.$el.classList.remove('vue-app-preload');
  }
})
