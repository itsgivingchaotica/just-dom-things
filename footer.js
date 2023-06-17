$(document).ready(function () {
    $('#footer-placeholder').load('components/footer.html', function () {
        var year = document.querySelector("#year");
        year.innerText = new Date().getFullYear();
    });
});