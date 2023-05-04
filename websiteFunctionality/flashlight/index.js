const torch = document.getElementById('layer-2');

document.onmousemove = (e) => handleMove(e);

const handleMove = (e) => {
    torch.style.zIndex = '2';
    torch.style.clipPath = `circle(80px at ${e.clientX}px ${e.clientY}px)`;
};
