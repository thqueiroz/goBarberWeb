import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

import AuthLayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';

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

    const Layout = signet ? AuthLayout : DefaultLayout;

    return <Route {...rest} render={props => (
        <Layout>
            <Component {...props} />
        </Layout>
    )} />;
}

RouteWrapper.propTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
        .isRequired
};

RouteWrapper.defaultProps = {
    isPrivate: false
};
