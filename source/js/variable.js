// РЕГУЛЯРНЫЕ ВЫРАЖЕНИЯ //
export const contractFirstOption = /(\d{1,4}\s*-{0,2}\s*[в,к,В,К]{1,2}\s*от\s*\d{1,2}.\d{1,2}.\d{4})|(\d{1,4}\s*-{0,2}\s*[в,к,В,К]{1,2}\s*от\s*\d{1,2}.\d{1,2}.20\d{2})|(\d{1,4}\s*-{0,2}\s*[в,к,В,К]{1,2}\s*от\s*\d{1,2}.\d{1,2}.\d{2}\s)|(\d{1,4}\s*-{0,2}\s*[в,к,В,К]{1,2}\s*от\s*\d{1,2}.\d{1,2}.\d{2}\sг.)|(\d{1,4}\s*-{0,2}\s*[в,к,В,К]{1,2}\s*от\s*\d{1,2}.\d{1,2}.\d{4}\sг.)|(\d{1,4}\s*-{0,2}\s*[в,к,В,К]{1,2}\s*от\s*\d{1,2}.\d{1,2}.\d{2}г.\s)|(\d{1,4}\s*-{0,2}\s*[в,к,В,К]{1,2}\s*от\s*\d{1,2}.\d{1,2}.\d{2}г.)|(\d{1,4}\s*-{0,2}\s*[в,к,В,К]{1,2}\s*от\s*\d{1,2}.\d{1,2}.\d{4})|(\d{1,4}\s*-{0,2}\s*[в,к,В,К]{1,2}\s*от\s*\d{1,2}.\d{1,2}.20\d{2})|(\d{1,4}\s*-{0,2}\s*[в,к,В,К]{1,2}\s*от\s*\d{1,2}.\d{1,2}.\d{2}\s)|(\d{1,4}\s*-{0,2}\s*[в,к,В,К]{1,2}\s*от\s*\d{1,2}.\d{1,2}.\d{2}\sг.)|(\d{1,4}\s*-{0,2}\s*[в,к,В,К]{1,2}\s*от\s*\d{1,2}.\d{1,2}.\d{4}\sг.)|(\d{1,4}\s*-{0,2}\s*[в,к,В,К]{1,2}\s*от\s*\d{1,2}.\d{1,2}.\d{2}г.\s)|(\d{1,4}\s*-{0,2}\s*[в,к,В,К]{1,2}\s*от\s*\d{4}г.)|(\d{1,4}\s*-{0,2}\s*[в,к,В,К]{1,2}\s*от\s*\d{1,2}.\d{1,2}.\d{4})|(\d{1,4}\s*-{0,2}\s*[в,к,В,К]{1,2}\s*от\s*\d{1,2}.\d{1,2}.20\d{2})|(\d{1,4}\s*-{0,2}\s*[в,к,В,К]{1,2}\s*от\s*\d{1,2}.\d{1,2}.\d{2}\s)|(\d{1,4}\s*-{0,2}\s*[в,к,В,К]{1,2}\s*от\s*\d{1,2}.\d{1,2}.\d{2}\sг.)|(\d{1,4}\s*-{0,2}\s*[в,к,В,К]{1,2}\s*от\s*\d{1,2}.\d{1,2}.\d{4}\sг.)|(\d{1,4}\s*-{0,2}\s*[в,к,В,К]{1,2}\s*от\s*\d{1,2}.\d{1,2}.\d{2}г.\s)|(\d{1,4}\s*-{0,2}\s*[в,к,В,К]{1,2}\s*от\s*\d{1,2}.\d{1,2}.\d{2}Г.)|(\d{1,4}\s*-{0,2}\s*[в,к,В,К]{1,2}\s*от\s*\d{1,2}.\d{1,2}.\d{4})|(\d{1,4}\s*-{0,2}\s*[в,к,В,К]{1,2}\s*от\s*\d{1,2}.\d{1,2}.20\d{2})|(\d{1,4}\s*-{0,2}\s*[в,к,В,К]{1,2}\s*от\s*\d{1,2}.\d{1,2}.\d{2}\s)|(\d{1,4}\s*-{0,2}\s*[в,к,В,К]{1,2}\s*от\s*\d{1,2}.\d{1,2}.\d{2}\sг.)|(\d{1,4}\s*-{0,2}\s*[в,к,В,К]{1,2}\s*от\s*\d{1,2}.\d{1,2}.\d{4}\sг.)|(\d{1,4}\s*-{0,2}\s*[в,к,В,К]{1,2}\s*от\s*\d{1,2}.\d{1,2}.\d{2}г.\s)|(\d{1,4}\s*-{0,2}\s*[в,к,В,К]{1,2}\s*от\s*\d{4}\SГ.)|(\d{1,4}\s*-{0,2}\s*[в,к,В,К]{1,2}\s*от\s*\d{1,2}.\d{1,2}.\d{4})|(\d{1,4}\s*-{0,2}\s*[в,к,В,К]{1,2}\s*от\s*\d{1,2}.\d{1,2}.20\d{2})|(\d{1,4}\s*-{0,2}\s*[в,к,В,К]{1,2}\s*от\s*\d{1,2}.\d{1,2}.\d{2}\s)|(\d{1,4}\s*-{0,2}\s*[в,к,В,К]{1,2}\s*от\s*\d{1,2}.\d{1,2}.\d{2}\sг.)|(\d{1,4}\s*-{0,2}\s*[в,к,В,К]{1,2}\s*от\s*\d{1,2}.\d{1,2}.\d{4}\sг.)|(\d{1,4}\s*-{0,2}\s*[в,к,В,К]{1,2}\s*от\s*\d{1,2}.\d{1,2}.\d{2}г.\s)|(\d{1,4}\s*-{0,2}\s*[в,к,В,К]{1,2}\s*от\s*\d{4}г.\s)|(№\s\d{1}\s*-{0,2}\s*[в,к,В,К]{1,2}\s*от\s*\d{1,2}.\d{1,2}.\d{2})|(№\s\d{4}\s*-{0,2}\s*[в,к,В,К]{1,2}\s*от\s*\d{1,2}.\d{1,2}.\d{4}г)/;
export const contractFirstOptionNoS = /\d{1,4}-[в,к,В,К]{1,2}от\d{1,2}.\d{1,2}.\d{1,4}/;
export const contractFirstOptionTO = /\d{1,4}\s*\-{0,2}\s*[в,к,В,К]{1,2}\s*то\s*\d{1,2}.\d{1,2}.\d{1,4}/;
export const contractFirstOptionOOF = /№\s\d{1,4}-{1,2}[в,к,В,К]{1,2}\/[О,Ф]{3}-{1,2}\d{5,7}\/[С]-[К,к,А,а,В,в]{1,4}\s{1,2}от\s{1,2}\d{1,2}.\d{1,2}.\d{1,4}/;
export const contractFirstOptionOOFnumberWithOutS = /№\d{1,4}-{1,2}[в,к,В,К]{1,2}\/[О,Ф]{3}-{1,2}\d{5,7}\/[С]-[К,к,А,а,В,в]{1,4}\s{1,2}от\s{1,2}\d{1,2}.\d{1,2}.\d{1,4}/;
export const contractFirstOptionSlash = /№\d{1,4}\s*\-{0,2}\s*[в,к,В,К]{1,2}\/\d{1,3}\s*от\s*\d{1,2}.\d{1,2}.\d{1,4}/;
export const contractFirstOptionOnlyYeacr = /\s*№\s*\d{1,4}\s*\-{0,2}\s*[в,к,В,К]{1,2}\s*от\s*\d{4}г./;
export const contractFirstOptionOnlyYeacrS = /\s*№\s*\d{1,4}\s*\-{0,2}\s*[в,к,В,К]{1,2}\s*от\s*\d{4}\sг./;
export const contractTwoOption = /\s*№\s*\d{1,4}\s*\-{0,2}\s*[в,к,В,К]{1,2}\s*тот\s*\d{1,2}.\d{1,2}.\d{1,4}/;
export const contractTwoOptionOTI = /\s*№\s*\d{1,4}\s*\-{0,2}\s*[в,к,В,К]{1,2}\s*оти\s*\d{1,2}.\d{1,2}.\d{1,4}/;
export const contractThreeOption = /\s*№\s*\d{1,4}\s*\-{0,2}\s*[в,к,В,К]{1,2}\s*\d{1,2}.\d{1,2}.\d{1,4}/;
export const contractFourOption = /\d{1,4}\s*\-{0,2}\s*[в,к,В,К]{0,2}\s*\d{1,2}.\d{1,2}.\d{1,4}/;
export const contractFourOptionOnOneNumberWithFrom = /№\s*\d{1}\s{1,2}\s*от\s*\d{1,2}.\d{1,2}.\d{1,4}}/;
export const contractFourOptionOnOneNumber = /\s№\d\s\d{1,2}.\d{1,2}.\d{1,4}\s*/;
export const contractFourOptionOnOneNumberWithFromSOGL = /Соглашение{0,1}\s*№{1}\s*\d{1}\s*\s*от{1}\s*\d{1,2}.\d{1,2}.\d{1,4}/;
export const contract = [contractFirstOption, contractTwoOption, contractThreeOption, contractTwoOptionOTI, contractFirstOptionOnlyYeacr, contractFourOptionOnOneNumberWithFrom, contractFourOptionOnOneNumber, contractFourOptionOnOneNumberWithFromSOGL, contractFirstOptionSlash, contractFirstOptionTO, contractFirstOptionOOF, contractFirstOptionNoS, contractFirstOptionOnlyYeacrS, contractFirstOptionOOFnumberWithOutS];
export const contractNumberStandart = /\d{1,4}\s*\-{0,2}\s*[в,к,В,К]{1,2}/;
export const contractNumber = [contractNumberStandart];
export const dataStandartNoS = /от\d{2}.\d{2}.\d{2,4}/;
export const dataStandart = /\s\d{2}.\d{2}.\d{2,4}/;
export const dataOnlyYear = /\s\d{4}г{1}.{1}\s/;
export const dataOnlyFullYeacrWithS = /\s\d{2}.\d{2}.\d{2,4}\sг{1}.{1}\s/;
export const data = [dataStandart, dataOnlyYear, dataStandartNoS, dataOnlyFullYeacrWithS];
export const scoreNumberOne = /(?:50|51|57)/g;
export const amount = /d+/;
export const scoreNumberTwo = /d+/;
// СПИСОК МАССИВОВ ДЛЯ СОРТИРОВКИ //
export const arrayOfFilteredData = [];
export const arrayOfFilteredDataErrors = [];
export const arrayOfFilteredErrors = [];
// export const arrayOfErrorsForFixUser = [];
// КОЛИЧЕСТВО ПРОХОДОВ ПО МАССИВУ С ОШИБКАМИ //
export const countIterationOnArray = 25;
// НУЛЕВОЕ ЗНАЧЕНИЕ //
export const voidElement = 0;
