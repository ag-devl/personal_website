$(document).ready(function () {

    $("#home").click(function () {
        $("#home_content").empty();
        $("#home_content").append("<div id='my_name'> <div class='first_name'> AGASTYA</div> <div class=\"last_name\"> MAHI</div></div><div id=\"philosophy\">\"Unless you try to do something beyond what you have already mastered, you will never grow.\"<div id=\"rwe\">- Ralph Waldo Emerson</div></div>");

    });


    $("#aboutme").click(function () {

        $("#home_content").empty();
        $("#home_content").html("<div id ='aboutMeDiv'><p>Hi! I am Agastya, a current Computer Science  student<br>at Missouri S&T with interest in mobile platfom <br>and big data.I like to be engaged in constructive <br> conversations and keep myself updated with latest <br>technology.Other than my career, I enjoy reading books,<br>  blogs and I actively involve in outdoor activities.</p><img id ='myImage'src='Images/agweb2.jpg'></div>");

    });
    $("#resume").click(function () {
        
        $("#home_content").empty();
        $("#home_content").html("<iframe src=\"Agastya_Mahi_Resume _11-03.pdf\" type=\"application/pdf\" style=\"width:100%;height:100%;\"></iframe>");
        $("#home_content").css({ "background-color": "#3e3d3d", "max-width": "100%", "height": "100%", "padding": "0 0 0 0 " });
    });

   

})
