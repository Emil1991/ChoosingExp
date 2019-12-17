import React, { Component } from "react";
import "./RewardSection.css"


class  RewardSection extends Component {
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
                <div id="RewardSection" className="br-1"> 
                <div id="Reward" className="r br-1">
                    <p>Reward you get if<br></br> the following<br></br> candidate wins:</p>
                </div>

                {/* {this.props.children} */}
                </div>
        )
    }
}

export default RewardSection;
