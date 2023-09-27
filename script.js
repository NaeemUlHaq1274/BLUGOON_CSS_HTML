const menu = document.querySelector('#menu');
const nav = document.querySelector('nav');
// const h4 = document.querySelector('#h4');
console.log(nav)

menu.addEventListener('click',()=>{

    nav.classList.toggle('showmenu');
    // console.log('hello');
    // var none1 = nav.style.display='none';
    // if(none1){
    //     none1=true;
    //     console.log(none1);
    // }
    // if(none1  === false){
    //     none1=false;
    //     console.log(none1);
    // }

})
