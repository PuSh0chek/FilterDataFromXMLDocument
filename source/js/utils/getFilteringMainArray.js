import {contract, contractNumber, data, arrayOfFilteredData, arrayOfFilteredDataErrors } from '../variable.js';
import { jsonData } from '../array.js';

export const getFilteringMainArray = () => {
  jsonData.forEach((item) => {
    const epty2ContractString = item['Аналитика Кт'];
    if(item['Аналитика Кт'] === null || item.Дебет === null || item.Кредит === null || item.__EMPTY === null || item.__EMPTY_2 === null || item.Период === null) {
      arrayOfFilteredDataErrors.push([item.Период, item['Аналитика Дт'], item['Аналитика Кт'], item.Дебет, item.__EMPTY, item.Кредит, item.__EMPTY_2]);
    } else {
      const contractString = epty2ContractString.match(contract[0]);
      if(contractString === null) {
        arrayOfFilteredDataErrors.push([item.Период, item['Аналитика Дт'], item['Аналитика Кт'], item.Дебет, item.__EMPTY, item.Кредит, item.__EMPTY_2]);
      } else {
        const matchesContractNumberS = contractString[0].match(contractNumber[0]);
        const matchesContractDate = contractString[0].match(data[0]);
        if (matchesContractDate !== null) {
          const arrayContractDay = matchesContractDate[0];
          const arrayContractNumber = matchesContractNumberS[0];
          if(contractString !== null) {
            arrayOfFilteredData.push([item.Период, arrayContractNumber, arrayContractDay, item.Дебет, item.__EMPTY, item.Кредит, item.__EMPTY_2, item['Аналитика Дт'], item['Аналитика Кт']].join(', '));
          }
        } else {
          arrayOfFilteredDataErrors.push([item.Период, item['Аналитика Дт'], item['Аналитика Кт'], item.Дебет, item.__EMPTY, item.Кредит, item.__EMPTY_2]);
        }
      }
    }
  });
};


