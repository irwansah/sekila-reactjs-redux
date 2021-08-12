import React from 'react'
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        getUserDetail: state.users.getUserDetail,
        errorUseretail: state.users.errorUseretail
    };
};

const DetailUserComponent = (props) => {
    return (
        <Table striped hover>
            <tbody>
                <tr>
                    <td width="100">Name</td>
                    <td width="10">:</td>
                    <td>{props.getUserDetail.name}</td>
                </tr>
                <tr>
                    <td width="30">Address</td>
                    <td width="10">:</td>
                    <td>{props.getUserDetail.address}</td>
                </tr>
                <tr>
                    <td width="30">Age</td>
                    <td width="10">:</td>
                    <td>{props.getUserDetail.age}</td>
                </tr>
                <tr>
                    <td width="30">Phone Number</td>
                    <td width="10">:</td>
                    <td>{props.getUserDetail.phone}</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default connect(mapStateToProps, null)(DetailUserComponent)
