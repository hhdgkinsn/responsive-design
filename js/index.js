$(document).ready(function() {

    let dimensions = (element) => {
        return console.log("Height:" + element.innerHeight() + ", Width:" + element.innerWidth());
    }

    dimensions($(".navbar"));

    const toggleBtn = $(".toggle-button");
    const navbarLinks = $(".navbar-links");

    toggleBtn.click(() => {
        navbarLinks.toggle("fast");

    })

});