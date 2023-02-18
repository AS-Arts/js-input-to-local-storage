
var formname = "demo-form";

// Read localStorage
$(document).ready(function() {

	if(localStorage.getItem(formname)  != undefined){
		formData = JSON.parse(localStorage.getItem(formname) );

		for (var i = 0; i < formData.length; i++) {
			$('[id='+formData[i].id+']').val(formData[i].value);			
		}
		
		// Only for demo
		$('.output').html(localStorage.getItem(formname));
	}		
});

// Save in localStorage
$(':input').on('input', function() {

	var  formData = [];
	localStorage.removeItem(formname);

	$('form input, form select').not('input[type="hidden"]').each(function(){
		formData.push({ id: this.id, value: this.value});
	});

	localStorage.setItem(formname, JSON.stringify(formData));

	// Only for demo
	$('.output').html(localStorage.getItem(formname));
	
});

// Clean localStorage
$("#clean-form").on('click', function() {
	
	$("#demo-form")[0].reset();
	localStorage.removeItem(formname);
	location.reload(true);

});

		
