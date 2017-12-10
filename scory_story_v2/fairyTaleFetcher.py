def fairyTaleFetcher():
    with open('./static/stories/beauty_and_the_beast.txt', 'r') as myfile:
        beauty_and_the_beast=myfile.read().replace('\n', '&#13;&#10;')
    with open('./static/stories/cinderella.txt', 'r') as myfile:
        cinderella=myfile.read().replace('\n', '&#13;&#10;')
    with open('./static/stories/goldilocks.txt', 'r') as myfile:
        goldilocks=myfile.read().replace('\n', '&#13;&#10;')
    with open('./static/stories/hansel_and_gretel.txt', 'r') as myfile:
        hansel_and_gretel=myfile.read().replace('\n', '&#13;&#10;')
    with open('./static/stories/little_red.txt', 'r') as myfile:
        little_red=myfile.read().replace('\n', '&#13;&#10;')
    with open('./static/stories/sleeping_beauty.txt', 'r') as myfile:
        sleeping_beauty=myfile.read().replace('\n', '&#13;&#10;')
    with open('./static/stories/snow_white.txt', 'r') as myfile:
        snow_white=myfile.read().replace('\n', '&#13;&#10;')
    with open('./static/stories/three_little_pigs.txt', 'r') as myfile:
        three_little_pigs=myfile.read().replace('\n', '&#13;&#10;')
    
    openScript = "$(document).ready(function(){"
    beauty_and_the_beastScript = "$('#storyButton1').click(function(){$('#storyInput').html({\"" + beauty_and_the_beast + "\"});});"
    cinderellaScript = "$('#storyButton2').click(function(){$('#storyInput').html({\"" + cinderella + "\"});});"
    goldilocksScript = "$('#storyButton3').click(function(){$('#storyInput').html({\"" + goldilocks + "\"});});"
    hansel_and_gretelScript = "$('#storyButton4').click(function(){$('#storyInput').html({\"" + hansel_and_gretel + "\"});});"
    little_redScript = "$('#storyButton5').click(function(){$('#storyInput').html({\"" + little_red + "\"});});"
    sleeping_beautyScript = "$('#storyButton6').click(function(){$('#storyInput').html({\"" + sleeping_beauty + "\"});});"
    snow_whiteScript = "$('#storyButton7').click(function(){$('#storyInput').html({\"" + snow_white + "\"});});"
    three_little_pigsScript = "$('#storyButton8').click(function(){$('#storyInput').html({\"" + three_little_pigs + "\"});});"
    endScript = "});"
    
    fullScript = openScript + beauty_and_the_beastScript + cinderellaScript + goldilocksScript + hansel_and_gretelScript + little_redScript + sleeping_beautyScript + snow_whiteScript + three_little_pigsScript + endScript
    return fullScript


"""$(document).ready(function(){$("#storyButton1").click(function() {$.ajax({url : "./static/stories/beauty_and_the_beast.txt",dataType: "text",success : function (data) {$("#storyInput").text(data);}});});$("#storyButton2").click(function() {$.ajax({url : "./static/stories/cinderella.txt",dataType: "text",success : function (data) {$("#storyInput").text(data);}});});$("#storyButton3").click(function() {$.ajax({url : "./static/stories/goldilocks.txt",dataType: "text",success : function (data) {$("#storyInput").text(data);}});});$("#storyButton4").click(function() {$.ajax({url : "./static/stories/hansel_and_gretel.txt",dataType: "text",success : function (data) {$("#storyInput").text(data);}});});$("#storyButton5").click(function() {$.ajax({url : "./static/stories/little_red.txt",dataType: "text",success : function (data) {$("#storyInput").text(data);}});});$("#storyButton6").click(function() {$.ajax({url : "./static/stories/sleeping_beauty.txt",dataType: "text",success : function (data) {$("#storyInput").text(data);}});});$("#storyButton7").click(function() {$.ajax({url : "./static/stories/snow_white.txt",dataType: "text",success : function (data) {$("#storyInput").text(data);}});});$("#storyButton8").click(function() {$.ajax({url : "./static/stories/three_little_pigs.txt",dataType: "text",success : function (data) {$("#storyInput").text(data);}});});});"""