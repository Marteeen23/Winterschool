$(".option").mouseover(function() {
    $(".option").removeClass("active");
    $(this).addClass("active");

});


function activate2021Archive() {
    document.getElementById("archive-2021").style.display = "block";
    document.getElementById("archive-2020").style.display = "none";
    document.getElementById("archive-2019").style.display = "none";
    document.getElementById("archive-2018").style.display = "none";
};

function activate2020Archive() {
    document.getElementById("archive-2021").style.display = "none";
    document.getElementById("archive-2020").style.display = "block";
    document.getElementById("archive-2019").style.display = "none";
    document.getElementById("archive-2018").style.display = "none";
};

function activate2019Archive() {
    document.getElementById("archive-2021").style.display = "none";
    document.getElementById("archive-2020").style.display = "none";
    document.getElementById("archive-2019").style.display = "block";
    document.getElementById("archive-2018").style.display = "none";
};

function activate2018Archive() {
    document.getElementById("archive-2021").style.display = "none";
    document.getElementById("archive-2020").style.display = "none";
    document.getElementById("archive-2019").style.display = "none";
    document.getElementById("archive-2018").style.display = "block";
};