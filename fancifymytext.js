var textarea = document.getElementById("textarea");
function makeBig() {
    textarea.style.fontSize = "24pt";
}
document.getElementsByName("fancify")[0].addEventListener("change", function () {
    textarea.style.fontWeight = "bold";
    textarea.style.color = "blue";
    textarea.style.textDecoration = "underline"
    alert("styles are here!!");
})
document.getElementsByName("fancify")[1].addEventListener("change", function () {
    textarea.style.fontWeight = "normal";
    textarea.style.color = "black";
    textarea.style.textDecoration = "none"
    alert("styles are gone!!");
})
function makeMoo() {
    textarea.style.textTransform = "uppercase"
    let bit1 = textarea.value.split(".");
    let bit2 = bit1.join("-Moo");
    textarea.value = bit2;
}