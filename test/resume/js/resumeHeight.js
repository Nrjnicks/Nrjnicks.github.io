var iframeDoc;
function OnResumeIframeLoad(){
    iframeDoc = document.getElementById('resume-iframe').contentWindow.document;
    ResizeIFrame();
    SetCallBacks();
    $( window ).resize(function() {ResizeIFrame();});
}
function ResizeIFrame(){
    document.getElementById('resume-iframe').setAttribute("height", iframeDoc.body.offsetHeight+"px"); 
    if(screen.width>991)//responsive 
        iframeDoc.getElementById('sideNav').style.height= window.outerHeight-$('#mainNav').height()+"px";
    else{
        iframeDoc.getElementById('sideNav').removeAttribute("style");
    }
    MoveNavBarWithScroll();
}
function SetCallBacks(){
    var about;
    about = iframeDoc.getElementById('ScrollTo-about');
    about.onclick = function(){ScrollToElem("about");}    
    about.classList.remove("active");

    var experience;
    experience = iframeDoc.getElementById('ScrollTo-experience');
    experience.onclick = function(){ScrollToElem("experience");}

    var education;
    education = iframeDoc.getElementById('ScrollTo-education');
    education.onclick = function(){ScrollToElem("education");}

    var skills;
    skills = iframeDoc.getElementById('ScrollTo-skills');
    skills.onclick = function(){ScrollToElem("skills");}

    var interests;
    interests = iframeDoc.getElementById('ScrollTo-interests');
    interests.onclick = function(){ScrollToElem("interests");}

    var awards;
    awards = iframeDoc.getElementById('ScrollTo-awards');
    awards.onclick = function(){ScrollToElem("awards");}
}
function ScrollToElem(elementid){
    var elem = iframeDoc.getElementById(elementid);
    var scrollYVal=(0, $(document.getElementById('resume-iframe')).offset().top + $(elem).offset().top - $('#mainNav').height());
    $('html, body').animate({
        scrollTop: scrollYVal
    }, 500);
}
function MoveNavBarWithScroll(){
    if(!iframeDoc) return;
    
    var topPos = 0+"px";
    var timer;
    // console.log($('mainNav').offset().height);
    if(($(window).scrollTop()>$('iframe').offset().top-$('#mainNav').height())){
        if(($(window).scrollTop()< ($('iframe').offset().top+$('iframe').height()) - $(iframeDoc.getElementById('sideNav')).height() )){
            topPos = (($(window).scrollTop()-$('iframe').offset().top) + $('#mainNav').height())+ "px" ;
        }
        else{
            topPos= ($('iframe').height() - $(iframeDoc.getElementById('sideNav')).height() ) + "px";
        }
        if(timer) {
            window.clearTimeout(timer);
        }
    }
    if(screen.width>991){
        iframeDoc.getElementById('sideNav').style.top=topPos;
    }
    else{//responsive 
        timer = window.setTimeout(function() {
            $(iframeDoc.getElementById('sideNav')).animate({top:topPos},0.5,"linear");
        }, 100);
    }
    // window.clearTimeout(100);
    
}
