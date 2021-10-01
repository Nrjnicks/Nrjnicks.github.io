
// Global Variables
var RankedProjects = [
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
// Functions
Start();
function Start() {
    SetPorfolioElements();
    SetKeyboardBinding();
}

// Keybindings
function SetKeyboardBinding() {
    $(document).keyup(function (e) {
        if (e.keyCode == 27) { // escape key maps to keycode `27`
            ResetModalParams();
        }
    });
}

// Portfolio Section
function SetPorfolioElements() {
    var portfolioElement = document.getElementById("portfolio-element");
    var parent = portfolioElement.parentElement;
    parent.removeChild(portfolioElement);//remove template element to start clean

    for (var projectNo = 0; projectNo < RankedProjects.length; projectNo++) {
        var ProjectDetail = RankedProjects[projectNo];
        // console.log(ProjectDetail.ID);
        portfolioElement = portfolioElement.cloneNode(true);
        portfolioElement.firstElementChild.id = ProjectDetail.ID;//change id of first child which is responsible for click
        portfolioElement.lastElementChild.firstElementChild.innerHTML = ProjectDetail.Name;
        portfolioElement.lastElementChild.lastElementChild.innerHTML = ProjectDetail.SmallDescription;

        SetPortfolioThumbnail();
        parent.appendChild(portfolioElement);
    }

    function SetPortfolioThumbnail() {
        var imgElement = portfolioElement.getElementsByTagName("img")[0];
        imgElement.setAttribute("src", `img/portfolio/${ProjectDetail.ID}/thumb.jpg`);
        imgElement.setAttribute("alt", `${ProjectDetail.ID}, ${ProjectDetail.Name}, ${ProjectDetail.SmallDescription}`);
        imgElement.setAttribute("title", `${ProjectDetail.Name}, ${ProjectDetail.SmallDescription}`);
    }
}

// Show Specific Project
var currentProjectNumber;
function ShowProjectModal(id) {
    currentProjectNumber = RankedProjects.indexOf(Projects.Details[id]);
    SetModalParams(id);
    function SetModalParams(id) {
        var ProjectDetail = Projects.Details[id];
        if (ProjectDetail) {
            ShowLoader();
            SetProjectDescription();
            SetProjectDownloadLink();
            SetCarousel();
            if (!SetVideoElement()) {
                HideLoader();
            }
        }

        function SetProjectDescription() {
            document.getElementById("modal-projectname").innerHTML = ProjectDetail.Name;
            document.getElementById("modal-projectsmalldescription").innerHTML = ProjectDetail.SmallDescription;
            document.getElementById("modal-projectlargedescription").innerHTML = ProjectDetail.LargeDescription;
        }

        function SetProjectDownloadLink() {
            var downloadLinkElement = document.getElementById("modal-moreinfolink");
            if (ProjectDetail.MoreInfoLink) {
                ShowElement($(downloadLinkElement));
                downloadLinkElement.setAttribute('href', ProjectDetail.MoreInfoLink);
            }
            else {
                HideElement($(downloadLinkElement));
            }
        }

        function SetVideoElement() {
            var videoElement = document.getElementById("modal-videoiframe");
            if (ProjectDetail.YoutubeVideoId) {
                ShowElement($(videoElement));
                videoElement.setAttribute('src', `https://www.youtube.com/embed/${ProjectDetail.YoutubeVideoId}/?mute=1`);
                videoElement.setAttribute('onload', HideLoader.name);
                return true
            }
            else {
                HideElement($(videoElement));
                return false;
            }
        }

        function SetCarousel() {
            var buttonedIndicatorElmnt = document.getElementById("portfolio-carousel-indicator");
            var imgContainerElmnt = document.getElementById("portfolio-carousel-inner");

            var buttonedIndicatorElmntParent = buttonedIndicatorElmnt.parentElement;
            var imgContainerElmntParent = imgContainerElmnt.parentElement;

            buttonedIndicatorElmnt.classList.remove("active");
            imgContainerElmnt.classList.remove("active");

            DeleteAllChild(buttonedIndicatorElmntParent);
            DeleteAllChild(imgContainerElmntParent);

            var imgPath = `img/portfolio/${ProjectDetail.ID}/${ProjectDetail.ID}`;
            for (let i = 1; i <= ProjectDetail.NoOfProjectImages; i++) {

                buttonedIndicatorElmnt.setAttribute("data-slide-to", i);
                imgContainerElmnt.firstElementChild.setAttribute("src", `${imgPath + i}.jpg`);//as you would guess, string+1=string1

                buttonedIndicatorElmntParent.appendChild(buttonedIndicatorElmnt.cloneNode(true));
                imgContainerElmntParent.appendChild(imgContainerElmnt.cloneNode(true));
            }
            buttonedIndicatorElmntParent.firstElementChild.classList.add("active");
            imgContainerElmntParent.firstElementChild.classList.add("active");

            function DeleteAllChild(parent) {
                while (parent.lastElementChild) {
                    parent.removeChild(parent.lastElementChild)
                }
            }
        }
    }
}


// Next - Previous Project
function ShowPreviousProjectModal() {
    ResetModalParams();
    ShowProjectModal(RankedProjects[(RankedProjects.length + currentProjectNumber - 1) % RankedProjects.length].ID);
}

function ShowNextProjectModal() {
    ResetModalParams();
    ShowProjectModal(RankedProjects[(currentProjectNumber + 1) % RankedProjects.length].ID);
}

function ResetModalParams() {
    document.getElementById("modal-projectname").innerHTML = '';
    document.getElementById("modal-projectsmalldescription").innerHTML = '';
    document.getElementById("modal-projectlargedescription").innerHTML = '';
    document.getElementById("modal-moreinfolink").setAttribute('href', '');
    document.getElementById("modal-videoiframe").setAttribute('src', '');
    AnimateModalToReset();

    function AnimateModalToReset() {
        $('#portfolioModal').animate({
            scrollTop: 0
        }, 300);
    }
}


function ShowLoader() {
    ShowElement($(document.getElementById('loader')));
}

function HideLoader() {
    HideElement($(document.getElementById('loader')));
}

function ShowElement(element) {
    element.show();
}

function HideElement(element) {
    element.hide();
}
