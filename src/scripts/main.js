'use strict';

const table = document.querySelector('table');

for (let i = 0; i < table.rows.length; i++) {
  const row = table.rows[i];

  const secondCell = row.cells[1].cloneNode(true);

  row.insertBefore(secondCell, row.cells[row.cells.length - 1]);
}
