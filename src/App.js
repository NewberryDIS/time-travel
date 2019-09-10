import React from 'react';
import Choose from './choose'
import Navbarsm from './navbarsm';
import Main from './main'
import Traveler from './traveler'
import './masonry.css';
import { BrowserRouter as BrowserRouter, Route, withRouter } from "react-router-dom";


class App extends React.Component {
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
					<Route path="/:traveler" render={withRouter((props) => <Traveler {...props} />)}/>
				</div>
			</BrowserRouter>
    	);
	}
}
export default App;