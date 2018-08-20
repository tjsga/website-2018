var submitting = false

function validateEmail(email) {
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@fcps\.edu/;
	return re.test(email);
}

$('#submitButton').click((e) => {
	var firstName = $('#fname').val()
	var lastName = $('#lname').val()
	var email = $('#email').val()
	if (email !== '' && validateEmail(email) && firstName !== '' && lastName !== '' && !submitting) {
		$('#loader').removeClass('invis')
		submitting = true
		$.post('/judgeSignup', { 'data': JSON.stringify({ 
			firstName: firstName, lastName: lastName, email: email, spiritVid: $('#spiritVid').is(":checked"), pepRally1: $('#pepRally1').is(":checked"), pepRally2: $('#pepRally2').is(":checked"), spiritBanner: $('#spiritBanner').is(":checked"), cannedFood: $('#cannedFood').is(":checked"), pepRally3: $('#pepRally3').is(":checked"), pepRally4: $('#pepRally4').is(":checked"), tshirtJ: $('#tshirtJ').is(":checked"), pepRally5: $('#pepRally5').is(":checked"), pepRally6: $('#pepRally6').is(":checked"), mexJ: $('#mexJ').is(":checked"), floatJ: $('#floatJ').is(":checked") }) }, function(response) {
			submitting = false
			$('#loader').addClass('invis')
			$('.formRow').addClass('invis')
			$('#submitButton').addClass('invis')
			$('#success').removeClass('invis')
		})
	} else {
		$('#submitButton').addClass('error')
		setTimeout(function() {
			$('#submitButton').removeClass('error')
		},1000)
	}
})