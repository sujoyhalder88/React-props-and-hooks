import React, { Component } from "react";

export class State extends Component {
    constructor(props) {
        console.log(props);
        super(props);

        this.state = {
            name: "sujoy",
            email: "sujoy@test.com",
            count: 0,
        };
    }
    UpDateState() {
        this.setState({
            name: "sandeepan",
            email: "sandeeppan@test.con",
            count: this.state.count + 1,
        });
    }
    render() {
        return (
            <div>
                <h1>Hello: {this.state.name}</h1>
                <h1>Email: {this.state.email}</h1>
                <h1>Count: {this.state.count}</h1>
                <h1>newName: {this.props.name}</h1>

                <button
                    onClick={() => {
                        this.UpDateState();
                    }}
                >
                    Update
                </button>
            </div>
        );
    }
}

export default State;
