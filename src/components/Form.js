import React from "react";

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            tempo: 120,
            count: "eight",
            isSwing: true,
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const { name, value, type, checked } = event.target;
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState( { [name]: value });
    }


    render() {
        return (
            <div className="form">
                <label for="tempo">Tempo:  </label>
                <input 
                    type="number"
                    name="tempo"
                    id="tempo"
                    value={this.state.tempo}
                    onChange={this.handleChange}
                    min="60"
                    max="300"
                />
                

                <br/>

                <label for="count">Count: </label> 
                <select
                    name="count"
                    value={this.state.count}
                    onChange={this.handleChange}>
                    <option value="eight">8-Count</option>
                    <option value="six">6-Count</option>
                </select>  
                

                <br/>

                <label for="isSwing">Swing: </label> 
                <input
                    type="checkbox"
                    name="isSwing"
                    checked={this.state.isSwing}
                    onChange={this.handleChange}>
                </input>  
                
                <p>Tempo is: {this.state.tempo}</p>
                <p>The count is: {this.state.count === "eight" ? "8-Count" : "6-Count"}</p>
                <p>Should it swing? {this.state.isSwing ? "Yes" : "No"}</p>
                
            </div>
        )
    }
}

export default Form;