export class Sumadora {

    public numero1: number;
    public numero2: number;
    public resultado: number;
    public operacion: number = 0;
    public inputActivo: string;

    constructor(){  
      this.numero1 = 0;
      this.numero2 = 0;
      this.resultado = 0;
      this.inputActivo = 'numero1';
    }
  
  public calcular() { 
    this.operacion = parseInt(this.operacion.toString());
      switch (this.operacion) {
        case 1:
          this.resultado = this.numero1 + this.numero2;
          break;
  
        case 2:
          this.resultado = this.numero1 - this.numero2;
          break;
  
        case 3:
          this.resultado = this.numero1 * this.numero2;
          break;
  
        case 4:
          this.resultado = this.numero1 / this.numero2;
          break;
  
        default:
          this.resultado = 0;
          break;
      }
      this.numero2 = 0;
      this.numero1 = 0;
      this.inputActivo = 'numero1';
    }


public concatenar(valor:number){

  if (this.inputActivo === 'numero1') {

    this.numero1 = this.numero1 * 10 + valor;

  } else {

    this.numero2 = this.numero2 * 10 + valor;

  }
   /*  this.numero1 = this.numero1 * 10 + parseInt(valor.toString()); */
}

public limpiar(){
    this.numero1 = 0;
    this.numero2 = 0;
    this.resultado = 0;
    this.inputActivo = 'numero1';
}

public asignarOperacion(operacion:number){
  /* if(this.numero1!= 0) this.calcular(); */
  this.operacion = parseInt(operacion.toString());
  this.inputActivo = 'numero2';
  /* this.numero1 = this.numero2; */
  //this.limpiar();
}
}
