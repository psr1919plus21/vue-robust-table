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
          <div class="vue-robust-table__cell"
            :class="[cellModifyers, {'vue-robust-table__cell_editprocess': cell.editProcess}]"
            v-for="(cell, cell_index) in row.content"
            @dblclick.left="editModeEnable(cell, row_index, cell_index)">
            <div v-show="!cell.editProcess" class="vue-robust-table__value"
              v-text="cell.value"></div>
            <div v-show="cell.editProcess" class="vue-robust-table__input-wrapper">
              <input :ref="'cell-input-' + row_index + '-' + cell_index" type="text" class="vue-robust-table__input">
            </div>

          </div>
      </div>
    </div>
`;
