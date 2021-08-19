import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import BackComponent from '../components/BackComponent'
import FormComponent from '../components/FormComponent'
import { connect } from "react-redux";
import { postUserCreate } from '../actions/userAction';
import swal from 'sweetalert';

const mapStateToProps=(state)=>{
    return {
        getResponseDataUser:state.users.getResponseDataUser,
        errorResponseDataUser:state.users.errorResponseDataUser
    }
}
 class CreateUserContainer extends Component {
    handleSubmit(data){
        this.props.dispatch(postUserCreate(data))
    }
    render() {
        if(this.props.getResponseDataUser || this.props.errorResponseDataUser){

            if(!this.props.errorResponseDataUser){
                swal({
                    title: "User created",
                    text: `${this.props.getResponseDataUser.name} created`,
                    icon: "success",
                  });
            }else{
                swal({
                    title: "User not created!",
                    text: `${this.props.getResponseDataUser.name} failed to create`,
                    icon: "error",
                  });
            }
            
        }
        return (
            <Container>
                <BackComponent/>
                <h1>Create</h1>
                <FormComponent onSubmit={(data)=>this.handleSubmit(data)}/>
            </Container>
        )
    }
}

export default connect(mapStateToProps,null)(CreateUserContainer)