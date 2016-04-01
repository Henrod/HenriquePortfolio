var works = {
	inventario: "inventario.html",
	racetimer: "racetimer.html",
	cerberus: "cerberus.html"
};

function load(page) {
	for (var project in works) {
		if (project === page) {
			document.getElementById("title").innerHTML = page;
			break;
		}
	}
};
