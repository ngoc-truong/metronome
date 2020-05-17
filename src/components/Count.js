import React from "react";

class Count extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isOn: false,
            num: props.num,
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { name, type, checked } = event.target;
        this.setState( {
            [name]: checked,
        })
    }

    render() {
        return (
            <div>
                <label for="count">Count {this.state.num}</label>
                <input
                    type="checkbox"
                    name="isOn"
                    checked={this.state.isOn}
                    onChange={this.handleChange} 
                />
                <h3>This box is {this.state.isOn ? "on" : "off"}</h3>
            </div>
        )
    }
}

export default Count;