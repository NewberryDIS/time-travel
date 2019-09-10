import React from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
/** @jsx jsx */
import { css, jsx, Global } from '@emotion/core'
import counter from './images/counter.png';
import wp from './images/wp.png';
import styled from "@emotion/styled";

const Text = styled.div`
    flex: 1; 
    width: 70%;
    margin: 30px auto;
    background-color: rgba(255,255,255,0.75);
    font-family: 'Lato', sans-serif;
    padding: 25px;
    border: 2px solid black;
    border-radius: 6px;
    -webkit-box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.75);
    box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.75);
`
class Main extends React.Component {
    render(){
    const { match, location, history } = this.props;
    var bg = location.pathname === '/' ? counter : wp;
    return 	(<div css={css`
				width: 50%;
				height: 80%;
				margin: 40px auto;
                display: flex;
                flex-direction: column;
			`}>
            <Global
                styles={css`
                    body {
                        background-image: url('${bg}') !important;

                    }
                `}
            />
                        <Text css={css`flex: 1; width: 70%;`}>
                <h1 css={css`
                    text-align: center;
                    line-height: 2.8rem;
                    font-family: 'Libre Baskerville', serif;
                    padding-top: 25px;
                    color: #C64B2D;
                    text-shadow: 2px 2px 5px rgba(0,0,0,0.85);

                    & p {
                        margin: 0;
                    }
                `}>{console.log('You are now at ' + location.pathname)}
                    <p css={css`
                        font-size: 4rem;
                    `}>
                        Midwest 
                    </p>   
                    <p css={css`
                        font-size: 3rem;
                    `}>
                        Time Traveler
                    </p>
				</h1>
				<p css={css``}>Come along for the ride with Midwesterners' first-hand accounts of historic events, 
					including frontier expeditions, the Great Chicago Fire, and the 1893 World's Fair.</p>
			</Text>
			<Text >
				<p css={css`padding: 5px 0 20px 0;`}>With help from our volunteer transcribers, you can follow these journeys via historical documents from the Newberry's primary source collections.</p>
                <p css={css`width: 100%; margin: auto; text-align: center;`}>
                    <Link to="/choose" css={css`
                        text-align: center;
                        padding: 13px;
                        margin: auto;
                        background: #C64B2D;
                        color:  #C3C6A4;
                        font-family: 'Libre Baskerville', serif;   
                        border-radius: 6px; 
                        -webkit-box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.75);
                        -moz-box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.75);
                        box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.75);
                        transition: all .15s ease-in-out;
                        text-transform: uppercase;
                        &:hover {
                            color: white;
                        }
                        `}>
                        Choose your traveler
                    </Link>
                </p>
				<p css={css`padding: 20px 0 0 0;`}>Help with our transcription crowdsourcing project: NEWBERRY TRANSCRIBE</p>
			</Text>
        </div>
        )
    }
}
export default Main;