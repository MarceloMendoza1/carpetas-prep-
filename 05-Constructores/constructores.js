function CalculadoraNPI() {
    let arr3 = []

    this.agregar = function (num) {
        arr3.push(num)
    }
    this.__proto__.sumar = function () {
        try {
            if (arr3.length < 2) {
                throw "La calculadoraNPI necesita por lo menos 2 números"
            }
            else {
                let num1 = arr3.pop()
                let num2 = arr3.pop()
                arr3.push(num1 + num2)
            }
        }
        catch (e) {
            throw (e)
        }

    }
    this.__proto__.valor = function () {
        return arr3[arr3.length - 1]
    }
    this.__proto__.restar = function () {
        try {
            if (arr3.length < 2) {
                throw "La calculadoraNPI necesita por lo menos 2 números"
            }
            else {
                let num1 = arr3.pop()
                let num2 = arr3.pop()
                arr3.push(num2 - num1)
            }
        }
        catch (e) {
            throw (e)
        }
    }
    this.__proto__.dividir = function () {
        try {
            if (arr3.length < 2) {
                throw "La calculadoraNPI necesita por lo menos 2 números"
            }
            else {
                let num1 = arr3.pop()
                let num2 = arr3.pop()
                arr3.push(num2 / num1)
            }
        }
        catch (e) {
            throw (e)
        }
    }
    this.__proto__.multiplicar = function () {
        try {
            if (arr3.length < 2) {
                throw "La calculadoraNPI necesita por lo menos 2 números"
            }
            else {
                let num1 = arr3.pop()
                let num2 = arr3.pop()
                arr3.push(num1 * num2)
            }
        }
        catch (e) {
            throw (e)
        }
    }
} 