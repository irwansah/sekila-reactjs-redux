import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import BackComponent from '../components/BackComponent'

export default class CreateUserContainer extends Component {
    render() {
        return (
            <Container>
                <BackComponent/>
                <h1>Create</h1>
            </Container>
        )
    }
}
