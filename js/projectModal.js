
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

        portfolioElement = portfolioElement.cloneNode(true);
        SetPortfolioThumbnail(portfolioElement);
        parent.appendChild(portfolioElement);
    }

    function SetPortfolioThumbnail(portfolioElement) {
        portfolioElement.firstElementChild.id = ProjectDetail.ID; //change id of first child which is responsible for click
        var h4Element = portfolioElement.getElementsByTagName("h4")[0];
        h4Element.innerHTML = ProjectDetail.Name;
        var pElement = portfolioElement.getElementsByTagName("p")[0];
        pElement.innerHTML = ProjectDetail.SmallDescription;
        var imgElement = portfolioElement.getElementsByTagName("img")[0];
        SetPortfolioThumbnailImg(imgElement);

        function SetPortfolioThumbnailImg(imgElement) {
            imgElement.setAttribute("src", `img/portfolio/${ProjectDetail.ID}/thumb.jpg`);
            imgElement.setAttribute("alt", `${ProjectDetail.ID}, ${ProjectDetail.Name}, ${ProjectDetail.SmallDescription}`);
            imgElement.setAttribute("title", `${ProjectDetail.Name}, ${ProjectDetail.SmallDescription}`);
        }
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
            SetProjectDownloadLinks();
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
                SetProjectDownloadLink(ProjectDetail.GooglePlayStoreProjectId);
            }
            function SetAppleLink() {
                var applelinkElement = document.getElementById("modal-applelink");
                linkedElement = applelinkElement;
                SetProjectDownloadLink(ProjectDetail.ITunesProjectId);
            }
            function SetWindowsLink() {
                var windowslinkElement = document.getElementById("modal-windowslink");
                linkedElement = windowslinkElement;
                SetProjectDownloadLink(ProjectDetail.WinStoreProjectId);
            }
            function SetSteamLink() {
                var steamlinkElement = document.getElementById("modal-steamlink");
                linkedElement = steamlinkElement;
                SetProjectDownloadLink(ProjectDetail.SteamProjectId);
            }
            function SetHtml5Link() {
                var html5linkElement = document.getElementById("modal-html5link");
                linkedElement = html5linkElement;
                SetProjectDownloadLink(ProjectDetail.HTML5Link);
            }
            function SetGithubLink() {
                var githublinkElement = document.getElementById("modal-githublink");
                linkedElement = githublinkElement;
                SetProjectDownloadLink(ProjectDetail.GithubProjectRepo);
            }
            function SetMoreInfoLink() {
                var moreinfolinkElement = document.getElementById("modal-moreinfolink");
                linkedElement = moreinfolinkElement;
                SetProjectDownloadLink(ProjectDetail.MoreInfoLink);
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
                    HideElement($(element));
                }
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
