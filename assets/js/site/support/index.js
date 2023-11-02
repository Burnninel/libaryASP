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


function handleMenu() {
    $('.card').click(function() {
      let element = $(this).attr('id')
  
      window.location.href = `http://localhost/libaryASP/support/videos/${element}`;
    });
};
  
handleMenu()

function generateIconMenu(elementeId, elementIcon) {
	$(elementeId).append(elementIcon);
}

var gestao = `<svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="134" height="119" viewBox="0 0 134 119">
				<image id="Camada_1" data-name="Camada 1" x="4" y="3" width="127" height="113" xlink:href="data:img/png;base64,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"/>
			  </svg>`;

var caixa = `<svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="134" height="119" viewBox="0 0 134 119">
				<image id="Camada_1" data-name="Camada 1" x="4" y="3" width="127" height="113" xlink:href="data:img/png;base64,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"/>
		      </svg>`;

var loja = `<svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="134" height="119" viewBox="0 0 134 119">
				<image id="Camada_1" data-name="Camada 1" x="4" y="3" width="127" height="113" xlink:href="data:img/png;base64,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"/>
			  </svg>`;
		
var extras = `<svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="134" height="119" viewBox="0 0 134 119">
				<image id="Camada_1" data-name="Camada 1" x="4" y="3" width="127" height="113" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAABxCAYAAAD8t3xjAAAGj0lEQVR4nO2dsXLbRhCGl4x7K09gukkrpUgtqmZhvgGoYRU2iZ5AzhPIbthhBD6B5cywFlWnCF2nYZ7AzBMwc5wF50gCJIX7F7jj7TfDsS2ZwOF+3N7u3uLQIo9IslWHiLpEdElEV0TU4U+ILPgzJ6JvRDSbDFoLn66jcfGTbHVBRH0i+o0FP2fMjTAhomwyaC2bvs7GxGfRf2fRL5pqR0MY4T8T0acmb4JGxE+ylTHtjwGbdBRmGridDFqzJk7ervuESbb6SETPKvwa0wfPSbZ6aOLktY78JFuZ0T6o85wBYfyA2zqbW5v4KvxJ1HoD1GL22ayp8McZ8CCpBfGRn2QrE8Z9qeuCzgTjBGbSlyIqPidt/o4wlHPFhH8/SyeFpM3+gwpfiQsOhUURG/kcyz9LX8CZcyOZA5Ac+feCx44F0T4UEZ9HfVfi2JHR5b4U4Y3QcRPQcZ6I6CunQUPCOLrXoPDWrH2ImH74nM8LNt8dDzPjcCc00bfgaOcRYAV/lFgAkjD7fcfvmyzXTejCG8w1mGsx1+R4KJEEmYT4Hxy+a9a774Bt8QJO2c4d2nItcR0S4ruYuDsfihyEcMnZu1rTQqDiJ9nqyiGpM2tqXbsOJoPWnB3YSkh4/eiR71KG9RnYDl+ZOLQLXuKGFv+y6hcng1blUREKfI1Vp7XKfVuGLyP/bM19AVWvFV75hBa/6nz/Am6Hz3yr2DbvzX7VBgYf07+CqiEffHW09gLOEmIS35tQ1hfxY6Ky+Jw6h6Hi1wzH+1WBzvvoVb2bit9z6ZAQ0X5SFEVRFEVRFEVRJGiNeimkSGA8HTqtzI16qUshCLw9Oaj+YZbj6dApVge2Z/4G+FSNayXwA7jWH1WZjHzqaOaQ4MlBtedG07sRo+JHjIofMSp+pBiHWMWPGJj4HKopAYEc+boDhzCjXgqt4FWzHxYqvoKhHVnlrGKh4sfJuoIYafbV2w+H9eKSevthAX1MWx2+iGn79PiQUi9th6dGd3mr2gWDOnwB8g7U5PWA1zk/LDTDp2BoA7dE0VAvHHTODxCU2YcneRR54HO+xvmR0nZ9iMBGq3mCYb2Y58tWbMoRkE8OjafDLfHV9EdILj7K9KvZlwNlVTdaq9kPB9TA2lj5XHyt5omQXPx/QZcu8kYIZQ1q1+3NPsea5AkHsb13Ufl9+LbgygaU+JspHj3yVXw5UA7fnvgwh2/US9Xj95uNt7/ee9dkfEa9FNXiq4rTyJ2noaLrNio2lZJpyLS5nc63N15eNtn5yDUGJKiNnRwR0cWe81Gdry9QxoMa+Vsaa6gXBqiRvzXt2OKjXnKkiR48qKpdHfkBggqh/7P/YYuPcmx0zscTzpyvsT4c2TkfHNLouj4I8N6/B0c+qqJH07w4kJtRl3r7BIz1VXwcKCu6Z9l3xUfl+DXcw4Fax9+z6rvio4o6dM7HgerLvUfxd8WHPbeH3jAwRjhqgj6iZSNl9klHPwRkH+5puyV+XszvYcNjBfmgxtGRT0DTr06fOyhnrzCKKxJfl3b9AfYypaIfFr1FG7VBk3FYvpi3ho+nwyfUMWOAs3oJMMFTqGmR+MiKmr75jHqpiTGfeNl4BvYtgocjoy5PlX2Byp1CTQtfPzbqpd+FS7qW3KAX9kIXnpRLicOjusOfa3aMRRfCxtNhoc5FI59YGMk5+4KPvzkHF5DmN8XSMlX5TTHfzU37BsfleZSTi3rJf4qLXELpoCoT/6Uhh+3COm+f/7zPf2lVGM+tdOWyYE5bAHMWnYJEy7udn/ns3JZWaJWJ/2R3uofs5hD6Hre1aUpHfukrR2uY95UaKJvv6Uglj4Zn4XNQw0PiT2LvuTPgoIYH3zQ96qXPmqkLFhM+vz/U+GMFnHex92DA3B5r+kHxeSVIb4Dw+OOUpNlBs58z6qWPRDSIshvDIxtPh0dHveGHU/7TX//8+fWXnz60dP73nk/j6fDXUxt50sjPGfVSk0x51PjfO0yW8/a1q6evemKHD248yCzorjovjBbvqyybv2rk2/Ay5L36Ao2RsWNXeQ2jsvg5fBMMuPhAK3ZlWXDiJkPURDiLb8N7xyTsGGoBJ4Y5L85M0FvXQMW34bXtrlWwoJHCacysQpeZZA2DmPhFsGXo8M1waf09RvKahLyaaV73plS1il8G+w32xy6WCNVi5Bm2BT8Gt7BK1ryoYfRC/FPZeVZ9tyzq7RErcupNdCgtakamvbVJXna2+b3vpWYbiOh/2c6dmaxAMS4AAAAASUVORK5CYII="/>
			  </svg>`;
			  
generateIconMenu('.gestao', gestao);
generateIconMenu('.caixa', caixa);
generateIconMenu('.loja', loja);
generateIconMenu('.extras', extras);


// function generatorMenu(data) {
// 	for (let item in data) {
// 		var itemMenu = `
// 		  <div class="card" id="${item}">
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
// 	const visualMedia = `
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

// function attachMenuHandlers(data) {
// 	$('#gestao, #caixa, #loja, #extras').click(function () {
// 		let elementID = $(this).attr('id');
// 		let dynamicRoute = `http://localhost/libaryASP/support/${elementID}`;

// 		let state = { elementID: elementID, route: dynamicRoute };

// 		videoDashboardGenerator(elementID);
// 		listItemGenerator(data, elementID);
// 		$('#cardGroup').hide();

// 		window.history.pushState(state, elementID, dynamicRoute);
// 	});

// 	$(window).on('popstate', function (event) {
// 		if (!event.state || !event.state.route || event.state.route === "http://localhost/libaryASP/client") {
// 			location.reload();
// 		};
// 	});
// };

// function fetchAndInitialize() {
// 	$.ajax({
// 		url: 'http://localhost/libaryASP/apiSupport',
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