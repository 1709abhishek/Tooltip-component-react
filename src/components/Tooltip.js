import React, { Component } from 'react'
import Dialog from './Dialog'

export class Tooltip extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showDialog: false
        }
    }


    handleDialog = () => {
        this.setState({
            showDialog: !this.state.showDialog
        })
        console.log(this.state.showDialog);
    }
    render() {
        return (
            <div className="container">
                <button className="btn" onMouseOver={this.handleDialog} onMouseOut={this.handleDialog}>What's This?</button>
                {this.state.showDialog && <Dialog position={this.props.pos} />}
            </div>
        )
    }
}

export default Tooltip
