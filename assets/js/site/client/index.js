function generatorMenu(data) {
	
	for(let item in data) {
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
			<div id="menuVisualMedia"></div>
		</div>
	`;
	$('#mainDashboard').append(visualMedia);
};

function listItemGenerator(data, menu) {
	for (let item of data[menu]) {
		let element = `<div class="itemMenu" id="${item.id}">${item.name}</div>`;
		$('#menuVisualMedia').append(element);
		console.log(item.id)
	};
};

function attachMenuHandlers(data) {
	$('#cadastros, #financeiro, #fiscal, #contabilidade').click(function() {
		let elementID = $(this).attr('id');

		window.location.href = `http://localhost/libaryASP/client/${elementID}`;
		
	});
};

function fetchAndInitialize() {
	$.ajax({
		url: 'http://localhost/libaryASP/apiClient',
		type: 'GET',
		dataType: 'json',
		success: function(data) {
			generatorMenu(data)
			attachMenuHandlers(data);
		},
		error: function (error) {
			console.log(error);
		}
	});
}

fetchAndInitialize();