
let mynum="";
const myinput=document.querySelector('#myinput');
const buttons=document.querySelectorAll('.mynumber');
buttons.forEach(button =>button.addEventListener('click',function(){
     let mynum1=button.getAttribute("data-key");
    myinput.value+=mynum1;
    mynum+=mynum1;
}))
const clearBtn=document.querySelector('.clearBtn');
clearBtn.addEventListener('click',function(){myinput.value="";
mynum="";
}
)
myinput.addEventListener('input',function(e){
    let mynum2=e.target.value;
    let arrnum2=mynum2.split("");
    let myitem=arrnum2[arrnum2.length-1];
    console.log(mynum2);
    mynum+=myitem;
    

});
function add(a=0,b=0){
    return a+b;

}
function subtract(a=0,b=0){
    return a-b;
}
function multiply(a,b=1){
    return Math.round((a*b*10000))/10000;

}
function divide(a,b=1){
    return Math.round((a/b)*10000)/10000;

}
function calculate(){
    let myStr=mynum.split("");
    let index;
    
    for(let char of myStr){
        if(char==="+"|| char==="*" || char==="x" || char==="-" || char==="/" || char==="÷"){
            index=myStr.indexOf(char);
        }
    }
    if(myStr[index]==="+"){
    let myStr2=mynum.split("+");
    let result=add(myStr2[0]*1,myStr2[1]*1);
        myinput.value=result;
        mynum=result;
    }
        else if(myStr[index]==="*" || myStr[index]==="x"){
            let myStr2=mynum.split(/[*x]+/);
            let result=multiply(myStr2[0]*1,myStr2[1]*1);
            myinput.value=result;
            mynum=result;

        }
        else if(myStr[index]==="÷" || myStr[index]==="/"){
            let myStr2=mynum.split(/[÷/]+/);
            let result=divide(myStr2[0]*1,myStr2[1]*1);
            myinput.value=result;
            mynum=result;

        }
        else{
            let myStr2=mynum.split(" ");
            let result=subtract(myStr2[0]*1,myStr2[2]*1);
            myinput.value=result;
            mynum=result;

        }

}
const calcBtn=document.querySelector('.calculate');
calcBtn.addEventListener('click',function (){
   let validator=mynum.split("");
   let validator2=mynum.split(/[+x-÷]+/);
   console.log(validator);
   if(validator.length===0){
    return;
   }
    //if(validator2.length===1){
    //return;

   //}
    calculate();
   
})
const opBtn=document.querySelectorAll('.myop');
opBtn.forEach(opbtn => opbtn.addEventListener('click',function(){
    let mynum1=opbtn.getAttribute("data-key");
    if(mynum!==""){
    let mynum1=opbtn.getAttribute("data-key");
   mynum+=" ";
    myinput.value+=mynum1;
    mynum+=mynum1;
    mynum+=" ";
    }
    else{
        let mynum1=opbtn.getAttribute("data-key");
        myinput.value+=mynum1;
        mynum+=mynum1;


    }

    let myStr3=mynum.split("");
    let myStr4=mynum.split("");
    let index1="";
    for(let char of myStr4){
       
        if(char==="+"|| char==="*" || char==="x" || char==="-" || char==="/" || char==="÷"){
           
           let index=myStr4.indexOf(char);
           if(index>0){
            index1+=index;
        }
        if(index===0){
            myStr4.shift();
        }
        
            
        }
       
        
    }
    console.log(index1);
    if(index1.length>1){
        let str3Length=myStr3.length;
        console.log(str3Length);
        if(str3Length===8){
        str3Length=str3Length-2;
       }
        else{

         str3Length=str3Length-3;
        }
       console.log(str3Length);
        mynum=mynum.slice(0,str3Length);
        calculate();
        mynum+=" ";
        myinput.value+=mynum1;
        mynum+=mynum1;
        mynum+=" ";

     }
     decimalpoint.disabled=false;

    

    
}));
const deleteButton=document.querySelector('.deleteBtn');
deleteButton.addEventListener('click',function(){
    removeText();
    
})
const decimalpoint=document.querySelector('.decimal');
decimalpoint.addEventListener('click',function(){
    let mynum1=decimalpoint.getAttribute("data-key");
    myinput.value+=mynum1;
    mynum+=mynum1;
    decimalpoint.disabled=true;
}); 
function addWindowKeyDownListener() {
    window.addEventListener('keydown',myhandler)
    
  }
  function myhandler(e){
    let validkeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    console.log(e);
    if (validkeys.indexOf(e.key) >=0){
    myinput.value+=e.key;
    mynum+=e.key;
    }

}
  addWindowKeyDownListener();
myinput.addEventListener("focus", function() {
    removeWindowKeyDownListener();
  });

  // Add blur event listener to text input
  myinput.addEventListener("blur", function() {
    addWindowKeyDownListener();
  });
  

  // Remove event listener from window keydown
  function removeWindowKeyDownListener() {
    window.removeEventListener('keydown',myhandler)
  }
  function removeText() {
    let currentText = myinput.value;
    let newText = currentText.slice(0, currentText.length - 1);
    myinput.value = newText;
    mynum=newText;
  }
