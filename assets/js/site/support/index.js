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
	$('#comeBack').click(function () {
		window.location.href = 'http://localhost/libaryASP/';
	});
};

redirectComeBack();


function handleMenu() {
	$('.card').click(function () {
		let element = $(this).attr('id')

		window.location.href = `http://localhost/libaryASP/support/videos/${element}`;
	});
};

handleMenu()

function generateIconMenu(elementeId, elementIcon) {
	$(elementeId).append(elementIcon);
}

var black = `<svg class="icon" id="iconBlack" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="131" height="119" viewBox="0 0 131 119">
				<image id="Camada_1" data-name="Camada 1" x="2" y="4" width="127" height="113" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAABxCAYAAAD8t3xjAAACp0lEQVR4nO2dS5LCMAwFk6k5Rxbc/0yz4CLMKlUBEnBiyZb8ug8Atlpy/IPMkyHLcqv9sIdlewJSHe/7/c+sV79mn3Sd0YVv2fbVtPCu0FO+kvQ91v53S4KfTt+rLn5Lt1j0kI/4d7rEpLV8xB/TPDYt5SP+O01j1Eo+4stpFqsW8hF/niYx85aP+Ou4x67XUg8C4Cmfqq/HNYZUvjBe8ql6O9xiSeUL43GwY5mp3U++KrGKxcMjFhGOdPfILn1l7UfIxyDDfhtCJnNE+aNUfXis5dcObyOLr+2b+aODYV+YSPIVhvtQfaTyhUG+MMgXBvnCID8Xpss95LcnzIwf+QAAAAAAAADjMC/LzWrXKNplBavNlGjtMmsPmzzCIF8Y5AuDfGGQr8uMfGEs5fPL3GRQ+bngJg/YgHxhkC8M8oVBvjDIFwb5wiBfGOQLg3xhkC8M8oVBvjDIFwb5wiBfmB/jf4rgNk8iqPw8mP+VPfKFQb4wyBcG+cIgXxjkC4N8YZAvjId8dvmSsMrnjVaxcXlRZaSXKkZNwGELg2e+MMgXBvnCIF8Y5AvjJZ+1fgK28lnrx8StkBj2tXgqcOQLg3xhkC+Mp3xm/PW4xpDKF+ZVPsu9cXlzS+ULg3xhvC9zrBMWHifnaDJZbnWT57UzJMMzXVZGe/LnBo3Z+3yVhOgheje2ke7wlQQleoKk2tuIJL8ENo4MYbYvzJF8JmTjcOiSyhcG+cJ8ks/Qn5+PDql8Yb7Jp/rz8tVdSeWTAPkoclY67JMAeSh2deaZTwLE55SjsxM+EiAup91c2dtfv4R99hhcLsiagx2SoC/Vo7DFqd62ESSCL6aPXesjXRLBHrd5lud5/l6jSYjPNJ1Qt77McdQ5taQIsWqKcpOnNBgZkiTHcniapn90+kFUwEgVEQAAAABJRU5ErkJggg=="/>
			 </svg>`;

var gestao = `<svg class="icon" id="iconGestao" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="131" height="119" viewBox="0 0 131 119">
				<image id="Camada_1" data-name="Camada 1" x="2" y="4" width="127" height="113" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAABxCAYAAAD8t3xjAAACqklEQVR4nO2d3XWDMAxGIacLdIwu2Ycu2TE6An3iHJJAYrBkS/7uHSCxdSXjv4R5MuTr56/2wxbL9gSkOt6/359mvfow+6TrjC58y7avpoV3hZ7ylaTvsfa/WxLcOn2vuvgt3WLRQz7in+kSk9byEX9M89i0lI/49zSNUSv5iC+nWaxayEf8eZrEzFs+4q/jHrteSz0IgKd8qr4e1xhS+cJ4yafq7XCLJZUvjMfBjmWmdj/5qsQqFotHLCIc6e6RXfrK2o+Qj0GG/TaETOaI8kep+vBYy68d3kYWX9s380cHw74wkeQrDPeh+kjlC4N8YZAvDPKFQX4uTJd7yG9PmBk/8gEAAAAAAADGYV6WxWrXKNplBavNlGjtMmsPmzzCIF8Y5AuDfGGQr8uMfGEs5fPL3GRQ+bngJg/YgHxhkC8M8oVBvjDIFwb5wiBfGOQLg3xhkC8M8oVBvjDIFwb5wiBfmJvxP0VwmycRVH4ezP/KHvnCIF8Y5AuDfGGQLwzyhUG+MMgXxkM+u3xJWOXzRqvYuLyoMtJLFaMm4LCFwTNfGOQLg3xhkC8M8oXxks9aPwFb+az1Y+JWSAz7WtwVOPKFQb4wyBfGUz4z/npcY0jlC/Mon+XeuDy5pfKFQb4w3pc51gkLj5NzNJkst7rJ89gZkuGeLiujPflzg8bsfb5KQvQQvRvbSHf4SoISPUFS7W1Ekl8CG0eGMNsX5kg+E7JxOHRJ5QuDfGFeyWfoz89Lh1S+MO/kU/15eeuupPJJgHwUOSsd9kmAPBS7OvPMJwHic8rR2QkfCRCX026u7O2vX8I+ewwuF2TNwQ5J0JfqUdjiVG/bCBLBF9PHrvWRLolgj9s8y/M8f6/RJMRrmk6oW1/mOOqcWlKEWDVFuclTGowMSZJjOTxN0z+HVEPzO7uBvAAAAABJRU5ErkJggg=="/>
			  </svg>`;

var caixa = `<svg class="icon" id="iconCaixa" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="131" height="119" viewBox="0 0 131 119">
             	<image id="Camada_1" data-name="Camada 1" x="2" y="4" width="127" height="113" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAABxCAYAAAD8t3xjAAACpklEQVR4nO2da3KDMAwGQ6b36SF67h6iJ6K/mCEJJAZLssS3e4DE1krGr4TpZsj3/NP7YbNlexLSHe+/6desV19mn3Seqwtfs+6raeGdYaR8JelbLP0flgT3Qd+rLn7NsFiMkI/4V4bEJFo+4vcJj02kfMR/JjRGUfIR305YrCLkI/44ITHzlo/487jHbtRSDxLgKZ+q78c1hlS+MF7yqXo73GJJ5QvjcbBjmanDT746sYrF7BGLDEe6W1SXvrD0I+VjkGE/hpTJnFH+Vao+Pdbye4e3K4vv7Zv5o4NhX5hM8hWG+1R9pPKFQb4wyBcG+cIgvxamyz3kx5Nmxo98AAAAAAAAgOswzfNstWuU7bKC1WZKtnaZtYdNHmGQLwzyhUG+MMjXZUK+MJby+WVuMaj8WnCTB2xAvjDIFwb5wiBfGOQLg3xhkC8M8oVBvjDIFwb5wiBfGOQLg3xhkC/M3fifIrjNUwgqvw7mf2WPfGGQLwzyhUG+MMgXBvnCIF8Y5AvjIZ9dviIs8nmjVW5cXlSZ6aWKWRPwsoXBM18Y5AuDfGGQLwzyhfGSz1q/AGv5rPVz4lZIDPtaPBQ48oVBvjDIF8ZTPjP+flxjSOUL8yyf5d51eXFL5QuDfGG8L3MsExYeJ8cImSxH3eR57gzJ8MiQldGW/CmgMVufr5IQI0RvxjbTHb6WoGRPkFJ7G5nkt8DGkSHM9oXZk8+E7DrsuqTyhUG+MO/kM/TX561DKl+YT/Kp/rp8dNdS+SRAPZqctQ77JEAdml0deeaTAPk55OjohI8EyMthN2f29pcvYZ89B6cLsudghyQYS/cobHGqt24EieCL6WPX+kiXRLDHbZ7leZ6/1WgS4j2hE+royxx7nVNLihSrpiw3eVqDUSFJaiyHb7fbP05QQ/MSv1SaAAAAAElFTkSuQmCC"/>
			 </svg>`;

var loja = `<svg class="icon" id="iconLoja" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="131" height="119" viewBox="0 0 131 119">
				<image id="Camada_1" data-name="Camada 1" x="2" y="4" width="127" height="113" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAABxCAYAAAD8t3xjAAACqklEQVR4nO2d3XWDMAxGIacbdIAO2ucO2gE6A33iHJJAYrBkS/7uHSCxdSXjv4R5MuTv+6v2wxbL9gSkOt6fP79mvfow+6TrjC58y7avpoV3hZ7ylaTvsfa/WxLcOn2vuvgt3WLRQz7in+kSk9byEX9M89i0lI/49zSNUSv5iC+nWaxayEf8eZrEzFs+4q/jHrteSz0IgKd8qr4e1xhS+cJ4yafq7XCLJZUvjMfBjmWmdj/5qsQqFotHLCIc6e6RXfrK2o+Qj0GG/TaETOaI8kep+vBYy68d3kYWX9s380cHw74wkeQrDPeh+kjlC4N8YZAvDPKFQX4uTJd7yG9PmBk/8gEAAAAAAADGYV6WxWrXKNplBavNlGjtMmsPmzzCIF8Y5AuDfGGQr8uMfGEs5fPL3GRQ+bngJg/YgHxhkC8M8oVBvjDIFwb5wiBfGOQLg3xhkC8M8oVBvjDIFwb5wiBfmJvxP0VwmycRVH4ezP/KHvnCIF8Y5AuDfGGQLwzyhUG+MMgXxkM+u3xJWOXzRqvYuLyoMtJLFaMm4LCFwTNfGOQLg3xhkC8M8oXxks9aPwFb+az1Y+JWSAz7WtwVOPKFQb4wyBfGUz4z/npcY0jlC/Mon+XeuDy5pfKFQb4w3pc51gkLj5NzNJkst7rJ89gZkuGeLiujPflzg8bsfb5KQvQQvRvbSHf4SoISPUFS7W1Ekl8CG0eGMNsX5kg+E7JxOHRJ5QuDfGFeyWfoz89Lh1S+MO/kU/15eeuupPJJgHwUOSsd9kmAPBS7OvPMJwHic8rR2QkfCRCX026u7O2vX8I+ewwuF2TNwQ5J0JfqUdjiVG/bCBLBF9PHrvWRLolgj9s8y/M8f6/RJMRrmk6oW1/mOOqcWlKEWDVFuclTGowMSZJjOTxN0z9s6EPzsnMhzwAAAABJRU5ErkJggg=="/>
			</svg>`;

var extras = `<svg class="icon" id="iconExtras" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="131" height="119" viewBox="0 0 131 119">
				<image id="Camada_1" data-name="Camada 1" x="2" y="4" width="127" height="113" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAABxCAYAAAD8t3xjAAACsElEQVR4nO2d3VXDMAxGEw4bMAADsQkr8MwYDMcAzFCeck7aJq0TS7Ls794BWltXcvzXZp4M+ft6r/2wi2V7ElId77fvX7NevZp90nlGF75m3VfTwjtDS/lK0rdY+t8sCV4afa+6+DXNYtFCPuLvaRKTaPmI3yc8NpHyEf+c0BhFyUd8OWGxipCP+OOExMxbPuLP4x67Vks9SICnfKq+HtcYUvnCeMmn6u1wiyWVL4zHwY5lpjY/+arEKhYXj1hkONLdonfpC0s/Uj4GGfZjSJnMGeWPUvXpsZZfO7yNLL62b+aPDoZ9YTLJVxjuU/WRyhcG+cIgXxjkC4P8vjBd7iE/njQzfuQDAAAAAAAAjMP8+fFjtWuU7bKC1WZKtnaZtYdNHmGQLwzyhUG+MMjXZUa+MJby+WVuZ1D5fcFNHrAB+cIgXxjkC4N8YZAvDPKFQb4wyBcG+cIgXxjkC4N8YZAvDPKFQb4wL8b/FMFtno6g8vvB/K/skS8M8oVBvjDIFwb5wiBfGOQLg3xhPOSzy9cJi3zeaJUblxdVZnqpYtYEHLYweOYLg3xhkC8M8oVBvjBe8lnrd8BaPmv9nLgVEsO+FlcFjnxhkC8M8oXxlM+Mvx7XGFL5wtzKZ7k3LnduqXxhkC+M92WOZcLC4+QYIZPlqJs8t50hGa5psjLakj8HNGbr81USooXozdhmusNXEpTsCdLV3kYm+SWwcWQIs31h9uQzIRuHXZdUvjDIF+aRfIb+/nnokMoX5pl8qr9fnrorqXwSoD+KnJUO+yRAPxS7OvLMJwHyc8jR0QkfCZCXw27O7O0vX8I+ew5OF2TNwQ5J0JbqUdjiVG/dCBLBF9PHrvWRLolgj9s8y/M8f6vRJMRjQifU0Zc59jqnlhQpVk1ZbvKUBqOHJOljOTxN0z8EZ0JIaSI5zwAAAABJRU5ErkJggg=="/>
			  </svg>`

generateIconMenu('#gestaoElementIcon', black);
generateIconMenu('#caixaElementIcon', black);
generateIconMenu('#lojaElementIcon', black);
generateIconMenu('#extrasElementIcon', black);

var iconMapping = {
	'gestao': gestao,
	'caixa': caixa,
	'loja': loja,
	'extras': extras
};

function hoverCard() {
	$('.card').hover(
		function () {
			let idElement = $(this).attr('id');
			let idChildren = idElement + 'ElementIcon';

			$('#' + idChildren).fadeOut(200, function () {
				$('#' + idChildren).html(iconMapping[idElement]).fadeIn(200);
			});
		},
		function () {
			let idElement = $(this).attr('id');
			let idChildren = idElement + 'ElementIcon';

			$('#' + idChildren).fadeOut(200, function () {
				$('#' + idChildren).html(black).fadeIn(200);
			});
		}
	);
}

hoverCard();


// function hoverCard() {
// 	$('#gestao').hover(
// 		function () {
// 			$('#iconBlack').fadeOut(200, function () {
// 				$('.gestaoElementIcon').html(gestao).fadeIn(200);
// 			});
// 		},
// 		function () {
// 			$('#iconGestao').fadeOut(200, function () {
// 				$('.gestaoElementIcon').html(black).fadeIn(200);
// 			});
// 		}
// 	);
// }

// hoverCard();