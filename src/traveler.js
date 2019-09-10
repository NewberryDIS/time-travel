import React from 'react'
/** @jsx jsx */
import { css, jsx, Global } from '@emotion/core'
import wp from './images/wp.png';
import styled from "@emotion/styled";
import {Travelers} from './data';
import { BrowserRouter as BrowserRouter, Link, withRouter } from "react-router-dom";

const Sidebar = (props) => <div>{Travelers[props.i].name}</div>
const Mainframe = (props) => <div>{Travelers[props.i].image}</div>
class Traveler extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        };    
    }
    
    render(){
        return(
            <div>
                {console.log(this.props.location.state)}
                <Sidebar i={this.props.location.state} />
                <Mainframe i={this.props.location.state} />
            </div>
        )
    }
}
export default withRouter(Traveler)