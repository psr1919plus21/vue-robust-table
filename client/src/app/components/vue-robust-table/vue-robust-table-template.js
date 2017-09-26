export const template = `
    <div class="vue-robust-table">
      <div v-if="showTableHeader" class="vue-robust-table__row vue-robust-table__row_header">
        <div class="vue-robust-table__cell"
          :class="cellModifyers"
          v-for="cell in rows[0].content"
          v-text="cell.title">
        </div>
      </div>

      <div class="vue-robust-table__row"
         v-for="(row, row_index) in rows">
          <div tabindex="1" class="vue-robust-table__cell"
            :id="'vue-robust-table__cell-' + row_index + '-' + cell_index"
            :class="[cellModifyers, {'vue-robust-table__cell_editprocess': cell.editProcess}]"
            v-for="(cell, cell_index) in row.content"
            @dblclick.left="editModeEnable(row_index, cell_index)"
            @focus="cellOnFocus(row_index, cell_index)"
            @keyup.enter.self="editModeEnable(row_index, cell_index)">
            <div class="vue-robust-table__value"
              :class="{'vue-robust-table__value_hidden': cell.editProcess}"
              v-text="cell.value"></div>
            <div v-show="cell.editProcess" class="vue-robust-table__input-wrapper">
              <input
                :id="'cell-input-' + row_index + '-' + cell_index"
                type="text"
                class="vue-robust-table__input"
                @keyup.enter="saveNewCellValue"

                @keyup.esc="restoreOldCellValue">
            </div>
<!-- @blur="saveNewCellValue" -->
          </div>
      </div>

      <div v-if="rowsExtensible"
        @click="addTableRow()"
        class="vue-robust-table__add-row"></div>
    </div>
`;
