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
                OO
                {/* {this.props.children} */}
                </div>
        )
    }
}

export default InfoSection;
