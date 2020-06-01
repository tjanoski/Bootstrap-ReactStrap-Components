import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const SmileyLayout = (props) => {
  return (
    <Container>
      <Row>.
        <Col xs="10" className="bg-primary"></Col>
      </Row>
      <Row style={{height: 72}}>.
        <Col xs="3" className="bg-primary"></Col>
        <Col xs="1" className="bg-warning"></Col>
        <Col xs="2" className="bg-primary"></Col>
        <Col xs="1" className="bg-warning"></Col>
        <Col xs="3" className="bg-primary"></Col>
      </Row>
      <Row style={{height: 48}}>.
        <Col xs="10" className="bg-primary"></Col>
      </Row>
      <Row>.
        <Col xs="1" className="bg-primary"></Col>
        <Col xs="1" className="bg-warning"></Col>
        <Col xs="6" className="bg-primary"></Col>
        <Col xs="1" className="bg-warning"></Col>
        <Col xs="1" className="bg-primary"></Col>
      </Row>
      <Row>.
        <Col xs="2" className="bg-primary"></Col>
        <Col xs="1" className="bg-warning"></Col>
        <Col xs="4" className="bg-primary"></Col>
        <Col xs="1" className="bg-warning"></Col>
        <Col xs="2" className="bg-primary"></Col>
      </Row>
      <Row>.
        <Col xs="3" className="bg-primary"></Col>
        <Col xs="4" className="bg-warning"></Col>
        <Col xs="3" className="bg-primary"></Col>
      </Row>
      <Row>.
        <Col xs="4" className="bg-primary"></Col>
        <Col xs="2" className="bg-warning"></Col>
        <Col xs="4" className="bg-primary"></Col>
      </Row>
      <Row>.
        <Col xs="10" className="bg-primary"></Col>
      </Row>
    </Container>
  );
}

export default SmileyLayout;