class Calculadora{
  
    numero:number;
    constructor(value:number){
        console.log("Inciiando calculadora...");
        this.numero=value;
        console.log();
    }

    sumar(){
        return this.numero+this.numero;
    }
}

let calC= new Calculadora(10);
console.log(calC.sumar());