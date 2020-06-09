import React, { Component } from 'react'
import Demof from './demof'

class Demo extends Component {

    handleClick = ()=> {
        alert('Hello button')
    }

    render() {
        return (
            <div>
                <Demof fun={handleClick = ()=> {
        alert('Hello button')
    }}/>
            </div>
        )
    }
}

export default Demo
