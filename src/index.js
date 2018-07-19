import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import registerServiceWorker from './registerServiceWorker';

import App from './components/App';
import reducers from './reducers';

import './static/css/main.css';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const history = createBrowserHistory();

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<Router history={history}>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
