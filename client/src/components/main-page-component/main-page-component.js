import React, { Component } from "react";
import * as uiKit from "web3uikit";
import DriverPassengerChoice from "../driver-passenger-choice-component/driver-passenger-choice-component";
import "./main-page.css"
import { ReactDOM } from "react";
import { UserType } from "../../constants/constants";
import PassengerMarket from "../passenger-market-component/passenger-market-component";


class MainPage extends Component {

    userType = null;

    constructor(props) {
        super(props);
    }

    componentDidMount = async () => {
        
    }

    callBackFromDriverPassengerChoice = (childUserType) => {
        this.userType = childUserType;
        this.forceUpdate();
    }
    
    render() {
        return (
        <div>
            <div> 
            <img id="logo" src="../../logo.png"/>
            <h4 id="logoTitle">Car Share</h4>
            </div>
            
            <div class="centerClass" style={{ display: this.userType ? "none" : "block" }}>
                <DriverPassengerChoice parentCallback = {this.callBackFromDriverPassengerChoice}>
                </DriverPassengerChoice>
            </div>

            <div class="centerClass" style={{ display: this.userType == UserType.PASSENGER ? "block" : "none" }}>
                <PassengerMarket/>
            </div>

            {/* <div class="centerClass" style={{ display: this.userType ? "none" : "block" }}>
                <DriverPassengerChoice parentCallback = {this.callBackFromDriverPassengerChoice}>
                </DriverPassengerChoice>
            </div> */}

        </div>
        );
    }
}

export default MainPage;
