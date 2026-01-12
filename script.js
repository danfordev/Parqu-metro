class parquimetro {
    constructor(){
        this.valor1 = 1;
        this.valor2 = 1,75;
        this.valor3 = 3;
 
        this.tempo1 = 30;
        this.tempo2 = 60;
        this.tempo3 = 120;
    }
pagar(){
    const pagamento = parseFloat(document.getElementById("Valor").value)
    console.log("valor pago") + pagamento
 }

tempo(){
    const tempo = pagamento - troco 
    console.log( " tempo comprado")
}

troco(){
    const troco = pagamento - this.valor1
    console.log("valor troco")
}
}
         
 const parquimetro = new parquimetro();



