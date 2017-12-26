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
    
    $(".hex-red").hide();
        
    $(".hex-dexter").hover(
        function(){
            $(project_connections["hex_dexter"].join(", ")).css({"color": "#C00000"});
            $("#dexter-red").show();
            $("#dexter-blue").hide();
        },
        function(){
            $(project_connections["hex_dexter"].join(", ")).css({"color": "#00B0F0"});
            $("#dexter-red").hide();
            $("#dexter-blue").show();
        }
    );
        
    $(".hex-creatures").hover(
        function(){
            $(project_connections["hex_creatures"].join(", ")).css({"color": "#C00000"});
            $("#creatures-red").show();
            $("#creatures-blue").hide();
        },
        function(){
            $(project_connections["hex_creatures"].join(", ")).css({"color": "#00B0F0"});
            $("#creatures-red").hide();
            $("#creatures-blue").show();
        }
    );
        
    $(".hex-gilmores").hover(
        function(){
            $(project_connections["hex_gilmores"].join(", ")).css({"color": "#C00000"});
            $("#gilmores-red").show();
            $("#gilmores-blue").hide();
        },
        function(){
            $(project_connections["hex_gilmores"].join(", ")).css({"color": "#00B0F0"});
            $("#gilmores-red").hide();
            $("#gilmores-blue").show();
        }
    );
        
    $(".hex-aliens").hover(
        function(){
            $(project_connections["hex_aliens"].join(", ")).css({"color": "#C00000"});
            $("#aliens-red").show();
            $("#aliens-blue").hide();
        },
        function(){
            $(project_connections["hex_aliens"].join(", ")).css({"color": "#00B0F0"});
            $("#aliens-red").hide();
            $("#aliens-blue").show();
        }
    );
        
    $(".hex-schools").hover(
        function(){
            $(project_connections["hex_schools"].join(", ")).css({"color": "#C00000"});
            $("#schools-red").show();
            $("#schools-blue").hide();
        },
        function(){
            $(project_connections["hex_schools"].join(", ")).css({"color": "#00B0F0"});
            $("#schools-red").hide();
            $("#schools-blue").show();
        }
    );
        
    $(".hex-fashion").hover(
        function(){
            $(project_connections["hex_fashion"].join(", ")).css({"color": "#C00000"});
            $("#fashion-red").show();
            $("#fashion-blue").hide();
        },
        function(){
            $(project_connections["hex_fashion"].join(", ")).css({"color": "#00B0F0"});
            $("#fashion-red").hide();
            $("#fashion-blue").show();
        }
    );
        
    $(".hex-scory1").hover(
        function(){
            $(project_connections["hex_scory1"].join(", ")).css({"color": "#C00000"});
            $("#scory1-red").show();
            $("#scory1-blue").hide();
        },
        function(){
            $(project_connections["hex_scory1"].join(", ")).css({"color": "#00B0F0"});
            $("#scory1-red").hide();
            $("#scory1-blue").show();
        }
    );
        
    $(".hex-scory2").hover(
        function(){
            $(project_connections["hex_scory2"].join(", ")).css({"color": "#C00000"});
            $("#scory2-red").show();
            $("#scory2-blue").hide();
        },
        function(){
            $(project_connections["hex_scory2"].join(", ")).css({"color": "#00B0F0"});
            $("#scory2-red").hide();
            $("#scory2-blue").show();
        }
    );
        
    $(".hex-foodies").hover(
        function(){
            $(project_connections["hex_foodies"].join(", ")).css({"color": "#C00000"});
            $("#foodies-red").show();
            $("#foodies-blue").hide();
        },
        function(){
            $(project_connections["hex_foodies"].join(", ")).css({"color": "#00B0F0"});
            $("#foodies-red").hide();
            $("#foodies-blue").show();
        }
    );
        
    $(".hex-dollhouse").hover(
        function(){
            $(project_connections["hex_dollhouse"].join(", ")).css({"color": "#C00000"});
            $("#dollhouse-red").show();
            $("#dollhouse-blue").hide();
        },
        function(){
            $(project_connections["hex_dollhouse"].join(", ")).css({"color": "#00B0F0"});
            $("#dollhouse-red").hide();
            $("#dollhouse-blue").show();
        }
    );
        
    $(".hex-bbuk").hover(
        function(){
            $(project_connections["hex_bbuk"].join(", ")).css({"color": "#C00000"});
            $("#bbuk-red").show();
            $("#bbuk-blue").hide();
        },
        function(){
            $(project_connections["hex_bbuk"].join(", ")).css({"color": "#00B0F0"});
            $("#bbuk-red").hide();
            $("#bbuk-blue").show();
        }
    );
        
    $(".hex-mental-health").hover(
        function(){
            $(project_connections["hex_mental-health"].join(", ")).css({"color": "#C00000"});
            $("#mental-health-red").show();
            $("#mental-health-blue").hide();
        },
        function(){
            $(project_connections["hex_mental-health"].join(", ")).css({"color": "#00B0F0"});
            $("#mental-health-red").hide();
            $("#mental-health-blue").show();
        }
    );
        
    $(".hex-lgbt").hover(
        function(){
            $(project_connections["hex_lgbt"].join(", ")).css({"color": "#C00000"});
            $("#lgbt-red").show();
            $("#lgbt-blue").hide();
        },
        function(){
            $(project_connections["hex_lgbt"].join(", ")).css({"color": "#00B0F0"});
            $("#lgbt-red").hide();
            $("#lgbt-blue").show();
        }
    );
        
    $(".hex-sleuth").hover(
        function(){
            $(project_connections["hex_sleuth"].join(", ")).css({"color": "#C00000"});
            $("#sleuth-red").show();
            $("#sleuth-blue").hide();
        },
        function(){
            $(project_connections["hex_sleuth"].join(", ")).css({"color": "#00B0F0"});
            $("#sleuth-red").hide();
            $("#sleuth-blue").show();
        }
    );
        
    $(".hex-spellbook").hover(
        function(){
            $(project_connections["hex_spellbook"].join(", ")).css({"color": "#C00000"});
            $("#spellbook-red").show();
            $("#spellbook-blue").hide();
        },
        function(){
            $(project_connections["hex_spellbook"].join(", ")).css({"color": "#00B0F0"});
            $("#spellbook-red").hide();
            $("#spellbook-blue").show();
        }
    );
        
    $(".hex-lamjo").hover(
        function(){
            $(project_connections["hex_lamjo"].join(", ")).css({"color": "#C00000"});
            $("#lamjo-red").show();
            $("#lamjo-blue").hide();
        },
        function(){
            $(project_connections["hex_lamjo"].join(", ")).css({"color": "#00B0F0"});
            $("#lamjo-red").hide();
            $("#lamjo-blue").show();
        }
    );
        
    $(".hex-lajohn").hover(
        function(){
            $(project_connections["hex_lajohn"].join(", ")).css({"color": "#C00000"});
            $("#lajohn-red").show();
            $("#lajohn-blue").hide();
        },
        function(){
            $(project_connections["hex_lajohn"].join(", ")).css({"color": "#00B0F0"});
            $("#lajohn-red").hide();
            $("#lajohn-blue").show();
        }
    );
        
    $(".hex-twata").hover(
        function(){
            $(project_connections["hex_twata"].join(", ")).css({"color": "#C00000"});
            $("#twata-red").show();
            $("#twata-blue").hide();
        },
        function(){
            $(project_connections["hex_twata"].join(", ")).css({"color": "#00B0F0"});
            $("#twata-red").hide();
            $("#twata-blue").show();
        }
    );
        
    $(".hex-fashboard").hover(
        function(){
            $(project_connections["hex_fashboard"].join(", ")).css({"color": "#C00000"});
            $("#fashboard-red").show();
            $("#fashboard-blue").hide();
        },
        function(){
            $(project_connections["hex_fashboard"].join(", ")).css({"color": "#00B0F0"});
            $("#fashboard-red").hide();
            $("#fashboard-blue").show();
        }
    );
        
    $(".hex-clustr").hover(
        function(){
            $(project_connections["hex_clustr"].join(", ")).css({"color": "#C00000"});
            $("#clustr-red").show();
            $("#clustr-blue").hide();
        },
        function(){
            $(project_connections["hex_clustr"].join(", ")).css({"color": "#00B0F0"});
            $("#clustr-red").hide();
            $("#clustr-blue").show();
        }
    );
});