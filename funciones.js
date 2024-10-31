var item1 = document.getElementById("subitem");
var item2 = document.getElementById("subitem2");
var item3 = document.getElementById("subitem3");
var desplegar = true;
var desplegar1 = true;
var desplegar2 = true;
item1.onclick = function(){

    if(desplegar == true){
    var subitems1 = document.getElementById("temas").className="desplegar";
    item1.innerHTML = "HTML ▶️"
    desplegar = false
    } else if(desplegar == false){
        subitems1 = document.getElementById("temas").className="ndesplegar";
        item1.innerHTML = "HTML 🔽"
        desplegar = true

    }
}
item2.onclick = function(){
    if(desplegar1 == true){
    var subitems2 = document.getElementById("temas2").className="desplegar";
    item2.innerHTML = "CSS ▶️"
    desplegar1 = false
    } else if(desplegar1 == false){
        var subitems2 = document.getElementById("temas2").className="ndesplegar";
        item2.innerHTML = "CSS 🔽"
        desplegar1 = true
    }
}
item3.onclick = function(){
    if(desplegar2 == true){
    var subitems3 = document.getElementById("temas3").className="desplegar";
    item3.innerHTML = "Javascript ▶️"
    desplegar2 = false
    } else if(desplegar2 == false){
        var subitems3 = document.getElementById("temas3").className="ndesplegar";
        item3.innerHTML = "Javascript 🔽"
        desplegar2 = true
    }
}
