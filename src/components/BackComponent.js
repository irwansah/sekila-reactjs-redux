
import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const BackComponent = () => {
    return (
        <Row className="mb-2">
            <Col>
                <Link to="/">
                <Button className="btn btn-success btn-sm mb-2 me-2 text-white">
                        <FontAwesomeIcon icon={faArrowLeft} /> Back
                    </Button>
                </Link>
            </Col>
        </Row>
    )
}

export default BackComponent
