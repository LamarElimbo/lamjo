$(document).ready(function(){
    
    var connections = {
        "dexter" : ["#stack-flask", "#stack-python"]
    }
        
    $("#hex-1").hover(function(){
        $(connections["dexter"].join(", ")).css({"color": "red"});
        }, function(){
        $(connections["dexter"].join(", ")).css({"color": "#00B0F0"});
    });
});