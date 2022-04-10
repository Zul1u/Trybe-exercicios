import React from "react";

class Button extends React.Component {
    render() {
        const { click, type } = this.props

        return (
            <button onClick={click} className={`${type} bnt`} value={type}>{type}</button>
        )
    }
}

export default Button;
