/**
 * Created by YEAR on 2016/6/28.
 */
function showPic(whichpic) {
    if (!document.getElementById("placeholder")) return false;
    var source = whichpic.getAttribute("href");
    var text = whichpic.getAttribute("title");
    var placeholder = document.getElementById("placeholder");
    var description = document.getElementById("description");
    placeholder.setAttribute("src",source);
    // description.childNodes[0].nodeValue = text;
    description.firstChild.nodeValue = text;
}
function countBodyChild() {
    var body_element = document.getElementsByTagName("body")[0];
    alert(body_element.childNodes.length);
    for(i=1;i<body_element.childNodes.length;i++){
        alert(body_element.childNodes[i].getAttribute("id"))
    }
    
}
function prepareGallery() {
    if (!document.getElementById) return false;
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for(var i = 0;i<links.length;i++) {
        links[i].onclick = function () {
            return !showPic(this);
        }
        // links[i].onkeypress = links[i].onclick;
    }
}

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}

addLoadEvent(prepareGallery);
// window.onload = countBodyChild();