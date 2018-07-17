function setSize(){
    sessionStorage.setItem('resumePageSize',document.body.offsetHeight);   
    sessionStorage.setItem('navTopPadding',document.body.offsetHeight);   
    document.getElementById("sideNav").style.height= window.outerHeight+"px";
}
function resize(){
    document.getElementById('resume-iframe').setAttribute("height", sessionStorage.getItem('resumePageSize')); 
}
function seeking(){
    
    console.log(document.getElementById('resume-iframe'));
}
function wheel(){
    
    console.log(
        document.getElementById('resume-iframe').contentWindow.document.getElementById('sideNav').style.top);
    
}
// $( window ).scroll(function() {
//     if($('li.scroller').hasClass('active')){
//         $("nav.fixed-top").css({
//             // sessionStorage.setItem('navTopPadding',document.body.offsetHeight);   
//         });
//     }
    
    
//     // console.log(($(window).scrollTop()-$('iframe').offset().top));
// });
