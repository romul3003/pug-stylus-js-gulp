
let arr = [1, 2, -1, 3];

function filterNegative(value) {
    return value > 0
}

function filter(array, callback) {
    return array.reduce(function(acc, item, index, arr) {
        if (callback(item, index, arr)) {
            acc.push(item);
        }

        return acc;
    }, []);
}

// console.log(filter(arr, filterNegative));

function multiplyByTwo(value) {
    return value * 2;
}

function map(array, callback) {
    return array.reduce(function (acc, item, index, arr) {
        let resultAfterMap = callback(item, index, arr);
        acc.push(resultAfterMap);

        return acc;
    }, [])
}

// console.log(map(arr, multiplyByTwo));