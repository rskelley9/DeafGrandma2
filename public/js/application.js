$(document).ready(function() {

	$('form').on('submit', function(event){
		event.preventDefault();

		var url = '/grandma'
		var data = $(this).serialize()

		console.log(url)
		console.log(data)

		$.post(url, data, function(response){
			console.log(response)

			$('form').hide()

			$('form').after('<p>'+response+'<p>')

		});

// 		Bind a callback to be triggered when your form is submitted
// 	Serialize the data in the form to be submitted
// 	Use jQuery's AJAX API to make a POST request to the server
// When the server responds, update the page accordingly (this is the asynchronous part — you don't know when the server will respond)
// Prevent the form to be submitted from submitting in the default way


	});
 
});

$.ajax({
	url: url,
	data: data,
	method: "POST",
	contentType: "JSON"
}).done(function(respsonse) {
	...
}).fail(function() {
	console.log("gots errorz")
})

$.ajax({
	url: '/path/to/file',
	type: 'default GET (Other values: POST)',
	dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
	data: {param1: 'value1'},
})
.done(function() {
	console.log("success");
})
.fail(function() {
	console.log("error");
})
.always(function() {
	console.log("complete");
});


 // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()