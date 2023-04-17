//Productos Tienda

let productos = [{
    id: 11,
    title: "flotador",
    nombre: "Flotador I Drink W.",
    categoria: "deportes",
    precio: 20000,
    stock: 5,
    color: "vinotinto",
    img: "https://cdn.shopify.com/s/files/1/0605/2551/0906/products/IDW-Floatie1_750x.png?v=1666634188"
  },
  {
    id: 12,
    title: "remera",
    nombre: "Remera I Drink W.",
    categoria: "indumentaria",
    precio: 6500,
    stock: 5,
    color: "vinotinto",
    img: "https://cdn.shopify.com/s/files/1/0605/2551/0906/products/T-shirt-Maroon-Front_750x.png?v=1666633728"
  },
  {
    id: 13,
    title: "gorra",
    nombre: "Gorra I Drink W.",
    categoria: "indumentaria",
    precio: 5000,
    stock: 5,
    color: "vinotinto",
    img: "https://cdn.shopify.com/s/files/1/0605/2551/0906/products/Hat-Maroon-Front-Detail_750x.png?v=1666671140"
  },
  {
    id: 14,
    title:"vinilo",
    nombre: "Vinilo 30",
    categoria: "vinilo",
    precio: 6000,
    stock: 5,
    color: "N/A",
    img: "https://cdn.shopify.com/s/files/1/0605/2551/0906/products/AA30-LP_750x.png?v=1634164889"
  },
  {
    id: 15,
    title: "cd",
    nombre: "CD 30",
    categoria: "disco",
    precio: 4500,
    stock: 5,
    color: "N/A",
    img: "https://cdn.shopify.com/s/files/1/0605/2551/0906/products/AA30-CD_750x.png?v=1634165117"
  },
  {
    id: 16,
    title: "cassette",
    nombre: "Cassette Easy on me",
    categoria: "cassette",
    precio: 6000,
    stock: 5,
    color: "negro",
    img: "https://cdn.shopify.com/s/files/1/0605/2551/0906/products/Easy-On-Me-Cassette_750x.png?v=1634238643"
  },
  {
    id: 17,
    title:"box",
    nombre: "Box 30",
    categoria: "disco",
    precio: 3000,
    stock: 5,
    img: "https://cdn.shopify.com/s/files/1/0605/2551/0906/products/Bundle-Group2-cassette_750x.jpg?v=1635708191"
  },
  {
    id: 18,
    title: "cd",
    nombre: "CD 19",
    categoria: "disco",
    precio: 3500,
    stock: 5,
    img: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Adele_19.webp"
  },
  {
    id: 19,
    title: "cd",
    nombre: "CD 21",
    categoria: "disco",
    precio: 4000,
    stock: 5,
    img: "https://upload.wikimedia.org/wikipedia/en/1/1b/Adele_-_21.png"
  },
  {
    id: 20,
    title: "cd",
    nombre: "CD 25",
    categoria: "disco",
    precio: 4000,
    stock: 5,
    img: "https://http2.mlstatic.com/D_NQ_NP_335111-MLA20497658446_112015-W.jpg"
  }
]

rendeProducts(productos)

//Función para renderizar productos (Tarjetas interactivas DOM)

function rendeProducts (arrayDeProductos) {

    let containerProductos = document.getElementById("containerProducts")

    containerProductos.innerHTML = ""

        arrayDeProductos.forEach (el => {

        let tarjetasProductos = document.createElement("div")
        tarjetasProductos.className = "tarjetaDeProducto col-sm-12 col-md-12 col-lg 12 col-xl-3 col-xxl-3"
        tarjetasProductos.innerHTML =

        `<h3>${el.nombre}</h3>
        <p>Categoria: ${el.categoria}</p>
        <img class="imagentarjeta" src=${el.img}>
        <p>Precio: $ ${el.precio}</p>
        <p>Quedan ${el.stock} unidades</p>
        <button id=${el.id} class="btnAgregar">Agregar a Carrito</button>`

        containerProductos.append(tarjetasProductos)

        let button = document.getElementById(el.id)

        button.addEventListener("click", agregarACarrito)
        button.addEventListener("click", seAgrego)

    })

}

let carritoIndex = document.getElementById("carritoDOM")             

                                                                      /*LO ANTERIOR TAMBIÉN SE PUEDE HACER DE LA SIGUIENTE FORMA
                                                                      
                                                                      arrayDeProductos.forEach(({nombre, categoria, img, precio, stock, id}) => {

                                                                          let tarjetasProductos = document.createElement("div")
                                                                          tarjetasProductos.className = "tarjetaDeProducto col-sm-12 col-md-12 col-lg 12 col-xl-3 col-xxl-3"
                                                                          tarjetasProductos.innerHTML =

                                                                          `<h3>${nombre}</h3>
                                                                          <p>Categoria: ${categoria}</p>
                                                                          <img class="imagentarjeta" src=${img}>
                                                                          <p>Precio: $ ${precio}</p>
                                                                          <p>Quedan ${stock} unidades</p>
                                                                          <button id=${id} class="btnAgregar">Agregar a Carrito</button>`

                                                                          containerProductos.append(tarjetasProductos)

                                                                          let button = document.getElementById(id)
                                                                          console.log(button)
                                                                          button.addEventListener("click", agregarACarrito)

                                                                      })

                                                                  }*/

let carrito = []

if (localStorage.getItem("carritoLStorage")) {

  carrito = JSON.parse (localStorage.getItem("carritoLStorage"))
  renderizarCarrito(carrito)//con esto se logra que al cargar de nuevo la página aparezcan los productos en el carrito DOM

}

//Busqueda de producto conforme a su ID y push a array de carritos vacio más renderizado en DOM, con función que está más adelante.

function agregarACarrito (e){

  let buscadoCarrito = productos.find (el => el.id === Number(e.target.id))
  let productoRepetido = productos.some (el => el.id === buscadoCarrito.id)

  /*if (buscadoCarrito === productoRepetido) {

    carrito.unidades++
    carrito.subtotal = carrito.unidades * carrito.precio

  } else{*/

      carrito.push({
      nombre: buscadoCarrito.nombre,
      precio: buscadoCarrito.precio,
      unidades: 1,
      subtotal: buscadoCarrito.precio,
  })

      localStorage.setItem("carritoLStorage",JSON.stringify(carrito))
  //}

renderizarCarrito(carrito)

}

//Alert agregar a carrito.

function seAgrego() {

  alert ("Agregaste producto al carrito.") //CAMBIAR CON SWEET ALERT
}

//Función renderizar carrito para agregar al DOM

function renderizarCarrito(arrayDeProductos) {

  carritoIndex.innerHTML = ""

  arrayDeProductos.forEach(el => {

    carritoIndex.innerHTML += `SE AGREGO: <p>${el.nombre} Unidades: ${el.unidades} Subtotal: $ ${el.subtotal}<p>`

  })
}

let inicioSes = document.getElementById("inicioSesion")
let registoUsu = document.getElementById("registro")

inicioSes.classList.add("formatoRegYSes")
registoUsu.classList.add("formatoRegYSes")

let containerRegSes  = document.getElementById("containerResIni")
let containerProd = document.getElementById("productosAdele")
let usuario = document.getElementById("usuario")
let contrasenia = document.getElementById("contrasenia")
let registrarse = document.getElementById("registrar")

registrarse.classList.add("btnRegIn")

//Función registro usuario

registrarse.addEventListener("click", () => {

  console.log(usuario.value)
  console.log(contrasenia.value)

  let informacion = {usuario: usuario.value, contrasenia: contrasenia.value}
  let JSONinformacion = JSON.stringify (informacion)
  localStorage.setItem("informacion", JSONinformacion)

  alert ("Usted se ha registrado")

})

let usuarioInicio = document.getElementById("usuarioInicio")
let contraseniaInicio = document.getElementById("contraseniaInicio")
let iniciarSesion = document.getElementById("inicio")

iniciarSesion.classList.add("btnRegIn")

//Función Inicio Sesión

iniciarSesion.addEventListener("click", () => {

  console.log(usuarioInicio.value)
  console.log(contraseniaInicio.value)

  let informacion = JSON.parse(localStorage.getItem("informacion"))

  if (informacion.usuario == usuarioInicio.value && informacion.contrasenia == contraseniaInicio.value) {

    alert("Bienvenido a la Adele´s Tienda")   
    containerProd.classList.remove("ocultar")
    inicioSes.classList.add("ocultar")
    registoUsu.classList.add("ocultar")
    


  } else {

    alert("Sus datos no son correctos")

  }
})

//Función filtro productos

let buscador = document.getElementById ("btnBusca")
let inpuBuscador = document.getElementById("inputBuscador")

buscador.addEventListener("click", filtrarEscritura)

function filtrarEscritura(){

    let filtradoEscritura = productos.filter (el => el.title.includes(inpuBuscador.value))

    rendeProducts(filtradoEscritura)

}

let confirmarCarrito = document.getElementById("Confirmar")
let vaciarCarrito = document.getElementById("vaciar")

confirmarCarrito.addEventListener("click", confirmar)
vaciarCarrito.addEventListener("click", vaciar)

//Función confirmar compra

function confirmar() {

    alert("Confirmaste tu compra") //cambiar con sweet alert
    carritoIndex.innerHTML = "" 
    localStorage.removeItem("carritoLStorage") 
  }

// Función vaciar DOM

function vaciar() {

    alert("Vaciaste el carrito")
    carritoIndex.innerHTML = "" 
    localStorage.removeItem("carritoLStorage")

  }

   





























//Registro e inicio de sesión

/*let containerRegIni = document.getElementById("containerResIni")
let usuarioRegistro = document.getElementById("usuarioInicio")
let contraseniaRegistro = document.getElementById("contraseniaInicio")
let inicioSesion = document.getElementById("inicio")

inicioSesion.addEventListener("click", inicioR)

function inicioR() {

  console.log (usuarioRegistro.value)
  console.log (contraseniaRegistro.value)

  let infoUsuario = {usuarioRegistro: usuarioRegistro.value, contraseniaRegistro: contraseniaRegistro.value}
  localStorage.setItem("infoUsuario") 
  JSON.stringify(infoUsuario)

}

console.log(inicioR())

let usuarioInicio = document.getElementById("usuarioInicio")
let contraseniaInicio = document.getElementById("contraseniaInicio")
let iniciarSesion = document.getElementById("inicio")
let containerProd = document.getElementById("productosAdele")

iniciarSesion.addEventListener("click", inicioS)

function inicioS(){

  let infoUsuario = JSON.parse(localStorage.getItem("infoUsuario"))

  if (infoUsuario.usuario == usuarioInicio.value && infoUsuario.contrasenia == contraseniaInicio.value) {

    alert("Bienvenido")  //Cambiar con sweet alert
    containerRegIni.classList.add("ocultar")
    containerProd.classList.remove("ocultar")

  } else {

    alert("Datos incorrectos, reintente")

  }
}*/









