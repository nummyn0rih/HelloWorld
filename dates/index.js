// --------------------------------------------------
// Задание #1
// --------------------------------------------------

const getDateFormat = (date, separator = '.') => {
    const d = new Date(date);
    
    const day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
    const month = d.getMonth() < 9 ? `0${d.getMonth() + 1}` : d.getMonth();
    const year = d.getFullYear();

    return `${day}${separator}${month}${separator}${year}`;
};

const date = new Date('August 4 2006');
console.log(getDateFormat(date, ' ~ '));

const now = Date.now();
console.log(getDateFormat(now));


// --------------------------------------------------
// Задание #2
// --------------------------------------------------

const convertMsToDays = ms => Math.round(ms / 1000 / 3600 / 24);

const getDaysBeforeBirthday = nextBirthdayDate => {
    const dateNow = Date.now();
    const difference = nextBirthdayDate - dateNow;
    
    return convertMsToDays(difference);
};

const nextBirthday = new Date('January 22 2026');
console.log(getDaysBeforeBirthday(nextBirthday));

// --------------------------------------------------
// Задание #3
// --------------------------------------------------
const convertDaysToMs = days => days * 24 * 3600 * 1000;

const addDays = (date, days) => new Date(date.getTime() + convertDaysToMs(days));

const birthdayLenin = new Date('April 22 1870');
const cccp = addDays(birthdayLenin, 19245);
console.log(cccp);
