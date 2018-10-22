import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from 'actions';

// TODO: when invalid login, error missage persists if we change to Sign Up

import AuthFormField from 'components/auth/AuthFormField';

class Signin extends Component {
    onSubmit = (formProps) => {
        this.props.signin(formProps, () => {
            this.props.history.push('/');
        });
    };

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <fieldset>
                    <Field
                        label="User Name"
                        name="name"
                        type="text"
                        component={AuthFormField}
                        autoComplete="none"
                    />
                </fieldset>
                <fieldset>
                    <Field
                        label="Password"
                        name="password"
                        type="password"
                        component={AuthFormField}
                        autoComplete="none"
                    />
                </fieldset>
                <div>{this.props.errorMessage}</div>
                <button>Sign In!</button>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.errorMessage };
}

function validate(values) {
    const errors = {};

    // Validate the imputs from 'values'
    if (!values.name) {
        errors.name = "Required";
    }

    if (!values.password) {
        errors.password = "Required";
    }

    // if errors is empty, the form is fine to submit
    // If errors has *any* properties, redux form assumes form is invalid
    return errors;
}

export default compose(
    reduxForm({
        validate,
        form: 'signin'
    }),
    connect(mapStateToProps, actions)
)(Signin);