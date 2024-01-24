
//Mi idea es un login que solo tenga 3 intentos, que valide cuando el el prompt no esta vacio, usando un ciclo do while

/*function logear(){
    let contador = 3
    do {
        let Usuario=prompt("Ingrese el usuario, (solo tiene 3 intentos)")
        let Contraseña=prompt("Ingrese la contraseña, (solo tiene 3 intentos)")

        if ((Usuario.length==0 || /^\s+$/.test(Usuario)) && (Contraseña.length==0) || /^\s+$/.test(Contraseña)){
        alert("Por favor escriba bien los datos pedidos, debe haber algo escrito en los campos de textos")
        contador--;
        } else if ((Usuario === "Santiago" && contador<=3) && (Contraseña === "1010" && contador<=3)) {
            console.log("Bienvenido a la pagina");
            alert("Bienvenido a la pagina, " + Usuario + "!");
            break
        } else {
            console.log("Algo esta mal");
            alert("Usuario y/o contraseña invalidos, vuelve a intentarlo");
            contador--
            if(contador === 0){
                alert("usted supero los 3 intentos")
                break
            }
        }
    } while (true);
}

logear()*/

//////////////////////////////////////////////////////////////////////
// PARA LA SEGUNDA PREENTREGA //

// Definir productos disponibles
let productos = [
    { id: 1, nombre: 'Remeras Deportivas Hombre', precio: 12000.00 },
    { id: 2, nombre: 'Musculosas Hombre', precio: 8000.00 },
    { id: 3, nombre: 'Calzas mujer', precio: 9500.00 },
    { id: 3, nombre: 'Remeras Deportivas Mujer', precio: 10000.00 },
    { id: 3, nombre: 'Musculosas Mujer', precio: 6000.00 },
  ];
  

  // Ofertas disponibles, este mes descuentos en remeras de hombre y calzas de mujer
  let ofertas = [
    { idProducto: 1, descuento: 10 }, // Descuento del 10% para Remeras Deportivas Hombre
    { idProducto: 3, descuento: 20 }, // Descuento del 20% para Calzas mujer
  ];
  
  // Función para aplicar descuentos
  function aplicarDescuentos() {
    for (let oferta of ofertas) {
      let producto = productos.find(p => p.id === oferta.idProducto);
      if (producto) {
        producto.precio -= (producto.precio * oferta.descuento) / 100;
      }
    }
  }
  
  function carritoDeCompras() {
    aplicarDescuentos(); // Aplicar descuentos antes de iniciar la compra

    let carrito = [];
  
    do {
      // Mostrar productos disponibles con precios actuales
      alert("Productos Disponibles:\n" + productos.map(producto => `${producto.id}. ${producto.nombre} - $${producto.precio.toFixed(2)}`).join('\n'));
  
      // Pedir al usuario que elija un producto
      let idProducto = parseInt(prompt("Ingrese el número del producto que desea comprar (0 para salir):"));
  
      // Verificar si el usuario quiere salir
      if (idProducto === 0) {
        break;
      }
  
      // Buscar el producto por su ID en el array de productos
      let productoElegido = productos.find(producto => producto.id === idProducto);
  
      // Verificar si el producto existe
      if (productoElegido) {
        let cantidad = parseInt(prompt(`Ingrese la cantidad de "${productoElegido.nombre}" que desea comprar:`));
        // Verificar la cantidad
        if (!isNaN(cantidad) && cantidad > 0) {
          // Agregar el producto al carrito
          carrito.push({ producto: productoElegido, cantidad });
          alert(`"${productoElegido.nombre}" se ha agregado al carrito.`);
        } else {
          alert("Por favor, ingrese una cantidad válida.");
        }
      } else {
        alert("Producto no encontrado. Por favor, ingrese un número de producto válido.");
      }
  
    } while (true);
  
    //  Resumen de la compra
    if (carrito.length > 0) {
      let total = carrito.reduce((acc, item) => acc + item.producto.precio * item.cantidad, 0);
      alert("Resumen de la compra:\n" + carrito.map(item => `${item.cantidad} x ${item.producto.nombre} - $${(item.producto.precio * item.cantidad).toFixed(2)}`).join('\n') + `\n\nTotal: $${total.toFixed(2)}`);
    } else {
      alert("No se han agregado productos al carrito. Gracias por visitarnos.");
    }
  }
  carritoDeCompras();
  










