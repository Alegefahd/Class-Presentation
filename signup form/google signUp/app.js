const toggle = document.querySelectorAll('.toggle');
const box = document.querySelector('.box');

toggle.forEach(t => {
    t.addEventListener('click', () => {
        box.classList.add('progress');
        const nextstep = setTimeout(() => {
            box.classList.remove('progress');
            box.classList.toggle('second-step');
            clearInterval(nextstep);
        }, 1800);
    });
});