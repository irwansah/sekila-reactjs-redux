
import React from 'react'
import {Button,Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { connect } from "react-redux";
const mapStateToProps = (state) => {
    return {
      title:state.users.title
    };
  };
const JumbotronComponent = (props) => {
    return (
            <div className="p-1 mb-4 bg-default rounded-3">
            <Container className="container-fluid py-5">
                <h1 className="display-5 fw-bold">{props.title}</h1>
                <p className="col-md-8 fs-4">The simple fun,cruds for reactjs application.</p>
                <Button className="btn btn-success btn-lg text-white" type="button"> <FontAwesomeIcon icon={faGithub}/>
                &nbsp;Fork on Github</Button>
            </Container>
            </div>
    )
}

export default connect(mapStateToProps,null)(JumbotronComponent)
