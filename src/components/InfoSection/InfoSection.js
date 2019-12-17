import React, { Component } from "react";
import "./InfoSection.css"



class InfoSection extends Component {
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
                <div id="InfoSection" className="br-1"> 
                <div id="Info" className="r br-1">
                    <span>
                        Poll Information
                    </span><br></br>
                    <span style={{"fontSize":"0.7em"}}>
                        Total voters: XXX
                    </span><br></br><br></br>
                    <div id="candidates" style={{"textAlign":"left","paddingLeft":"10%","fontSize":"0.7em"}}>
                        <div className="br-1">Dilen:</div><div>34</div><div>-------------</div>
                        <div>Morgan:</div><div>25</div><div>-----------</div>
                        <div>Danny:</div><div>19</div><div>-------</div>
                        <div>Dean:</div><div>8</div><div>-----</div>
                        <div>Bob:</div><div>7</div><div>----</div>
                        <div>George:</div><div>0</div><div></div>
                        <div>Alice:</div><div>0</div><div></div>
                    </div>
                </div>
                {/* {this.props.children} */}
                </div>
        )
    }
}

export default InfoSection;
