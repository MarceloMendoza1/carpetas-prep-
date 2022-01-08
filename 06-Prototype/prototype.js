function Mamifero(nombre) {
    this.nombre = nombre;
    this.descendencia = []

}
Mamifero.prototype.saludar = function () {
    return "Hola, mi nombre es " + this.nombre

}
Mamifero.prototype.nuevoHijo = function () {
    let hijo = new Mamifero(this.nombre + " Jr")
    this.descendencia.push(hijo)
    return hijo 
}
Gato.prototype = Object.create(Mamifero.prototype)// esto me da la herencia de mamifero a gato 
Gato.prototype.constructor = Gato
function Gato(nombre, color) {
    Mamifero.call(this, nombre)
    this.color = color
}
Gato.prototype.nuevoHijo = function (color) {
    this.nombre = this.nombre + " Jr"
    this.color = color
    this.descendencia.push(this)
    return this 
}