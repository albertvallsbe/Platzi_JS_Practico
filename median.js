function calculateAritmeticAverage(listMoney) {
    let sumListMoney = 0;

    for (let i = 0; i < listMoney.length; i++) {
        sumListMoney = sumListMoney + listMoney[i];
    }

    //const sumListMoney = listMoney.reduce(
    //    function (accumulatedValue = 0, newElement) {
    //        return accumulatedValue + newElement;
    //    }
    //);
    const averageListMoney = sumListMoney / listMoney.length;

    return averageListMoney;

}

const listMoney = [
    100,
    200,
    500,
    
    40000000,
];
 
const halfListMoney = parseInt(listMoney.length / 2);

function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let median;

if (isEven(listMoney.length)) {
    const element1 = listMoney[halfListMoney -1];
    const element2 = listMoney[halfListMoney ];

    const averageElement1andElement2 = calculateAritmeticAverage([
        element1,
        element2,
    ]);

    median = averageElement1andElement2;

} else {
    median = listMoney[halfListMoney];
}

