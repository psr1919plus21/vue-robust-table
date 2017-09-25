export const template = `
    <div class="vue-robust-table">
      <div v-if="showTableHeader" class="vue-robust-table__row vue-robust-table__row_header">
        <div class="vue-robust-table__cell"
          v-for="cell in rows[0].content"
          v-text="cell.title">
        </div>
      </div>

      <div class="vue-robust-table__row"
         v-for="row in rows">
          <div class="vue-robust-table__cell"
            v-for="cell in row.content"
            v-text="cell.value"
          ></div>
      </div>
    </div>
`;
