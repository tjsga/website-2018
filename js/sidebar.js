var mb = document.querySelector("#menu-toggle"),
    sb = document.querySelector("nav#menu"),
    tb = document.querySelector("#banner h1"),
    dm = document.querySelector("#dome"),
    wr = document.querySelector("#wrapper");

mb.addEventListener("click", function () {
    toggleSidebar(true)
}, false);
wr.addEventListener("click", function () {
    toggleSidebar(false)
}, false);
tb.addEventListener("click", function () {
    toggleSidebar(false)
}, false);
dm.addEventListener("click", function () {
    toggleSidebar(false)
}, false);
mb.addEventListener("touchleave", function () {
    toggleSidebar(true)
}, false);
wr.addEventListener("touchleave", function () {
    toggleSidebar(false)
}, false);
tb.addEventListener("touchleave", function () {
    toggleSidebar(false)
}, false);
dm.addEventListener("touchleave", function () {
    toggleSidebar(false)
}, false);
sb.style.disabled = true;


function toggleSidebar(toggleOpenAllowed) {
    if ((sb.style.left == "" || sb.style.left == "-30vw") && toggleOpenAllowed) {
        sb.style.disabled = false;
        sb.style.left = "0px";
    } else {
        sb.style.disabled = true;
        sb.style.left = "-30vw";
    }
}