var iframeDoc;
var sideNav;
function OnResumeIframeLoad(){    
    iframeDoc = document.getElementById('resume-iframe').contentWindow.document;
    sideNav=iframeDoc.getElementById('sideNav');
    window.scrollTo(0,0); 
    document.body.setAttribute('onscroll', 'MoveNavBarWithScroll()');
    $(document.getElementById('loader')).hide();
    ResizeIFrame();
    SetCallBacks();

    $(window).resize(function() {ResizeIFrame();}); 
    // window.setTimeout(function() {//delay because portfolio tiles are being setup
    // }, 300);   
}
function SetCallBacks(){
    var about;
    about = iframeDoc.getElementById('ScrollTo-about');
    about.onclick = function(){ScrollToElem("about");}    
    about.classList.remove("active");

    var publication;
    publication = iframeDoc.getElementById('ScrollTo-publication');
    publication.onclick = function(){ScrollToElem("publication");}

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

    var blogs;
    blogs = iframeDoc.getElementById('ScrollTo-blogs');
    blogs.onclick = function(){ScrollToElem("blogs");}
}
function ScrollToElem(elementid){
    var elem = iframeDoc.getElementById(elementid);
    var scrollYVal=(0, $(document.getElementById('resume-iframe')).offset().top + $(elem).offset().top - $('#mainNav').height());
    $('html, body').animate({
        scrollTop: scrollYVal
    }, 500);
}
var responsiveWidth=768;
var iframeTop, endTopPos;
function ResizeIFrame(){
    document.getElementById('resume-iframe').setAttribute("height", iframeDoc.body.offsetHeight+"px");
    document.getElementById('resume-iframe').setAttribute("height", iframeDoc.body.offsetHeight+"px");//same line because previous line was not setting right height 
    document.getElementById('resume').style.height = iframeDoc.body.offsetHeight+"px";//same line because previous line was not setting right height 
    if(window.innerWidth>=responsiveWidth){//responsive
        sideNav.removeAttribute("style");
        iframeDoc.getElementById('navbarSupportedContent').removeAttribute("style");
        sideNav.style.height= window.outerHeight+"px";
        if(!sideNav.classList.contains("bg-primary"))
            sideNav.classList.add("bg-primary");
    }
    else{
        sideNav.removeAttribute("style");
        sideNav.classList.remove("bg-primary");//removed !important from resume bootstrapcss
        sideNav.style.top="0px";
        sideNav.firstElementChild.style.fontSize="0px"
        sideNav.style.backgroundColor="transparent";
        iframeDoc.getElementById('navbarSupportedContent').style.padding="5vw";
        iframeDoc.getElementById('navbarSupportedContent').style.borderRadius="0.25rem";
    }
    iframeTop=$('iframe').offset().top;
    endTopPos= $('iframe').height() - $(sideNav).height();
    MoveNavBarWithScroll();
}
var timer,scroll;
var topPos;
function MoveNavBarWithScroll(){
    if(!iframeDoc) return;
    
    topPos = 0;
    scroll=$(window).scrollTop();
    if(scroll>iframeTop){
        if(scroll< iframeTop+endTopPos){
            topPos = (scroll-iframeTop);
        }
        else{
            topPos= endTopPos;
        }
    }
    if(sideNav.style.top==(topPos+"px")) return;
    if(window.innerWidth>=responsiveWidth){
        sideNav.style.top=topPos+"px";
    }
    else{//responsive 
        topPos+=$('#mainNav').outerHeight();
        topPos+="px";
        if(timer) {
            window.clearTimeout(timer);
            $(sideNav).stop();
        }
        timer = window.setTimeout(function() {
            $(sideNav).animate({top:topPos},100,"linear");
        }, 25);
        
    }
    
}
