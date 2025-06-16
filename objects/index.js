// --------------------------------------------------
// Задание #1
// --------------------------------------------------

const users = [
    {
        username: 'David',
        status: 'online',
        lastActivity: 10
    },
    {
        username: 'Lucy',
        status: 'offline',
        lastActivity: 22
    },
    {
        username: 'Bob',
        status: 'online',
        lastActivity: 104
    }
];

const usersOnline = users.filter(obj => obj.status === 'online');

const usersOnlineNames = usersOnline.map(user => user.username).join(', ');

alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`);

// --------------------------------------------------
// Задание #2
// --------------------------------------------------

const ordersArr = [4, 2, 1, 3];
const people = [
   { id: 1, name: "Максим" },
   { id: 2, name: "Николай" },
   { id: 3, name: "Ангелина" },
   { id: 4, name: "Виталий" },
];
 
const giveTalonsInOrder = (patients, orders) => {
    return orders.map(order => patients.find(patient => patient.id === order));
};
    
const result1 = giveTalonsInOrder(people, ordersArr);
console.log('result1', result1);

// --------------------------------------------------
// Задание #3
// --------------------------------------------------

const handleObject = (obj, key, action) => {
    switch (action) {
        case 'get':
            return obj[key];
    
        case 'add':
            obj[key] = '';
            return obj;
    
        case 'delete':
            delete obj[key];
            return obj;
    
        default:
            return obj;
    }
};

const student = {
   name: 'Maxim',
   programmingLanguage: 'JavaScript',
}
 
const result2 = handleObject(student, 'programmingLanguage', 'delete');
console.log('result2', result2); // { name: 'Maxim' }

// --------------------------------------------------
// Задание #4
// --------------------------------------------------

const giveJobToStudent = (student, jobName) => {
    const updatedStudentInfo = {
        ...student,
        'job': jobName,
    };

    alert(`Поздравляем! У студента ${student.fullName} появилась новая работа! Теперь он ${jobName}`);

    return updatedStudentInfo;
};

const student2 = {
  fullName: 'Максим',
  experienceInMonths: 12,
  stack: ['HTML', 'CSS', 'JavaScript', 'React'],
}

const updatedStudent = giveJobToStudent(student2, 'веб-разработчик');

// --------------------------------------------------
// Задание #5
// --------------------------------------------------

const sum = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);

console.log(sum(1, 2, 3)) // 6
console.log(sum(2, 2)) // 4
console.log(sum(10, 15, 249, 653, 846)) // 1773
