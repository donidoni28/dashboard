import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProfilCard from './ProfilCard'

export default function cardsContainer({ children, state, setState }) {


    return (
            <Container>
                <Row>
                    <Col md={3}>
                        <ProfilCard state={state} setState={setState} />
                    </Col>
                    <Col md={9}>
                        <div className='d-flex flex-wrap flex-column flex-md-row'>
                            {children}
                        </div>
                    </Col>

                </Row>

            </Container>
    )
}
