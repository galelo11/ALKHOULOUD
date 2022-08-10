function moreproducts() {
    var g = document.getElementsByClassName("hidden");

    if (g[0].style.display == "block") {
        g[0].style.display = "none"
    } else {
        g[0].style.display = "block";
    }
}


function mobilemenu() {

    var g1 = document.getElementsByClassName("mobile-menu");

    if (g1[0].style.display == "block") {
        g1[0].style.display = "none"

    } else {
        g1[0].style.display = "block"

    }
}


function mobilemore() {

    var g1 = document.getElementsByClassName("mobile-hidden");

    if (g1[0].style.display == "block") {
        g1[0].style.display = "none"
        g1[1].style.display = "none"

    } else {
        g1[0].style.display = "block"
        g1[1].style.display = "block"

    }
}