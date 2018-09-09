const Projects = {
    Details:{//adding in opposite-chronological order, so it's easy to add later    
        Template: {
            ID: "Template",
            Name: "",
            SmallDescription: "",
            LargeDescription: "",
            DownloadLink: "",
            EmbedVideoLinkID: "",
            NoOfProjectImages: 1
        },
        WorkInProgress: {
            ID: "WorkInProgress",
            Name: "Work In Progress",
            SmallDescription: "iOS, Android, AI",
            LargeDescription: "Have you heard my Under Construction joke?<br>It's not done yet",
            NoOfProjectImages: 1
        },
        TileVisualiser: {
            ID: "TileVisualiser",
            Name: "Tile Visualiser",
            SmallDescription: "Shaders, Occulus Go, Unity3D",
            LargeDescription: ' • Wrote Surface Shader from scratch in Cg/HLSL (Unity3D) for VR Occulus Go build<br> • Proposed most opptimised way to approach a problem keeping in mind the target platform<br> • Set-up Unity3D for most optimised yet best quality settings<br> • Helped to build realistic Tile Visualiser with dynamic tiles and patterns with different grout<br>',
            DownloadLink: "",
            EmbedVideoLinkID: "",
            NoOfProjectImages: 0
        },
        ShiroDash: {
            ID: "ShiroDash",
            Name: "Shiro Dash",
            SmallDescription: "Published Android Game, 2D, C#",
            LargeDescription: "• 2D Infinite runner with jump and dash mechanics in Unity3D and C# for Android.<br>• Platforms are autogenerated with tweakable values of distance given to designers.<br>• Speed of the character increases with respect to time based on formula provided by the designers.<br>• Worked on implementation of Spline animation of character, UI, design.<br>",
            DownloadLink: "https://play.google.com/store/apps/details?id=com.tp.shirodash&hl=en",
            EmbedVideoLinkID: "",
            NoOfProjectImages: 5
        },
        Snake3D: {
            ID: "Snake3D",
            Name: "Snake 3D",
            SmallDescription: "Published Android Game, C#, Unity3D",
            LargeDescription: 'Snake eats fruit in an enclosed shape and avoid obstacles. Fruits spawns at random position within the playground. There are two main parts of game, Custom levels and Procedural level. In Custom level, snake has to avoid obstacle in prebaked playground and where as in Procedural level, enclosed shape is a regular polygon with obstacles spawning at random position within playground.<br><br>This game is developed using Unity3D game engine. Game was initially developed to be played over android platform, but game’s simple swipe control allows the gameplay to function with arrow key of joystick controller or keyboard.<br><br>If player chooses Custom level, playground corresponding to level 1 is instantiated along with Snake head and two tails. After this a Fruit is instantiated at random position inside the playground and snake is assigned with random velocity in 4 planar directions (up, down, left, right). Each time Snake eats a fruit, another fruit is instantiated at random position inside playground and a tail is increased in Snake. Snake has to eat a predefined value of minimum number of fruits to eat to surpass any level. If snake eats equal to requirement, player has now option to jump to next level or continue playing this level. If player chooses to go next level, next playground is instantiated and cycle repeats till all Custom levels are completed, after which player wins the game.<br><br>If player chooses Procedural level, an equilateral triangle (minimum sided polygon) is generated along with Snake head and two tails. After this a Fruit is instantiated at random position inside polygon. Snake is assigned with random velocity in 4 planar directions (up, down, left, right). Each time Snake eats a Fruit, another Fruit and an Obstacle are instantiated at two different random position inside the polygon and a tail is increased in Snake. Snake has to eat a predefined value of minimum number of fruits to eat to surpass any level. If snake eats equal to requirement, player has now option to jump to next level or continue playing this level. If player chooses to go next level, polygon with +1 side is generated cycle repeats endlessly.<br><br><div class="text-center"><a target="_blank" href="https://github.com/Nrjnicks/snake3d" type="button" class="btn btn-primary">More Information</a></div>',
            DownloadLink: "https://play.google.com/store/apps/details?id=com.CosmicTurtles.Snake3D",
            EmbedVideoLinkID: "0GcFrCnOaTA",
            NoOfProjectImages: 8
        },        
        Homography: {
            ID: "Homography",
            Name: "Reactive Display for VR",
            SmallDescription: "ISMAR 2017 (IEEE Publication)",
            LargeDescription: 'The feeling of presence in virtual reality has enabled a large number of applications. These applications typically deal with 360° content. However, a large amount of existing content is available in terms of images and videos i.e 2D content. Unfortunately, these do not react to the viewer position or motion when viewed through a VR Head Mount Device.<br><br>Thus in this work, we propose reactive displays for VR which instigate a feeling of discovery while exploring 2D content. We create this by taking into account user position and motion to compute homography based mappings that adapt the 2D content and re-project it onto the display. This allows the viewer to obtain a more richer experience of interacting with 2D content similar to the effect of viewing through the window at a scene. We also provide a VR interface that uses a constrained set of reactive displays to easily browse through 360° content.<br><br>The proposed interface tackles the problem of nausea caused by existing interfaces like photospheres by providing a natural room-like intermediate interface before changing 360° content. We perform user studies to evaluate both of our interfaces. The results show that the proposed reactive display interfaces are indeed beneficial.',
            DownloadLink: "https://ieeexplore.ieee.org/document/8088450/",
            EmbedVideoLinkID: "HNwwBkMFFIE",
            NoOfProjectImages: 7
        },
        Gameplay: {
            ID: "Gameplay",
            Name: "Prototypes/Game Mimics",
            SmallDescription: "Hobby projects",
            LargeDescription: "Designed and tested various prototypes of different genres of games like Tower Defense, Match-3, First and Third Person Shooter, Education, Fashion, Strategy and many more.<br>Some of the sample projects I would like to define:<br><br>• Anthropocene-The Game: Real-time strategy game for Android, built on Unity3D to spread message of climatic change and saving the environment. Gameplay: Maintaining balance between renewable and nonrenewable resources and not let in-game temperature rise by 2 degree Celsius <br><br>• Match-3: Built a match-three mini-game during internship period at Mech Mocha Game Std. Pvt. Lim., where player swaps two gems to make a pattern. Game had various combo moves like: 4-match: vertical or horizonal gem crusher, L shape-match: Bomb, 5-match: similar gem distroyer. <br><br>• Tower and Creeps: A tower defense game where player defends Home Tower by placing small towers to hit the Creeps and prevent them to reach the base. <br><br>• Escher Effect: Mimicked an illusion in virtual space. This illusion was also used in game- Monument Valley (by- Us Two).<br><br>• BodyShape: Educational grid game, where player completes a body by using tiles which can only be obtained if the number of turns already took is equal to the space between two tiles.",
            DownloadLink: "",
            EmbedVideoLinkID: "",
            NoOfProjectImages: 12
        },
        NearbyConnections: {
            ID: "NearbyConnections",
            Name: "Nearby Connections",
            SmallDescription: "Android API, C#, java, Bluetooth",
            LargeDescription: 'Built a communication layer which uses Bluetooth API and Nearby Connections API for offline and Nearby Messages API for online communication. Created an android plugin for unity using Android Studios to add the core Android, which Unity does not have built in. Used Bluetooth for close - range communication, Nearby Connections for mid - range connections(with or without internet) and Nearby Messages for long - range connection.Bluetooth Communication layer uses device inbuilt Bluetooth hardware to connect and send / receive data, Nearby Connections uses local Wi - Fi for connections while Nearby Messages uses Google Cloud for communication.This SDK can also handle different disconnection cases and react accordingly.Sending and receiving are done via array of bytes which is later converted into game state.<br><br> •Developed SDK for Unity3D, framework to develop multiplayer games which uses Bluetooth, Wi - Fi connections for communication<br> •Integrated this plugin with Unity3D and tested it by building an online - offline turn - based multiplayer first - person shooter game<br> •This game is a Turn - based Multiscreen Multiplayer game where a player has to shoot other players and the last player standing wins<br> •Used language: C# & java, Software: Unity3D & Android Studios and API: Bluetooth, Nearby Connections & Nearby Messages',
            DownloadLink: "",
            EmbedVideoLinkID: "",
            NoOfProjectImages: 7
        },
        MREncyclopedia: {
            ID: "MREncyclopedia",
            Name: "Mixed Reality Encyclopedia",
            SmallDescription: "VR-AR, Google Cardboard, Microsoft",
            LargeDescription: 'App developed at Microsoft code.fun.do organised by Microsoft, India at IIT Kanpur using Unity3D for Google Cardboard. Aim was to develop an App which focuses on Dynamic Teaching-Learning tools to make learning more interesting for students and for teachers to identify gaps and improve methods for teaching.<br><br>• Virtual and augmented reality based encyclopedia for Google Cardboard built using Unity3D for education and teaching purpose <br>• Gathered data from NASA, Wikipedia and Nat Geo documentaries to recreate scaled model of Solar System in virtual space<br>• Designed 3D environment of all planets of the Solar System and included a feature to view surroundings of the planets using Google Cardboard in VR environment<br>• Can be used to teach almost all topics of any subject and can be modified to a full-fledged Encyclopedia<br>• App was built in 24-hour hackathon, Code.fun.do organized by Microsoft, India Development Center at IIT Kanpur',
            DownloadLink: "",
            EmbedVideoLinkID: "58QLQCEOeGo",
            NoOfProjectImages: 10
        },
        ChemicalCarriageway: {
            ID: "ChemicalCarriageway",
            Name: "Chemical Carriageway",
            SmallDescription: "Published Android Game, C#, Unity3D",
            LargeDescription: 'Chemical Carriageway is an infinitely running 2D game of Car controlled with Touch and Tilt function where player ignores collisions with traffic, drives on a straight highway to reach a Base as the speed of car and Level increase. <br><br>• Infinitely running 2D Android game, developed using Unity3D game platform, coded from scratch in C# using MonoDevelop<br>• Perks/Add-ons: Defense, Magnet, Multiplier, Speed-Add, Life-Add and four different Car models to hold the interest of players<br>• Used concepts of Laws of Motion, Vectors, Calculus, AI Cars, aesthetic and non-aesthetic designing, file handling, OOP, GUI, sound editing<br>• Used Audacity for sound editing and Microsoft PowerPoint for graphic designing and uploaded the application on Google Play Store',
            DownloadLink: "https://play.google.com/store/apps/details?id=com.Blinds_FaithCC.ChemicalCarriageway",
            EmbedVideoLinkID: "LvCkvSatLFs",
            NoOfProjectImages: 7
        },
        RiTE: {
            ID: "RiTE",
            Name: "RiTE",
            SmallDescription: "PC game, Js, Unity 3D",
            LargeDescription: 'PC stanalone Window platform- Game<br>RiTE-Race it Till the End is a 3D Game built on unity3D platform for windows standalone platform. A 2 month project under Programming Club, IIT Kanpur <br><br>• Programmed and designed 3D racing, shooting and survival indie game for Windows platform using JavaScript<br>• Gameplay: Complete Lap race, Death match, Timed race & Survival game<br>• Applied concepts of Laws of Motion, Vectors and Calculus, AI Cars, Aesthetic and non-Aesthetic Designing, Physics Raycast and many more<br>• Artificial Intelligence for opponent cars is based on original logic of automated car, used in Google driverless cars',
            DownloadLink: "",
            EmbedVideoLinkID: "",
            NoOfProjectImages: 6
        },
    }
};
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
function SetPorfolioElements(){
    var element = document.getElementById("portfolio-element");
    var parent = element.parentElement;
    parent.removeChild(element);//remove template element to start clean

    for (let projectNo = 0; projectNo < RankedProjects.length; projectNo++){
        // console.log(RankedProjects[projectNo].ID);
        element = element.cloneNode(true);
        element.firstElementChild.id = RankedProjects[projectNo].ID;//change id of first child which is responsible for click
        element.lastElementChild.firstElementChild.innerHTML= RankedProjects[projectNo].Name;
        element.lastElementChild.lastElementChild.innerHTML=RankedProjects[projectNo].SmallDescription;
        element.getElementsByTagName("img")[0].setAttribute("src","img/portfolio/"+RankedProjects[projectNo].ID+"/1.jpg");
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

    var imgPath= "img/portfolio/"+ProjectDetail.ID+"/";
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
