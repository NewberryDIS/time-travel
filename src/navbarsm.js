import React from 'react';
import styled from "@emotion/styled";
import logob from './images/Picture1.png';
import logow from './images/logow.svg';
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import './index.css';
import './masonry.css';

import { BrowserRouter as Router, Link } from "react-router-dom";

const Navchunk = styled.div`
    border: 2px solid transparent;
    position: relative;
    border-radius: 8px;
    width: 223px;
    padding-top: 4px;
    padding-left: 4px;
    font-family: 'Lato', sans-serif;
    display: flex;
    &:hover {
        -webkit-box-shadow: 10px 10px 50px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px 10px 50px 0px rgba(0,0,0,0.75);
        box-shadow: 10px 10px 50px 0px rgba(0,0,0,0.75);
        border: 2px solid #C3C6A4;
        background: rgba(39, 69, 43,0.65);
        & a {
            color: #C3C6A4;
        }
        // &.navleft img {
        //     background: url('${logow}');
        // }
    }
    & a {
        font-weight: 900;
        color: transparent;
    }
    &.navleft img {
        flex: 1;
        margin: 3px 0 0 0;
        background: url('${logob}');
        height: 40px;
        width: 40px;
    }
    &::before {
        content: "";
        display: inline-block;
        vertical-align: middle;
        height: 100%;
    }
`

export default class Navbar extends React.Component {
    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            change: false
        }
    }
    handleClick() {
        this.setState(prevState => ({
            change: !prevState.change
        }));
    }
    render(){
        return(
            <Router>

                <header css={css`position: fixed;
                        z-index: 3;
                        top: 0;
                        left: 60px;
                        right: 0;
                        `}>
                    <div className="navbar" css={css`
                        width: 75%;
                        margin: 5px auto 0 auto;
                        height: 60px;
                        line-height: 40px;
                        `}>
                        <Navchunk className="navleft" css={css`
                        position: relative;
                        `}>
                            <Link to='/' >
                                <img alt="Newberry Logo" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
                                <span css={css`
                                flex: 3;
                                position: absolute;
                                top: 0;
                                bottom: 0;
                                left: 60px;
                                right: 0;
                                height: 30%;
                                margin: auto;
                                
                                vertical-align: middle;
                                height: 40px;
                                line-height: 40px;
                                `}>
                                &gt; Digital Newberry
                            </span>
                            </Link>
                        </Navchunk>
                        
                    </div>
                </header>
            </Router>
        )
    }
}