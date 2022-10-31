window.onload=function(){
    let top=document.querySelector(`.top`);
    let num=document.querySelector(`.num`);
    let gr=document.querySelector(`.gr`);
    let bia=document.querySelectorAll(`.bi-appear`);
    let toleft=document.querySelector(`.glyphicon-chevron-left`);
    let toright=document.querySelector(`.glyphicon-chevron-right`);
    let x=2;
    let tim=setInterval(function(){
        top.style.background=`url(img/course0${x}.png) no-repeat`;
        top.style.backgroundSize=`100% 100%`;
        gr.style.transform=`translate(${(x-1)*105}px,0px)`;
        for(let i=0;i<bia.length;i++){
            bia[i].classList.remove(`bi-disappear`);
        }
        bia[x-1].classList.add(`bi-disappear`);
        num.innerHTML=x;
        x++;
        if(x==9){
            x=1;
        }
    },1000);
    top.addEventListener(`mouseenter`,function(){
        clearInterval(tim);
    });
    for(let i=0;i<bia.length;i++){
        bia[i].addEventListener(`mouseenter`,function(){
            clearInterval(tim);
        })
    }
    top.addEventListener(`mouseleave`,function(){
        let timer=setInterval(function(){
            top.style.background=`url(img/course0${x}.png) no-repeat`;
            top.style.backgroundSize=`100% 100%`;
            gr.style.transform=`translate(${(x-1)*105}px,0px)`;
            for(let i=0;i<bia.length;i++){
                bia[i].classList.remove(`bi-disappear`);
            }
            bia[x-1].classList.add(`bi-disappear`);
            num.innerHTML=x;
            x++;
            if(x==9){
                x=1;
            }
            top.addEventListener(`mouseenter`,function(){
                clearInterval(timer);
            });
            for(let i=0;i<bia.length;i++){
                bia[i].addEventListener(`mouseenter`,function(){
                    clearInterval(timer);
                })
            }
        },1000);
    });
    toright.addEventListener(`mousedown`,function(){
        let rtim=setInterval(function(){
            top.style.background=`url(img/course0${x}.png) no-repeat`;
            top.style.backgroundSize=`100% 100%`;
            gr.style.transform=`translate(${(x-1)*105}px,0px)`;
            for(let i=0;i<bia.length;i++){
                bia[i].classList.remove(`bi-disappear`);
            }
            bia[x-1].classList.add(`bi-disappear`);
            num.innerHTML=x;
            x++;
            if(x==9){
                x=1;
            }
            toright.addEventListener(`mouseup`,function(){
                clearInterval(rtim);
            });
        },500);
    })
    toleft.addEventListener(`mousedown`,function(){
        x--;
        let ltim=setInterval(function(){
            top.style.background=`url(img/course0${x}.png) no-repeat`;
            top.style.backgroundSize=`100% 100%`;
            gr.style.transform=`translate(${(x-1)*105}px,0px)`;
            for(let i=0;i<bia.length;i++){
                bia[i].classList.remove(`bi-disappear`);
            }
            bia[x-1].classList.add(`bi-disappear`);
            num.innerHTML=x;
            x--;
            if(x==0){
                x=8;
            }
            let y=x+1;
            if(x==7){
                y=0
            }
            toleft.addEventListener(`mouseup`,function(){
                clearInterval(ltim);
                x=y+1;
            });
        },500);
    });
    for(let i=0;i<bia.length;i++){
        bia[i].addEventListener(`mouseenter`,function(){
            x=i+1;
            top.style.background=`url(img/course0${x}.png) no-repeat`;
            top.style.backgroundSize=`100% 100%`;
            gr.style.transform=`translate(${(x-1)*105}px,0px)`;
            for(let i=0;i<bia.length;i++){
                bia[i].classList.remove(`bi-disappear`);
            }
            bia[x-1].classList.add(`bi-disappear`);
            num.innerHTML=x;
        });
    }
}