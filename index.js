function slide() {
	$(".btn").click(() => {
		check();
	});
	$(document).keypress(() => {
		check();
	});
}

let display = "";

function check() {
	if (display == "") {
		$(".tanya").addClass("none");
		$(".john").removeClass("none");
		display = "none";
	} else {
		$(".tanya").removeClass("none");
		$(".john").addClass("none");
		display = "";
	}
}

$(document).ready(() => {
	slide();
});
