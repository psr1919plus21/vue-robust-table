/* global Vue */
import './components/vue-robust-table';

new Vue({
  el: '#app',
  components: ['VueRobustTable'],
  data: {
    dataTableRows: [
      {
        state: 'active',
        content: [
          {
            title: 'id',
            value: 1
          },
          {
            title: 'color',
            value: '#334345'
          },
          {
            title: 'size',
            value: 'large'
          },
          {
            title: 'geo',
            value: 'Sevastopol'
          },
          {
            title: 'animal',
            value: 'cat'
          },

        ]
      },
      {
        state: 'default',
        content: [
          {
            title: 'id',
            value: 2
          },
          {
            title: 'color',
            value: '#45a32f'
          },
          {
            title: 'size',
            value: 'medium'
          },
          {
            title: 'geo',
            value: 'Moscow'
          },
          {
            title: 'animal',
            value: 'dog'
          },
        ]
      },
      {
        state: 'default',
        content: [
          {
            title: 'id',
            value: 2
          },
          {
            title: 'color',
            value: '#45a32f'
          },
          {
            title: 'size',
            value: 'medium'
          },
          {
            title: 'geo',
            value: 'Moscow'
          },
          {
            title: 'animal',
            value: 'dog'
          },
        ]
      },
      {
        state: 'default',
        content: [
          {
            title: 'id',
            value: 2
          },
          {
            title: 'color',
            value: '#45a32f'
          },
          {
            title: 'size',
            value: 'medium'
          },
          {
            title: 'geo',
            value: 'Moscow'
          },
          {
            title: 'animal',
            value: 'dog'
          },
        ]
      },
      {
        state: 'default',
        content: [
          {
            title: 'id',
            value: 2
          },
          {
            title: 'color',
            value: '#45a32f'
          },
          {
            title: 'size',
            value: 'medium'
          },
          {
            title: 'geo',
            value: 'Moscow'
          },
          {
            title: 'animal',
            value: 'dog'
          },
        ]
      },
      {
        state: 'default',
        content: [
          {
            title: 'id',
            value: 2
          },
          {
            title: 'color',
            value: '#45a32f'
          },
          {
            title: 'size',
            value: 'medium'
          },
          {
            title: 'geo',
            value: 'Moscow'
          },
          {
            title: 'animal',
            value: 'dog'
          },
        ]
      },
      {
        state: 'default',
        content: [
          {
            title: 'id',
            value: 2
          },
          {
            title: 'color',
            value: '#45a32f'
          },
          {
            title: 'size',
            value: 'medium'
          },
          {
            title: 'geo',
            value: 'Moscow'
          },
          {
            title: 'animal',
            value: 'dog'
          },
        ]
      }
    ],

    dataTableRowsSecond: [
      {
        state: 'active',
        content: [
          {
            title: 'id',
            value: 1
          },
          {
            title: 'Режисер',
            value: 'Тарантино'
          },
          {
            title: 'Фильм',
            value: 'От заката до рассвета'
          },
          {
            title: 'год',
            value: '2012'
          },
          {
            title: 'оценка',
            value: '5'
          },
          {
            title: 'жанр',
            value: 'фантастика, ужасы, боевик'
          },
          {
            title: 'бюджет',
            value: '$100000000'
          },

        ]
      },
      {
        state: 'active',
        content: [
          {
            title: 'id',
            value: 1
          },
          {
            title: 'Режисер',
            value: 'Тарантино'
          },
          {
            title: 'Фильм',
            value: 'От заката до рассвета'
          },
          {
            title: 'год',
            value: '2012'
          },
          {
            title: 'оценка',
            value: '5'
          },
          {
            title: 'жанр',
            value: 'фантастика, ужасы, боевик'
          },
          {
            title: 'бюджет',
            value: '$100000000'
          },

        ]
      },
      {
        state: 'active',
        content: [
          {
            title: 'id',
            value: 1
          },
          {
            title: 'Режисер',
            value: 'Тарантино'
          },
          {
            title: 'Фильм',
            value: 'От заката до рассвета'
          },
          {
            title: 'год',
            value: '2012'
          },
          {
            title: 'оценка',
            value: '5'
          },
          {
            title: 'жанр',
            value: 'фантастика, ужасы, боевик'
          },
          {
            title: 'бюджет',
            value: '$100000000'
          },

        ]
      },
      {
        state: 'active',
        content: [
          {
            title: 'id',
            value: 1
          },
          {
            title: 'Режисер',
            value: 'Тарантино'
          },
          {
            title: 'Фильм',
            value: 'От заката до рассвета'
          },
          {
            title: 'год',
            value: '2012'
          },
          {
            title: 'оценка',
            value: '5'
          },
          {
            title: 'жанр',
            value: 'фантастика, ужасы, боевик'
          },
          {
            title: 'бюджет',
            value: '$100000000'
          },

        ]
      },
      {
        state: 'active',
        content: [
          {
            title: 'id',
            value: 1
          },
          {
            title: 'Режисер',
            value: 'Тарантино'
          },
          {
            title: 'Фильм',
            value: 'От заката до рассвета'
          },
          {
            title: 'год',
            value: '2012'
          },
          {
            title: 'оценка',
            value: '5'
          },
          {
            title: 'жанр',
            value: 'фантастика, ужасы, боевик'
          },
          {
            title: 'бюджет',
            value: '$100000000'
          },

        ]
      },
      {
        state: 'active',
        content: [
          {
            title: 'id',
            value: 1
          },
          {
            title: 'Режисер',
            value: 'Тарантино'
          },
          {
            title: 'Фильм',
            value: 'От заката до рассвета'
          },
          {
            title: 'год',
            value: '2012'
          },
          {
            title: 'оценка',
            value: '5'
          },
          {
            title: 'жанр',
            value: 'фантастика, ужасы, боевик'
          },
          {
            title: 'бюджет',
            value: '$100000000'
          },

        ]
      },
      {
        state: 'active',
        content: [
          {
            title: 'id',
            value: 1
          },
          {
            title: 'Режисер',
            value: 'Тарантино'
          },
          {
            title: 'Фильм',
            value: 'От заката до рассвета'
          },
          {
            title: 'год',
            value: '2012'
          },
          {
            title: 'оценка',
            value: '5'
          },
          {
            title: 'жанр',
            value: 'фантастика, ужасы, боевик'
          },
          {
            title: 'бюджет',
            value: '$100000000'
          },

        ]
      },
      {
        state: 'active',
        content: [
          {
            title: 'id',
            value: 1
          },
          {
            title: 'Режисер',
            value: 'Тарантино'
          },
          {
            title: 'Фильм',
            value: 'От заката до рассвета'
          },
          {
            title: 'год',
            value: '2012'
          },
          {
            title: 'оценка',
            value: '5'
          },
          {
            title: 'жанр',
            value: 'фантастика, ужасы, боевик'
          },
          {
            title: 'бюджет',
            value: '$100000000'
          },

        ]
      },
      {
        state: 'active',
        content: [
          {
            title: 'id',
            value: 1
          },
          {
            title: 'Режисер',
            value: 'Тарантино'
          },
          {
            title: 'Фильм',
            value: 'От заката до рассвета'
          },
          {
            title: 'год',
            value: '2012'
          },
          {
            title: 'оценка',
            value: '5'
          },
          {
            title: 'жанр',
            value: 'фантастика, ужасы, боевик'
          },
          {
            title: 'бюджет',
            value: '$100000000'
          },

        ]
      },
      {
        state: 'active',
        content: [
          {
            title: 'id',
            value: 1
          },
          {
            title: 'Режисер',
            value: 'Тарантино'
          },
          {
            title: 'Фильм',
            value: 'От заката до рассвета'
          },
          {
            title: 'год',
            value: '2012'
          },
          {
            title: 'оценка',
            value: '5'
          },
          {
            title: 'жанр',
            value: 'фантастика, ужасы, боевик'
          },
          {
            title: 'бюджет',
            value: '$100000000'
          },

        ]
      },
      {
        state: 'active',
        content: [
          {
            title: 'id',
            value: 1
          },
          {
            title: 'Режисер',
            value: 'Тарантино'
          },
          {
            title: 'Фильм',
            value: 'От заката до рассвета'
          },
          {
            title: 'год',
            value: '2012'
          },
          {
            title: 'оценка',
            value: '5'
          },
          {
            title: 'жанр',
            value: 'фантастика, ужасы, боевик'
          },
          {
            title: 'бюджет',
            value: '$100000000'
          },

        ]
      },
      {
        state: 'active',
        content: [
          {
            title: 'id',
            value: 1
          },
          {
            title: 'Режисер',
            value: 'Тарантино'
          },
          {
            title: 'Фильм',
            value: 'От заката до рассвета'
          },
          {
            title: 'год',
            value: '2012'
          },
          {
            title: 'оценка',
            value: '5'
          },
          {
            title: 'жанр',
            value: 'фантастика, ужасы, боевик'
          },
          {
            title: 'бюджет',
            value: '$100000000'
          },

        ]
      },
      {
        state: 'active',
        content: [
          {
            title: 'id',
            value: 1
          },
          {
            title: 'Режисер',
            value: 'Тарантино'
          },
          {
            title: 'Фильм',
            value: 'От заката до рассвета'
          },
          {
            title: 'год',
            value: '2012'
          },
          {
            title: 'оценка',
            value: '5'
          },
          {
            title: 'жанр',
            value: 'фантастика, ужасы, боевик'
          },
          {
            title: 'бюджет',
            value: '$100000000'
          },

        ]
      },
      {
        state: 'active',
        content: [
          {
            title: 'id',
            value: 1
          },
          {
            title: 'Режисер',
            value: 'Тарантино'
          },
          {
            title: 'Фильм',
            value: 'От заката до рассвета'
          },
          {
            title: 'год',
            value: '2012'
          },
          {
            title: 'оценка',
            value: '5'
          },
          {
            title: 'жанр',
            value: 'фантастика, ужасы, боевик'
          },
          {
            title: 'бюджет',
            value: '$100000000'
          },

        ]
      },
    ],

    dataTableSettings: {
      tableHeader: true,
    }
  },
  methods: {
    toggleHeader() {
      console.log('toggleHeader');
      this.dataTableSettings.tableHeader = !this.dataTableSettings.tableHeader;
    }
  },
  mounted: function() {
    this.$el.classList.remove('vue-app-preload');
  }
})
