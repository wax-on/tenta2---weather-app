import React from "react";
import SearchCity from "./components/SearchCity";
import axios from "axios";
import WeatherReport from "./components/WeatherReport";
import { Icon, InlineIcon } from "@iconify/react";
import earthIcon from "@iconify/icons-flat-ui/earth";

class App extends React.Component {
	state = {
		errMsg: false,
		report: null
	};

	onSubmit = city => {
		axios
			.get(
				`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a9f6719e37f20890ebff5d91724dec1f`
			)
			.then(response => {
				this.setState({
					errMsg: false,
					report: response.data
				});
			})
			.catch(err => {
				this.setState({
					errMsg: `"${city}" Hittas tyvärr inte. Testa med Te.x Stockholm, New York, London eller Malmö`,
					report: null
				});
			});
	};

	render() {
		return (
			<div id="app">
				<div className="container my-5">
					<h1 className="text-center mb-5">
						<span role="img" aria-label="Weather?"></span>
						Weather <Icon icon={earthIcon} /> App
					</h1>

					<SearchCity onSubmit={this.onSubmit} />

					{this.state.errMsg ? (
						<div className="alert alert-warning">
							{this.state.errMsg}
						</div>
					) : (
						""
					)}
					{this.state.report ? (
						<WeatherReport report={this.state.report} />
					) : (
						""
					)}
				</div>
			</div>
		);
	}
}

export default App;
