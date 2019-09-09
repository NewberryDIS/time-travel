import React from 'react';
import Choose from './choose'
import Navbarsm from './navbarsm';
import Main from './main'
import './masonry.css';
import { BrowserRouter as BrowserRouter, Route, withRouter } from "react-router-dom";

export default class App extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            route: '/'
        };    
	}
	render() {

		return (
			<BrowserRouter>
				<Navbarsm />
				<div >
					
					<Route path="/" exact component={withRouter(Main)} />
					<Route path="/choose" component={withRouter(Choose)}/>
				</div>
			</BrowserRouter>
    	);
	}
}
// export default withRouter(App);