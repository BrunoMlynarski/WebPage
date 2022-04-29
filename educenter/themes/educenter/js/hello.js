$(document).ready(function() {
    $.ajax({
        url: "http://localhost:8081/timetable"
    }).then(function(data) {
        for (var i in data){
          // data[i].something, etc
         }
       $('.greeting-id').append(data.fact);
       $('.greeting-content').append(data.length);
    });
});

$(function(){
	   $("#dupa").submit(function(e){
           $.ajax({
               url: 'http://localhost:8081/timetable',
               dataType: 'json',
               type: 'post',
               contentType: 'application/json',
               data: JSON.stringify( { "number": $('#fname').val(), "time": $('#sname').val() } ),
               processData: false,
               success: function( data, textStatus, jQxhr ){
                   $('#response pre').html( JSON.stringify( data ) );
               },
               error: function( jqXhr, textStatus, errorThrown ){
                   console.log( errorThrown );
               }
           });
           return false;
	   })
	})