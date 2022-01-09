function duplicar(num) {
    return num * 2
}
function map(arr, fn) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(fn(arr[i]))
    }
    return newArr
}

function filter(arr2, fn1) {
    let newArr = []
    for (let i = 0; i < arr2.length; i++) {
        if ((fn1(arr2[i])) == true) {
            newArr.push(arr2[i])
        }
    }
    return newArr
}
function contains(arr, num) {
    if (Object.values(arr).indexOf(num) > 0) {
        return true
    }
    else { return false }
}
function cuentaPalabras(str) {
    return str.split(" ").length
}
function reduce(arr, ac, operacion) {

    for (let i = 0; i < arr.length; i++) {
        ac = operacion(ac, arr[i], arr)
    }
    return ac
}

function cuentaPalabrasReduce(_, _, arr) {
    return arr.join(" ").split(" ").length
}

var sumatoria = function (a, b) {
    return a + b;
}
function suma(arr) {
    return reduce(arr, 0, sumatoria)
}
function every(arr, fn) {

    for (let i = 0; i < arr.length; i++) {
        let validar = reduce(arr, arr[i], fn)
        if (validar == false) {
            return false
        }
    }
    return true
}
function any(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        let validar = reduce(arr, arr[i], fn)
        if (validar == true) {
            return true
        }
    }
    return false
}













