let darkBtr= document.getElementById('darkBtr')
let body= document.querySelector('body')
 
let h1=document.getElementsByClassName('h11')
let nav=document.getElementById('nav-bar')


// darkBtr.forEach(function(a){
//     a.addEventListener('click',function(e){
//         console.log(e);
        
//     })
// })

// darkBtr.onclick =(body)=>{
      
//     console.log(body.target);
    
// };

darkBtr.addEventListener('click',(e)=> {
    console.log(e.target);
    body.style.backgroundColor='black'
     h1.style.color='white'
     nav.style.backgroundColor='black'
    
})