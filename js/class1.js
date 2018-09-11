"use strict";
var Calculadora = /** @class */ (function () {
    function Calculadora(value) {
        console.log("Inciiando calculadora...");
        this.numero = value;
        console.log();
    }
    Calculadora.prototype.sumar = function () {
        return this.numero + this.numero;
    };
    return Calculadora;
}());
var calC = new Calculadora(10);
console.log(calC.sumar());
