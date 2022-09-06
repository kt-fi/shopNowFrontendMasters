let width;
let scrollPos;
let i = 0;
let lastScrollClick;

let size = $(window).width()

if(size > 400){
   width = [0, size/100*55, size/100*55 *2]
}else if(size<400){
    width = [0, size, size *2]
}

const scrollAnimation = (position, direction) => {
     $('.slider').animate({scrollLeft: position}, 800)
     lastScrollClick = direction;
     console.log(position);
}

$("#right").click(()=>{
    if(i <= width.length -2){
        scrollPos = width[i+1]
    if(lastScrollClick === "left"){
        scrollPos = scrollPos * 2
        scrollAnimation(scrollPos, "right") 
        i++  
    }else{
      scrollAnimation(scrollPos, "right")  
    }
    
    i++  
    }
   
})

$("#left").click(()=>{
   
    scrollPos = width[i]
    if(lastScrollClick === "right"){
        scrollPos = scrollPos / 2
        scrollAnimation(scrollPos, "left")  
        i-- 
    }else{
      scrollAnimation(scrollPos, "left")  
    }
    
    i-- 
})