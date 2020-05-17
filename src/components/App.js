import React from "react";
import Form from "./Form";
import Beat from "./Beat";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tempo: 120,
            count: 8,
            isSwing: true,
            beats: []
        }

        this.handleFormChange = this.handleFormChange.bind(this);
        this.addBeats = this.addBeats.bind(this);
    }

    componentDidMount(){
        this.addBeats();
    }

    handleFormChange(event) {
        const { name, value, type, checked } = event.target;
        
        // Ternary operator
        type === "checkbox" ? 
        this.setState({ [name]: checked }, this.addBeats) : 
        this.setState({ [name]: parseInt(value) }, this.addBeats); 
    }

    addBeats(){
        const newBeats = [];

        if (this.state.isSwing) {
            for (let i = 1; i <= this.state.count * 3; i++){
                i % 3 === 1 ?
                newBeats.push(<Beat key={i} className="count" />) :
                newBeats.push(<Beat key={i} />);
            }
        } else {
            for (let i = 1; i <= this.state.count * 4; i++) {
                i % 4 === 1 ?
                newBeats.push(<Beat key={i} className="count" />) :
                newBeats.push(<Beat key={i} />);
            }
        }

        this.setState( { beats: newBeats });
    }

    render() {
        return (
            <div>
                <Form 
                    settings={this.state}
                    onFormChange={this.handleFormChange}
                />
                {this.state.beats}
            </div>
        )
    }
}

export default App;