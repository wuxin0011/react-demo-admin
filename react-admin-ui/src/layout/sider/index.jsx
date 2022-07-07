import {LaptopOutlined, NotificationOutlined, UserOutlined} from '@ant-design/icons';
import {Layout, Menu} from 'antd';
import React from 'react';
import {routerList} from "../../router";

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
    const key = String(index + 1);
    return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `subnav ${key}`,
        children: new Array(4).fill(null).map((_, j) => {
            const subKey = index * 4 + j + 1;
            return {
                key: subKey,
                label: `option${subKey}`,
            };
        }),
    };
});

// console.log('sessionStorage getitem routerList',routerList)

const MySider = () => {
    return (
        <Layout.Sider width={200} className="site-layout-background" trigger={null} >
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