const d=document;

function slider(){
    const $nextBtn=d.querySelector('.slider__main-slides-btns .next');
    const $prevBtn=d.querySelector('.slider__main-slides-btns .prev');
    const $slides=d.querySelectorAll('.slider__main-slides-item');
   // console.log($slides, $nextBtn, $prevBtn);
    let i=0;
     d.addEventListener('click',e=>{
        //console.log(e.target)
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

    
};


export default slider;