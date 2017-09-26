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
      currentCell: null,
      currentCellInput: null,
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
  },
  methods: {
    editModeEnable(cell, row_index, cell_index) {
      console.log('enable edit mode');
      this.currentCell = this.rows[row_index].content[cell_index];
      this.currentCellInput = document.getElementById(`cell-input-${row_index}-${cell_index}`);

      Vue.set(this.currentCell, 'editProcess', true);
      this.currentCellInput.value = this.currentCell.value;
      Vue.nextTick(() => {
        this.currentCellInput.focus();
        this.currentCellInput.select();
      });
    },
    saveNewCellValue() {
      if (!this.currentCellInput.value) {
        return;
      }

      this.currentCell.value = this.currentCellInput.value;
      this.currentCellInput.value = '';
      this.currentCell.editProcess = false;
    },
    restoreOldCellValue() {
      this.currentCellInput.value = '';
      this.currentCell.editProcess = false;
    }
  }
});





























// ddf
