import React, { Component } from 'react';
import {  Form, Formik } from 'formik';
import FormikControls from '../FormikControl/FormikControls';
import * as Yup from 'yup';

class Auth extends Component {
    state = {
        initialValues: {
            email: "",
            password: "",
            confirmPassword: ""
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid Email Formate').required('Email is required'),
            password: Yup.string().min(6,'Password Minimum 6 characters').required('Password is required'),
            confirmPassword: Yup.string().oneOf([Yup.ref('password'), ''], 'Password must match').required('Confirm Password is required'),
        })
    }
    onSubmit = (values, onSubmitProps) => {
        onSubmitProps.setSubmitting(false);
        onSubmitProps.resetForm();
        console.log(JSON.parse(JSON.stringify(values)));
    }
    render() {
        return (
            <div className="container my-5 col-4" style={{
                border: "1px solid gray",
                boxShadow: "1px 1px #888",
                borderRadius: "5px",
                padding: "20px",
                marginBottom: "10px"
            }}>
                <Formik
                    initialValues={this.state.initialValues}
                    validationSchema={this.state.validationSchema}
                    onSubmit={this.onSubmit}
                    enableReinitialize={true}
                >
                    {
                        formik => {
                            return (
                                <Form>
                                    <div className="form-group">
                                        <FormikControls control="input" type="email" name="email" label=" Email * : " />
                                    </div>
                                    <div className="form-group">
                                        <FormikControls control="input" type="password" name="password" label=" Password * : " />
                                    </div>
                                    <div className="form-group">
                                        <FormikControls control="input" type="password" name="confirmPassword" label="Confirm Password * : " />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-success" disabled={!formik.isValid || formik.isSubmitting}>
                                            Submit
                                        </button>
                                    </div>
                                </Form>
                            )
                        }
                    }
                </Formik>
            </div>
        )
    }
};

export default Auth;
