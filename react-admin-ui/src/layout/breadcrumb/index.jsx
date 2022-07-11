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



const MyBread = () => {
    return (
        <Breadcrumb style={{margin: '16px 0'}}>
            {
                itemList.map((item, index) => {
                    return <Breadcrumb.Item key={`Breadcrumb.Item${index}`}>{item.name}</Breadcrumb.Item>
                })
            }
        </Breadcrumb>
    )
}

export default MyBread