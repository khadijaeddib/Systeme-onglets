

// var buttons = document.querySelectorAll('.onglets a')

// for ( var i = 0; i < buttons.length; i++) {
//         var button = buttons[i]

//         button.addEventListener('click', function(e) {

//             var section = this.parentNode.parentNode.parentNode.parentNode
//             var li = this.parentNode.parentNode

//             section.querySelector('.onglets .active').classList.remove('active')
//             li.classList.add('active')

//             section.querySelector(".onglet-content .active").classList.remove('active')
//             section.querySelector(this.getAttribute('href')).classList.add('active')

//         })
// }


const buttons = document.querySelectorAll('button')

buttons.forEach( button=> {
    button.addEventListener('click', () =>{
        const li = button.parentElement
        const ul = li.parentElement
        ul.querySelector('.active').classList.remove('active')
        li.classList.add('active')

        const buttonId = button.getAttribute('class')
        const p = document.querySelector(`#${buttonId}`)

        p.parentElement.querySelector('p.active').classList.remove('active')
        p.classList.add('active')
    })
});
