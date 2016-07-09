/**
 * Created by YEAR on 16/7/8.
 */
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

function addClass(element,value) {
    if (!element.className){
        element.className = value;
    } else {
        newClassName = element.className;
        newClassName += " ";
        newClassName += value;
        element.className = newClassName;
    }
}

function getNextElement(node) {
    if(node.nodeType ==1){
        return node;
    }
    if(node.nextSibling){
        return getNextElement(node.nextSibling);
    }
    return null;
}

function styleHeaderSiblings() {
    if (!document.getElementsByTagName) return false;
    var header = document.getElementsByTagName("h1");
    var elem;
    for (var i = 0;i<header.length;i++){
        elem = getNextElement(header[i].nextSibling);
        // elem.style.fontWeight = "bold";
        // elem.style.fontSize = "1.2em";
        // elem.setAttribute("class","intro");
        addClass(elem,"intro");
    }
}
 function stripeTables() {
     if(!document.getElementsByTagName) return false;
     var tables = document.getElementsByTagName("table");
     var odd, rows;
     for (var i=0;i<tables.length;i++) {
         odd = false;
         rows = tables[i].getElementsByTagName("tr");
         for (var j=0;j<rows.length;j++) {
             if (odd == true) {
                 // rows[j].style.backgroundColor = "#ffc";
                 addClass(rows[j],"odd");
                 odd = false;
             } else {
                 odd = true;
             }
         }
     }
 }

function highlightRows() {
    if(!document.getElementsByTagName) return false;
    var rows = document.getElementsByTagName("tr");
    for(var i = 0;i<rows.length;i++) {
        rows[i].onmouseover = function () {
            this.style.fontWeight = "bold";
        }
        rows[i].onmouseout = function () {
            this.style.fontWeight = "normal";
        }
    }
}
addLoadEvent(styleHeaderSiblings);
addLoadEvent(stripeTables);
addLoadEvent(highlightRows);