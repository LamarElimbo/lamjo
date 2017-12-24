$(document).ready(function(){
    $("#hex-1").hover(function(){
        $('#stack-flask').css("background-color", "red");
        }, function(){
        $('#stack-flask').css("background-color", "blue");
    });
});