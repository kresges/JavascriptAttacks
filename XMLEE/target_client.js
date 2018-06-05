console.log("hello from the server?")

$(document).ready(function(){

    $("#submit").click(function(){
        var input = $("#input").val();
        // $.parseXML(input);
        // console.log(input);
        // $.ajax({
        //     type: "POST",
        //     url: "/parse",
        //     data: input,
        //     dataType: 'text/xml'
        // });

        $.post("/parse",
            {
              input: input
            },
            function(data){
                console.log("Data: " + data);
                $('#output').text(data);
            });
    });
});