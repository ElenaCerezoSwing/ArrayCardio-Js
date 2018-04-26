'use strict';

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
]

//    Ejercicios de arrays

// 1.- Filter the list of inventors for those who were born in the 1500's
const fifteens = inventors.filter(function (inventor) {
    if (inventor.year >= 1500 && inventor.year < 1600) {
        return true;
    }
});
console.table(fifteens);

// 2.- Give us the array of the inventory first and last names
const inventory = inventors.map(function (inventor) {
    return inventor.first + ' ' + inventor.last;
});
console.log(inventory);

// 3.- Sort the inventors by birthdate, oldest to youngest

const oldestList = inventors.sort(function (oldest, youngest) {
    if (oldest.year > youngest.year) {
        return 1;
    } else {
        return -1;
    }
});

console.table(oldestList);

// 4.- How many years did all the inventors live?

const livedYears = inventors.reduce(function (total, inventor) {
    return total + (inventor.passed - inventor.year);
}, 0);
console.log(livedYears);

// 5.- Sort the inventors by lived years

const oldest = inventors.sort(function (newOldest, newYoungest) {
    if ((newOldest.passed - newOldest.year) > (newYoungest.passed - newYoungest.year)) {
        return -1;
    }
    else {
        return 1;
    }
});

console.table(oldest);

// Comento el ejercicio 6 para que se pueda ver que funciona lo siguiente, ya que
// este ejercicio lo hacemos con la página de Wikipedia :)

// // 6.- Create a list of Boulevards in Paris that contain 'de' anywhere in the name
// // https://en. wikipedia.org/wiki/category:Boulevards_in_Paris

// const category = document.querySelector('.mw-category');
// console.log(category);


// const links = Array.from(category.querySelectorAll('a'));
// console.log(links);
// // si no hacemos Array.from llegamos al nodo, no al contenido

// const de = links.map(function (link) {
//     return link.textContent;
// });
// console.log(de);


// // y finalmente hacemos un filter para obtener los links que contengan 'de'
// const deBoulevard = de.filter(function (deBoulev) {
//     return deBoulev.includes('de');
// });

// console.log(deBoulevard);

// // aquí llegamos al texto



// 7.- Sort the people alphabetically by last name

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig',
    'Begin, Menachem', 'Belloc, Hilarie', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter',
    'Ben, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano',
    'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin',
    'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrel, Augustine',
    'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];


const orderedPeople = people.sort(function (lastOne, nextOne) {
    // const parts = lastOne.split(', ');
    // console.log(parts);
    const [aLast, aFirst] = lastOne.split(', ');
    const [bLast, bFirst] = nextOne.split(', ');

    if (aLast > bLast) {
        return 1;
    }

    else {
        return -1;
    }

});
console.log(orderedPeople);




// 8.- Sum up the instances of each of these

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

const transportation = data.reduce(function (obj, quantity) {
    if (!obj[quantity]) {
        obj[quantity] = 0;
    }
    obj[quantity]++;
    return obj;
}, {
        car: 0,
        truck: 0,
        bike: 0,
        walk: 0,
        van: 0
    });

console.table(transportation);
