window.onload = init;

function init() {
    var sound = new Howl ({
        src: ["asserts/audios/sound1.mp3"],
        autoplay: true,
    });

    var playMusic = document.getElementById("playMusic");

    playMusic.addEventListener("click", function () {
        sound.play();
    });

    var pauseMusic = document.getElementById("pauseMusic");

    pauseMusic.addEventListener("click", function () {
        sound.play();
    });

    new Splide( '#splide', {
        type   : 'loop',
        padding: {
            right: '5rem',
            left : '5rem',
        },
    } ).mount();
}
