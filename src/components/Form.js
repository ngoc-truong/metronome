import React from "react";

class Form extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.props.onFormChange(event);
    }

    render() {
        return (
            <div className="form">
                <label htmlFor="tempo">Tempo:  </label>
                <input 
                    type="number"
                    name="tempo"
                    id="tempo"
                    value={this.props.settings.tempo}
                    onChange={this.handleChange}
                    min="60"
                    max="300"
                />
                
                <br/>

                <label htmlFor="count">Count: </label> 
                <select
                    name="count"
                    value={this.props.settings.count}
                    onChange={this.handleChange}>
                    <option value="8">8-Count</option>
                    <option value="6">6-Count</option>
                </select>  
                
                <br/>

                <label htmlFor="isSwing">Swing: </label> 
                <input
                    type="checkbox"
                    name="isSwing"
                    checked={this.props.settings.isSwing}
                    onChange={this.handleChange}>
                </input>  
                
                <p>Tempo is: {this.props.settings.tempo}</p>
                <p>The count is: {this.props.settings.count === 8 ? "8-Count" : "6-Count"}</p>
                <p>Should it swing? {this.props.settings.isSwing ? "Yes" : "No"}</p>
            </div>
        )
    }
}

export default Form;