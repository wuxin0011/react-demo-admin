import {Breadcrumb} from "antd";
import React from "react";

const MyBread = () => {
    return (
        <Breadcrumb style={{margin: '16px 0', backgroundColor: 'orange'}}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default MyBread