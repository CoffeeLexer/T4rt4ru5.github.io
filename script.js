$(document).ready(function(){
    $("#click").click(function(){
        var a = $('#input')[0].files;
        for(var i = 0; i < a.length; i++)
        {
            $("#output")[0].innerHTML += `<img class="image" width="100%" />`
        }
        for(var i = 0; i < a.length; i++)
        {
            var x = $(".image")[i];
            x.src = URL.createObjectURL(a[i]);
        }
    });
});