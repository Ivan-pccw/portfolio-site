const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');


function PageTransitions(){
    //button click active class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function() {
            let curBtn = document.querySelectorAll('.active-btn');
            curBtn[0].className = curBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    //section active class
    allSections[0].addEventListener('click', function(e) {
        const id = e.target.dataset.id;
        console.log(id)
        if(id){
            // //remove selected from the other buttons
            // sectBtns.forEach((btn) => {
            //     btn.classList.remove('active')
            // })
            // e.target.classList.add('active')

            //hide other sections
            // sections.forEach((section) => {
            //     section.classList.remove('active')
            // })
            
            
            let active = document.querySelectorAll('.active');
            active[0].className = active[0].className.replace('active', ' deactive');
            setTimeout(() => {
                const element = document.getElementById(id)
                element.classList.add('active')
            }, 1000);
            setTimeout(()=>{
                sections.forEach((section) => {
                    section.classList.remove('deactive')
                })
            }, 900);


            // //simple
            // let active = document.querySelectorAll('.active');
            // active[0].className = active[0].className.replace('active', '');

            // const element = document.getElementById(id)
            // element.classList.add('active')


            
        }
    })
    
    //theme
    const themeBtn = document.querySelector('.theme-btn')
    themeBtn.addEventListener('click', () =>{
        let element = document.body
        element.classList.toggle('light-mode')
    })


}

PageTransitions();