var hours=document.getElementById("hours");
var minutes=document.getElementById("minutes");
var seconds=document.getElementById("seconds")
var txt=document.getElementById("txt")

update=()=>{
    var currentHours=new Date().getHours();
    var currentMinutes=new Date().getMinutes();
    var currentSeconds=new Date().getSeconds();

    if(currentHours>12){
        currentHours=currentHours-12;
        txt.innerHTML="PM"
    }
    else{
        txt.innerHTML="AM"
    }
    
    hours.innerHTML=currentHours;
    minutes.innerHTML=currentMinutes;
    seconds.innerHTML=currentSeconds;


}
setInterval(update,1000);
