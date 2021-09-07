import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import savingsLogo from "../../images/savings.svg";
import styles from "./ShowCase.module.css"


const ShowCase = () => {
    return (
        <Container className={styles.container}>
            <Row xs="1" md="2" className={styles.flex}>
                <Col><img src={savingsLogo} alt=""/></Col>
                <Col className={styles.alignLeft}>
                    <h1>Expenser</h1>
                    <h2>All In One Personal Finance Management platform</h2>
                    <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <button>Explore {">"}</button>
                </Col>
            </Row>
        </Container>
    )
}

export default ShowCase;
