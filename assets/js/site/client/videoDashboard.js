function createBtnComeBack() {
	const elementComeBack = `
		<div id="comeBack">
			<svg id="iconComeBack" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.0" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
			</svg>
		</div>
	`;

	$('#main').append(elementComeBack);
};

createBtnComeBack();

function redirectComeBack() {
	$('#comeBack').click(function() {
		window.location.href = 'http://localhost/libaryASP/client';
	});
};

redirectComeBack();

function addVideoPlayer() {
	$('.itemDashboard').on('click', function() {
		let itemVideo = $(this).attr('id');
		let videoYt = `
			<iframe width="560" height="315" src="https://www.youtube.com/embed/${itemVideo}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
		`;

		$('#clientDashboard').html(videoYt)
	});
};

addVideoPlayer();