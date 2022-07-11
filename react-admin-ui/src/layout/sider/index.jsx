import {LaptopOutlined, NotificationOutlined, UserOutlined} from '@ant-design/icons';
import {Layout, Menu} from 'antd';
import React from 'react';
import {routerList} from "../../router";

const items2 = [
    {
        key: `router-item-1`,
        icon: <UserOutlined/>,
        label: `用户管理`,
        children:
            [
                {
                    key: 'router-item-1-1',
                    label: `权限管理`,
                    icon: <UserOutlined/>,
                },
                {
                    key: 'router-item-1-2',
                    label: `用户操作`,
                    icon: <UserOutlined/>,
                },
                {
                    key: 'router-item-1-3',
                    label: `操作...`,
                    icon: <UserOutlined/>,
                }
            ]

    }
]

const MySider = () => {
    return (
        <Layout.Sider width={200} className="site-layout-background" trigger={null}>
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{
                    height: '100%',
                    borderRight: 0,
                }}
                items={items2}
            />
        </Layout.Sider>
    )
}
export default MySider