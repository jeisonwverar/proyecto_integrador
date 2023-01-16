
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
        root.innerHTML=`<img src="../img/error404.png" alt="error404">`;
       

    }
 
    
 }
 


const spa =()=>{

  getHTML('/home')
  
  window.addEventListener('hashchange',e=>{
    
  const locationElement= window.location.hash;
  console.log(locationElement)
     const router = async(route)=>{
     
         switch (route) {
             case '#/home':
              getHTML(locationElement.slice(1))
              console.log(document.getElementsByClassName('main'))
                 
                 break;
         
             case '#/alta':
                 getHTML(locationElement.slice(1))
                 
                 break;
             case '#/servicios':
                 getHTML(locationElement.slice(1))
                 
                 break;
             case '#/nosotros':
                 getHTML(locationElement.slice(1))
                 
                 break;
             case '#/contacto':
                 getHTML(locationElement.slice(1))
                 
                 break;

             default:
                 getHTML('/error404');
                 break;
         }
  
     };
     router(locationElement)
    
     
  })
   

} 

export default spa;
