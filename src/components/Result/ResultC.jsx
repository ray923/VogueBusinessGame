import React, {Component} from 'react';
import logo from '../../asserts/pic/typeAlogo.png';
import typeC from '../../asserts/pic/typeC.png';
import ResultQR from './ResultQR';
import ResultName from './ResultName';
import ResultCtitle from '../../asserts/pic/resultCtitle.png';
import contentborder from '../../asserts/pic/resultCcontentborder.png';
import content from '../../asserts/pic/resultCcontent.png';
import share from '../../asserts/pic/resultAshare.png';
import resultCp from '../../asserts/pic/resultCp.png';

export class ResultC extends Component{
    constructor(props){
        super(props)

        this.state = {
            name: this.props.match.params.name
        }
    }

    render() {
        return (
            <div className="App-resultC">
                <div className="App-resultA-logo">
                    <img src={logo} alt='logo'></img>
                </div>
                <div className="App-resultA-background">
                    <div className='App-result-typeA'>
                        <img src={typeC} alt='typea'></img>
                    </div>
                    <ResultName name={this.state.name}></ResultName>
                    <ResultQR></ResultQR>
                    <div className='App-resultC-title'>
                        <img src={ResultCtitle} alt='resulttitle'></img>
                    </div>
                    <img src={contentborder} alt='contentborder' className="App-resultC-content-borderimg"></img>
                    <img src={content} alt='content' className="App-resultC-contentimg"></img>
                    <div className="App-resultC-circle-red">
                        <img src={share} alt='share'></img>
                    </div>
                </div>
                <div className="App-resultC-p">
                    <img src={resultCp} alt='backgroundpattern'></img>
                </div>
            </div>
        )
    }
}