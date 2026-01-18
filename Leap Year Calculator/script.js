const year = 1900;

const isLeapYear = (year = 2000) => {
    return year % 4 === 0 && year % 100 != 0 || year % 400 === 0 ? `${year} is a leap year.` :
        `${year} is not a leap year.`;
}

const result = isLeapYear(year);
console.log(result);