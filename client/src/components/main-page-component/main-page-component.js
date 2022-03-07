import React, { Component } from "react";
import * as uiKit from "web3uikit";
import DriverPassengerChoice from "../driver-passenger-choice-component/driver-passenger-choice-component";
import "./main-page.css"
import { ReactDOM } from "react";
import { UserType } from "../../constants/constants";
import PassengerMarket from "../passenger-market-component/passenger-market-component";
import { Container, Row, Col } from 'react-bootstrap';


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
            <Row> 
                <Col breakpointsConfig={{lg: 6, md: 6, sm: 4, xs: 2}} span={12}> 
                    <div> 
                        <img id="logo" src="../../logo.png"/>
                        <h4 id="logoTitle">Car Share</h4>
                    </div>
                </Col>
                <Col breakpointsConfig={{lg: 6, md: 6, sm: 4, xs: 2}} span={12}> 
                    <p className="addressShown">Account: {window.ethereum.selectedAddress}</p>
                </Col>
            </Row>
            <div class="centerClass" style={{ display: this.userType ? "none" : "block" }}>
                <DriverPassengerChoice parentCallback = {this.callBackFromDriverPassengerChoice}>
                </DriverPassengerChoice>
            </div>

            <div class="centerClass marketSize" style={{ display: this.userType == UserType.PASSENGER ? "block" : "none" }}>
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
