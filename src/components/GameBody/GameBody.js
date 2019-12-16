import React, { Component } from "react";
import "./GameBody.css"


class GameBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ""
        };
    }

    componentWillMount() {

    }

    componentDidUpdate() {

    }

    componentDidMount() {

    }


    render() {
        return(
                <div id="GameBody" className="br-1"> 
                Body
                {/* {this.props.children} */}
                </div>
        )
    }
}

export default GameBody;
