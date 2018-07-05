import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './app.less';

const mapStateToProps = (state, ownProps) => {
	return state.count;
};

const mapDispatchToProps = (dispatch, ownProps) => ({
	actions: bindActionCreators({ ...actions }, dispatch)
});

class App extends Component {
	render() {
		return <div>React Starter</div>;
	}
}

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
