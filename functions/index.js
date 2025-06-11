// --------------------------------------------------
// Задание #1
// --------------------------------------------------

function getName1(name) {
    return `Имя равно ${name}`;
}

const getName2 = function(name) {
    return `Имя равно ${name}`;
};

const getName3 = (name) => `Имя равно ${name}`;

console.log('Задание #1');
console.log(getName1('Роберт Локамп'));
console.log(getName2('Отто Кестер'));
console.log(getName3('Готтфрид Ленц'));
console.log('');

// --------------------------------------------------
// Задание #2
// --------------------------------------------------

const getSumOfNumbers = (number, type = 'odd') => {
    if (!number || typeof number !== 'number') {
        return NaN;
    }

    let count = 0;
    let result = 0;
    switch (type) {
        case 'odd':
            count += 1;
            while (count <= number) {
                result += count;
                count += 2;
            }
            break;
    
        case 'even':
            while (count <= number) {
                result += count;
                count += 2;
            }
            break;
        
        case '':
            while (count <= number) {
                result += count;
                count += 1;
            }
            break;
        
        default:
            break;
    }

    return result;
};

console.log('Задание #2');
console.log(getSumOfNumbers()); // NaN
console.log(getSumOfNumbers('10', "")); // NaN
console.log(getSumOfNumbers(10)); // 25

console.log(getSumOfNumbers(10, "odd")); // 25
console.log(getSumOfNumbers(10, "even")); // 30
console.log(getSumOfNumbers(10, "")); // 55
console.log('');

// --------------------------------------------------
// Задание #3
// --------------------------------------------------

const getDivisorsCount = (num) => {
    if (!num || typeof num !== 'number') {
        return NaN;
    }

    if (num < 0 || !Number.isInteger(num)) {
        alert(`${num} должен быть целым числом и больше нуля!`);
        return `Error. ${num} должен быть целым числом и больше нуля!`
    }
    
    let count = 0;
    let divisor = 1;

    while (divisor <= num) {
        if (num % divisor === 0) {
            count += 1;
        }

        divisor += 1;
    }
    
    return count;
};

console.log('Задание #3');
console.log(getDivisorsCount());
console.log(getDivisorsCount('o'));
console.log(getDivisorsCount(-1));
console.log(getDivisorsCount(1.5));

console.log(getDivisorsCount(4)); // Вернет 3 (делители - 1, 2, 4)
console.log(getDivisorsCount(5)); // Вернет 2 (делители - 1, 5)
console.log(getDivisorsCount(12)); // Вернет 6 (делители - 1, 2, 3, 4, 6, 12)
console.log(getDivisorsCount(30)); // Вернет 8 (делители - 1, 2, 3, 5, 6, 10, 15, 30)
