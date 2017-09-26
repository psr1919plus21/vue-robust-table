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
    },
    showCellsBorders: {
      type: Boolean,
      default: true
    },
    showColumnsBorders: {
      type: Boolean,
      default: true
    },
    showHeaderSpacing: {
      type: Boolean,
      default: true
    },
    showBorders: {
      type: Boolean,
      default: true
    },
  },
  template,
  data() {
    return {

    }
  },
  computed: {
    cellModifyers() {
      return {
        'vue-robust-table__cell_no-horizontal-borders': !this.showCellsBorders,
        'vue-robust-table__cell_no-vertical-borders': !this.showColumnsBorders,
        'vue-robust-table__cell_header-spacing': this.showHeaderSpacing,
        'vue-robust-table__cell_no-borders': !this.showBorders,
      }
    }
  }
});
