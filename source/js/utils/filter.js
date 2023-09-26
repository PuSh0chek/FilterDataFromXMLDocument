import {arrayOfFilteredData, arrayOfFilteredDataErrors, arrayOfFilteredErrors, countIterationOnArray, voidElement } from '../variable.js';
import { jsonData } from '../array.js';
import { getFilteredErrors } from './getFilteredErrors.js';
import { getFilteringMainArray } from './getFilteringMainArray.js';

export function filter() {
  try {
    getFilteringMainArray();
    let i = voidElement;
    while (i !== countIterationOnArray) {
      getFilteredErrors();
      i++;
    }
    console.log('JSON', jsonData);
    console.log('Готовый массив', arrayOfFilteredData);
    console.log('Для исправления в ручную', arrayOfFilteredDataErrors);
    console.log('Массив прошедших проверку ошибок', arrayOfFilteredErrors);
  } catch (error) {
    console.log(error);
  }
}
