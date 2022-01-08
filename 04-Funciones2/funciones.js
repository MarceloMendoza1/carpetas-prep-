function concatenar() {
    let argumentos = Array.prototype.slice.call(arguments)
    return argumentos.join("")
}

function invocarFunciones() {
    let acumuladora = ""
    for (let i = 0; i < arguments.length; i++) {
        acumuladora += arguments[i]()
    }
    return acumuladora
}
function creadorDeIncrementos(num) {
    return function (num2) {
        return num + num2
    }
}
function invocacionUnica(fn) {
    let execute = false
    return function () {
        if (!execute) {
            execute = true
            return fn()
        }
    }
}
function objetoConClousure() {
    let valor = 0
    return {
        incremento: function () { valor++ },
        incrementoPor10: function () { valor += 10 },
        pedirValor: function () { return valor },
        cambiarValor: function (num) { valor = num },
    }

}
function ListaDeFuncionesInvitados(arrInvitados, codigoSecreto) {
    let arr = []
    for (let i = 0; i < arrInvitados.length; i++) {
        let invitado = arrInvitados[i]
        let validar = function (codigoUsuario) {

            if (codigoUsuario != codigoSecreto) {
                return "código secreto: invalido"
            }
            else { return invitado }
        }
        arr.push(validar)
    }
    return arr
}

function armarListaDeInvitados(funcionesInvitados, codigoSecreto) {
    let arr2 = []
    for (let i = 0; i < funcionesInvitados.length; i++) {
        arr2.push(funcionesInvitados[i](codigoSecreto))
    }
    return arr2
}