import {LaptopOutlined, DownOutlined, NotificationOutlined, UserOutlined} from '@ant-design/icons';
import {Breadcrumb, Layout, Menu, Dropdown, Space, Typography,Input} from 'antd';
import React from 'react';
import Logo from '../logo.svg'
import {Outlet} from "react-router-dom";
import MySider from './sider/index'
import MyBread from "./breadcrumb";

const {Header, Content} = Layout;


const operation = ()=>{
    alert('hello')
}



const menu = (
    <Menu
        selectable
        defaultSelectedKeys={['1']}
        onClick={operation}
        items={[
            {
                key: '1',
                label: '个人中心',
            },
            {
                key: '2',
                label: '退出',
            },
        ]}
    />
);

// const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
//     const key = String(index + 1);
//     return {
//         key: `sub${key}`,
//         icon: React.createElement(icon),
//         label: `subnav ${key}`,
//         children: new Array(4).fill(null).map((_, j) => {
//             const subKey = index * 4 + j + 1;
//             return {
//                 key: subKey,
//                 label: `option${subKey}`,
//             };
//         }),
//     };
// });

// const onSearch = (value) => console.log(value);

const MyLayout = () => (
    <Layout>
        <Header className="header">
            {/*<div className="logo"/>*/}
            <img className="header-logo" src={Logo} alt=""/>
            {/*<Input.Search  className="header-search" placeholder="input search text" onSearch={onSearch} enterButton />*/}
            <div className="header-dropdown">
                <Dropdown overlay={menu}>
                    <Typography.Link>
                        <Space>
                            操作
                            <DownOutlined/>
                        </Space>
                    </Typography.Link>
                </Dropdown>
            </div>
        </Header>
        <Layout>
            <MySider/>
            <Layout style={{padding: '0 24px 24px', backgroundColor: 'teal'}}>
                <MyBread/>
                <Content className="site-layout-background"
                         style={{padding: 24, margin: 0, minHeight: 280, backgroundColor: 'skyblue'}}>{/*内容渲染区域*/}
                    <Outlet/>
                </Content>
            </Layout>
        </Layout>
    </Layout>
);

export default MyLayout;