'use strict';
let taskNumber = 1;

// ЗАДАНИЯ ДЛЯ РАЗМИНКИ!!!!!!)))
console.log(`Task # ${taskNumber++}===================================================================================`);

//1) Есть обьект car! пробежаться по обьекту через for in и подсчитать количество свойств в обьекте, 
const car = {
    model: 'BMW',
    price: 45000,
    year: 2019,
    country: 'Germany'
};

let counter = 0;
for (let key in car) {
    counter++;
}

console.log(`Count propertires in object = ${counter}`);


console.log(`Task # ${taskNumber++}===================================================================================`);

// 2) Есть функция getClaims которая прнимает массив из обьектов claims! Фунция должна вернуть массив только из тех
// которые  имеют status Closed
const claims = [{
        id: 1234,
        model: 'MC7',
        status: 'Open'
    },
    {
        id: 3453,
        model: 'MC7',
        status: 'Open'
    },
    {
        id: 6343,
        model: 'Gran Tour',
        status: 'Closed'
    },
    {
        id: 7644,
        status: 'In Progress'
    },
    {
        id: 7686,
        model: 'City Bike',
        status: 'Closed'
    },
    {
        id: 8356,
        model: 'Bike',
        status: 'Closed'
    },
    {
        id: 9745,
        model: 'Bicycle',
        status: 'Closed'
    },
    {
        id: 10253,
        model: 'Bicycle',
        status: 'Closed'
    },
    {
        id: 14234,
        model: 'Bike',
        status: 'Closed'
    }
];

function getClaims(arr) {
    return arr.filter((obj) => obj.status === 'Closed');
}
console.log(getClaims(claims));



//3) Дан массив arr! Необходимо найти самое большое по модулю!!! Решить минимум 2-мя способами!! Один из  них с помощью find!!
const arr = [5, 6, 23, 64, -23, -92, 23, 3]

// 4) Используя claims переменную выше!! добавить свойство isClosed: true если status - Closed


// 5)  Есть массив arr1 отсортировать этот вложенный массив [5, 1, 7,3 ,4, 6]
const arr1 = [
    [5, 2, 5, 1, [5, 1, 7, 3, 4, 6]], 6, 23, 64, -23, -92, 23, 3
]

// 6)  Есть массив arr2 разложить положительные в один массив а отрицательные в другой!!
const arr2 = [5, 2, 5, -1, 6, -3, 64, -23, -92, 23, 3];

//7 Написать функцию которая принимает только поле array обьекта person и сортирует по убыванию по id и возвращает массив!!
const person = {
    name: 'Vasia',
    gender: 'male',
    array: [{ id: 1, name: 'Vasia' }, { id: 6, name: 'Boria' }, { id: 2, name: 'Petia' }, { id: 3, name: 'Misha' }]
};

function getPerson( /* деструтуризируем*/ ) {
    //ваш код
}

//8 Написать функцию которая принимает массив arr3! И если среднее арифметическое всех меньше самого большого числа в массиве вернуть тру иначе фолс!!!
const arr3 = [5, 2, 5, -1, 6, 3, 64, 23, -92, 23, 3];

//9 Есть обьект claim вернуть конкатенация modelName, subject!
const claim = {
    id: 542354,
    subject: 'Bike',
    modelName: 'Mc7',
    modelId: 3213,
    getModelNameAndSubject: () => {
        // вернуть modelName, subject
    }
};