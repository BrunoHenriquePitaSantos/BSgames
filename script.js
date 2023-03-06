function alertinha(){
   window.alert("Vamos ganhar na mega em 2023!");
}

    // DOM => Modelo de documento de objeto.


    let menu = document.getElementById("menu");

    function mostrarMenu(){
        // ações
        // Se, o meu Menu não estiver aparecendo, ele irá aparecer
        if(menu.style.display == "none"){
             menu.style.display = "flex"
        }else{
        //Então, se o meu menu estiver aparecendo, ele irá aparecer
             menu.style.display = "none"
        }
           
        // == = igual
        // = -semelhante
}


let email = document.getElementById("campo-email")

function enviarEmail(){
    let emailDigitado = email.value;

    console.log(emailDigitado);


}