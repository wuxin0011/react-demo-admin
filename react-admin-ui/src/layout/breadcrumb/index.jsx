import {Breadcrumb} from "antd";
import React from "react";


const itemList = [
    {
        name: '首页'
    },
    {
        name: '列表'
    },
    {
        name: 'app'
    }
]

const getItemList = () => {
    return itemList.map((item, index) => {
        return <Breadcrumb.Item key={`Breadcrumb.Item${index}`}>{item.name}</Breadcrumb.Item>
    })
}


const MyBread = () => {
    return (
        <Breadcrumb style={{margin: '16px 0', backgroundColor: 'orange'}}>
            {
                getItemList()
            }
        </Breadcrumb>
    )
}

export default MyBread