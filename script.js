document.getElementById('heart').addEventListener('click', function() {
    var content = document.getElementById('content');
    content.classList.toggle('show');
    var heart = document.getElementById('heart');
    heart.classList.toggle('hide');
    heart.classList.toggle('show');
});
