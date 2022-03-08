import React, { Component } from "react";
import "./driver-passenger-choice.css"
import { UserType } from "../../constants/constants";
import {CryptoCards} from "web3uikit";

class DriverPassengerChoice extends Component {
    
    constructor(props) {
        super(props);
        this.onPassengerClickEvent = this.onPassengerClickEvent.bind(this);
        this.onSellerClickEvent = this.onSellerClickEvent.bind(this);
    }

    componentDidMount = async () => {};

    onPassengerClickEvent($event) {
        this.props.parentCallback(UserType.PASSENGER);
        //$event.preventDefault();
    }

    onSellerClickEvent($event) {
        this.props.parentCallback(UserType.SELLER);
        //$event.preventDefault();
    }
    
    render() {
        return (
            <div className="compRoot">
                <h1>Please choose your situation</h1>
                <button className="button-36" role="button" onClick={this.onPassengerClickEvent}>Passenger</button>
                <button className="button-36" role="button"onClick={this.onSellerClickEvent}>Driver or Reseller</button>
            </div>
        );
    }
}
export default DriverPassengerChoice;
    