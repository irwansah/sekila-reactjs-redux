import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import BackComponent from '../components/BackComponent'

export default class EditUserContainer extends Component {
    render() {
        return (
            <Container>
                <BackComponent/>
                <h1>Edit</h1>
            </Container>
        )
    }
}
