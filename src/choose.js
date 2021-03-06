import React from 'react';
import './masonry.css';
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Travelers } from './data';
import { BrowserRouter as BrowserRouter, Link, withRouter } from "react-router-dom";
// images
import amyWingreen from './images/tr-amyWingreen.png';
import blackHawk from './images/tr-blackHawk.png';
import errettGraham from './images/tr-errettGraham.png';
import josephWhitehouse from './images/tr-josephWhitehouse.png';
import juliaNewberry from './images/tr-juliaNewberry.png';
import wolfej from './images/wolfej.png';
import debord from './images/debord.png';
import deleuze from './images/deleuze.png';

let breakPoints = [350, 500, 750];
const images = {
    'amyWingreen': amyWingreen,
    'blackHawk': blackHawk,
    'errettGraham': errettGraham,
    'josephWhitehouse': josephWhitehouse,
    'juliaNewberry': juliaNewberry,
    'wolfej': wolfej,
    'deleuze': deleuze,
    'debord': debord
};
export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="masonry-container">
                        <Masonry breakPoints={breakPoints}>
                            {Travelers.map((content, i) => <Tile key={i} i={i} />)}
                        </Masonry>
                </div>
            </div>
        )
    }
}
const Tile = ({ i }) => 
    <div className="tile" css={css`
            border: 2px solid #27452B;
            flex-basis: 150px;
            border-radius: 6px;
            padding: 10px 10px 25px 10px;
            position: relative;
            & p {

                padding: 5px 10px 15px 10px;
            }
            &:before {
                content: "";
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                z-index: -1;
                -webkit-box-shadow: 10px 10px 50px 0px rgba(0,0,0,0.75);
                -moz-box-shadow: 10px 10px 50px 0px rgba(0,0,0,0.75);
                box-shadow: 10px 10px 50px 0px rgba(0,0,0,0.75);
            }
        `}>
        <img css={css`
                padding: 25px 25px 5px 25px;
                width: 150px;
            `} 
            src={images[Travelers[i].image]} alt="person"/>
        <h2 css={css`font-family: 'Libre Baskerville', serif;`}>{Travelers[i]['name']}</h2>
        <p>{Travelers[i]['desc']}</p>
        <Link to={{
            pathname: Travelers[i].image,
            state: i
        }} css={css`
            padding: 10px;
            border: 2px solid #C64B2D;
            margin: 15px auto;
            background: #C64B2D;
            color:  #C3C6A4;
            font-family: 'Libre Baskerville', serif;   
            border-radius: 6px; 
            -webkit-box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.75);
            box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.75);
            transition: all .15s ease-in-out;
            &:hover {
                
                color: white;
            }
        `}>{console.log(i)}Begin your journey</Link>
    </div>
class Masonry extends React.Component {
    constructor(props) {
        super(props);
        this.state = { columns: 1 };
        this.onResize = this.onResize.bind(this);
    }
    componentDidMount() {
        this.onResize();
        window.addEventListener('resize', this.onResize);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize);
    }
    getColumns(w) {
        return breakPoints.reduceRight((p, c, i) => {
            return c < w ? p : i;
        }, breakPoints.length) + 1;
    }
    onResize() {
        const columns = this.getColumns(this.refs.Masonry.offsetWidth);
        if (columns !== this.state.columns) {
            this.setState({ columns: columns });
        }
    }
    mapChildren() {
        let col = [];
        const numC = this.state.columns;
        for (let i = 0; i < numC; i++) {
            col.push([]);
        }
        return this.props.children.reduce((p, c, i) => {
            p[i % numC].push(c);
            return p;
        }, col);
    }
    render() {
        return (
        <div className="masonry" ref="Masonry">
            {/* <div className="colordiv">
                <div css={css`height: 100px; width: 50px; background-color: #ACA874; `}>Dark Khaki</div>
                <div css={css`height: 100px; width: 50px; background-color: #C3C6A4; `}>Dark Sea Green</div>
                <div css={css`height: 100px; width: 50px; background-color: #3F583C; `}>Dark Slate Gray</div>
                <div css={css`height: 100px; width: 50px; background-color: #8D9A79; `}>Dark Sea Green</div>
                <div css={css`height: 100px; width: 50px; background-color: #697B5B; `}>Dark Olive Green</div>
            </div> */}
            {this.mapChildren().map((col, ci) => 
                <div className="column" key={ci}>
                    {col.map((child, i) => 
                        <div key={i}>{child}</div>
                    )}              
                </div>
                )}
        </div>
        )
    }
}
// render(React.createElement(App, { images: images, breakPoints: breakPoints }), document.getElementById('root'));

