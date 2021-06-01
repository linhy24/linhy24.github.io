var navOpen = false

function nav() {
    if (navOpen) {
        closeNav()
    } else {
        openNav()
    }
}

function openNav() {
    document.getElementById("mySidebar").style.width = `200px`;
    document.getElementById("main").style.marginLeft = `200px`;
    document.getElementsByClassName("openbtn")[0].style.background = "#f1f1f1";
    navOpen = true
}
    
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementsByClassName("openbtn")[0].style.background = "white";
    navOpen = false
} 

(function(document) {
    var metas = document.getElementsByTagName('meta'),
    changeViewportContent = function(content) {
        for (var i = 0; i < metas.length; i++) {
            if (metas[i].name == "viewport") {
                metas[i].content = content;
            }
        }
    },
    initialize = function() {
        changeViewportContent("width=device-width, minimum-scale=1.0, maximum-scale=1.0");
    },
    gestureStart = function() {
        changeViewportContent("width=device-width, minimum-scale=0.25, maximum-scale=1.6");
    },
    gestureEnd = function() {
        initialize();
    };


    if (navigator.userAgent.match(/iPhone/i)) {
        initialize();

        document.addEventListener("touchstart", gestureStart, false);
        document.addEventListener("touchend", gestureEnd, false);
    }
})(document);

