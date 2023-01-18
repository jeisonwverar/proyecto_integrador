

const modalElement=(modal,button)=>{
  const $modal = document.querySelector(modal);
  const $cart = document.querySelector(button);
  const $closed = document.querySelector('.modal__closed')
 //console.log($modal,$cart);
 $modal.classList.add('modal__none')
 document.addEventListener('click',e=>{
    console.log(e.target)

 if(e.target === $cart ){
    $modal.classList.toggle('modal__none')
 }
 if(e.target === $closed){
    $modal.classList.add('modal__none')
 }
 

   
 })

}


export default modalElement;