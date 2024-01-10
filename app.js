
//Mi idea es un login que solo tenga 3 intentos, que valide cuando el el prompt no esta vacio, usando un ciclo do while

function logear(){
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

logear()





