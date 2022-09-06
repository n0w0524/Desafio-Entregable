alert ("Bienvenido a nuestra tienda virtual: Actualmente tenemos boletos disponibles para The Strokes ($100), Interpol ($80) y The Killers ($60)")

function suma (TicketStrokes = 100, TicketTheKillers = 60, TicketInterpol = 80) {
    let seleccion = prompt("Selecciona 1 para The Strokes, 2 para Interpol, 3 para The Killers:")
    let seleccionConv = parseInt(seleccion)
if ((seleccionConv != 1) || (seleccionConv != 2) || (seleccionConv != 3)) {
    alert ("Por favor introduzca una selección adecuada")
    //return
    
}
else if ((seleccionConv === 1) || (seleccionConv === 2) || (seleccionConv === 3)) {
    
    console.log(seleccionConv)
    let cantidad = prompt("¿Cuántos tickets deseas?")
    if (seleccionConv === 1){
        let total = TicketStrokes*cantidad
        alert("su total es: $" + total)
    }
    else if (seleccionConv === 2){
        let total = TicketInterpol*cantidad
        alert("su total es: $" + total)
    }
    else if (seleccionConv === 3){
        let total = TicketTheKillers*cantidad
        alert("su total es: $" + total)
    }
    
    }
    
}
    suma()
    
