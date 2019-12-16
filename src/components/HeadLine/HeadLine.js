import React, { Component } from "react";
import "./HeadLine.css"


class HeadLine extends Component {
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
                <div id="HeadLine" className="br-1w"> 
                Round #13<br>
                </br>
                Voting Plurality
                </div>
        )
    }
}

export default HeadLine;
