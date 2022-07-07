import {Button, Checkbox, Form, Input} from 'antd';
import React from 'react';
import '../index.css'
import {useNavigate} from "react-router-dom";



const Forget = () => {



    const handleValidPhone = (e) => {
        console.log('a', e.target.value)
    }

    const navigate = useNavigate()
    const labelCol = 4
    const wrapperCol = 16

    const onFinish = (values) => {
        console.log('Success:', values);
        navigate('/dashboard')
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="login">

            <Form
                className="login-form"
                name="basic"
                labelCol={{
                    span: labelCol,
                }}
                wrapperCol={{
                    span: wrapperCol,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <h2 className="login-title">忘记密码</h2>

                <Form.Item
                    className="login-item login-username"
                    label="手机号"
                    name="phone"

                    rules={[
                        {
                            required: true,
                            message: '请输入手机号!',
                        },
                    ]}
                >
                    <Input onChange={e => handleValidPhone(e)}/>
                </Form.Item>

                <Form.Item
                    label="验证码"
                    name="code"
                    className="login-item login-form-code"

                    rules={[
                        {
                            required: true,
                            message: '请输入验证码!',
                        },
                    ]}
                >
                    <Input.Password
                        style={{width: '200px', minWidth: '200px', maxWidth: '250px', marginRight: '30px'}}/>
                    <Button disabled={true}>获取验证码</Button>
                </Form.Item>

                <Form.Item className="login-item login-button"
                           wrapperCol={{
                               offset: labelCol,
                               span: wrapperCol,
                           }}
                >
                    <Button type="primary" htmlType="submit" className="login-form-btn">登录</Button>
                </Form.Item>

                <Form.Item className="login-item"
                           wrapperCol={{
                               offset: labelCol,
                               span: wrapperCol,
                           }}>
                    <a href="/login">登录</a>
                </Form.Item>

            </Form>
        </div>

    );
};

export default Forget;