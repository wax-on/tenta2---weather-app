import React from "react";
import Description from "./Description";
import { Icon } from "@iconify/react";
import temperatureCelsius from "@iconify/icons-mdi/temperature-celsius";
import humidityIcon from "@iconify/icons-wi/humidity";

const WeatherReport = props => {
	return (
		<div id="WeatherReport">
			<div className="card bg-light text-dark">
				<div className="card-body text-center">
					<h5 className="card-title">
						Tempraturn i {props.report.name} är{" "}
						{props.report.main.temp}{" "}
						<Icon icon={temperatureCelsius} />
						<br />
						Det känns som : {props.report.main.feels_like}
						<Icon icon={temperatureCelsius} />
						<br />
						Luftfuktigheten är: {props.report.main.humidity}{" "}
						<Icon icon={humidityIcon} />.
					</h5>
					<h6>Vädret just nu i {props.report.name} är:</h6>
					<h6 className="list-unstyled mb-0">
						{props.report.weather.map(weather => (
							<Description weather={weather} key={weather.id} />
						))}
					</h6>
				</div>
			</div>
		</div>
	);
};

export default WeatherReport;
