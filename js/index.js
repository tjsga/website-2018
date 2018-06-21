$('#expand').click(function() {
	if($('.mobile-navigation-links')[0].style.display === 'none') {
		$('.mobile-navigation-links')[0].style.display = 'flex'
		$('.fa-bars').toggleClass('fa-bars fa-close')
	} else {
		$('.mobile-navigation-links')[0].style.display = 'none'
		$('.fa-close').toggleClass('fa-close fa-bars')
	}
})

$('#expand-abu').click(function() {
	if($('#abu')[0].style.display === 'none')
		$('#abu')[0].style.display = 'flex'
	else
		$('#abu')[0].style.display = 'none'
})

$('#expand-wwd').click(function() {
	if($('#wwd')[0].style.display === 'none')
		$('#wwd')[0].style.display = 'flex'
	else
		$('#wwd')[0].style.display = 'none'
})