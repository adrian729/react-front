import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from 'actions';

class Signup extends Component {
    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    {...field.input}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }

    onSubmit = (formProps) => {
        this.props.signup(formProps, () => {
            this.props.history.push('/feature');
        });
    };

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <fieldset>
                    <label>User Name</label>
                    <Field
                        name="name"
                        type="text"
                        component={this.renderField}
                        autoComplete="none"
                    />
                </fieldset>
                <fieldset>
                    <label>Password</label>
                    <Field
                        name="password"
                        type="password"
                        component={this.renderField}
                        autoComplete="none"
                    />
                </fieldset>
                <div>{this.props.errorMessage}</div>
                <button>Sign Up!</button>
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
    const valid_chars = /^[a-zA-Z0-9!@#\$%\^&\*]*$/;

    if (!values.name) {
        errors.name = "Required";
    } else if (!valid_chars.test(values.name)) {
        errors.name = 'Contains an invalid character'
    }

    if (!values.password) {
        errors.password = "Required";
    } else if (!valid_chars.test(values.password)) {
        errors.password = 'Contains an invalid character'
    } else if (!/^(?=.*[a-z])/.test(values.password)) {
        errors.password = 'Must contain at least a lowercase alphabetical character'
    }else if (!/^(?=.*[A-Z])/.test(values.password)) {
        errors.password = 'Must contain at least an uppercase alphabetical character'
    }else if (!/^(?=.*[0-9])/.test(values.password)) {
        errors.password = 'Must contain at least a numeric character'
    } else if (values.password.length < 7) {
        errors.password = 'Must have 7 characters or more'
    }

    // if errors is empty, the form is fine to submit
    // If errors has *any* properties, redux form assumes form is invalid
    return errors;
}

export default compose(
    reduxForm({
        validate,
        form: 'signup'
    }),
    connect(mapStateToProps, actions)
)(Signup);