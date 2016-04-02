var works = {
	intro: "pages/intro.html",
	inventario: "pages/inventario.html",
	racetimer: "pages/racetimer.html",
	cerberus: "pages/cerberus.html",
	error: "pages/noFileStatus.html"
};

function load(page) {
	for (var project in works) {
		if (project === page) {
			var dir = works[project];

			var http = new XMLHttpRequest();
			http.onreadystatechange = function() {
				if (http.readyState == 4 && http.status == 200) {
					document.getElementById("details").src = dir;
				} else {
					document.getElementById("details").src = works["error"];
				}
			}
			http.open('HEAD', dir);
			http.send();

			break;
		}
	}
};
