const menu=document.querySelector('#menu');
const pop= document.querySelector('.pop-up');
const body=document.querySelector('body');
menu.addEventListener('click',function(){
   
   pop.classList.toggle('mostrar');
   
   if(pop.className!="pop-up mostrar"){
      menu.innerHTML="&#9776;";
      menu.setAttribute("style","font-size:1.4em;");
   }else{
      menu.innerHTML="&#215;";
      menu.setAttribute("style","font-size:22px;");
      body.addEventListener('click', function() {
      pop.className="pop-up";
      menu.innerHTML="&#9776;";
      menu.setAttribute("style","font-size:1.4em;");
      });
   }
});


  menu.addEventListener('click', function(event) {
    event.stopPropagation();
  });
  
  
  
  
  
  
  