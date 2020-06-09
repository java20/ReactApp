import React, { Component } from 'react'
import logo1 from './CSS3.png'
import './sideNavStyle.css'
import logo2 from './html.png'
import './sideNavStyle2.css'
import Main from './Main'

class Sidenav extends Component {  //844192265

    constructor(props) {
        super(props)
    
        this.state = {
            Element: 'default'
        }
    }
    
    handleAnchor = () => {
        this.setState({
            Element: 'a'
        })
    }

    handleButton = () => {
        this.setState({
            Element: 'button'
        })
    }

    handleCode = () => {
        this.setState({
            Element: 'code'
        })
    }

    handleHeadings = () => {
        this.setState({
            Element: 'headings'
        })
    }

    handleColor = () => {
        this.setState({
            Element: 'color'
        })
    }

    handleBgColor = () => {
        this.setState({
            Element: 'background-color'
        })
    }

    handleBorder = () => {
        this.setState({
            Element: 'border'
        })
    }

    handleFont = () => {
        this.setState({
            Element: 'font'
        })
    }

    render() {
        return (
            <div>
                 <div className="sidenav">
                 <div>
                    <img src={logo1} alt="CSS LOGO" width="80" height="100" id='imgCss' />
                 </div>
                    <div class="btn-group-vertical">
                    <button className="btn btn1" id="CSS@color#1" onClick={this.handleColor}>color</button>
                    <button className="btn btn1" id="CSS@bgcolor#2" onClick={this.handleBgColor}>background-color</button>
                    <button className="btn btn1" id="CSS@border#3" onClick={this.handleBorder}>border</button>
                    <button className="btn btn1" id="CSS@font#3" onClick={this.handleFont}>font</button>
                    
                    </div>
                </div>

                 <div id="main1">
                    <Main elementtype={this.state.Element}/>
                </div>  

                <div className="sidenav sidenav2">
                 <div>
                    <img src={logo2} alt="CSS LOGO" width="100" height="100" id='imgHtml'/>
                 </div>
                    <div className="btn-group-vertical" id='htmlvertical'>
                    <button className="btn btn2" id="HTML@a#1" onClick={this.handleAnchor}>a</button>
                    <button className="btn btn2" id="HTML@button#2" onClick={this.handleButton}>button</button>
                    <button className="btn btn2" id="HTML@code#3" onClick={this.handleCode}>code</button>
                    <button className="btn btn2" id="HTML@headings#4" onClick={this.handleHeadings}>headings</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidenav
