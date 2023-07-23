
// Global Variables
var ProfessionalProjects = [
    // Projects.Details.MobileFarm,
    // Projects.Details.StarcademyBioform,
    Projects.Details.TileVisualiser,
    Projects.Details.Homography,
    Projects.Details.ShiroDash,
    Projects.Details.NearbyConnections
];
var GameJamProjects = [
    Projects.Details.MREncyclopedia,
    // Projects.Details.WhatsappMultiGame,
    // Projects.Details.GNOD,
    // Projects.Details.JoeSchmoe,
];
var PersonalProjects = [
    // Projects.Details.TimeMechmaybe,
    // Projects.Details.Clone1942,
    Projects.Details.WorkInProgress,
    Projects.Details.ChemicalCarriageway,
    Projects.Details.Snake3D,
    Projects.Details.Gameplay,// MarioCloneTeaching,?
    Projects.Details.RiTE,
];
var AllProjects = Array.prototype.concat(ProfessionalProjects, GameJamProjects, PersonalProjects);
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
    var portfolioElement = GetPortfolioElement();//remove template element to start clean
    SetProfessionalProjects(portfolioElement);
    SetGameJamProjects(portfolioElement);
    SetPersonalProjects(portfolioElement);

    function GetPortfolioElement() {
        var portfolioElement = document.getElementById("portfolio-element");
        var templateParent = portfolioElement.parentElement;
        templateParent.removeChild(portfolioElement); //remove template element to start clean
        return portfolioElement;
    }

    function SetProfessionalProjects(portfolioElement) {
        var parent = document.getElementById("professional-projects");
        SetProjects(ProfessionalProjects, portfolioElement, parent);
    }
    function SetGameJamProjects(portfolioElement) {
        var parent = document.getElementById("gamejam-projects");
        SetProjects(GameJamProjects, portfolioElement, parent);
    }
    function SetPersonalProjects(portfolioElement) {
        var parent = document.getElementById("personal-projects");
        SetProjects(PersonalProjects, portfolioElement, parent);
    }

    function SetProjects(RankedProjects, portfolioElement, parent) {
        for (var projectNo = 0; projectNo < RankedProjects.length; projectNo++) {
            var ProjectDetail = RankedProjects[projectNo];
            portfolioElement = portfolioElement.cloneNode(true);
            SetPortfolioThumbnail(portfolioElement, ProjectDetail);
            parent.appendChild(portfolioElement);
        }

        function SetPortfolioThumbnail(portfolioElement, ProjectDetail) {
            portfolioElement.firstElementChild.id = ProjectDetail.ID; //change id of first child which is responsible for click
            var h4Element = portfolioElement.getElementsByTagName("h4")[0];
            h4Element.innerHTML = ProjectDetail.Name;
            var pElement = portfolioElement.getElementsByTagName("p")[0];
            pElement.innerHTML = ProjectDetail.Keywords;
            var imgElement = portfolioElement.getElementsByTagName("img")[0];
            SetPortfolioThumbnailImg(imgElement);

            function SetPortfolioThumbnailImg(imgElement) {
                imgElement.setAttribute("src", `img/portfolio/${ProjectDetail.ID}/thumb.jpg`);
                imgElement.setAttribute("onerror", `javascript:this.src="img/portfolio/${Projects.Details.Default.ID}/thumb.jpg"`);
                imgElement.setAttribute("alt", `${ProjectDetail.ID}, ${ProjectDetail.Name}, ${ProjectDetail.Keywords}`);
                imgElement.setAttribute("title", `${ProjectDetail.Name}, ${ProjectDetail.Keywords}`);
            }
        }
    }
}

// Show Specific Project
var currentProjectIndex;
function ShowProjectForId(projectId) {
    var projectDetails = Projects.Details[projectId];
    currentProjectIndex = AllProjects.indexOf(projectDetails);

    if (projectDetails) {
        ShowLoader();
        SetProjectDescription();
        SetProjectDownloadLinks();
        SetCarousel();
        if (!SetVideoElement()) {
            HideLoader();
        }
    }

    function SetProjectDescription() {
        document.getElementById("modal-projectname").innerHTML = projectDetails.Name;
        document.getElementById("modal-projectsmalldescription").innerHTML = projectDetails.Keywords;
        document.getElementById("modal-projectdate").innerHTML = projectDetails.Dates || "";
        document.getElementById("modal-projectlargedescription").innerHTML = projectDetails.Description;
    }

    function SetProjectDownloadLinks() {
        var linkedElement;
        SetAndroidLink();
        SetAppleLink();
        SetWindowsLink();
        SetSteamLink();
        SetHtml5Link();
        SetGithubLink();
        SetMoreInfoLink();

        function SetAndroidLink() {
            var androidlinkElement = document.getElementById("modal-androidlink");
            linkedElement = androidlinkElement;
            SetProjectDownloadLink(projectDetails.GooglePlayStoreProjectId);
        }
        function SetAppleLink() {
            var applelinkElement = document.getElementById("modal-applelink");
            linkedElement = applelinkElement;
            SetProjectDownloadLink(projectDetails.ITunesStoreProjectId);
        }
        function SetWindowsLink() {
            var windowslinkElement = document.getElementById("modal-windowslink");
            linkedElement = windowslinkElement;
            SetProjectDownloadLink(projectDetails.WindowsStoreProjectId);
        }
        function SetSteamLink() {
            var steamlinkElement = document.getElementById("modal-steamlink");
            linkedElement = steamlinkElement;
            SetProjectDownloadLink(projectDetails.SteamStoreProjectId);
        }
        function SetHtml5Link() {
            var html5linkElement = document.getElementById("modal-html5link");
            linkedElement = html5linkElement;
            SetProjectDownloadLink(projectDetails.HTML5Link);
        }
        function SetGithubLink() {
            var githublinkElement = document.getElementById("modal-githublink");
            linkedElement = githublinkElement;
            SetProjectDownloadLink(projectDetails.GithubProjectRepo);
        }
        function SetMoreInfoLink() {
            var moreinfolinkElement = document.getElementById("modal-moreinfolink");
            linkedElement = moreinfolinkElement;
            SetProjectDownloadLink(projectDetails.MoreInfoLink);
        }

        function SetProjectDownloadLink(value) {
            linkedElement.setAttribute('href', value);
            OnElementValueChanged(linkedElement, value);
        }
        function OnElementValueChanged(element, value) {
            if (value) {
                ShowElement($(element));
            }
            else {
                HideElement($(element.parentElement));
            }
        }
    }

    function SetVideoElement() {
        var videoElement = document.getElementById("modal-videoiframe");
        if (projectDetails.YoutubeVideoId) {
            ShowElement($(videoElement));
            videoElement.setAttribute('onload', HideLoader.name);
            videoElement.setAttribute('src', `https://www.youtube.com/embed/${projectDetails.YoutubeVideoId}/?mute=1`);
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
        
        if (projectDetails.NoOfProjectImages == 0) {
            HideElement($(document.getElementById("portfolio-carousel").parentElement));
            return;
        }


        var imgPath = `img/portfolio/${projectDetails.ID}/${projectDetails.ID}`;
        for (let i = 1; i <= projectDetails.NoOfProjectImages; i++) {

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

function ShowProjectForIndex(index) {
    var projectId = AllProjects[index].ID;
    ShowProjectForId(projectId);
}

// Next - Previous Project
function ShowPreviousProjectModal() {
    ResetModalParams();
    var previousProjectIndex = (AllProjects.length + currentProjectIndex - 1) % AllProjects.length;
    ShowProjectForIndex(previousProjectIndex);
}

function ShowNextProjectModal() {
    ResetModalParams();
    var nextProjectIndex = (currentProjectIndex + 1) % AllProjects.length;
    ShowProjectForIndex(nextProjectIndex);
}

function ClosePortfolioModal() {
    ResetModalParams();
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
