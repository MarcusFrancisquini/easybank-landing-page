const navbtn = document.querySelector('.toggle-menu');

const nav = document.querySelector('.navigation');

// function to open and close the mobile menu
navbtn.addEventListener('click', ()=>{
    nav.classList.toggle('active')
    // change mobile menu icon
    navbtn.classList.toggle('change')
})

// function to close the mobile menu when clicking on an item
function itemClose(event){
    if (event.type === 'click') {
        nav.classList.remove('active');
        // change mobile menu icon
        navbtn.classList.toggle('change')
    }
}

nav.addEventListener('click', itemClose);

//-=-=-=-=-=-=-=-=-=-=-=-=-=-End-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-