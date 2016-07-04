/**
 * Created by YEAR on 2016/7/4.
 */
function popUp(winURL) {
    window.open(winURL,"popup","width=320,height=480");
}

function prepareLinks() {
    var links = document.getElementsByTagName("a");
    for(var i=0;i<links.length;i++) {
        if (links[i].getAttribute("class") == "popup") {
            links[i].onclick = function () {
                popUp(this.getAttribute("href"));
                return false;
            }
        }
    }
}

window.onload = function () {
    if (!document.getElementsByTagName) return false;
    prepareLinks();
};