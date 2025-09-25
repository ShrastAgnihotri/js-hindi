const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let index = 0; index < 6; index++) {
        color += hex[Math.floor(Math.random()*16)];
        
    }
    return color;
};

let intervalid;
const startColorChanging = function(){
    if(!intervalid){intervalid = setInterval(changebgcolor,1000);}
   function changebgcolor() {
        document.body.style.backgroundColor = randomColor();
    }
};   
const stopColorChanging = function(){
    clearInterval(intervalid );
    intervalid=null;
};


document.querySelector('#start').addEventListener('click', startColorChanging);



document.querySelector('#stop').addEventListener('click', stopColorChanging)
