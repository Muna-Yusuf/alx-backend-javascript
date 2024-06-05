// main.ts
/// <reference path="./crud.d.ts" />
import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

const row: RowElement = { firstName: "Guillaume", lastName: "Salva" };

const newRowID: RowID = CRUD.insertRow(row);
console.log(`CRUD.insertRow(obj)\n// Insert row ${JSON.stringify(row)}`);

const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);
console.log(`CRUD.updateRow(${newRowID}, ${JSON.stringify(updatedRow)})`);
CRUD.deleteRow(newRowID);
console.log(`CRUD.deleteRow(${newRowID})`);
