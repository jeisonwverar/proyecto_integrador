const ls=localStorage;
const d=document;
const w=window;
function scrollTopButton(btn){
    const $scrollBtn=d.querySelector(btn);
    w.addEventListener('scroll',e=>{
       /*  console.log(e.target) */
        let scrollTop =w.pageYOffset||d.documentElement.scrollTop;
        /*  console.log(scrollTop); */

        if(scrollTop > 600){
            $scrollBtn.classList.remove('btn-hidden');
        }else{
            $scrollBtn.classList.add('btn-hidden');
        }
        
    });

    d.addEventListener('click',e=>{
        if(e.target.matches(btn)){
            w.scrollTo({
                behaivor:'smooth',
                top:0
        });
        }
    })


};

scrollTopButton('.scroll-top-btn');
//dark-theme
function darkTheme(btn,classDark){
    const $themeBtn= d.querySelector(btn);
    const $selectors= d.querySelectorAll('[data-dark]');
    /* console.log($selectors); */
    let moon="🌙";
    let sun="☀️";

    const lightMode=()=>{
        $selectors.forEach(el=>el.classList.remove(classDark));
             $themeBtn.textContent=moon;
             ls.setItem('theme','light')
    };
    const darkMode=()=>{
        $selectors.forEach(el=>el.classList.add(classDark));
             $themeBtn.textContent=sun;
             ls.setItem('theme','dark')
    };
    d.addEventListener('click',e=>{
        if(e.target.matches(btn)){
            if($themeBtn.textContent===moon){
                darkMode();
                
            }else{
                lightMode();
             
            }
        }
        /* console.log(e.target,ls) */
    });
    
    d.addEventListener('DOMContentLoaded',(e)=>{
     /* console.log(ls) */
    if(ls.getItem('theme')===null)ls.setItem('theme','light');

    if(ls.getItem('theme')==='light')lightMode();

    if(ls.getItem('theme')==='dark')darkMode();
    


});

};

darkTheme('.main-header__theme-button','dark-theme')

function slider(){
    const $nextBtn=d.querySelector('.slider__main-slides-btns .next');
    const $prevBtn=d.querySelector('.slider__main-slides-btns .prev');
    const $slides=d.querySelectorAll('.slider__main-slides-item');
    console.log($slides, $nextBtn, $prevBtn);
    let i=0;
     d.addEventListener('click',e=>{
        console.log(e.target)
       if(e.target===$prevBtn){
            e.preventDefault();
            $slides[i].classList.remove('active');
            i--;
            if(i<0){
                i = $slides.length -1;
            }
            
            $slides[i].classList.add('active');
       }
       if(e.target===$nextBtn){
        e.preventDefault();
        $slides[i].classList.remove('active');
        i++;
        if(i>= $slides.length){
            i =  0;
        }
        
        $slides[i].classList.add('active');
   }
     });

    
}

slider();