//Helpers

function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
    //return (number % 2 === 0) -> Fa inecesari el condicional
};

function calculateAritmeticAverage(list) {
    let sumlist = 0;

    for (let i = 0; i < list.length; i++) {
        sumlist = sumlist + list[i];
    }

    //const sumlist = list.reduce(
    //    function (accumulatedValue = 0, newElement) {
    //        return accumulatedValue + newElement;
    //    }
    //);
    const averagelist = sumlist / list.length;

    return averagelist;

}

// Median Calculator

function medianSalary(list) {
    const halfPart = parseInt(list.length / 2);

    if (isEven(list.length)) {
        const persoInHalf1 = list[halfPart - 1];
        const persoInHalf2 = list[halfPart];

        const median = calculateAritmeticAverage([persoInHalf1, persoInHalf2]);
        return median;
    } else {
        const persoInHalf = list[halfPart];
        return persoInHalf;
    }
};

// Median General Salaries in Colombia

const salaryCol = colombia.map(
    function (people) {
        return people.salary;
    }
);

const salaryColSorted = salaryCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);


const medianGeneralCol = medianSalary(salaryColSorted);

// Median of top 10%
const spliceStart = (salaryColSorted.length * (100 - 10) / 100);
const spliceCount = salaryColSorted.length - spliceStart;
const salaryTop10Col = salaryColSorted.splice(
    spliceStart,
    spliceCount,
);

const medianTop10Col = medianSalary(salaryTop10Col);


console.log({
    medianGeneralCol,
    medianTop10Col,
});
