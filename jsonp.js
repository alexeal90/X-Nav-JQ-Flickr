$(document).ready(function() {

    function busqueda(tag){
        $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?tags=" + tag + "&tagmode=any&format=json&jsoncallback=?")
        .done(function(data) {
            $("#album").empty();
            var i = 0;
            $(data.items).each(function (){
                var fotos = data.items[i].media.m
                $("#album").append("<img src = " + fotos + ">")
                i++;
            });
        });
    }

    $("#fuenlabrada").click(function(){
        busqueda("fuenlabrada");
    });

    $("#botonBuscar").click(function(){
        var form = document.getElementById('form').value;
        busqueda(form);
    });

});
