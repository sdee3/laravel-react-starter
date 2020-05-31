import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Example extends Component {
	render() {
		return (
			<div className="container">
				<h1>Example Component</h1>
				<p>I&apos;m an example component!</p>
			</div>
		);
	}
}

if (document.getElementById('app')) {
	ReactDOM.render(<Example />, document.getElementById('app'));
}
