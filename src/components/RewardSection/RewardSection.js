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
                    <p style={{"paddingBottom":"5%"}}>Reward you get if<br></br> the following<br></br> candidate wins:</p>
                    <div id="candidates">
                <div><b>Dilen:</b></div><div>25</div><div>coins</div>
                        <div>Morgan:</div><div>20</div><div>coins</div>
                        <div>Danny:</div><div>15</div><div>coins</div>
                        <div>Dean:</div><div>10</div><div>coins</div>
                        <div>Bob:</div><div>5</div><div>coins</div>
                        <div>George:</div><div>0</div><div>coins</div>
                        <div>Alice:</div><div>-5</div><div>coins</div>
                </div>
                </div>
                
                <br></br>



                {/* {this.props.children} */}
                </div>
        )
    }
}

export default RewardSection;
