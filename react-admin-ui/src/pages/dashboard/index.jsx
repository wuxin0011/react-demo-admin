import {Card, Col, Row} from 'antd';

const arr = [
    {
        id: '1',
        title: 'Card卡片',
        content: '最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。'
    },
    {
        id: '2',
        title: 'Avatar头像',
        content: '用来代表用户或事物，支持图片、图标或字符展示。'
    },
    {
        id: '3',
        title: 'List列表',
        content: '最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面。'
    },
]

const cards = () => {
    return (
        arr.map((item) => {
            return (
                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <Card title={item.title} bordered={false} key={`card-${item.id}`}>
                        {item.content}
                    </Card>
                </Col>
            )
        })
    )
}


const Dashboard = () => {
    return (
        <div className="site-card-wrapper">
            <Row gutter={16}>
                {cards()}
            </Row>
        </div>
    )
}

export default Dashboard