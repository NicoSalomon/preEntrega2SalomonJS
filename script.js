var pedidos = []

function realizarPedido() {
  var nombreUsuario = prompt("Ingrese su nombre:")

  if (!nombreUsuario) {
    alert("Nombre no válido. Pedido cancelado.")
    return
  }

  var tipoComida = document.getElementById("tipoComida").value
  var acompanamiento = obtenerAcompanamiento(tipoComida)

  if (acompanamiento.length === 0) {
    alert("Tipo de comida no válido. Por favor, seleccione nuevamente.")
    return
  }

  var seleccionAcompanamiento = prompt(
    "Seleccione su acompañamiento:\n" + acompanamiento.join(", ")
  )

  if (seleccionAcompanamiento) {
    var numeroPedido = generarNumeroPedido()

    pedidos.push({
      numero: numeroPedido,
      nombre: nombreUsuario,
      comida: tipoComida,
      acompanamiento: seleccionAcompanamiento,
    })

    alert(
      "¡Pedido realizado!\nNúmero de Pedido: " +
        numeroPedido +
        "\nNombre: " +
        nombreUsuario +
        "\nComida: " +
        tipoComida +
        "\nAcompañamiento: " +
        seleccionAcompanamiento
    )
  } else {
    alert("Pedido cancelado.")
  }
}

function buscarPedido() {
  var numeroBuscado = prompt("Ingrese el número de pedido:")
  buscarYMostrarPedido(numeroBuscado)
}

function eliminarPedido() {
  var numeroEliminar = prompt("Ingrese el número de pedido a eliminar:");

  if (numeroEliminar) {
    var confirmacion = confirm("¿Está seguro de que desea eliminar el pedido?")

    if (confirmacion) {
      var indiceEliminar = pedidos.findIndex(function (pedido) {
        return pedido.numero == numeroEliminar
      })

      if (indiceEliminar !== -1) {
        var pedidoEliminado = pedidos.splice(indiceEliminar, 1)[0]
        alert(
          "¡Pedido eliminado!\nNúmero de Pedido: " +
            pedidoEliminado.numero +
            "\nNombre: " +
            pedidoEliminado.nombre +
            "\nComida: " +
            pedidoEliminado.comida +
            "\nAcompañamiento: " +
            pedidoEliminado.acompanamiento
        )
      } else {
        alert("Pedido no encontrado. Verifique el número de pedido ingresado.")
      }
    } else {
      alert("Operación cancelada.")
    }
  } else {
    alert("Operación cancelada.")
  }
}

function obtenerAcompanamiento(tipoComida) {
  switch (tipoComida) {
    case "milanesa":
    case "matambre":
      return ["Papas Fritas", "Puré"]

    case "fideos":
      return ["Bolognesa", "Filetto", "Salsa Blanca"]

    default:
      return []
  }
}

function generarNumeroPedido() {
  return Math.floor(Math.random() * 1000) + 1
}

function buscarYMostrarPedido(numeroBuscado) {
  var pedidoEncontrado = pedidos.find(function (pedido) {
    return pedido.numero == numeroBuscado;
  });

  if (pedidoEncontrado) {
    alert(
      "Pedido encontrado:\nNúmero de Pedido: " +
        pedidoEncontrado.numero +
        "\nNombre: " +
        pedidoEncontrado.nombre +
        "\nComida: " +
        pedidoEncontrado.comida +
        "\nAcompañamiento: " +
        pedidoEncontrado.acompanamiento
    )
  } else {
    alert("Pedido no encontrado. Verifique el número de pedido ingresado.")
  }
}