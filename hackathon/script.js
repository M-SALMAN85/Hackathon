var resume = document.getElementById('hide-show');
var button = document.getElementById('skills');
resume.addEventListener('click', function () {
    if (button.style.display === 'none') {
        button.style.display = 'block';
    }
    else {
        button.style.display = 'none';
    }
});
