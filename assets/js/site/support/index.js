function generatorMenu(data) {
	for (let item in data) {
		var itemMenu = `
		  <div class="card" id="${item}">
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
	$('#gestao, #caixa, #loja, #extras').click(function () {
		let elementID = $(this).attr('id');
		let dynamicRoute = `https://libaryasp-production.up.railway.app/support/${elementID}`;

		let state = { elementID: elementID, route: dynamicRoute };

		videoDashboardGenerator(elementID);
		listItemGenerator(data, elementID);
		$('#cardGroup').hide();

		window.history.pushState(state, elementID, dynamicRoute);
	});

	$(window).on('popstate', function (event) {
		if (!event.state || !event.state.route || event.state.route === "https://libaryasp-production.up.railway.app/support") {
			location.reload();
		};
	});
};

function fetchAndInitialize() {
	$.ajax({
		url: 'https://libaryasp-production.up.railway.app/apiSupport',
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