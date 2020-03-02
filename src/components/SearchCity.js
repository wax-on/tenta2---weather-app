import React from "react";
import { Icon } from "@iconify/react";
import bxSearchAlt from "@iconify/icons-bx/bx-search-alt";

class SearchCity extends React.Component {
	state = {
		city: ""
	};

	onChange = e => {
		this.setState({
			city: e.target.value
		});
	};

	onSubmit = e => {
		e.preventDefault();

		this.props.onSubmit(this.state.city);

		this.setState({
			city: ""
		});
	};

	render() {
		return (
			<div id="SearchCity" className="mb-5">
				<form onSubmit={this.onSubmit}>
					<div className="input-group">
						<input
							type="text"
							className="form-control form-control-lg"
							id="city"
							onChange={this.onChange}
							value={this.state.city}
						/>

						<div className="input-group-append">
							<button className="btn btn-info btn-lg">
								{"  "}
								<Icon icon={bxSearchAlt} />
								{"  "}
							</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchCity;
