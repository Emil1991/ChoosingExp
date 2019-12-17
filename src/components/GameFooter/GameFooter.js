import React, { Component } from "react";
import "./GameFooter.css"


class GameFooter extends Component {
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
                <div id="GameFooter" className="br-1 r"> 
                <button className="r">Vote!</button>
                {/* {this.props.children} */}
                </div>
        )
    }
}

export default GameFooter;
