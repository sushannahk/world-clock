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

function updateCity(event) {
	let cityTimeZone = event.target.value;
	if (cityTimeZone === "current-location") {
		cityTimeZone = moment.tz.guess();
	}
	let cityTime = moment().tz(cityTimeZone);
	let cityName = cityTimeZone.replace("_", " ").split("/")[1];
	let citiesElement = document.querySelector("#cities");
	citiesElement.innerHTML = `
            <div class="city">
                <div>
                    <h2>${cityName}</h2>
                    <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
                </div>

                <div class="time">${cityTime.format("h:mm:ss")} 
                                <small>
								 ${cityTime.format("A")} 
                                 </small>
                </div>
            </div>
            <a href="/">Back to home page</a>
    `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
