import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavMenu } from './../../components/nav-menu/NavMenu';
import { Header } from './../header/Header';

export class Layout extends React.Component {

  public render() {
    return (
        <div>
            <Header/>
            <Container fluid={true}>
                <Row>
                    <Col sm={3}>
                        <NavMenu />
                    </Col>
                    <Col sm={9}>
                        {this.props.children}
                    </Col>
                </Row>
            </Container>
        </div>
    );
  }
}
