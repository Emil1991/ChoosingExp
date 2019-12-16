import React, { Component } from "react";
import GameHeader from "../GameHeader/GameHeader"
import GameBody from "../GameBody/GameBody"
import GameFooter from "../GameFooter/GameFooter"



class GameSection extends Component {
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
                <div id="GameSection" className="br-1"> 
                <GameHeader></GameHeader>
                <GameBody></GameBody>
                <GameFooter></GameFooter>
                </div>
        )
    }
}

export default GameSection;
