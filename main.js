const { count } = require("console");

let Title = document.querySelector('.Title');
let Subtitle = document.querySelector('.Subtitle');


let Intestazione = new IntersectionObserver((entries)=>{
    entries.forEach(entry =>{
        if (entry.isIntersecting) {
            Subtitle.style.opacity = '1';
            Subtitle.style.transform = 'translateY(0)';
            Title.style.opacity = '1';
            Title.style.transform = 'translateY(0)';
            
        }else{
            Subtitle.style.opacity = '0';
            Subtitle.style.transform = 'translatex(100%)';
            Title.style.opacity = '0';
            Title.style.transform = 'translatex(100%)';
        }
    })
});


Intestazione.observe(Subtitle);
Intestazione.observe(Title);

// let btnMode = document.querySelector('.btnMode');
// let isClicked =true;


// btnMode.addEventListener('click',() =>{
//     if (isClicked) {
//         document.documentElement.style.setProperty('--light', 'rgb(20,20,20');
//         document.documentElement.style.setProperty('--dark', 'rgb(245,245,245)');
//         isClicked=false;
//     }else{
//         document.documentElement.style.setProperty('--dark', 'rgb(245,245,245)');
//         document.documentElement.style.setProperty('--light', 'rgb(20,20,20');
//         isClicked=true;
//     }

// });