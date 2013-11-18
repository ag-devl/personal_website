$(document).ready(function () {

    $("#home").click(function () {
        $("#home_content").empty();
        $("#home_content").load("bng.html #home_content");
        $("#home").css({"border-bottom-color":"#159abf", "border-bottom-style":"groove"});
        $("#aboutme").css({"border-bottom-color":"#none", "border-bottom-style":"none"});
        $("#resume").css({"border-bottom-color":"#none", "border-bottom-style":"none"});
        $("#blog").css({"border-bottom-color":"none", "border-bottom-style":"none"});
        $("#contactme").css({"border-bottom-color":"none", "border-bottom-style":"none"});

    });


    $("#aboutme").click(function () {

        $("#home_content").empty();
        $("#home_content").load("aboutme.html");
        $("#aboutme").css({"border-bottom-color":"#159abf", "border-bottom-style":"groove"});
        $("#home").css({"border-bottom-color":"#none", "border-bottom-style":"none"});
        $("#resume").css({"border-bottom-color":"#none", "border-bottom-style":"none"});
        $("#blog").css({"border-bottom-color":"none", "border-bottom-style":"none"});
        $("#contactme").css({"border-bottom-color":"none", "border-bottom-style":"none"});

    });
    $("#resume").click(function () {

        $("#home_content").empty();
        $("#home_content").html("<iframe src=\"Agastya_Mahi_Resume _11-03.pdf\" type=\"application/pdf\" style=\"width:100%;height:100%;\"></iframe>");
        $("#resume").css({"border-bottom-color":"#159abf", "border-bottom-style":"groove"});
        $("#aboutme").css({"border-bottom-color":"#none", "border-bottom-style":"none"});
        $("#home").css({"border-bottom-color":"#none", "border-bottom-style":"none"});
        $("#blog").css({"border-bottom-color":"none", "border-bottom-style":"none"});
        $("#contactme").css({"border-bottom-color":"none", "border-bottom-style":"none"});

    });

    $("#contactme").click(function () {
        $("#home_content").empty();
        $("#home_content").load("contactme.html");
        $("#contactme").css({"border-bottom-color":"#159abf", "border-bottom-style":"groove"});
        $("#aboutme").css({"border-bottom-color":"#none", "border-bottom-style":"none"});
        $("#resume").css({"border-bottom-color":"#none", "border-bottom-style":"none"});
        $("#blog").css({"border-bottom-color":"none", "border-bottom-style":"none"});
        $("#home").css({"border-bottom-color":"none", "border-bottom-style":"none"});
    });

    $("#blog").click(function () {
        $("#home_content").empty();
        $("#home_content").load("blog.html");
        $("#blog").css({"border-bottom-color":"#159abf", "border-bottom-style":"groove"});
        $("#aboutme").css({"border-bottom-color":"#none", "border-bottom-style":"none"});
        $("#resume").css({"border-bottom-color":"#none", "border-bottom-style":"none"});
        $("#home").css({"border-bottom-color":"none", "border-bottom-style":"none"});
        $("#contactme").css({"border-bottom-color":"none", "border-bottom-style":"none"});
    });

})
