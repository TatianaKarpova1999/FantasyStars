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



if (buttonAbout) {
    buttonAbout.addEventListener('click', () => {
        elementAbout.scrollIntoView(
            {behavior: "smooth", block: "start", inline: "start"}
        ) 
    })
}


if (buttonPlay) {
    buttonPlay.addEventListener('click', () => {
        elementPlay.scrollIntoView(
            {behavior: "smooth", block: "start", inline: "start"}
        ) 
    })    
}

if (buttonFantasy) {
        buttonFantasy.addEventListener('click', () => {
            elementFantasy.scrollIntoView(
                {behavior: "smooth", block: "start", inline: "start"}
            ) 
        })
}


if (buttonFaq) {
        buttonFaq.addEventListener('click', () => {
            elementFaq.scrollIntoView(
                {behavior: "smooth", block: "start", inline: "start"}
            ) 
        })
}


if (buttonContact) {
        buttonContact.addEventListener('click', () => {
            elementContact.scrollIntoView(
                {behavior: "smooth", block: "start", inline: "start"}
            ) 
        })
}
