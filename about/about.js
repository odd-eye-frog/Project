let observer = new IntersectionObserver((e)=>{
    e.forEach((box)=>{
        if(box.isIntersecting){
            box.target.style.opacity = 1;
        }
        else{
            box.target.style.opacity = 0;
        }
    });
});

let sec = document.querySelectorAll("section");
observer.observe(sec[1]);
observer.observe(sec[2]);
observer.observe(sec[3]);
observer.observe(sec[4]);
observer.observe(sec[5]);