import React, { PureComponent } from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import App from './App'
import { LocaleProvider } from 'antd'
import memorize from 'memoize-one'

import { addLocaleData, IntlProvider } from 'react-intl'

let appLocale = {}
class Theme extends PureComponent {

    decideLang = memorize((lang) => {
        if (lang === 'en') {
            appLocale = require('Langs/en-US').default
            addLocaleData(appLocale.data)
        } else {
            appLocale = require('Langs/zh-CH').default
            addLocaleData(appLocale.data)
        }
    })

    render() {
        this.decideLang(this.props.language)
        return (
            <LocaleProvider locale={appLocale.antd}>
                <IntlProvider locale={appLocale.locale} messages={appLocale.messages}>
                    <Router>
                        <App />
                    </Router>
                </IntlProvider>
            </LocaleProvider>
        );
    }
}


Theme.propTypes = {
    language: PropTypes.string.isRequired
};

const mapStateToProps = state => {
    const { language } = state;
    return {
        language
    };
};

const mapDispatchToProps = null


export default connect(mapStateToProps, mapDispatchToProps)(Theme);

