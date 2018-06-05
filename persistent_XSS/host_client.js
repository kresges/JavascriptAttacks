console.log("hello from the server?")

$(document).ready(function(){

	$.get('/getCookie',function (data) {
       document.cookie = data;
    });

	$("#submit").click(function(){
		//alert("Submission!");
			var firstname = $("#firstname").val();
			var lastname  = $("#lastname").val();
			var comment = $("#comment").val();
		$.post("/comment", 
		{
			firstname: firstname,
			lastname: lastname,
			comment: comment
		},
		function(data,status){
			console.log("Data: " + data + "\nStatus: " + status);
		});
	});

	$("#refresh").click(function () {
       //get all comments from server

       $.get("/allComments", function(data,status){
           $("#comment_section").empty(); //clear the existing list
           Object.keys(data).forEach(function(key){ //iterate over new items
              $("#comment_section").append(
                  "<li>" +
                  "<b id='name'>" + data[key].firstname + " " + data[key].lastname +
                  "</b> : <p id='user_comment'>" + data[key].comment +
                  "</p></li>");
           });
       });
    });

    $("#delete").click(function () {
       $.get("/deleteComments", function () {
          console.log("Comments Deleted");
       });
    });
});