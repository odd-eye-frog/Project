let x = 0;

setInterval(function(){
    if(x==0){
        document.querySelector(".s2 .furniturecontainer img").src='img/scandinavian.png';
        document.querySelector(".s2 .furniturecontainer p").innerText="Scandinavian.";
            x = x+1;
    }
    else if(x==1){
        document.querySelector(".s2 .furniturecontainer img").src='img/industrial.png';
        document.querySelector(".s2 .furniturecontainer p").innerText="Industrial.";
        x = x+1; 
    }
    else if(x==2){
        document.querySelector(".s2 .furniturecontainer img").src='img/natural.png';
        document.querySelector(".s2 .furniturecontainer p").innerText="Natural.";
            x = x+1; 
    }
    else if(x==3){
        document.querySelector(".s2 .furniturecontainer img").src='img/unique.png';
        document.querySelector(".s2 .furniturecontainer p").innerText="Unique.";
        x = x+1; 
    }
    else{
        document.querySelector(".s2 .furniturecontainer img").src='img/minimal.png';
        document.querySelector(".s2 .furniturecontainer p").innerText="Minimal.";
        x = 0;
    }
}, 4000);