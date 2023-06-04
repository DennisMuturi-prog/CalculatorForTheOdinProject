
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
myinput.addEventListener('oninput',function(){
    let mynum2=myinput.value;
    mynum+=mynum2;
    

});
function add(a,b){
    return a+b;

}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;

}
function divide(a,b){
    return a/b;

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
        
        

    
})
const opBtn=document.querySelectorAll('.mynum');
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
        console.log(mynum);
        calculate();
        mynum+=" ";
        myinput.value+=mynum1;
        mynum+=mynum1;
        mynum+=" ";

        

       

        

    }
    

    
}));
const deleteButton=document.querySelector('.deleteBtn');
deleteButton.addEventListener('click',function(){
    
})