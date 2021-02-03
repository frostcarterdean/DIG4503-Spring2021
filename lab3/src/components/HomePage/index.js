import React from 'react';

class HomePage extends React.Component {
  constructor(props) {
		super(props);
	}

	render () {
		return (
			<p>{this.props.firstName}</p>
		);
	}
}

export default HomePage;
