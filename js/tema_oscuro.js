const d=document;
const ls=localStorage;
console.log(ls)

export default function darkTheme(btn,classDark){
    const $themeBtn= d.querySelector(btn);
    const $selectors= d.querySelectorAll('[data-dark]');
    /* console.log($selectors); */
    let moon="🌙";
    let sun="☀️";

    const lightMode=()=>{
        $selectors.forEach(el=>el.classList.add(classDark));
             $themeBtn.textContent=sun;
             ls.setItem('theme','dark')
    };
    const DarkMode=()=>{
        $selectors.forEach(el=>el.classList.remove(classDark));
             $themeBtn.textContent=moon;
             ls.setItem('theme','light')
    };
    d.addEventListener('click',e=>{
        if(e.target.matches(btn)){
            if($themeBtn.textContent===moon){
             lightMode();
             
            }else{
             DarkMode();
             
             
            }
        }
    });
      
d.addEventListener('DOMContentLoaded',(e)=>{
    
    if(ls.getItem('theme')===null)ls.setItem('theme','light');
    if(ls.getItem('theme')==='light')lightMode();
    if(ls.getItem('theme')==='Dark')DarkMode();
    


});

};