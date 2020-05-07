import React, { Component } from 'react'

export class Dialog extends Component {

    temperatureClassname(temp) {
        const prefix = 'dialogBox'

        switch (temp) {
            case 'top': return prefix + 'Top'
            case 'right': return prefix + 'Right'
            case 'bottom': return prefix + 'Bottom'
            case 'left': return prefix + 'Left'
            // case default: return prefix + 'Top'
        }
    }

    render() {
        return (
            <div className={this.temperatureClassname(this.props.position)}>
                Just for fun!!
            </div >
        )
    }
}

export default Dialog
