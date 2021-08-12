import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getUserDetail } from '../actions/userAction';
import BackComponent from '../components/BackComponent'
import DetailUserComponent from '../components/DetailUserComponent';

class DetailUserContainer extends Component {
    componentDidMount() {
        this.props.dispatch(getUserDetail(this.props.match.params.id));
    }

    render() {
        return (
            <Container>
                <BackComponent/>
                <h1>Detail</h1>
                <DetailUserComponent/>
            </Container>
        )
    }
}

export default connect()(DetailUserContainer)
