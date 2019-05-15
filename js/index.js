// Your code goes here
const logoText = document.querySelector('h1');
const navLinks = document.querySelectorAll('nav a');
const contentHeaders = document.querySelectorAll('h2');
const destination = document.querySelectorAll('.destination');
const footer = document.querySelector('footer');
const printBtn = document.createElement('button');


logoText.addEventListener('mouseover',

    event => {
        event.target.classList.add('busColors');
    })

logoText.addEventListener('mouseout', event => {
    event.target.classList.remove('busColors');
})

document.addEventListener('keydown', event => {
    navLinks.forEach(function (navItem) {
        navItem.classList.add('busColors');
        navItem.style.fontSize = '2rem';
        navItem.style.color = 'yellow';
    })
})

document.addEventListener('keyup', event => {
    navLinks.forEach(function (navItem) {
        navItem.classList.remove('busColors');
        navItem.style.fontSize = '1.75rem';
        navItem.style.color = 'black';
    })
})

document.addEventListener('wheel', event => {
    contentHeaders.forEach(function (header) {
        header.classList.add('busColors');
        header.style.fontSize = '2.5rem';
        header.style.color = 'yellow';
    })
})

window.addEventListener('mousedown', event => {
    event.target.style.backgroundColor = 'black';
    event.target.style.color = 'yellow';
})

window.addEventListener('mouseup', event => {
    event.target.style.backgroundColor = 'white';
    event.target.style.color = 'black';
})

// Thank you, Skyelar!
const imageDrag = document.querySelectorAll('img');

imageDrag.forEach(img => {
    img.addEventListener('drag', event => {
        event.currentTarget.style.filter = 'grayscale(100%)';
    })
})

// beforeprint example
printBtn.textContent = 'Print This Page';
footer.appendChild(printBtn);
printBtn.onclick = function () {
    window.print();
}
window.addEventListener('beforeprint', event => {
    alert('Click OK to print.');
})


// Prevent Default Example
navLinks.forEach(function (navItem) {
    navItem.addEventListener('click', event => {
        console.log('That will not work!')
        event.preventDefault();
    })
})