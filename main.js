function gestionarPersona() {
  
  const persona={
    nombre:"felipe",
    edad:18,
    genero:"masculino",
    saluda:function(){
      console.log("hola soy felipe y tengo 18 años" +this.nombre+this.edad)
    }
  }
  persona.saludar();
}

function gestionarproducto(){
  const producto={
    nombre: "teclado",
    precio: 300000,
    cantidad: 26,
    mostrarINFO:function(){
      console.log ("producto:"+this.nombre);
      console.log("precio:"+this.precio);
      console.log("disponibles:"+this.cantidad);
      console.log("valor total inventario:"+this.precio*this.cantidad);
    }
    }
    producto.mostrarINFO();
  }


function gestionarempleado(){
  let empledo={
    nombre:(prompt("ingrese sus nombres: ")),
    cargo:(prompt("ingrese los dias trabajados")),
    salarioMensual:parseInt (prompt ("ingrese su salario mensual")),
    diasTrabajados:parseInt (prompt ("ingrese los dias trabajos")),
    porcentajeDescuento:4,
    calcularSalario:function(){
      let salarioDia = this.salarioMensual/30;
      let salarioSD = salarioDia * this.salararioDia;
      return parseInt(salarioSD);
        },
    calcularDescuento:function(){
      let descuento = (this.calcularSalario() * this.porcentajeDescuento)/100;
      return parseInt(descuento);  
    },
    calcularTotalpagar:function(){
      let total= this.calcularSalario() - this.calcularDescuento();
      alert("el total a pagar sin descuento es:" + this.calcularSalario());
      alert("el total del descuento es de:" + this.calcularSalario());
      alert("El total neto a pagar (con descuento es):" + total);
    }
  }
  }