function subirTela() {
    window.scrollTo({
        top:0,
        behavior: "smooth"
    });
}

function aparecer(){
    if(window.scrollY > 20){
        document.querySelector('.scrollbutton').setAttribute('style', 'display:block');
    } else {
        document.querySelector('.scrollbutton').setAttribute('style', 'display:none');
    }
}

setInterval(aparecer, 1);

