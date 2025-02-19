const elementAbout = document.querySelector(".index-about");
const elementPlay = document.querySelector(".index-work");
const elementFantasy = document.querySelector(".fantasy-section");
const elementFaq = document.querySelector(".faq-section");
const elementContact = document.querySelector(".contacts");

const buttonAbout = document.querySelector(".nav-link-about");
const buttonPlay = document.querySelector(".nav-link-play");
const buttonFantasy = document.querySelector(".nav-link-fantasy");
const buttonFaq = document.querySelector(".nav-link-faq");
const buttonContact = document.querySelector(".nav-link-contact");


const scrollToAbout=()=>{
      const step = 40;
      if(elementAbout.offsetTop < window.pageYOffset + step){  
         document
                 .documentElement
                 .scrollTo(0,element.offsetTop );
      }else{
         document
                 .documentElement
                 .scrollTo(0,window.pageYOffset+step);
      }
      if(elementAbout.offsetTop !== window.pageYOffset)requestAnimationFrame(scrollToAbout)
      

}


const scrollToPlay=()=>{
    const step = 80;
    if(elementPlay.offsetTop < window.pageYOffset + step){  
       document
               .documentElement
               .scrollTo(0,element.offsetTop );
    }else{
       document
               .documentElement
               .scrollTo(0,window.pageYOffset+step);
    }
    if(elementPlay.offsetTop !== window.pageYOffset)requestAnimationFrame(scrollToPlay)
    

}

const scrollToFantasy=()=>{
    const step = 80;
    if(elementFantasy.offsetTop < window.pageYOffset + step){  
       document
               .documentElement
               .scrollTo(0,element.offsetTop );
    }else{
       document
               .documentElement
               .scrollTo(0,window.pageYOffset+step);
    }
    if(elementFantasy.offsetTop !== window.pageYOffset)requestAnimationFrame(scrollToFantasy)
    

}

const scrollToFaq=()=>{
    const step = 100;
    if(elementFaq.offsetTop < window.pageYOffset + step){  
       document
               .documentElement
               .scrollTo(0,element.offsetTop );
    }else{
       document
               .documentElement
               .scrollTo(0,window.pageYOffset+step);
    }
    if(elementFaq.offsetTop !== window.pageYOffset)requestAnimationFrame(scrollToFaq)
    

}

const scrollToContact=()=>{
    const step = 100;
    if(elementContact.offsetTop < window.pageYOffset + step){  
       document
               .documentElement
               .scrollTo(0,element.offsetTop );
    }else{
       document
               .documentElement
               .scrollTo(0,window.pageYOffset+step);
    }
    if(elementContact.offsetTop !== window.pageYOffset)requestAnimationFrame(scrollToContact)
    

}


buttonAbout.addEventListener("click",scrollToAbout);
buttonPlay.addEventListener("click",scrollToPlay);
buttonFantasy.addEventListener("click",scrollToFantasy);
buttonFaq.addEventListener("click",scrollToFaq);
buttonContact.addEventListener("click",scrollToContact);