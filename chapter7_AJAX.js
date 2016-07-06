/**
 * Created by YEAR on 2016/7/6.
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

function getHttPObject() {
    if(typeof XMLHttpRequest == "undefined")
        XMLHttpRequest = function () {
            try { return new ActiveXObject("Msxml2.XMLHTTP.6.0");}
             catch (e) {}
            try { return new ActiveXObject("Msxml2.XMLHTTP.3.0");}
             catch (e) {}
            try { return new ActiveXObject("Msxml2.XMLHTTP");}
             catch (e) {}
            return false;
        }
    return new XMLHttpRequest();
}

function getNewContent() {
    var request = getHttPObject();
    if (request) {
        request.open("GET","example.txt", true);
        request.onreadystatechange = function () {
            if (request.readyState == 4) {
                var para = document.createElement("p");
                var txt = document.createTextNode(request.responseText);
                para.appendChild(txt);
                document.getElementById('new').appendChild(para);
            }
        };
        request.send(null);
    } else {
        alert('Sorry your browser doesn\'t support XMLHTTPRequest');
    }
}

addLoadEvent(getNewContent);