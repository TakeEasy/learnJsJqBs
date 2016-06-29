/**
 * Created by YEAR on 2016/6/28.
 */
function showPic(whichpic) {
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
}
function countBodyChild() {
    var body_element = document.getElementsByTagName("body")[0];
    alert(body_element.childNodes.length);
    for(i=1;i<body_element.childNodes.length;i++){
        alert(body_element.childNodes[i].getAttribute("id"))
    }
    
}
window.onload = countBodyChild();