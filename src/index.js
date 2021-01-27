import React from 'react';
import ReactDOM from 'react-dom';
import App from '@componets/App';

function render() {
	ReactDOM.render(<App />, document.getElementById('app'));
}

if (module.hot) {
	module.hot.accept('@components/App', () => render());
}
