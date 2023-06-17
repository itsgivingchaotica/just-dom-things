//simple loading script for footer from corresponding html file
$(document).ready(function () {
    $('#footer-placeholder').load('components/footer.html', function () {
        //add the current year to footer text
        var year = document.querySelector("#year");
        year.innerText = new Date().getFullYear();
    });
});