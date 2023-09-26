import {contract, contractNumber, data, arrayOfFilteredData, arrayOfFilteredDataErrors, arrayOfFilteredErrors, countIterationOnArray } from '../variable.js';

export const getFilteredErrors = () => {
  arrayOfFilteredDataErrors.forEach((item, index) => {
    contract.forEach((e) => {
      if(item[5] < 60){
        const epty2ContractString = item[1];
        const contractString = epty2ContractString.match(e);
        if(contractString !== null) {
          contractNumber.forEach((contractNumberElement) => {
            const matchesContractNumber = contractString[0].match(contractNumberElement);
            if(matchesContractNumber !== null) {
              data.forEach((datePart) => {
                const matchesContractDate = contractString[0].match(datePart);
                if(matchesContractDate !== null) {
                  const arrayContractDay = matchesContractDate[0];
                  const arrayContractNumber = matchesContractNumber[0];
                  const elementOfArrayIsDate = arrayContractDay.match(datePart);
                  const elementOfArrayIsContractNumber = arrayContractNumber.match(contractNumberElement);
                  const elementIsDate = elementOfArrayIsDate[0].match(datePart);
                  const elementIsContract = elementOfArrayIsContractNumber[0].match(contractNumberElement);
                  if(elementIsContract !== null) {
                    const dateReplace = elementIsDate[0].indexOf('г.') !== -1 ? elementIsDate[0].replace(/г\./g, '') : elementIsDate[0];
                    arrayOfFilteredErrors.push([item[0], elementIsContract, dateReplace, item[3], item[4], item[5], -item[6], item[2], item[1]].join(', '));
                    arrayOfFilteredData.push([item[0], elementIsContract, dateReplace, item[3], item[4], item[5], -item[6], item[2], item[1]].join(', '));
                    arrayOfFilteredDataErrors.splice(index, 1);
                  };
                }
              });
            }
          });
        }
      } else {
        const epty2ContractString = item[2];
        const contractString = epty2ContractString.match(e);
        if(contractString !== null) {
          contractNumber.forEach((contractNumberElement) => {
            const matchesContractNumber = contractString[0].match(contractNumberElement);
            if(matchesContractNumber !== null) {
              data.forEach((datePart) => {
                const matchesContractDate = contractString[0].match(datePart);
                if(matchesContractDate !== null) {
                  const arrayContractDay = matchesContractDate[0];
                  const arrayContractNumber = matchesContractNumber[0];
                  const elementOfArrayIsDate = arrayContractDay.match(datePart);
                  const elementOfArrayIsContractNumber = arrayContractNumber.match(contractNumberElement);
                  const elementIsDate = elementOfArrayIsDate[0].match(datePart);
                  const elementIsContract = elementOfArrayIsContractNumber[0].match(contractNumberElement);
                  if(elementIsContract !== null) {
                    let dateReplace;
                    if(elementIsDate[0].indexOf('от') !== -1) {
                      if(elementIsDate[0].indexOf('г.') !== -1) {
                        dateReplace = elementIsDate[0].indexOf('г.') !== -1 ? elementIsDate[0].replace(/г\./g, '') : elementIsDate[0];
                        arrayOfFilteredErrors.push([item[0], elementIsContract, dateReplace, item[3], item[4], item[5], item[6], item[2], item[1]].join(', '));
                        arrayOfFilteredData.push([item[0], elementIsContract, dateReplace, item[3], item[4], item[5], item[6], item[2], item[1]].join(', '));
                        arrayOfFilteredDataErrors.splice(index, 1);
                      } else {
                        dateReplace = elementIsDate[0].indexOf('от') !== -1 ? elementIsDate[0].replace(/\от/g, '') : elementIsDate[0];
                        arrayOfFilteredErrors.push([item[0], elementIsContract, dateReplace, item[3], item[4], item[5], item[6], item[2], item[1]].join(', '));
                        arrayOfFilteredData.push([item[0], elementIsContract, dateReplace, item[3], item[4], item[5], item[6], item[2], item[1]].join(', '));
                        arrayOfFilteredDataErrors.splice(index, 1);
                      }
                    } else if (elementIsDate[0].indexOf('г.') !== -1) {
                      if(elementIsDate[0].indexOf('от') !== -1) {
                        dateReplace = elementIsDate[0].indexOf('от') !== -1 ? elementIsDate[0].replace(/\от/g, '') : elementIsDate[0];
                        arrayOfFilteredErrors.push([item[0], elementIsContract, dateReplace, item[3], item[4], item[5], item[6], item[2], item[1]].join(', '));
                        arrayOfFilteredData.push([item[0], elementIsContract, dateReplace, item[3], item[4], item[5], item[6], item[2], item[1]].join(', '));
                        arrayOfFilteredDataErrors.splice(index, 1);
                      } else {
                        dateReplace = elementIsDate[0].indexOf('г.') !== -1 ? elementIsDate[0].replace(/г\./g, '') : elementIsDate[0];
                        arrayOfFilteredErrors.push([item[0], elementIsContract, dateReplace, item[3], item[4], item[5], item[6], item[2], item[1]].join(', '));
                        arrayOfFilteredData.push([item[0], elementIsContract, dateReplace, item[3], item[4], item[5], item[6], item[2], item[1]].join(', '));
                        arrayOfFilteredDataErrors.splice(index, 1);
                      }
                    } else {
                      dateReplace = elementIsDate[0].indexOf('г.') !== -1 ? elementIsDate[0].replace(/г\./g, '') : elementIsDate[0];
                      arrayOfFilteredErrors.push([item[0], elementIsContract, dateReplace, item[3], item[4], item[5], item[6], item[2], item[1]].join(', '));
                      arrayOfFilteredData.push([item[0], elementIsContract, dateReplace, item[3], item[4], item[5], item[6], item[2], item[1]].join(', '));
                      arrayOfFilteredDataErrors.splice(index, 1);
                    }
                  };
                }
              });
            }
          });
        }
      }
    });
  });
};
