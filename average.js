
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