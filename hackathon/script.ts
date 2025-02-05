const resume = document.getElementById('hide-show')  as HTMLButtonElement
const button = document.getElementById('skills') as HTMLElement
resume.addEventListener('click', ()=> {
    if (button.style.display === 'none') {
        button.style.display = 'block'
    }
    else {
        button.style.display = 'none'
    }
});