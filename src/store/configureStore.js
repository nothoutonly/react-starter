import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducers from '../reducers';

const configureStore = () => {
	const middleware = [thunkMiddleware];
	const enhancers = [applyMiddleware(...middleware)];
	// 加入redux调试工具
	const composeEnhancers =
		process.env.NODE_ENV !== 'production' &&
		typeof window === 'object' &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
			? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
			: compose;
	const store = createStore(rootReducers, composeEnhancers(...enhancers));

	if (module.hot) {
		module.hot.accept('../reducers', () => {
			const nextRootReducers = require('../reducers').defaault;
			store.replaceReducers(nextRootReducers);
		});
	}
	return store;
};

export default configureStore;
