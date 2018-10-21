import React from 'react';

const AuthFormField = (props) => {
        const { meta: { touched, error } } = props;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        return (
            <div className={className}>
                <label>{props.label}</label>
                <input
                    className="form-control"
                    type={props.type}
                    {...props.input}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        );
}

export default AuthFormField;