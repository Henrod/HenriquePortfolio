var works = {
	inventario: "pages/inventario.html",
	racetimer: "pages/racetimer.html",
	cerberus: "pages/cerberus.html"
};

function load(page) {
	for (var project in works) {
		if (project === page) {
			document.getElementById("details").src = works[project];
			break;
		}
	}
};
