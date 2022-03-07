import React, { Component } from "react";
import {Card, Illustration} from "web3uikit";
import { Container, Row, Col } from 'react-bootstrap';

import "./passenger-market.css"


class PassengerMarket extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount = async () => {
        
    }


    
    render() {
        return (
        <div className="blurryBox">
            <Container className="journeys">
            <Row alignItems="center" justifyItems="center" lg={24} md={24} sm={16} xs={8}>
                <React.Fragment key=".0">
                    <Col breakpointsConfig={{lg: 6, md: 6, sm: 4, xs: 2}} span={0}>
                        <div style={{width: '200px'}}>
                            <Card
                                description="Click to create a dApp"
                                title="dApp"
                                tooltipText="Lorem Ipsum Dole met sai souni lokomit anici trenicid">
                                <div>
                                    <Illustration height="100px" logo="servers" width="100%"/>
                                </div>
                            </Card>
                        </div>
                    </Col>

                    <Col breakpointsConfig={{lg: 6, md: 6, sm: 4, xs: 2}} span={0}>
                        <div style={{width: '200px'}}>
                            <Card
                                description="Click to create a dApp"
                                title="dApp"
                                tooltipText="Lorem Ipsum Dole met sai souni lokomit anici trenicid">
                                <div>
                                    <Illustration height="100px" logo="servers" width="100%"/>
                                </div>
                            </Card>
                        </div>
                    </Col>

                    <Col breakpointsConfig={{lg: 6, md: 6, sm: 4, xs: 2}} span={0}>
                        <div style={{width: '200px'}}>
                            <Card
                                description="Click to create a dApp"
                                title="dApp"
                                tooltipText="Lorem Ipsum Dole met sai souni lokomit anici trenicid">
                                <div>
                                    <Illustration height="100px" logo="servers" width="100%"/>
                                </div>
                            </Card>
                        </div>
                    </Col>

                    <Col breakpointsConfig={{lg: 6, md: 6, sm: 4, xs: 2}} span={0}>
                        <div style={{width: '200px'}}>
                            <Card
                                description="Click to create a dApp"
                                title="dApp"
                                tooltipText="Lorem Ipsum Dole met sai souni lokomit anici trenicid">
                                <div>
                                    <Illustration height="100px" logo="servers" width="100%"/>
                                </div>
                            </Card>
                        </div>
                    </Col>
                </React.Fragment>
            </Row>
            </Container>
        </div>
        );
    }
}

export default PassengerMarket;
