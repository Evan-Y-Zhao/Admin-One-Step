import React, { PureComponent } from 'react'
import { Layout, Tooltip, Icon } from 'antd'
import {
    Link
} from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { changeLang } from 'Actions/language'
import logo from 'Images/tfc-logo.png'
import { logout } from 'Actions/auth'
// import { T } from 'Utils/funcUtil'
import { getUserName } from 'Utils/jwtUtil';
// import SearchBox from './SearchBox'
// const Option = Select.Option
const { Header } = Layout


class HeaderWrapper extends PureComponent {

    handleChange = (value) => {
        this.props.changeLang(value)
    }

    logout = () => {
        this.props.logout()
        this.props.history.replace('/login')
    }

    render() {
        // const { language } = this.props

        return (
            <Header className="header">
                <div className="header-left">
                    <Link to='' className="logo">
                        <img src={logo} alt="logo" width="100%" />
                    </Link>
                </div>

                <div className="header-right">
                    <div className='title'>Finance AR Clearance Tool</div>
                    
                    <div className="ultra-right">
                        {/* <div className="language">
                        <Select defaultValue={language} onChange={this.handleChange}>
                            <Option value="en">English</Option>
                            <Option value="zh">中文</Option>
                        </Select>
                        </div> */}
                        {getUserName()}
                        <Tooltip placement="bottomRight" title={'logout'}>
                            <span className='logout-icon' onClick={this.logout}><Icon type="logout" /></span>
                        </Tooltip>
                    </div>


                </div>
            </Header>

        );
    }
}

HeaderWrapper.propTypes = {
    language: PropTypes.string.isRequired
};

const mapStateToProps = state => {
    const { language, auth } = state;
    return {
        language,
        userName: auth.userName
    };
};

const mapDispatchToProps = {
    changeLang,
    logout
}


export default connect(mapStateToProps, mapDispatchToProps)(HeaderWrapper);
