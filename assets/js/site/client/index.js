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
		window.location.href = 'http://localhost/libaryASP/';
	});
};

redirectComeBack();

function generateIconMenu(elementeId, elementIcon) {
	$(elementeId).append(elementIcon);
}

var cadastros     = `<svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>`;
var financeiro    = `<svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" /></svg>`;
var fiscal        = `<svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>`;
var contabilidade = `<svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" /></svg>`;

generateIconMenu('.cadastros', cadastros);
generateIconMenu('.financeiro', financeiro);
generateIconMenu('.fiscal', fiscal);
generateIconMenu('.contabilidade', contabilidade);


// function createBtnComeBack() {
// 	const elementComeBack = `
// 		<div id="comeBack">
// 			<svg id="iconComeBack" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.0" stroke="currentColor">
// 				<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
// 			</svg>
// 		</div>
// 	`;

// 	$('main').append(elementComeBack);
// };

// createBtnComeBack();

// function redirectComeBack() {
// 	$('#comeBack').click(function() {
// 		window.location.href = 'http://localhost/libaryASP/';
// 	});
// };

// redirectComeBack();

// function generatorMenu(data) {

// 	for (let item in data) {
// 		let itemMenu = `
// 		  <div class="card col-lg-2 col-md-3 col-sm-6" id="${item}">
// 			<div class="iconCard">
// 			  ${getIcon(item)}
// 			</div>
// 			<h3 class="titleCard">${item}</h3>
// 		  </div>
// 		`;

// 		$('#cardGroup').append(itemMenu);
// 	};

// };

// function videoDashboardGenerator(titleDashboard) {
// 	let visualMedia = `
// 		<div id="visualMedia">
// 			<div id="headearClientDashboard">${titleDashboard}</div>
// 			<div id="clientDashboard"></div>
// 		</div>
// 	`;

// 	$('#main').append(visualMedia);
// };

// function listItemGenerator(data, menu) {
// 	for (let item of data[menu]) {
// 		let element = `<div class="itemDashboard" id="${item.id}">${item.name}</div>`;
// 		$('#clientDashboard').append(element);
// 	};
// };

// function addVideoPlayer() {
// 	$('.itemDashboard').click(function() {
// 		let itemVideo = $(this).attr('id');

// 		console.log(itemVideo)

// 		videoPlayer(itemVideo, "#clientDashboard");

// 	});
// };

// function attachMenuHandlers(data) {
// 	$('#cadastros, #financeiro, #fiscal, #contabilidade').click(function () {
// 		let elementID = $(this).attr('id');

// 		videoDashboardGenerator(elementID);
// 		listItemGenerator(data, elementID);
// 		$('#containerCardGroup').hide();

// 		addVideoPlayer();
// 	});
// };

// function fetchAndInitialize() {
// 	$.ajax({
// 		url: 'http://localhost/libaryASP/apiClient',
// 		type: 'GET',
// 		dataType: 'json',
// 		success: function (data) {
// 			generatorMenu(data);
// 			attachMenuHandlers(data);
// 		},
// 		error: function (error) {
// 			console.log(error);
// 		}
// 	});
// };

// fetchAndInitialize();