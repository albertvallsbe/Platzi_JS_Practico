const modaList = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
];

const modaListCount = {};

modaList.map(
    function (element) {
        if (modaListCount[element]) {
            modaListCount[element] += 1;
        } else {
            modaListCount[element] = 1;
        }

    }
);

const modaListArray = Object.entries(modaListCount).sort(
    function (elementA, elementB) {
        return elementA[1] - elementB[1];
    }
)

const moda = modaListArray[modaListArray.length - 1]