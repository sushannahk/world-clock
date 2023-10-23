function updateTime() {
	// Paris
	parisElement = document.querySelector("#paris");
	parisDateElement = parisElement.querySelector(".date");
	parisTimeElement = parisElement.querySelector(".time");
	parisTime = moment().tz("Europe/Paris");

	parisDateElement.innerHTML = moment().format("MMMM Do YYYY");
	parisTimeElement.innerHTML = `${parisTime.format(
		"h:mm:ss"
	)} ${parisTime.format("[<small>]A[</small>]")}  `;

	// London
	londonElement = document.querySelector("#london");
	londonDateElement = londonElement.querySelector(".date");
	londonTimeElement = londonElement.querySelector(".time");
	londonTime = moment().tz("Europe/London");

	londonDateElement.innerHTML = moment().format("MMMM Do YYYY");
	londonTimeElement.innerHTML = `${londonTime.format(
		"h:mm:ss"
	)} ${londonTime.format("[<small>]A[</small>]")}  `;
}

updateTime();
setInterval(updateTime, 1000);
