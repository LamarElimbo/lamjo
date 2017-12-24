$(document).ready(function(){
    
    var project_connections = {
        "hex_dexter" : ["#stack-bokeh", "#stack-python", "#stack-pandas"],
        "hex_fashion" : ["#stack-hands", "#stack-powerpoint", "#stack-excel"],
        "hex_creatures" : ["#stack-powerpoint", "#stack-excel", "#stack-python", "#stack-pandas"],
        "hex_scory1" : ["#stack-flask", "#stack-python", "#stack-html", "#stack-css", "#stack-powerpoint", "#stack-sentiment-analysis", "#stack-naive_bayes", "#stack-pandas", "#stack-spotify", "#stack-youtube"],
        "hex_gilmores" : ["#stack-flask", "#stack-python"],
        "hex_scory2" : ["#stack-flask", "#stack-python", "#stack-html", "#stack-css", "#stack-powerpoint", "#stack-sentiment-analysis", "#stack-naive_bayes", "#stack-pandas", "#stack-spotify", "#stack-youtube"],
        "hex_aliens" : ["#stack-flask", "#stack-python"],
        "hex_foodies" : ["#stack-flask", "#stack-python"],
        "hex_schools" : ["#stack-flask", "#stack-python"],
        "hex_dollhouse" : ["#stack-flask", "#stack-python"],
        "hex_bbuk" : ["#stack-flask", "#stack-python"],
        "hex_lamjo" : ["#stack-flask", "#stack-python"],
        "hex_mental-health" : ["#stack-flask", "#stack-python"],
        "hex_lajohn" : ["#stack-flask", "#stack-python"],
        "hex_lgbt" : ["#stack-flask", "#stack-python"],
        "hex_twata" : ["#stack-flask", "#stack-python"],
        "hex_sleuth" : ["#stack-flask", "#stack-python"],
        "hex_fashboard" : ["#stack-flask", "#stack-python"],
        "hex_spellbook" : ["#stack-flask", "#stack-python"],
        "hex_clustr" : ["#stack-flask", "#stack-python"],
    }
    
    var stack_connections = {
        "stack_flask" : ["#hex-dexter", "#hex-fashion"],
        "stack_html" : ["#hex-dexter", "#hex-fashion"],
        "stack_css" : ["#hex-dexter", "#hex-fashion"],
        "stack_jquery" : ["#hex-dexter", "#hex-fashion"],
        "stack_django" : ["#hex-dexter", "#hex-fashion"],
        "stack_powerpoint" : ["#hex-dexter", "#hex-fashion"],
        "stack_tableu" : ["#hex-dexter", "#hex-fashion"],
        "stack_bokeh" : ["#hex-dexter", "#hex-fashion"],
        "stack_d3_js" : ["#hex-dexter", "#hex-fashion"],
        "stack_hands" : ["#hex-dexter", "#hex-fashion"],
        "stack_sentiment_analysis" : ["#hex-dexter", "#hex-fashion"],
        "stack_naive_bayes" : ["#hex-dexter", "#hex-fashion"],
        "stack_multinomial_nb" : ["#hex-dexter", "#hex-fashion"],
        "stack_ner" : ["#hex-dexter", "#hex-fashion"],
        "stack_knn" : ["#hex-dexter", "#hex-fashion"],
        "stack_colour_quantization" : ["#hex-dexter", "#hex-fashion"],
        "stack_kmeans" : ["#hex-dexter", "#hex-fashion"],
        "stack_svm" : ["#hex-dexter", "#hex-fashion"],
        "stack_linear_regression" : ["#hex-dexter", "#hex-fashion"],
        "stack_logistic_regression" : ["#hex-dexter", "#hex-fashion"],
        "stack_random_forests" : ["#hex-dexter", "#hex-fashion"],
        "stack_anova" : ["#hex-dexter", "#hex-fashion"],
        "stack_python" : ["#hex-dexter", "#hex-fashion"],
        "stack_numpy" : ["#hex-dexter", "#hex-fashion"],
        "stack_pandas" : ["#hex-dexter", "#hex-fashion"],
        "stack_excel" : ["#hex-dexter", "#hex-fashion"],
        "stack_sql" : ["#hex-dexter", "#hex-fashion"],
        "stack_twitter" : ["#hex-dexter", "#hex-fashion"],
        "stack_spotify" : ["#hex-dexter", "#hex-fashion"],
        "stack_youtube" : ["#hex-dexter", "#hex-fashion"],
        "stack_tumblr" : ["#hex-dexter", "#hex-fashion"],
    }
        
    $("#hex-dexter").hover(function(){
        $(project_connections["hex_dexter"].join(", ")).css({"color": "red"});
        }, function(){
        $(project_connections["hex_dexter"].join(", ")).css({"color": "#00B0F0"});
    });
});