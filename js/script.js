var click = 1;

var img = document.getElementById('image');

function changeImg() {
    if (click == 1) {
        img.setAttribute('src', 'img/logo1.png');
        click = click + 1;
    } else if (click == 2) {
        img.setAttribute('src', 'img/panda.jpg');
        click = click + 1;
    } else if (click == 3) {
        img.setAttribute('src', 'img/google.png');
        click = 1;
    }
}