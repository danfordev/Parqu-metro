class Parquimetro {
    constructor(){
        this.tabelaPreços = [
            { valor: 3.00, tempo: 120 },
            { valor: 1.75, tempo: 60  },
            { valor: 1.00, tempo: 30  }
        ];
    }

pagar(){
    const input = document.getElementById("Valor").value.replace(",",".");
    const pagamento = parseFloat(input);
    let tempo = 0;
    let troco = 0;

    if(pagamento >= 3.00) {
        tempo = 120;
        troco = pagamento - 3.00;
    } else if (pagamento >= 1,75) {
        tempo = 60;
        troco = pagamento - 1.75;
    } else if (pagamento >= 1.00) {
        tempo = 30;
        troco = pagamento - 1.00;
    } else if (pagamento < 1.00) { 
        alert ("Valor insuficiente!");
        return; 

    }
        alert(`Tempo liberado: ${tempo} minutos\nTroco: R$ ${troco.toFixed(2)}`);
  
}
}         
 const parquimetro = new Parquimetro();



