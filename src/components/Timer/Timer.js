import React, { Component } from "react";
import "./Timer.css"


class Timer extends Component {
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
                <div id="Timer" className="br-1w"> 
                Time left:
                </div>
        )
    }
}

export default Timer;
