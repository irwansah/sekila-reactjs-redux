import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import BackComponent from '../components/BackComponent'
import FormComponent from '../components/FormComponent'
import { connect } from "react-redux";
import { getUserDetail,putUserEdit } from '../actions/userAction';
import swal from 'sweetalert';


const mapStateToProps=(state)=>{
    return {
        getResponseDataUser:state.users.getResponseDataUser,
        errorResponseDataUser:state.users.errorResponseDataUser
    }
}
 class EditUserContainer extends Component {
    componentDidMount() {
        this.props.dispatch(getUserDetail(this.props.match.params.id));
    }
    handleSubmit(data){
        this.props.dispatch(putUserEdit(data,this.props.match.params.id))
    }
    render() {
        if(this.props.getResponseDataUser || this.props.errorResponseDataUser){

            if(!this.props.errorResponseDataUser){
                swal({
                    title: "User updated",
                    text: `${this.props.getResponseDataUser.name} updated`,
                    icon: "success",
                  });
            }else{
                swal({
                    title: "User not update!",
                    text: `${this.props.getResponseDataUser.name} failed to update`,
                    icon: "error",
                  });
            }
            
        }
        return (
            <Container>
                <BackComponent/>
                <h1>Edit</h1>
                <FormComponent onSubmit={(data)=>this.handleSubmit(data)}/>

            </Container>
        )
    }
}
export default connect(mapStateToProps,null)(EditUserContainer)