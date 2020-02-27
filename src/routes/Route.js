import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

export default function RouteWrapper({
    component: Component,
    isPrivate,
    ...rest
}) {
    const signet = false;

    if (!signet && isPrivate) {
        return <Redirect to="/" />;
    }

    if (signet && !isPrivate) {
        return <Redirect to="/dashboard" />;
    }

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Route {...rest} component={Component} />;
}

RouteWrapper.propTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
        .isRequired
};

RouteWrapper.defaultProps = {
    isPrivate: false
};
