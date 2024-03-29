function Hero(image, top, left, size) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px; position:absolute;" />';
    };
    this.moveRight = function () {
        this.left = Math.floor(Math.random() * 1000);
        this.top = Math.floor(Math.random() * 1000);
        console.log('ok: ' + this.left);
    };

}

let hero = new Hero('image/ninja.png', 20, 30, 300);

function start() {
    if (hero.left < window.innerWidth - hero.size) {
        hero.moveRight();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
}

start();
