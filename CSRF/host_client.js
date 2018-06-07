console.log("hello from the server?");

$(document).ready(function(){

	$("#refresh").click(function () {
       //get all comments from server

       $.get("/refresh", function(data){
       		console.log(data);
           $("#comment_section").empty(); //clear the existing list
           $("#comment_section").append("<li>" + data + "</li>");
           /*data.forEach(function(key){ //iterate over new items
              $("#comment_section").append("<li>" + data + "</li>");
           });*/
       });
    });

});