import React, { Component } from 'react'
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { FormGroup, Form ,Row,Col,Button } from 'react-bootstrap';
import UserValidation from "../validations/UserValidation";

const renderField = ({
    input,
    type,
    placeholder,
    label,
    disabled,
    readOnly,
    meta: { touched, error, warning },
}) => (
    <Row>
        <Col md="12">
            <Form.Label htmlFor="{input}" className="col-form-label">
                {label}
            </Form.Label>
        </Col>
        <Col md="12">

            <Form.Control {...input}
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                readOnly={readOnly}/>

            {touched &&
                ((error && <p style={{ color: "red" }}>{error}</p>) ||
                    (warning && <p style={{ color: "brown" }}>{warning}</p>))}
        </Col>
    </Row>
);

const mapStateToProps = (state) => {
    return {
        initialValues: {
            name: state.users.getUserDetail.name,
            phone: state.users.getUserDetail.phone,
            address: state.users.getUserDetail.address,
            age: state.users.getUserDetail.age,
        }
    };
};

class FormComponent extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Field
                                type="text"
                                name="name"
                                component={renderField}
                                label="Name :"
                            />
                        </FormGroup>
                    </Col>

                    <Col md={6}>
                        <FormGroup>
                            <Field
                                type="text"
                                name="address"
                                component={renderField}
                                label="Address :"
                            />
                        </FormGroup>
                    </Col>

                    <Col md={6}>
                        <FormGroup>
                            <Field
                                type="text"
                                name="phone"
                                component={renderField}
                                label="Phone :"
                            />
                        </FormGroup>
                    </Col>

                    <Col md={6}>
                        <FormGroup>
                            <Field
                                type="text"
                                name="age"
                                component={renderField}
                                label="Age :"
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row className="mt-2 mb-3">
                    <Col md="12" >
                        <FormGroup>
                            <Button
                                variant="success"
                                className="text-white"
                                type="submit"
                                disabled={this.props.submitting}
                            >
                                Submit
                            </Button>
                        </FormGroup>
                    </Col>
                </Row>
            </form>
        )
    }
}



FormComponent = reduxForm({
    form: "formUser",
    validate: UserValidation,
    enableReinitialize: true,
})(FormComponent);
export default connect(mapStateToProps, null)(FormComponent);
