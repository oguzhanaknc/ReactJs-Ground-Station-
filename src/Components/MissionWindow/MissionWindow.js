
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class MissionWindow extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Accordion>
                    <Card style={{ backgroundColor: this.props.backgroundColor}}>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="text" eventKey="0" style={{ color:this.props.textColor}}>
                                Görev Tanımla
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card style={{ backgroundColor: this.props.backgroundColor}}>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="text"  eventKey="1" style={{ color:this.props.textColor}}>
                                Uçuşa Yasak Bölge Tanımla
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card style={{ backgroundColor: this.props.backgroundColor}}>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="text"  eventKey="2" style={{ color:this.props.textColor}}>
                                Rota Seçimi
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card style={{ backgroundColor: this.props.backgroundColor}}>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="text"  eventKey="3" style={{ color:this.props.textColor}}>
                                Acil Durum Takibi
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card style={{ backgroundColor: this.props.backgroundColor}}>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="text"  eventKey="4" style={{ color:this.props.textColor}}>
                                Datalink Kopması
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="4">
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card style={{ backgroundColor: this.props.backgroundColor}}>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="text"  eventKey="5" style={{ color:this.props.textColor}}>
                                Uçuş Öncesi Denetimler
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="5">
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card style={{ backgroundColor: this.props.backgroundColor}}>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="text"  eventKey="6" style={{ color:this.props.textColor}}>
                                Görev Başlat
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="6">
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        );
    }
}

export default MissionWindow;
