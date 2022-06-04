function calcularCuotas() {

  let precioProducto = prompt("Precio del producto: ")
  if (isNaN(precioProducto)) {
    alert("Debe ingresar un caracter numerico")
  } else {
    let unidades = prompt("Cantidad de unidades: ")
    if(isNaN(unidades)) {
        alert("Debe ingresar un caracter numerico")
    } else {
        let cuotas = prompt("Cuotas deseadas: ")
        if (isNaN(cuotas)) {
            alert("Debe ingresar un caracter numerico")
        } else {
          let precioFinal = (parseInt(precioProducto) * parseInt(unidades))
          let precioCuota = parseInt(precioFinal) / parseInt(cuotas)
          console.log("Usted ha comprado " + unidades + " unidades a $" + precioProducto + " en " + cuotas + " cuotas")
          console.log("Precio por cuota: $" + precioCuota.toFixed(2))
          console.log("Precio final: $" + precioFinal)
        }
    }
  }


  }

  calcularCuotas()

