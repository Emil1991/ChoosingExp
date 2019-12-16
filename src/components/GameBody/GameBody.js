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
                <div id="GameBody" className="br-1 r"> 
                <div className="br-1"><b>Instructions:</b> Click to select or unselect a choice. You may select up to 1 choice.</div>
                <div className="br-1">BODY</div>
                <div className="br-1"><b>Instructions:</b> Double check your ballot. Then click the "Vote!" button to cast your vote.</div>
                {/* {this.props.children} */}
                </div>
        )
    }
}

export default GameBody;
