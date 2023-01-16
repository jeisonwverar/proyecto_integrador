import slider from "./slider-home.js";
//import formContact from "./form-contact.js";


const root = document.querySelector('#root');
const getHTML=async(route)=>{
       
    try {
        let res = await fetch(`./views${route}.html`,{
         headers:{
             'Content-Type': 'text/html; charset=utf8'
         }

        })
        
        let text = await res.text()
        if(res.ok){
            root.innerHTML=text
        }else{
            throw err('error')
        }
    } catch (error) {
        console.error(error.status)
        
       

    }
 
    
 }
 


const spa =async()=>{

  getHTML('/home')
  
  window.addEventListener('hashchange',e=>{
    e.preventDefault()
  const locationElement= window.location.hash;
  console.log(locationElement)
     const router = async(route)=>{
     
         switch (route) {
             case '#/home':
             await getHTML(locationElement.slice(1))
              //console.log(document.getElementsByClassName('main'))
               slider();
                 break;
         
             case '#/alta':
               await  getHTML(locationElement.slice(1))
                 
                 break;
             case '#/servicios':
                 await getHTML(locationElement.slice(1))
                 
                 break;
             case '#/nosotros':
                await  getHTML(locationElement.slice(1))
                // formContact('.contact');
                 break;
             case '#/contacto':
                await getHTML(locationElement.slice(1))
                 
                 break;

             default:
               await  getHTML('/error404');
                 break;
         }
  
     };
     router(locationElement)
    
     
  })
   

} 

export default spa;
