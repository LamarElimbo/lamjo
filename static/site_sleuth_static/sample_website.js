$(document).ready(function () {
    var show = document.querySelectorAll('.sample-button');

    Array.prototype.slice.call(show).forEach(function(title){
        title.addEventListener('click', function(e){
            $('#search-bar').val(this.title);
        })
    })
});