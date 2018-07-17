const Projects = {
    Details:{//adding in opposite-chronological order, so it's easy to add later
        Homography: {
            ID: "Homography",
            Name: "Homography",
            SmallDescription: "IEEE Publication",
            LargeDescription: "A very long description",
            NoOfProjectImages: 4
        },
        NearbyConnection: {
            ID: "NearbyConnection",
            Name: "Nearby Connection",
            SmallDescription: "IEEE Published",
            LargeDescription: "A very long description",
            NoOfProjectImages: 4
        },
        VAREncyclopedia: {
            ID: "VAREncyclopedia",
            Name: "VAR Encyclopedia",
            SmallDescription: "IEEE Published",
            LargeDescription: "A very long description",
            NoOfProjectImages: 1
        },
        ChemicalCarriageway: {
            ID: "ChemicalCarriageway",
            Name: "Chemical Carriageway",
            SmallDescription: "IEEE Published",
            LargeDescription: "A very long description",
            NoOfProjectImages: 4
        },
        RiTE: {
            ID: "RiTE",
            Name: "RiTE",
            SmallDescription: "IEEE Published",
            LargeDescription: "A very long description",
            NoOfProjectImages: 4
        },
    }
};
var RankedProjects={
    1: Projects.Details.Homography,
    2: Projects.Details.ChemicalCarriageway,
    3: Projects.Details.VAREncyclopedia,
    4: Projects.Details.RiTE,
    5: Projects.Details.NearbyConnection
};
function SetPorfolioElements(){
    var element = document.getElementById("portfolio-element");
    var parent = element.parentElement;
    parent.removeChild(element);//remove template element to start clean

    var projectNo = 1;
    while(RankedProjects[projectNo]){
        // console.log(RankedProjects[projectNo].ID);
        element = element.cloneNode(true);
        element.firstElementChild.id = RankedProjects[projectNo].ID;//change id of first child which is responsible for click
        element.lastElementChild.firstElementChild.innerHTML= RankedProjects[projectNo].Name;
        element.lastElementChild.lastElementChild.innerHTML=RankedProjects[projectNo].SmallDescription;
        element.getElementsByTagName("img")[0].setAttribute("src","img/portfolio/"+RankedProjects[projectNo].ID+"/1.jpg");
        parent.appendChild(element);

        projectNo++;
    }
}
function SetModalParams(i){
    //default
    document.getElementById("modal-projectname").innerHTML="Undergoing Project";
    document.getElementById("modal-projectsmalldescription").innerHTML="Stay Tuned";
    document.getElementById("modal-projectlargedescription").innerHTML="Will Soon Be Updated";

    if(Projects.Details[i]){ 
        document.getElementById("modal-projectname").innerHTML= Projects.Details[i].Name;
        document.getElementById("modal-projectsmalldescription").innerHTML= Projects.Details[i].SmallDescription;
        document.getElementById("modal-projectlargedescription").innerHTML= Projects.Details[i].LargeDescription;
    }
    SetCarousel(Projects.Details[i]);
}

function SetCarousel(ProjectDetails){
    var indicator = document.getElementById("portfolio-carousel-indicator"); 
    var inner = document.getElementById("portfolio-carousel-inner"); 

    var indicatorParent = indicator.parentElement;
    var innerParent = inner.parentElement;

    indicator.classList.remove("active");
    inner.classList.remove("active");

    DeleteAllChild(indicatorParent);
    DeleteAllChild(innerParent);

    var imgPath= "img/portfolio/"+ProjectDetails.ID+"/";
    for (let i = 1; i <= ProjectDetails.NoOfProjectImages; i++) {
        
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
        console.log(parent.lastElementChild.id);
        parent.removeChild(parent.lastElementChild)
    }
}
