import  {Col, Container, FormGroup,Input, Row,Label} from "reactstrap";

import ReactScrollableList from 'react-scrollable-list'
import React from "react";

class LeftMenu extends React.Component{


    render() {
        let listItems = [
            { id: 1, content: "14:21:59: Görev Yüklendi" },
            { id: 2, content: "14:21:41: Kontrol onaylandı" },
            { id: 3, content: "14:21:42: Acil durum komutları tanımlandı" },
            { id: 4, content: "14:21:35: Rota seçildi" },
            { id: 5, content: "14:21:21: Yasak bölge tanımlandı" },
            { id: 6, content: "14:21:11: Görev tanımlandı" },
            { id: 7, content: "14:20:46: Harita sistemi başlatıldı " },
            { id: 8, content: "14:20:12: Bildirim sistemi başlatıldı" },
            { id: 9, content: "14:20:11: Durum sistemi başlatıldı" },
            { id: 10, content: "14:20:08: Sistem ile bağlantı başarılı" },
            { id: 11, content: "14:20:06: Sistem ile bağlantı kuruluyor" },
            { id: 12, content: "14:20:05: Scrollable Liste Test 2 " },
            { id: 13, content: "14:20:05: Scrollable Liste Test 1 " },
        ]

        return (
                <div >
                <Container>
                    <Row>
                        <div className="leftMenuTitle">
                            Sistem Durumu
                        </div>
                    </Row>
                    <Row className="rowLeftMargin">
                        <div className="property">Görev: </div> <div className="value"> 2</div>
                    </Row>
                    <Row className="rowLeftMargin">
                        <div className="property">Hedef Nesne: </div> <div className="value"> Bina</div>
                    </Row>
                    <Row className="rowLeftMargin">
                        <div className="property">Konum: </div> <div className="value">40.0672, 33.3448</div>
                    </Row>
                    <Row className='rowLeftMargin'>
                        <Col>
                            <Row>
                                <div className="property">İrtifa: </div> <div className="value">-m</div>
                            </Row>
                            <Row >
                                <div className="property">Batarya: </div> <div className="value">%95</div>
                            </Row>
                            <Row >
                                <div className="property">Yerden <br/> Yükseklik:</div> <div className="value"><br/>-m</div>
                            </Row>
                        </Col>
                        <Col>
                            <Row >
                                <div >Yer Hızı: </div> <div className="value">-m/s</div>
                            </Row>
                            <Row >
                                <div className="property">Hava Hızı: </div> <div className="value">-m/s</div>
                            </Row>
                            <Row >
                                <div className="property">Yer Hızı: </div> <div className="value">-m/s</div>
                            </Row>
                            <Row >
                                <div className="property">Açı: </div> <div className="value">-<sup>o</sup></div>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <div className="leftMenuSubTitle">
                            Bildirimler
                        </div>
                    </Row>
                    <Row>
                        <FormGroup className="checkBoxLeftMargin" check>
                            <Label check>
                                <Input type="checkbox" />{' '}
                                Sistem
                            </Label>
                        </FormGroup>
                        <FormGroup className="checkBoxLeftMargin" check>
                            <Label check>
                                <Input type="checkbox" />{' '}
                                Resim
                            </Label>
                        </FormGroup>
                        <FormGroup className="checkBoxLeftMargin" check>
                            <Label check>
                                <Input type="checkbox" />{' '}
                                Video
                            </Label>
                        </FormGroup>
                    </Row>
                    <Row>
                        <ReactScrollableList
                            listItems={listItems}
                            heightOfItem={30}
                            maxItemsToRender={20}
                            style={{ color: this.props.TextColor }}
                        />
                    </Row>
                </Container>
            </div>
        );
    }
}

export default LeftMenu;
