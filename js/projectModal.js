var RankedProjects=[
    Projects.Details.WorkInProgress,
    Projects.Details.Homography,
    Projects.Details.ChemicalCarriageway,
    Projects.Details.MREncyclopedia,
    Projects.Details.Snake3D,
    Projects.Details.Gameplay,
    Projects.Details.ShiroDash,
    Projects.Details.RiTE,
    Projects.Details.NearbyConnections
];
//Functions
SetPorfolioElements();
function SetPorfolioElements(){
    var element = document.getElementById("portfolio-element");
    var parent = element.parentElement;
    parent.removeChild(element);//remove template element to start clean

    for (var projectNo = 0; projectNo < RankedProjects.length; projectNo++){
        var ProjectDetail = RankedProjects[projectNo];
        // console.log(ProjectDetail.ID);
        element = element.cloneNode(true);
        element.firstElementChild.id = ProjectDetail.ID;//change id of first child which is responsible for click
        element.lastElementChild.firstElementChild.innerHTML= ProjectDetail.Name;
        var elem = element.getElementsByTagName("img")[0];
        element.lastElementChild.lastElementChild.innerHTML= ProjectDetail.SmallDescription;
        elem.setAttribute("src","img/portfolio/"+ProjectDetail.ID+"/thumb.jpg");
        elem.setAttribute("alt", ProjectDetail.ID+", "+ProjectDetail.Name+", "+ProjectDetail.SmallDescription);
        elem.setAttribute("title", ProjectDetail.Name+", "+ProjectDetail.SmallDescription);
        parent.appendChild(element);
    }
    $(document).keyup(function(e) {
        if (e.keyCode == 27) { // escape key maps to keycode `27`
            ResetModalParams();
       }
   });
}
var currentProjectNumber;
function ShowPreviousProjectModal(){
    ResetModalParams();
    $('#portfolioModal').animate({
        scrollTop: 0
    }, 500);
    ShowProjectModal(RankedProjects[(RankedProjects.length+currentProjectNumber-1)%RankedProjects.length].ID);
}
function ShowProjectModal(id){
    currentProjectNumber=RankedProjects.indexOf(Projects.Details[id]);
    SetModalParams(id);
}
function ShowNextProjectModal(){
    ResetModalParams();
    $('#portfolioModal').animate({
        scrollTop: 0
    }, 500);
    ShowProjectModal(RankedProjects[(currentProjectNumber+1)%RankedProjects.length].ID);
}
function ResetModalParams(){
    document.getElementById("modal-projectname").innerHTML= '';
    document.getElementById("modal-projectsmalldescription").innerHTML= '';
    document.getElementById("modal-projectlargedescription").innerHTML= '';
    document.getElementById("modal-downloadlink").setAttribute('href','');
    document.getElementById("modal-videoiframe").setAttribute('src','');
}
function SetModalParams(id){
    var ProjectDetail = Projects.Details[id];
    if(ProjectDetail){ 
        showLoader();
        document.getElementById("modal-projectname").innerHTML= ProjectDetail.Name;
        document.getElementById("modal-projectsmalldescription").innerHTML= ProjectDetail.SmallDescription;
        document.getElementById("modal-projectlargedescription").innerHTML= ProjectDetail.LargeDescription;
        var elem= document.getElementById("modal-downloadlink");
        if(ProjectDetail.DownloadLink){
            $(elem).show();
            elem.setAttribute('href', ProjectDetail.DownloadLink);
        }
        else{
            $(elem).hide();
        }        
        elem= document.getElementById("modal-videoiframe");
        if(ProjectDetail.EmbedVideoLinkID){
            $(elem).show();
            elem.setAttribute('src', 'https://www.youtube.com/embed/'+ProjectDetail.EmbedVideoLinkID+'/?mute=1');
            elem.setAttribute('onload',"hideLoader()");
        }
        else{
            $(elem).hide();
            hideLoader();
        }
        SetCarousel(ProjectDetail);        
    }
}
function SetCarousel(ProjectDetail){
    var indicator = document.getElementById("portfolio-carousel-indicator"); 
    var inner = document.getElementById("portfolio-carousel-inner"); 

    var indicatorParent = indicator.parentElement;
    var innerParent = inner.parentElement;

    indicator.classList.remove("active");
    inner.classList.remove("active");

    DeleteAllChild(indicatorParent);
    DeleteAllChild(innerParent);

    var imgPath= "img/portfolio/"+ProjectDetail.ID+"/"+ProjectDetail.ID;
    for (let i = 1; i <= ProjectDetail.NoOfProjectImages; i++) {
        
        indicator.setAttribute("data-slide-to",i);
        inner.firstElementChild.setAttribute("src",imgPath+i+".jpg");

        indicatorParent.appendChild(indicator.cloneNode(true));   
        innerParent.appendChild(inner.cloneNode(true));     
    }
    indicatorParent.firstElementChild.classList.add("active");
    innerParent.firstElementChild.classList.add("active");
}

function DeleteAllChild(parent){
    while(parent.lastElementChild){
        parent.removeChild(parent.lastElementChild)
    }
}

function showLoader(){    
    $(document.getElementById('loader')).show();
}
function hideLoader(){    
    $(document.getElementById('loader')).hide();
}
