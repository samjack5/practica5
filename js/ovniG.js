var vidas = 0;
var ventana = $(window).width()-70;

function comprobarChoque (v) {
    if ((parseFloat($(v).css('left')) >= parseFloat($('#barra').css('left')) &&
        parseFloat($(v).css('left'))+$(v).width() <= parseFloat($('#barra').css('left'))+$('#barra').width()
        ) && 
        parseFloat($(v).css('top'))+70 > parseFloat($('#barra').css('top')))
    {
        $(v).remove()
    }
}
function crearOvni() {
    var posicion = Math.floor(Math.random()*ventana);
    $('<p class="vida" style="left: '+posicion+'px" date-num="'+ vidas +
       '"><img src="../images/ovni2.png" /></p>').appendTo("body").animate(
        {top: "+=800"}, 
        {duration:5000, 
         easing: "linear", 
         complete: function () {
            $(this).remove()
        }, 
        progress: function (){ 
            comprobarChoque(this) 
        }
        }
       );
       vidas++
}

setInterval(crearOvni,1000);


$(document).ready(function () {
    $("#barra").css("top", ($(window).height()-30)+"px")
})

var dir = 0;
function moverBarra(k) {
    dir = k
    $("#barra").stop()
    if (dir == 37) {
        var movimiento = {left: "-=500"}
    } else if (dir == 39) {
        var movimiento = {left: "+=500"}
    }
    $('#barra').animate(
        movimiento,
        {duration: 1000, easing: 'linear', complete: function () {
            moverBarra(k)
            }
        })
}

$(document).keydown(function (e){
    if (e.which == 37 || e.which == 39) {
        if (e.which != dir) {
            moverBarra(e.which)
        }
    }
})

$(document).keyup(function (e){
    if (e.which == dir) {
        dir = 0
        $("#barra").stop()
    }
})

