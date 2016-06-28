/**
 * Created by YEAR on 2016/6/28.
 */
function showPic(whichpic) {
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
}