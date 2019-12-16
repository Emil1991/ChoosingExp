import React, { Component } from "react";
import "./GameHeader.css"
import Timer from "../Timer/Timer"
import Headline from "./../HeadLine/HeadLine"


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
                <Headline></Headline>
                {/* {this.props.children} */}
                </div>
        )
    }
}

export default GameHeader;
