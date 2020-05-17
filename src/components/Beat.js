import React from "react";

class Beat extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isOn: false,
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { name, checked } = event.target;
        this.setState( {
            [name]: checked,
        })
    }

    render() {
        return (
            <input
                type="checkbox"
                name="isOn"
                checked={this.state.isOn}
                onChange={this.handleChange} 
                className={this.props.className}
            />
        )
    }
}

export default Beat;