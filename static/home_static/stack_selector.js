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
    };
    
    var stack_connections_blue = {
        "stack_flask" : ["#lamjo-blue", "#sleuth-blue", "#spellbook-blue", "#scory1-blue", "#scory2-blue", "#clustr-blue"],
        "stack_html" : ["#lamjo-blue", "#sleuth-blue", "#spellbook-blue", "#scory1-blue", "#scory2-blue", "#clustr-blue", "#fashboard-blue", "#twata-blue", "#lajohn-blue"],
        "stack_css" : ["#lamjo-blue", "#sleuth-blue", "#spellbook-blue", "#scory1-blue", "#scory2-blue", "#clustr-blue", "#fashboard-blue", "#twata-blue", "#lajohn-blue"],
        "stack_jquery" : ["#lamjo-blue", "#sleuth-blue", "#spellbook-blue", "#scory1-blue", "#scory2-blue", "#clustr-blue", "#fashboard-blue", "#twata-blue", "#lajohn-blue"],
        "stack_django" : ["#lajohn-blue", "#twata-blue", "#clustr-blue"],
        "stack_powerpoint" : ["#creatures-blue", "#gilmores-blue", "#foodies-blue", "#schools-blue", "#dollhouse-blue", "#bbuk-blue", "#lamjo-blue", "#mental-health-blue", "#lajohn-blue", "#lgbt-blue", "#fashboard-blue", "#clustr-blue"],
        "stack_tableau" : ["#dexter-blue", "#aliens-blue"],
        "stack_bokeh" : ["#dexter-blue"],
        "stack_d3" : ["#creatures-blue", "#lgbt-blue"],
        "stack_hands" : ["#fashion-blue", "#scory1-blue", "#scory2-blue", "#schools-blue", "#bbuk-blue", "#mental-health-blue", "#lgbt-blue"],
        "stack_sentiment_analysis" : ["#bbuk-blue", "#twata-blue", "#lajohn-blue"],
        "stack_naive_bayes" : ["#scory1-blue", "#scory2-blue", "#bbuk-blue", "#lamjo-blue", "#lajohn-blue", "#twata-blue"],
        "stack_sklearn" : ["#foodies-blue"],
        "stack_ner" : ["#gilmores-blue"],
        "stack_knn" : ["#foodies-blue"],
        "stack_colour_quantization" : ["#foodies-blue"],
        "stack_kmeans" : ["#foodies-blue"],
        "stack_svm" : [],
        "stack_linear_regression" : [],
        "stack_logistic_regression" : [],
        "stack_random_forests" : [],
        "stack_nltk" : ["#scory1-blue", "#scory2-blue", "#bbuk-blue", "#lamjo-blue", "#lajohn-blue", "#twata-blue"],
        "stack_python" : ["#dexter-blue", "#creatures-blue", "#scory1-blue", "#gilmores-blue", "#scory2-blue", "#aliens-blue", "#foodies-blue", "#schools-blue", "#twata-blue", "#bbuk-blue", "#lamjo-blue", "#mental-health-blue", "#lajohn-blue", "#lgbt-blue", "#twata-blue", "#sleuth-blue", "#fashboard-blue", "#spellbook-blue", "#clustr-blue"],
        "stack_numpy" : ["#foodies-blue"],
        "stack_pandas" : ["#dexter-blue", "#creatures-blue", "#scory1-blue", "#gilmores-blue", "#scory2-blue", "#foodies-blue", "#schools-blue", "#bbuk-blue", "#lamjo-blue", "#mental-health-blue", "#lajohn-blue", "#twata-blue", "#sleuth-blue", "#fashboard-blue", "#spellbook-blue", "#clustr-blue"],
        "stack_excel" : ["#dexter-blue", "#creatures-blue", "#scory1-blue", "#gilmores-blue", "#scory2-blue", "#foodies-blue", "#schools-blue", "#bbuk-blue", "#lamjo-blue", "#mental-health-blue", "#lajohn-blue", "#twata-blue", "#sleuth-blue", "#fashboard-blue", "#spellbook-blue", "#clustr-blue"],
        "stack_sql" : ["#bbuk-blue", "#dollhouse-blue"],
        "stack_twitter" : ["#bbuk-blue", "#lamjo-blue", "#twata-blue", "#lajohn-blue"],
        "stack_spotify" : ["#scory1-blue", "#lamjo-blue"],
        "stack_youtube" : ["#scory1-blue", "#lamjo-blue"],
        "stack_tumblr" : ["#fashboard-blue", "#twata-blue"],
    };
    
    var stack_connections_red = {
        "stack_flask" : ["#lamjo-red", "#sleuth-red", "#spellbook-red", "#scory1-red", "#scory2-red", "#clustr-red"],
        "stack_html" : ["#lamjo-red", "#sleuth-red", "#spellbook-red", "#scory1-red", "#scory2-red", "#clustr-red", "#fashboard-red", "#twata-red", "#lajohn-red"],
        "stack_css" : ["#lamjo-red", "#sleuth-red", "#spellbook-red", "#scory1-red", "#scory2-red", "#clustr-red", "#fashboard-red", "#twata-red", "#lajohn-red"],
        "stack_jquery" : ["#lamjo-red", "#sleuth-red", "#spellbook-red", "#scory1-red", "#scory2-red", "#clustr-red", "#fashboard-red", "#twata-red", "#lajohn-red"],
        "stack_django" : ["#lajohn-red", "#twata-red", "#clustr-red"],
        "stack_powerpoint" : ["#creatures-red", "#gilmores-red", "#foodies-red", "#schools-red", "#dollhouse-red", "#bbuk-red", "#lamjo-red", "#mental-health-red", "#lajohn-red", "#lgbt-red", "#fashboard-red", "#clustr-red"],
        "stack_tableau" : ["#dexter-red", "#aliens-red"],
        "stack_bokeh" : ["#dexter-red"],
        "stack_d3" : ["#creatures-red", "#lgbt-red"],
        "stack_hands" : ["#fashion-red", "#scory1-red", "#scory2-red", "#schools-red", "#bbuk-red", "#mental-health-red", "#lgbt-red"],
        "stack_sentiment_analysis" : ["#bbuk-red", "#twata-red", "#lajohn-red"],
        "stack_naive_bayes" : ["#scory1-red", "#scory2-red", "#bbuk-red", "#lamjo-red", "#lajohn-red", "#twata-red"],
        "stack_sklearn" : ["#foodies-red"],
        "stack_ner" : ["#gilmores-red"],
        "stack_knn" : ["#foodies-red"],
        "stack_colour_quantization" : ["#foodies-red"],
        "stack_kmeans" : ["#foodies-red"],
        "stack_svm" : [],
        "stack_linear_regression" : [],
        "stack_logistic_regression" : [],
        "stack_random_forests" : [],
        "stack_nltk" : ["#scory1-red", "#scory2-red", "#bbuk-red", "#lamjo-red", "#lajohn-red", "#twata-red"],
        "stack_python" : ["#dexter-red", "#creatures-red", "#scory1-red", "#gilmores-red", "#scory2-red", "#aliens-red", "#foodies-red", "#schools-red", "#twata-red", "#bbuk-red", "#lamjo-red", "#mental-health-red", "#lajohn-red", "#lgbt-red", "#twata-red", "#sleuth-red", "#fashboard-red", "#spellbook-red", "#clustr-red"],
        "stack_numpy" : ["#foodies-red"],
        "stack_pandas" : ["#dexter-red", "#creatures-red", "#scory1-red", "#gilmores-red", "#scory2-red", "#foodies-red", "#schools-red", "#bbuk-red", "#lamjo-red", "#mental-health-red", "#lajohn-red", "#twata-red", "#sleuth-red", "#fashboard-red", "#spellbook-red", "#clustr-red"],
        "stack_excel" : ["#dexter-red", "#creatures-red", "#scory1-red", "#gilmores-red", "#scory2-red", "#foodies-red", "#schools-red", "#bbuk-red", "#lamjo-red", "#mental-health-red", "#lajohn-red", "#twata-red", "#sleuth-red", "#fashboard-red", "#spellbook-red", "#clustr-red"],
        "stack_sql" : ["#bbuk-red", "#dollhouse-red"],
        "stack_twitter" : ["#bbuk-red", "#lamjo-red", "#twata-red", "#lajohn-red"],
        "stack_spotify" : ["#scory1-red", "#lamjo-red"],
        "stack_youtube" : ["#scory1-red", "#lamjo-red"],
        "stack_tumblr" : ["#fashboard-red", "#twata-red"],
    };
    
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
        
    $("#stack-flask").hover(
        function(){
            $(this).css({"color": "#C00000"});
            $(stack_connections_red["stack_flask"].join(", ")).show();
            $(stack_connections_blue["stack_flask"].join(", ")).hide();
        },
        function(){
            $(this).css({"color": "#00B0F0"});
            $(stack_connections_blue["stack_flask"].join(", ")).show();
            $(stack_connections_red["stack_flask"].join(", ")).hide();
        }
    );
        
    $("#stack-html").hover(
        function(){
            $(this).css({"color": "#C00000"});
            $(stack_connections_red["stack_html"].join(", ")).show();
            $(stack_connections_blue["stack_html"].join(", ")).hide();
        },
        function(){
            $(this).css({"color": "#00B0F0"});
            $(stack_connections_blue["stack_html"].join(", ")).show();
            $(stack_connections_red["stack_html"].join(", ")).hide();
        }
    );
        
    $("#stack-css").hover(
        function(){
            $(this).css({"color": "#C00000"});
            $(stack_connections_red["stack_css"].join(", ")).show();
            $(stack_connections_blue["stack_css"].join(", ")).hide();
        },
        function(){
            $(this).css({"color": "#00B0F0"});
            $(stack_connections_blue["stack_css"].join(", ")).show();
            $(stack_connections_red["stack_css"].join(", ")).hide();
        }
    );
        
    $("#stack-jquery").hover(
        function(){
            $(this).css({"color": "#C00000"});
            $(stack_connections_red["stack_jquery"].join(", ")).show();
            $(stack_connections_blue["stack_jquery"].join(", ")).hide();
        },
        function(){
            $(this).css({"color": "#00B0F0"});
            $(stack_connections_blue["stack_jquery"].join(", ")).show();
            $(stack_connections_red["stack_jquery"].join(", ")).hide();
        }
    );
        
    $("#stack-django").hover(
        function(){
            $(this).css({"color": "#C00000"});
            $(stack_connections_red["stack_django"].join(", ")).show();
            $(stack_connections_blue["stack_django"].join(", ")).hide();
        },
        function(){
            $(this).css({"color": "#00B0F0"});
            $(stack_connections_blue["stack_django"].join(", ")).show();
            $(stack_connections_red["stack_django"].join(", ")).hide();
        }
    );
        
    $("#stack-powerpoint").hover(
        function(){
            $(this).css({"color": "#C00000"});
            $(stack_connections_red["stack_powerpoint"].join(", ")).show();
            $(stack_connections_blue["stack_powerpoint"].join(", ")).hide();
        },
        function(){
            $(this).css({"color": "#00B0F0"});
            $(stack_connections_blue["stack_powerpoint"].join(", ")).show();
            $(stack_connections_red["stack_powerpoint"].join(", ")).hide();
        }
    );
        
    $("#stack-tableau").hover(
        function(){
            $(this).css({"color": "#C00000"});
            $(stack_connections_red["stack_tableau"].join(", ")).show();
            $(stack_connections_blue["stack_tableau"].join(", ")).hide();
        },
        function(){
            $(this).css({"color": "#00B0F0"});
            $(stack_connections_blue["stack_tableau"].join(", ")).show();
            $(stack_connections_red["stack_tableau"].join(", ")).hide();
        }
    );
        
    $("#stack-bokeh").hover(
        function(){
            $(this).css({"color": "#C00000"});
            $(stack_connections_red["stack_bokeh"].join(", ")).show();
            $(stack_connections_blue["stack_bokeh"].join(", ")).hide();
        },
        function(){
            $(this).css({"color": "#00B0F0"});
            $(stack_connections_blue["stack_bokeh"].join(", ")).show();
            $(stack_connections_red["stack_bokeh"].join(", ")).hide();
        }
    );
        
    $("#stack-d3").hover(
        function(){
            $(this).css({"color": "#C00000"});
            $(stack_connections_red["stack_d3"].join(", ")).show();
            $(stack_connections_blue["stack_d3"].join(", ")).hide();
        },
        function(){
            $(this).css({"color": "#00B0F0"});
            $(stack_connections_blue["stack_d3"].join(", ")).show();
            $(stack_connections_red["stack_d3"].join(", ")).hide();
        }
    );
        
    $("#stack-hands").hover(
        function(){
            $(this).css({"color": "#C00000"});
            $(stack_connections_red["stack_hands"].join(", ")).show();
            $(stack_connections_blue["stack_hands"].join(", ")).hide();
        },
        function(){
            $(this).css({"color": "#00B0F0"});
            $(stack_connections_blue["stack_hands"].join(", ")).show();
            $(stack_connections_red["stack_hands"].join(", ")).hide();
        }
    );
        
    $("#stack-sentiment-analysis").hover(
        function(){
            $(this).css({"color": "#C00000"});
            $(stack_connections_red["stack_sentiment_analysis"].join(", ")).show();
            $(stack_connections_blue["stack_sentiment_analysis"].join(", ")).hide();
        },
        function(){
            $(this).css({"color": "#00B0F0"});
            $(stack_connections_blue["stack_sentiment_analysis"].join(", ")).show();
            $(stack_connections_red["stack_sentiment_analysis"].join(", ")).hide();
        }
    );
        
    $("#stack-naive-bayes").hover(
        function(){
            $(this).css({"color": "#C00000"});
            $(stack_connections_red["stack_naive_bayes"].join(", ")).show();
            $(stack_connections_blue["stack_naive_bayes"].join(", ")).hide();
        },
        function(){
            $(this).css({"color": "#00B0F0"});
            $(stack_connections_blue["stack_naive_bayes"].join(", ")).show();
            $(stack_connections_red["stack_naive_bayes"].join(", ")).hide();
        }
    );
        
    $("#stack-sklearn").hover(
        function(){
            $(this).css({"color": "#C00000"});
            $(stack_connections_red["stack_sklearn"].join(", ")).show();
            $(stack_connections_blue["stack_sklearn"].join(", ")).hide();
        },
        function(){
            $(this).css({"color": "#00B0F0"});
            $(stack_connections_blue["stack_sklearn"].join(", ")).show();
            $(stack_connections_red["stack_sklearn"].join(", ")).hide();
        }
    );
        
    $("#stack-named-entity-rec").hover(
        function(){
            $(this).css({"color": "#C00000"});
            $(stack_connections_red["stack_ner"].join(", ")).show();
            $(stack_connections_blue["stack_ner"].join(", ")).hide();
        },
        function(){
            $(this).css({"color": "#00B0F0"});
            $(stack_connections_blue["stack_ner"].join(", ")).show();
            $(stack_connections_red["stack_ner"].join(", ")).hide();
        }
    );
        
    $("#stack-knn").hover(
        function(){
            $(this).css({"color": "#C00000"});
            $(stack_connections_red["stack_knn"].join(", ")).show();
            $(stack_connections_blue["stack_knn"].join(", ")).hide();
        },
        function(){
            $(this).css({"color": "#00B0F0"});
            $(stack_connections_blue["stack_knn"].join(", ")).show();
            $(stack_connections_red["stack_knn"].join(", ")).hide();
        }
    );
        
    $("#stack-colour-quantization").hover(
        function(){
            $(this).css({"color": "#C00000"});
            $(stack_connections_red["stack_colour_quantization"].join(", ")).show();
            $(stack_connections_blue["stack_colour_quantization"].join(", ")).hide();
        },
        function(){
            $(this).css({"color": "#00B0F0"});
            $(stack_connections_blue["stack_colour_quantization"].join(", ")).show();
            $(stack_connections_red["stack_colour_quantization"].join(", ")).hide();
        }
    );
        
    $("#stack-k-means").hover(
        function(){
            $(this).css({"color": "#C00000"});
            $(stack_connections_red["stack_kmeans"].join(", ")).show();
            $(stack_connections_blue["stack_kmeans"].join(", ")).hide();
        },
        function(){
            $(this).css({"color": "#00B0F0"});
            $(stack_connections_blue["stack_kmeans"].join(", ")).show();
            $(stack_connections_red["stack_kmeans"].join(", ")).hide();
        }
    );
        
    $("#stack-svm").hover(
        function(){
            $(this).css({"color": "#C00000"});
            $(stack_connections_red["stack_svm"].join(", ")).show();
            $(stack_connections_blue["stack_svm"].join(", ")).hide();
        },
        function(){
            $(this).css({"color": "#00B0F0"});
            $(stack_connections_blue["stack_svm"].join(", ")).show();
            $(stack_connections_red["stack_svm"].join(", ")).hide();
        }
    );
        
    $("#stack-linear-regression").hover(
        function(){
            $(this).css({"color": "#C00000"});
            $(stack_connections_red["stack_linear_regression"].join(", ")).show();
            $(stack_connections_blue["stack_linear_regression"].join(", ")).hide();
        },
        function(){
            $(this).css({"color": "#00B0F0"});
            $(stack_connections_blue["stack_linear_regression"].join(", ")).show();
            $(stack_connections_red["stack_linear_regression"].join(", ")).hide();
        }
    );
        
    $("#stack-logistic-regression").hover(
        function(){
            $(this).css({"color": "#C00000"});
            $(stack_connections_red["stack_logistic_regression"].join(", ")).show();
            $(stack_connections_blue["stack_logistic_regression"].join(", ")).hide();
        },
        function(){
            $(this).css({"color": "#00B0F0"});
            $(stack_connections_blue["stack_logistic_regression"].join(", ")).show();
            $(stack_connections_red["stack_logistic_regression"].join(", ")).hide();
        }
    );
        
    $("#stack-random-forests").hover(
        function(){
            $(this).css({"color": "#C00000"});
            $(stack_connections_red["stack_random_forests"].join(", ")).show();
            $(stack_connections_blue["stack_random_forests"].join(", ")).hide();
        },
        function(){
            $(this).css({"color": "#00B0F0"});
            $(stack_connections_blue["stack_random_forests"].join(", ")).show();
            $(stack_connections_red["stack_random_forests"].join(", ")).hide();
        }
    );
        
    $("#stack-nltk").hover(
        function(){
            $(this).css({"color": "#C00000"});
            $(stack_connections_red["stack_nltk"].join(", ")).show();
            $(stack_connections_blue["stack_nltk"].join(", ")).hide();
        },
        function(){
            $(this).css({"color": "#00B0F0"});
            $(stack_connections_blue["stack_nltk"].join(", ")).show();
            $(stack_connections_red["stack_nltk"].join(", ")).hide();
        }
    );
        
    $("#stack-python").hover(
        function(){
            $(this).css({"color": "#C00000"});
            $(stack_connections_red["stack_python"].join(", ")).show();
            $(stack_connections_blue["stack_python"].join(", ")).hide();
        },
        function(){
            $(this).css({"color": "#00B0F0"});
            $(stack_connections_blue["stack_python"].join(", ")).show();
            $(stack_connections_red["stack_python"].join(", ")).hide();
        }
    );
        
    $("#stack-numpy").hover(
        function(){
            $(this).css({"color": "#C00000"});
            $(stack_connections_red["stack_numpy"].join(", ")).show();
            $(stack_connections_blue["stack_numpy"].join(", ")).hide();
        },
        function(){
            $(this).css({"color": "#00B0F0"});
            $(stack_connections_blue["stack_numpy"].join(", ")).show();
            $(stack_connections_red["stack_numpy"].join(", ")).hide();
        }
    );
        
    $("#stack-pandas").hover(
        function(){
            $(this).css({"color": "#C00000"});
            $(stack_connections_red["stack_pandas"].join(", ")).show();
            $(stack_connections_blue["stack_pandas"].join(", ")).hide();
        },
        function(){
            $(this).css({"color": "#00B0F0"});
            $(stack_connections_blue["stack_pandas"].join(", ")).show();
            $(stack_connections_red["stack_pandas"].join(", ")).hide();
        }
    );
        
    $("#stack-excel").hover(
        function(){
            $(this).css({"color": "#C00000"});
            $(stack_connections_red["stack_excel"].join(", ")).show();
            $(stack_connections_blue["stack_excel"].join(", ")).hide();
        },
        function(){
            $(this).css({"color": "#00B0F0"});
            $(stack_connections_blue["stack_excel"].join(", ")).show();
            $(stack_connections_red["stack_excel"].join(", ")).hide();
        }
    );
        
    $("#stack-sql").hover(
        function(){
            $(this).css({"color": "#C00000"});
            $(stack_connections_red["stack_sql"].join(", ")).show();
            $(stack_connections_blue["stack_sql"].join(", ")).hide();
        },
        function(){
            $(this).css({"color": "#00B0F0"});
            $(stack_connections_blue["stack_sql"].join(", ")).show();
            $(stack_connections_red["stack_sql"].join(", ")).hide();
        }
    );
        
    $("#stack-twitter").hover(
        function(){
            $(this).css({"color": "#C00000"});
            $(stack_connections_red["stack_twitter"].join(", ")).show();
            $(stack_connections_blue["stack_twitter"].join(", ")).hide();
        },
        function(){
            $(this).css({"color": "#00B0F0"});
            $(stack_connections_blue["stack_twitter"].join(", ")).show();
            $(stack_connections_red["stack_twitter"].join(", ")).hide();
        }
    );
        
    $("#stack-spotify").hover(
        function(){
            $(this).css({"color": "#C00000"});
            $(stack_connections_red["stack_spotify"].join(", ")).show();
            $(stack_connections_blue["stack_spotify"].join(", ")).hide();
        },
        function(){
            $(this).css({"color": "#00B0F0"});
            $(stack_connections_blue["stack_spotify"].join(", ")).show();
            $(stack_connections_red["stack_spotify"].join(", ")).hide();
        }
    );
        
    $("#stack-youtube").hover(
        function(){
            $(this).css({"color": "#C00000"});
            $(stack_connections_red["stack_youtube"].join(", ")).show();
            $(stack_connections_blue["stack_youtube"].join(", ")).hide();
        },
        function(){
            $(this).css({"color": "#00B0F0"});
            $(stack_connections_blue["stack_youtube"].join(", ")).show();
            $(stack_connections_red["stack_youtube"].join(", ")).hide();
        }
    );
        
    $("#stack-tumblr").hover(
        function(){
            $(this).css({"color": "#C00000"});
            $(stack_connections_red["stack_tumblr"].join(", ")).show();
            $(stack_connections_blue["stack_tumblr"].join(", ")).hide();
        },
        function(){
            $(this).css({"color": "#00B0F0"});
            $(stack_connections_blue["stack_tumblr"].join(", ")).show();
            $(stack_connections_red["stack_tumblr"].join(", ")).hide();
        }
    );
});