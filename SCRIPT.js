/*function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[1];
        var revealpoint = 30;

        if(revealtop < windowheight == revealpoint){
            reveals[i].classList.add('.active');
        }
        else{
            reveals[1].classList.remove('.active');
        }
    }
}

function reveal(){
    document.getElementsByClassName('.reveal').style.marginTop = 100;
}
//scroll-out
ScrollOut({
    target:'.about-container'
})*

window.addEventListener('scroll', ()=>{
    let content = document.querySelectorAll('.reveal');
    let contentPosition = '35%';
    let revealpoint = '200px';
    let screenPosition = 100; 
    if(contentPosition < screenPosition){
        content.classList.add('active');
    }
    else{
        content.classList.remove('active');
    }
})*/
 
/*let scrollReveal = document.getElementById('sec1');
document.addEventListener(scroll(300), function(){
    scrollReveal.style.marginTop = '-300px';
})
function sec1(){
    if(document.body.scrollTop > 350){
        scrollReveal.style.marginTop = '300px';
    }
}*/
window.onscroll = function(el) {
    if ((window.innerHeight + window.scrollY) < 'scrollReveal'){
        alert('you have reached the bottom of the page.')
    }
}
let scrollReveal = '50px';
function openPicture1a(){
    document.getElementById('picture1a').style.width = '100%';
}
function closePicture1a(){
    document.getElementById('picture1a').style.width = 0;
}
function openPicture2a(){
    document.getElementById('picture2a').style.width = '100%';
}
function closePicture2a(){
    document.getElementById('picture2a').style.width = 0;
}
function openPicture3a(){
    document.getElementById('picture3a').style.width = '100%';
}
function closePicture3a(){
    document.getElementById('picture3a').style.width = 0;
}
function openPicture1(){
    document.getElementById('picture1').style.width = '100%';
}
function closePicture1(){
    document.getElementById('picture1').style.width = 0;
}
function openPicture2(){
    document.getElementById('picture2').style.width = '100%';
}
function closePicture2(){
    document.getElementById('picture2').style.width = 0;
}
function openPicture3(){
    document.getElementById('picture3').style.width = '100%';
}
function closePicture3(){
    document.getElementById('picture3').style.width = 0;
}
function openPicture4(){
    document.getElementById('picture4').style.width = '100%';
}
function closePicture4(){
    document.getElementById('picture4').style.width = 0;
}
let photoreveal = document.getElementById('sec2-photo-reveal');
let textreveal = document.getElementById('about-reveal');
