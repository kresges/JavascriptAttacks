console.log("hello from the server?")

$(document).ready(function(){

    $("#first").click(function () {
        (new Image()).src = "http://localhost:8000/delete?value=1";
        /*$.get("http://localhost:8000/delete?value=1", function () {
            console.log("First Comment Deleted.");
        });*/
    });

    $("#second").click(function () {
        (new Image()).src = "http://localhost:8000/delete?value=2";
        /*$.get("http://localhost:8000/delete?value=2", function () {
            console.log("Second Comment Deleted.");
        });*/
    });

    $("#third").click(function () {
        (new Image()).src = "http://localhost:8000/delete?value=3";
        /*$.get("http://localhost:8000/delete?value=3", function () {
            console.log("Third Comment Deleted.");
        });*/
    });
});