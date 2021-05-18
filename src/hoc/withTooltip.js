import React from 'react'

function withTooltip(Component) {
    return class Tooltip extends React.Component {
        state = { showTooltip: false }
        mouseover = () => { this.setState({showTooltip: true})}
        mouseout = () => { this.setState({showTooltip: false})}
        render() {
            return(
                <div onMouseOver={this.mouseover} onMouseOut={this.mouseout} >
                    <Component showTooltip={this.state.showTooltip} />
                </div>
            )
        }
    }
}

export default withTooltip