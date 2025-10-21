let mo=document.querySelector("#mode");
let cm="light";
mo.addEventListener('click',dark);

function dark(){
  if(cm === "light"){
    cm="dark";
    document.querySelector("body").style.backgroundColor="black";
    
  }
  else{
    cm="light";
    document.querySelector("body").style.backgroundColor="white";
  }


}
function type(){
  let i1 = document.getElementById("input1");
  const tex = [
    "Data Structure And Algorithm",
    "Web Development",
    "Programming",
    "Machine Learning and Data Science"
  ];

  let delay = 0;

  for(let i=0; i<tex.length; i++){
    let wo = tex[i];
    for(let j=0; j<wo.length; j++){
      setTimeout(()=>{
        i1.placeholder = wo.substring(0, j+1);
      }, delay + 150*j);
    }
    delay += 150*wo.length + 1000; // typing + pause before next word
  }

  // repeat after finishing all words
  setTimeout(type, delay);
}
type();














/*let ip=document.querySelector("#input1"); 
const text=["Data Structure And Algorithm","Web Development","c++ ,java"];
 
 let i=0; 
  typef();
 function typef()
 {
   let word=text[i];
   for(let j=0;j<word.length;j++)
    {
      console.log("hey");
    setTimeout(()=>
      {
        ip.placeholder=word.substring(0,j+1);
      },150*j);
    }
    console.log("hell");
       setTimeout(() => 
        {
        i = (i + 1) % text.length;
        typef(); // next word
        }, 150 * word.length + 1000); // total typing time + 1 sec pause
  }
  typef();*/

   



