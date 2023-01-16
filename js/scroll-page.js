

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

export default scrollTopButton;