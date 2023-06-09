const tl = gsap.timeline(); // Allows you to configure a chain animation
const btnAnimation = document.getElementById('playAnimation');

btnAnimation.addEventListener('click', () => {
    play();
});

/** Play audio and call function animation */
function play() {
    var audio = new Audio('Katana_Saund.mp3');
    audio.volume = 1;

    audio.load();
    audio.play();

    animation();
}

function animation() {
    tl.set('.layer-full', { y: '-5%', display: 'block' }); // init position layer full
    tl.set('.layer-book, .layer-negative', { display: 'none' });
    tl.set('#playAnimation', { pointerEvents: 'none', opacity: 0.5 }); // button play animation disabled

    tl.to('.layer-full', { duration: 2, y: '-10%', display: 'none' });
    tl.to('.layer-book, .layer-negative', { duration: 0.9, display: 'block' });
    tl.to('#playAnimation', { pointerEvents: 'auto', opacity: 1 });
}
