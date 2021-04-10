const s1 = document.querySelector(".s1");
const s2 = document.querySelector(".s2");
const s3 = document.querySelector(".s3");
const s4 = document.querySelector(".s4");
const s5 = document.querySelector(".s5");
const rate = document.querySelector("#rate");

var val = [".s1",".s2",".s3",".s4",".s5"];
s1.addEventListener("click",()=>{
    var counter = s1.getAttribute("data");
    setStart(counter);  
     
});
s2.addEventListener("click",()=>{
    var counter = s2.getAttribute("data");
    setStart(counter); 
        
});
s3.addEventListener("click",()=>{
    var counter = s3.getAttribute("data");
    setStart(counter); 
        
});
s4.addEventListener("click",()=>{
    var counter = s4.getAttribute("data");
    setStart(counter); 
        
});
s5.addEventListener("click",()=>{
    var counter = s5.getAttribute("data");
    setStart(counter); 
        
});
var checker = [true,true,true,true,true];
function setStart(counter){
    for(let j=counter-1;j<5;j++){
            if(!checker[j]){
                document.querySelector(val[j]).style.color="#FFFFFF";
                checker[j]=true;
            }
        }
    for(let i=0;i<counter;i++){
        checker[i]=false;
        document.querySelector(val[i]).style.color="yellow";
    }
    rate.innerText = counter+"/5";
}
