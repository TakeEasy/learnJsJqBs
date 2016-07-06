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
    return true;
}
function countBodyChild() {
    var body_element = document.getElementsByTagName("h1")[0];
    alert(body_element.childNodes.length);
    for(var i=0;i<body_element.childNodes.length;i++){
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

function insertAfter(newElement,targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement){
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}

function preparePlaceholder() {
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src","images/5.jpg");
    placeholder.setAttribute("alt","my image gallery");
    var description = document.createElement("p");
    description.setAttribute("id","description");
    var desctext = document.createTextNode("Choose an image");
    description.appendChild(desctext);
    var gallery = document.getElementById("imagegallery");
    insertAfter(placeholder,gallery);
    insertAfter(description,placeholder);
}
addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);
// window.onload = countBodyChild();
//window.onload = countBodyChild();