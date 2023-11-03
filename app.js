let h1=document.querySelector('#myh');

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            
            h1.style.color=color;
            resolve('color changed');
            console.log(`Color changed to ${color}`);
        }, delay);
       

    })
   
}

async function rndmColor(){
    await changeColor('red',1000);
   await changeColor('green',1000);
   await changeColor('blue',1000);
   await changeColor('yellow',1000);
   await changeColor('orange',1000);

}
rndmColor();




