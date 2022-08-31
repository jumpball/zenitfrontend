// ===================== CHART SHOT % =================== //


// Получение ссылки на элемент canvas в DOM
const $jsChart1 = document.querySelector("#jsChart1");
// Tags - это метки, которые идут по оси X.  
const jsChart1X = ["% 2-х очковых"]
// У нас может быть несколько наборов данных.
const jsChart1Y = {
	labels: "% 2-х очковых",
	data: [55.6, 44.4], // Данные представляют собой массив, который должен иметь такое же количество значений, как и количество тегов.
	borderColor: 'rgba(255, 255, 255, 1)', // Цвет границы
	borderWidth: 2, // Толщина границ
	backgroundColor: [
		'rgb(255, 205, 86)',
		'#ffffff'
	],// Цвет фона
	hoverOffset: 5,
};

if ($jsChart1)
	new Chart($jsChart1, {
		type: 'doughnut', // Тип графики
		data: {
			//labels: jsChart1X,
			datasets: [
				jsChart1Y,

				// Больше данных ...
			]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true
					}
				}],
			},
		}
	});


	// Получение ссылки на элемент canvas в DOM
const $jsChart2 = document.querySelector("#jsChart2");
// Tags - это метки, которые идут по оси X.  
const jsChart2X = ["% 3-х очковых"]
// У нас может быть несколько наборов данных.
const jsChart2Y = {
	labels: "% 3-х очковых",
	data: [37.9, 62.1], // Данные представляют собой массив, который должен иметь такое же количество значений, как и количество тегов.
	borderColor: 'rgba(255, 255, 255, 1)', // Цвет границы
	borderWidth: 2, // Толщина границ
	backgroundColor: [
		'rgb(255, 205, 86)',
		'#ffffff'
	],// Цвет фона
	hoverOffset: 5,
};

if ($jsChart2)
	new Chart($jsChart2, {
		type: 'doughnut', // Тип графики
		data: {
			//labels: jsChart2X,
			datasets: [
				jsChart2Y,

				// Больше данных ...
			]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true
					}
				}],
			},
		}
	});

	
	// Получение ссылки на элемент canvas в DOM
const $jsChart3 = document.querySelector("#jsChart3");
// Tags - это метки, которые идут по оси X.  
const jsChart3X = ["% штрафных"]
// У нас может быть несколько наборов данных.
const jsChart3Y = {
	labels: "% штрафных",
	data: [79.5, 21.5], // Данные представляют собой массив, который должен иметь такое же количество значений, как и количество тегов.
	borderColor: 'rgba(255, 255, 255, 1)', // Цвет границы
	borderWidth: 2, // Толщина границ
	backgroundColor: [
		'rgb(255, 205, 86)',
		'#ffffff'
	],// Цвет фона
	hoverOffset: 5,
};

if ($jsChart3)
	new Chart($jsChart3, {
		type: 'doughnut', // Тип графики
		data: {
			//labels: jsChart3X,
			datasets: [
				jsChart3Y,

				// Больше данных ...
			]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true
					}
				}],
			},
		}
	});












// Получение ссылки на элемент canvas в DOM
const $box = document.querySelector("#box");
// Tags - это метки, которые идут по оси X.  
const boxX = ["4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]
// У нас может быть несколько наборов данных.
const boxY1 = {
	label: "% 2-х очковых",
	data: [55.6, 32.8, 55.6, 0, 35.6, 0, 52.6, 41.8, 20.6, 0, 12.3, 42.8], // Данные представляют собой массив, который должен иметь такое же количество значений, как и количество тегов.
	backgroundColor: '#ccae61', // Цвет фона
	borderColor: 'rgba(255, 255, 255, 1)', // Цвет границы
	borderWidth: 1, // Толщина границ
};
const boxY2 = {
	label: "% 3-х очковых",
	data: [35.6, 42.8, 35.6, 22.8, 45.6, 23.8, 0, 21.8, 50.6, 30.8, 0, 22.8], // Данные представляют собой массив, который должен иметь такое же количество значений, как и количество тегов.
	backgroundColor: '#146eb4', // Цвет фона
	borderColor: 'rgba(255, 255, 255, 1)', // Цвет границы
	borderWidth: 1, // Толщина границ
};
if ($box)
	new Chart($box, {
		type: 'bar', // Тип графики
		data: {
			labels: boxX,
			datasets: [
				boxY1,
				boxY2,



				// Больше данных ...
			]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true
					}
				}],
			},
		}
	});