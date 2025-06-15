// --------------------------------------------------
// Задание #1
// --------------------------------------------------

const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];

const giveParcel = arr => {
    const clientReceivedParcel = arr.shift();
    alert(`${clientReceivedParcel} получил(а) посылку. В очереди осталось ${arr.length} человек.`)
};

const leaveQueueWithoutParcel = arr => {
    const clientLeft = arr.pop();
    alert(`${clientLeft} не получил(а) посылку и ушел(ла) из очереди`)
};

giveParcel(peopleWaiting);
giveParcel(peopleWaiting);
giveParcel(peopleWaiting);

while (peopleWaiting.length > 0) {
    leaveQueueWithoutParcel(peopleWaiting);
}

console.log(peopleWaiting);

// --------------------------------------------------
// Задание #2
// --------------------------------------------------

const getSequence = num => {
    const arr = [];

    if (typeof num !== 'number' || num < 1) {
        return arr;
    }

    for (let i = 1; i <= num; i++) {
        arr.push(i);
    }

    return arr;
};

const getSumOfSequence = number => {
    const seq = getSequence(number);

    if (!seq.length) {
        return 0;
    }

    const sum = seq[0] + seq[seq.length - 1];

    return sum;
};

console.log(getSumOfSequence(5));
console.log(getSumOfSequence(10));
console.log(getSumOfSequence(-1));
console.log(getSumOfSequence('100'));

// --------------------------------------------------
// Задание #3
// --------------------------------------------------

const coffees = ['Latte', 'Cappuccino', 'Americano'];

const coffeeName = prompt('Поиск кофе по названию:').toLowerCase();
const coffeesToLower = coffees.map(i => i.toLowerCase());

const indexCoffee = coffeesToLower.findIndex(coffee => coffee === coffeeName);

if (indexCoffee >= 0) {
    const coffee = coffees[indexCoffee];
    alert(`Держите ваш любимый кофе ${coffee}. Он ${indexCoffee + 1}-й по популярности в нашей кофейне.`);
} else {
    alert('К сожалению, такого вида кофе нет в наличии.');
}

// --------------------------------------------------
// Задание #4
// --------------------------------------------------

const prices = [1.5, 1, 2];

const updatedPrices = prices.map(price => price + 0.5);

updatedPrices.forEach((price, index) => {
    alert(`Кофе ${coffees[index]} сейчас стоит ${price} евро`);
});

// --------------------------------------------------
// Задание #5
// --------------------------------------------------

const clientsEstimations = [];

const askClientToGiveEstimation = () => {
    const estimation = Number(prompt('Как вы оцениваете нашу кофейню от 1 до 10?'));
    
    if (typeof estimation === 'number' && estimation >= 1 && estimation <= 10) {
        clientsEstimations.push(estimation);
    }
};

for (let i = 0; i < 5; i++) {
    askClientToGiveEstimation();
}

const goodEstimations = clientsEstimations.filter(estimat => estimat > 5);
const notGoodEstimations = clientsEstimations.filter(estimat => estimat <= 5);

alert(`Всего положительных оценок: ${goodEstimations.length}; Всего отрицательных оценок: ${notGoodEstimations.length}`);

// --------------------------------------------------
// Задание #6
// --------------------------------------------------

const numbers = [10, 4, 100, -5, 54, 2];

let one = 0;

for (let i = 0; i < numbers.length; i++) {
    const cubed = numbers[i] ** 3;
    one += cubed;
}

let two = 0;

for (const el of numbers) {
    const cubed = el ** 3;
    two += cubed;
}

let three = 0;

numbers.forEach(element => {
    const cubed = element ** 3;
    three += cubed;
});

const four = numbers.reduce((acc, num) => acc + num ** 3, 0);
