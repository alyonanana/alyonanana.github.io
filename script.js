const anchors = document.querySelectorAll('a[href*="#"]')

anchors.forEach (anchor => {
    anchor.addEventListener ('click', e => {
        e.preventDefault();

        const blockID = anchor.getAttribute('href').substring(1);

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
})

const menuBtn = document.querySelector('.menu_icon')
const menu = document.querySelector('.menu_list')

if (menuBtn && menu) {
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active')
        menu.classList.toggle('active')
    })
}