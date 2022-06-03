import React, { Component } from "react";

export class State1 extends Component {
    state = {
        name: "sujoy",
        id: 15,
    };
    change() {
        this.setState({
            name: "Avi",
            id: 17,
        });
    }

    render() {
        return (
            <div>
                <h1>Hello{this.state.name}</h1>
                <h1>ID{this.state.id}</h1>
                <button
                    onClick={() => {
                        this.change();
                    }}
                >
                    Change
                </button>
            </div>
        );
    }
}

export default State1;

//===================================================//
// import React, { Component } from "react";
// export class State1 extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: "CamperBot",
//         };
//     }
//     render() {
//         return (
//             <div>
//                 {/* Change code below this line */}
//                 <Navbar name={this.state.name} />
//                 {/* Change code above this line */}
//             </div>
//         );
//     }
// }

// class Navbar extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <div>
//                 {/* Change code below this line */}
//                 <h1>
//                     {/* Hello, my name is: <name /> */}
//                     {this.props.name}
//                 </h1>
//                 {/* Change code above this line */}
//             </div>
//         );
//     }
// }
// export default State1;
