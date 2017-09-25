/* global Vue */

import {template} from './vue-robust-table-template';

export default Vue.component('vue-robust-table', {
  props: {
    rows: {
      type: Array,
    },
    showTableHeader: {
      type: Boolean,
      default: true
    }
  },
  template,
  data() {
    return {

    }
  }
});
