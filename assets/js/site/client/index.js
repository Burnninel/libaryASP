function createBtnComeBack() {
	const elementComeBack = `
		<div id="comeBack">
			<svg id="iconComeBack" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.0" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
			</svg>
		</div>
	`;

	$('main').append(elementComeBack)
};

createBtnComeBack();

function generatorMenu(data) {

	for (let item in data) {
		var itemMenu = `
		  <div class="card col-lg-2 col-md-3 col-sm-6" id="${item}">
			<div class="iconCard">
			  ${getIcon(item)}
			</div>
			<h3 class="titleCard">${item}</h3>
		  </div>
		`;

		$('#cardGroup').append(itemMenu);
	};

};

function videoDashboardGenerator(titleDashboard) {
	const visualMedia = `
		<div id="visualMedia">
			<div id="headearClientDashboard">${titleDashboard}</div>
			<div id="clientDashboard"></div>
		</div>
	`;

	$('#main').append(visualMedia);
};

function listItemGenerator(data, menu) {
	for (let item of data[menu]) {
		let element = `<div class="itemDashboard" id="${item.id}">${item.name}</div>`;
		$('#clientDashboard').append(element);
	};
};

function attachMenuHandlers(data) {
	$('#cadastros, #financeiro, #fiscal, #contabilidade').click(function () {
		let elementID = $(this).attr('id');
		let dynamicRoute = `http://localhost/libaryASP/client/${elementID}`;

		let state = { elementID: elementID, route: dynamicRoute };

		videoDashboardGenerator(elementID);
		listItemGenerator(data, elementID);
		$('#containerCardGroup').hide();

		window.history.pushState(state, elementID, dynamicRoute);
	});

	$(window).on('popstate', function (event) {
		if (!event.state || !event.state.route || event.state.route === "http://localhost/libaryASP/client") {
			location.reload();
		};
	});
};

function fetchAndInitialize() {
	$.ajax({
		url: 'http://localhost/libaryASP/apiClient',
		type: 'GET',
		dataType: 'json',
		success: function (data) {
			generatorMenu(data);
			attachMenuHandlers(data);
		},
		error: function (error) {
			console.log(error);
		}
	});
};

fetchAndInitialize();