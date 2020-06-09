import React, { Component } from 'react'
import './ViewStyle.css'

class View extends Component {          // SR681773437    8640086400

    

     numToHexOpacity(op){
        let opacity =  op*100
        opacity = 255 * (opacity * 0.01)
        opacity = parseInt(opacity.toString())
        opacity = opacity.toString(16)
      return opacity
    }

    render() {
            if(this.props.tag==='anchor'){ 
                let opacity1 = this.numToHexOpacity(this.props.colopacity)
                let opacity2 = this.numToHexOpacity(this.props.bgopacity)

                const mystyle={
                    color: this.props.colour+opacity1,
                    background: this.props.bgcolour+opacity2, 
                    border: this.props.Width+'px '+this.props.Type+' '+this.props.borcolour,
                    fontFamily: this.props.Font1+', '+this.props.Font2
                }
                    return (
                        <div id='ViewComponent'>
                            <a style={mystyle}  href={this.props.Href} target={this.props.Targt}>{this.props.content}</a>                
                        </div>
                    )
            }
    }
}

export default View
