function setSize(){
    sessionStorage.setItem('resumePageSize',document.body.offsetHeight);   
    sessionStorage.setItem('navTopPadding',document.body.offsetHeight);   
    document.getElementById("sideNav").style.height= window.outerHeight+"px";
}
function resize(){
    document.getElementById('resume-iframe').setAttribute("height", document.getElementById('resume-iframe').contentWindow.document.body.offsetHeight); 
}
function wheel(){
    if(document.getElementById("resume-scroller").classList.contains("active")){
        var topPos= ($(window).scrollTop()-$('iframe').offset().top);
        if(topPos>window.outerHeight) topPos=window.outerHeight;
        document.getElementById('resume-iframe').contentWindow.document.getElementById('sideNav').style.top=topPos+"px";

    }
}
