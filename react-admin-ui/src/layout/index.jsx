import {LaptopOutlined, DownOutlined, NotificationOutlined, UserOutlined} from '@ant-design/icons';
import {ExclamationCircleOutlined} from '@ant-design/icons'
import {Breadcrumb, Layout, Menu, Dropdown, Space, Typography, Input, Button, Modal} from 'antd';
import React from 'react';
import Logo from '../logo.svg'
import AvatarHuaji from '../assert/img/avatar/avatar-huaji.jpg'
import {Outlet, useNavigate} from "react-router-dom";
import MySider from './sider/index'
import MyBread from "./breadcrumb";
import Avatar from "antd/es/avatar/avatar";

const {confirm} = Modal

const {Header, Content} = Layout;


const operation = () => {
    alert('hello')
}


const showPromiseConfirm = () => {

    confirm({
        title: '确认退出?',
        icon: <ExclamationCircleOutlined/>,
        content: '退出后将清空登录信息！',
        cancelText: '取消',
        okText: '确认',

        onOk() {
            window.location.href = '/login'
        },

        onCancel() {
        },
    });
};


const menu = (
    <Menu
        selectable
        defaultSelectedKeys={['1']}
        items={[
            {
                key: '1',
                label: (
                    <a href="/user/setting">
                        个人中心
                    </a>
                ),
            },
            {
                key: '2',
                label: (
                    <a onClick={showPromiseConfirm}>
                        退出
                    </a>
                ),
            },
        ]}
    />
);


const MyLayout = () => (
    <Layout>
        <Header className="header">
            <img className="header-logo" src={Logo} alt=""/>
            <div className="header-dropdown">
                <Dropdown overlay={menu}>
                    <Typography.Link>
                        <Space>
                            <Avatar src={AvatarHuaji} alt="" title="默认头像内容"/>
                            <DownOutlined/>
                        </Space>
                    </Typography.Link>
                </Dropdown>
            </div>
        </Header>
        <Layout>
            <MySider/>
            <Layout style={{padding: '0 24px 24px'}}>
                <MyBread/>
                <Content className="site-layout-background"
                         style={{padding: 24, margin: 0, minHeight: 280, }}>{/*内容渲染区域*/}
                    <Outlet/>
                </Content>
            </Layout>
        </Layout>
    </Layout>
);

export default MyLayout;