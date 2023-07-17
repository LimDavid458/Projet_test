const tl = gsap.timeline(); // Allows you to configure a chain animation
const btnAnimation = document.getElementById('playAnimation');

btnAnimation.addEventListener('click', () => {
    saund();
    animation();
});

/** Play audio */
function saund() {
    var audio = new Audio('Katana_Saund.mp3');
    audio.volume = 1;

    audio.load();
    audio.play();
}

function animation() {
    tl.set('.layer-full', { y: '-5%', display: 'block' }); // init position layer full
    tl.set('.layer-book, .layer-negative', { display: 'none' });
    tl.set('#playAnimation', { pointerEvents: 'none' });

    tl.to('.layer-full', { duration: 2, y: '-10%', display: 'none' });
    tl.to('.layer-book, .layer-negative', { duration: 0.9, display: 'block' });
    tl.to('#playAnimation', { pointerEvents: 'auto' });
}
