const bgEl = document.getElementById('bg-image');

window.addEventListener('scroll', () => {
    updateImg();
})

function updateImg() {
    bgEl.style.opacity = 1 - window.pageYOffset / 800;
    bgEl.style.backgroundSize = 160 - window.pageYOffset / 12+ '%';

}