const container = document.querySelector('.comparison-slider-container')
document.querySelector('.slider').addEventListener('input', (e) => {
    container.style.setProperty('--position', `${e.target.value}%`)
})