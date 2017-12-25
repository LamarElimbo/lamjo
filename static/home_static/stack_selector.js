$(document).ready(function(){
    
    var project_connections = {
        "hex_dexter" : ["#stack-bokeh", "#stack-python", "#stack-pandas"],
        "hex_fashion" : ["#stack-hands", "#stack-powerpoint", "#stack-excel"],
        "hex_creatures" : ["#stack-powerpoint", "#stack-excel", "#stack-python", "#stack-pandas"],
        "hex_scory1" : ["#stack-flask", "#stack-python", "#stack-html", "#stack-css", "#stack-powerpoint", "#stack-sentiment-analysis", "#stack-naive_bayes", "#stack-pandas", "#stack-spotify", "#stack-youtube"],
        "hex_gilmores" : ["#stack-powerpoint", "#stack-python", "#stack-excel", "#stack-pandas", "#stack-named-entity-rec"],
        "hex_scory2" : ["#stack-flask", "#stack-python", "#stack-html", "#stack-css", "#stack-powerpoint", "#stack-sentiment-analysis", "#stack-naive_bayes", "#stack-pandas", "#stack-spotify", "#stack-youtube"],
        "hex_aliens" : ["#stack-pandas", "#stack-python", "#stack-tableau"],
        "hex_foodies" : ["#stack-pandas", "#stack-python", "#stack-powerpoint", "#stack-excel", "#stack-colour-quantization", "#stack-knn", "#stack-numpy"],
        "hex_schools" : ["#stack-powerpoint", "#stack-python", "#stack-excel"],
        "hex_dollhouse" : ["#stack-sql"],
        "hex_bbuk" : ["#stack-flask", "#stack-python", "#stack-html", "#stack-css", "#stack-jquery", "#stack-d3", "#stack-hands", "#stack-sentiment-analysis", "#stack-naive-bayes", "#stack-twitter", "#stack-sql"],
        "hex_lamjo" : ["#stack-flask", "#stack-python", "#stack-html", "#stack-css", "#stack-jquery", "#stack-powerpoint", "#stack-sentiment-analysis", "#stack-naive-bayes", "#stack-numpy", "#stack-pandas", "#stack-twitter", "#stack-spotify", "#stack-youtube"],
        "hex_mental-health" : ["#stack-excel", "#stack-powerpoint", "#stack-hands"],
        "hex_lajohn" : ["#stack-django", "#stack-python", "#stack-html", "#stack-css", "#stack-jquery"],
        "hex_lgbt" : ["#stack-pandas", "#stack-python", "#stack-hands", "#stack-jquery", "#stack-d3"],
        "hex_twata" : ["#stack-django", "#stack-python", "#stack-html", "#stack-css", "#stack-jquery", "#stack-twitter"],
        "hex_sleuth" : ["#stack-flask", "#stack-python", "#stack-html", "#stack-css", "#stack-jquery"],
        "hex_fashboard" : ["#stack-django", "#stack-python", "#stack-tumblr", "#stack-html", "#stack-css", "#stack-jquery"],
        "hex_spellbook" : ["#stack-flask", "#stack-python", "#stack-html", "#stack-css", "#stack-jquery", "#stack-naive-bayes"],
        "hex_clustr" : ["#stack-django", "#stack-python", "#stack-html", "#stack-flask", "#stack-css", "#stack-jquery"],
    }
    
    var stack_connections = {
        "stack_flask" : ["#hex-lamjo", "#hex-sleuth", "#hex-spellbook", "#hex-scory1", "#hex-scory2", "#hex-clustr"],
        "stack_html" : ["#hex-lamjo", "#hex-sleuth", "#hex-spellbook", "#hex-scory1", "#hex-scory2", "#hex-clustr", "#hex-fashboard", "#hex-twata", "#hex-lajohn"],
        "stack_css" : ["#hex-lamjo", "#hex-sleuth", "#hex-spellbook", "#hex-scory1", "#hex-scory2", "#hex-clustr", "#hex-fashboard", "#hex-twata", "#hex-lajohn"],
        "stack_jquery" : ["#hex-lamjo", "#hex-sleuth", "#hex-spellbook", "#hex-scory1", "#hex-scory2", "#hex-clustr", "#hex-fashboard", "#hex-twata", "#hex-lajohn"],
        "stack_django" : ["#hex-lajohn", "#hex-twata", "#hex-clustr"],
        "stack_powerpoint" : ["#hex-creatures", "#hex-gilmores", "#hex-foodies", "#hex-schools", "#hex-dollhouse", "#hex-bbuk", "#hex-lamjo", "#hex-mental-health", "#hex-lajohn", "#hex-lgbt", "#hex-fashboard", "#hex-clustr"],
        "stack_tableu" : ["#hex-dexter", "#hex-aliens"],
        "stack_bokeh" : ["#hex-dexter"],
        "stack_d3_js" : ["#hex-creatures", "#hex-lgbt"],
        "stack_hands" : ["#hex-fashion", "#hex-scory1", "#hex-scory2", "#hex-schools", "#hex-bbuk", "#hex-mental-health", "#hex-lgbt"],
        "stack_sentiment_analysis" : ["#hex-bbuk", "#hex-twata", "#hex-lajohn"],
        "stack_naive_bayes" : ["#hex-scory1", "#hex-scory2", "#hex-bbuk", "#hex-lamjo", "#hex-lajohn", "#hex-twata"],
        "stack_multinomial_nb" : [],
        "stack_ner" : ["#hex-gilmores"],
        "stack_knn" : ["#hex-foodies"],
        "stack_colour_quantization" : ["#hex-foodies"],
        "stack_kmeans" : ["#hex-foodies"],
        "stack_svm" : [],
        "stack_linear_regression" : [],
        "stack_logistic_regression" : [],
        "stack_random_forests" : [],
        "stack_anova" : [],
        "stack_python" : ["#hex-dexter", "#hex-creatures", "#hex-scory1", "#hex-gilmores", "#hex-scory2", "#hex-aliens", "#hex-foodies", "#hex-schools", "#hex-twata", "#hex-bbuk", "#hex-lamjo", "#hex-mental-health", "#hex-lajohn", "#hex-lgbt", "#hex-twata", "#hex-sleuth", "#hex-fashboard", "#hex-spellbook", "#hex-clustr"],
        "stack_numpy" : ["#hex-foodies"],
        "stack_pandas" : ["#hex-dexter", "#hex-creatures", "#hex-scory1", "#hex-gilmores", "#hex-scory2", "#hex-foodies", "#hex-schools", "#hex-bbuk", "#hex-lamjo", "#hex-mental-health", "#hex-lajohn", "#hex-twata", "#hex-sleuth", "#hex-fashboard", "#hex-spellbook", "#hex-clustr"],
        "stack_excel" : ["#hex-dexter", "#hex-creatures", "#hex-scory1", "#hex-gilmores", "#hex-scory2", "#hex-foodies", "#hex-schools", "#hex-bbuk", "#hex-lamjo", "#hex-mental-health", "#hex-lajohn", "#hex-twata", "#hex-sleuth", "#hex-fashboard", "#hex-spellbook", "#hex-clustr"],
        "stack_sql" : ["#hex-bbuk", "#hex-dollhouse"],
        "stack_twitter" : ["#hex-bbuk", "#hex-lamjo", "#hex-twata", "#hex-lajohn"],
        "stack_spotify" : ["#hex-scory1", "#hex-lamjo"],
        "stack_youtube" : ["#hex-scory1", "#hex-lamjo"],
        "stack_tumblr" : ["#hex-fashboard", "#hex-twata"],
    }
        
    $("#hex-dexter").hover(function(){
        $(project_connections["hex_dexter"].join(", ")).css({"color": "red"});
        }, function(){
        $(project_connections["hex_dexter"].join(", ")).css({"color": "#00B0F0"});
    });
});