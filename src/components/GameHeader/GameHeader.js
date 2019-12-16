import React, { Component } from "react";
import "./GameHeader.css"
import Timer from "../Timer/Timer"


class GameHeader extends Component {
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
                <div id="GameHeader" className="br-1 r bg-blue"> 
                <Timer></Timer>
                <div className="br-1w">
                    Headline
                </div>
                {/* {this.props.children} */}
                </div>
        )
    }
}

export default GameHeader;
