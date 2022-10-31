window.onload=function(){
    let nav=document.querySelector(`.navbar`);
    let nla=document.querySelectorAll(`.nav-right li a`);
    let nav_col=document.querySelector(`.navbar-collapse`);
    let nav_log=document.querySelector(`.navbar-left`);
    let sy=document.querySelector(`#sy`);
    let gly=document.querySelector(`.glyphicon`);
    let men=document.querySelector(`.menu`);
    let menul=document.querySelector(`.menu-ul`);
    let bdis=document.querySelectorAll(`.b-dis`);
    men.addEventListener(`click`,function(){
        if(menul.style.display==`none`){
            menul.style.display=`block`;
        }
        else{
            menul.style.display=`none`;
        }
    })
    if(window.innerWidth<992){
        bdis[0].style.display=`none`;
        bdis[1].style.display=`none`;
        window.addEventListener(`scroll`,function(){
            if(document.documentElement.scrollTop>0){
                nav.style.backgroundColor=`#26282c`;
                gly.style.color=`black`;
                nav_log.style.transform=`translate(0,-5px)`;
                nav_log.style.transition=`all 0.5s`;
                for(let i=0;i<nla.length;i++){
                    nla[i].style.color=`#ffffff`;
                }
            }
            else{
                nav.style.backgroundColor=`transparent`;
                gly.style.color=`white`;
                nav_log.style.transform=`translate(0,0)`;
                nav_log.style.transition=`all 0.5s`;
                for(let i=0;i<nla.length;i++){
                    nla[i].style.color=`#ffffffa6`;
                }
            }
        });
    }
    else{
        bdis[0].style.display=`block`;
        bdis[1].style.display=`block`;
        window.addEventListener(`scroll`,function(){
            if(document.documentElement.scrollTop>0){
                nav.style.backgroundColor=`#26282c`;
                gly.style.color=`black`;
                nav_col.style.transform=`translate(0,-5px)`;
                nav_col.style.transition=`all 0.5s`;
                for(let i=0;i<nla.length;i++){
                    nla[i].style.color=`#ffffff`;
                }
                sy.style.borderColor=`#f2b535`;
            }
            else{
                nav.style.backgroundColor=`transparent`;
                gly.style.color=`white`;
                nav_col.style.transform=`translate(0,0)`;
                nav_col.style.transition=`all 0.5s`;
                for(let i=0;i<nla.length;i++){
                    nla[i].style.color=`#ffffffa6`;
                }
                sy.style.borderColor=`transparent`;
            }
        });
    }

    window.addEventListener('resize',function(){
        console.log('resize',window.innerWidth);
        if(window.innerWidth<992){
            console.log('<md');
            bdis[0].style.display=`none`;
            bdis[1].style.display=`none`;
            window.addEventListener('scroll',function(){
                console.log('<mdscroll');
                if(document.documentElement.scrollTop>0){
                    nav.style.backgroundColor=`#26282c`;
                    gly.style.color=`black`;
                    nav_log.style.transform=`translate(0,-5px)`;
                    nav_log.style.transition=`all 0.5s`;
                    for(let i=0;i<nla.length;i++){
                        nla[i].style.color=`#ffffff`;
                    }
                }
                else{
                    nav.style.backgroundColor=`transparent`;
                    gly.style.color=`white`;
                    nav_log.style.transform=`translate(0,0)`;
                    nav_log.style.transition=`all 0.5s`;
                    for(let i=0;i<nla.length;i++){
                        nla[i].style.color=`#ffffffa6`;
                    }
                }
            });
        }
        else{
            console.log('>=md');
            bdis[0].style.display=`block`;
            bdis[1].style.display=`block`;
            window.addEventListener('scroll',function(){
                console.log('>=mdscroll');
                if(document.documentElement.scrollTop>0){
                    nav.style.backgroundColor=`#26282c`;
                    gly.style.color=`black`;
                    nav_col.style.transform=`translate(0,-5px)`;
                    nav_col.style.transition=`all 0.5s`;
                    for(let i=0;i<nla.length;i++){
                        nla[i].style.color=`#ffffff`;
                    }
                    sy.style.borderColor=`#f2b535`;
                }
                else{
                    nav.style.backgroundColor=`transparent`;
                    gly.style.color=`white`;
                    nav_col.style.transform=`translate(0,0)`;
                    nav_col.style.transition=`all 0.5s`;
                    for(let i=0;i<nla.length;i++){
                        nla[i].style.color=`#ffffffa6`;
                    }
                    sy.style.borderColor=`transparent`;
                }
            });
        }
    });
};