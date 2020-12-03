$(document).ready(function(){
    //Calculo de altura de la ventana
    var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName("body")[0],
      y = w.innerHeight || e.clientHeight || g.clientHeight;
    
    //Configuracion inicial para animaciones
    let animado = document.querySelectorAll(".animacion1");
    let intereses1 = document.getElementById("correImg");
    let intereses2 = document.getElementById("text-interes");
    intereses1.style.opacity = 0;
    intereses2.style.opacity = 0;
    document.getElementById("barra").classList.add("animacion2");
    
    function ScrollProgresBar(){
        let scrollTop = document.documentElement.scrollTop;
        //Animaciones para elmentos de la pagina
        for (var i = 0; i < animado.length; i++) {
            let alturaAnimado = animado[i].offsetTop;
            if (alturaAnimado - y*0.7 < scrollTop) {
                animado[i].style.opacity = 1;
                animado[i].classList.add("mostrarArriba");
                
            }
            alturaAnimado = intereses.offsetTop;
            if (alturaAnimado - y*0.7 < scrollTop) {
                intereses1.style.opacity = 1;
                intereses2.style.opacity = 1;
                intereses1.classList.add("animacion3");
                intereses2.classList.add("animacion4");
            }
        }
    }
    window.addEventListener("scroll", ScrollProgresBar);
});
