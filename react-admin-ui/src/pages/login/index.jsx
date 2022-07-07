import {Button, Checkbox, Form, Input} from 'antd';
import React from 'react';
import './index.css'
import {useNavigate} from "react-router-dom";

const Login = () => {

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
                <h2 className="login-title">登录</h2>

                <Form.Item
                    className="login-item login-username"
                    label="验证"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: '输入手机号或者用户名...',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    className="login-item"
                    rules={[
                        {
                            required: true,
                            message: '请输入密码!',
                        },
                    ]}
                >
                    <Input.Password/>

                </Form.Item>
                <Form.Item className="login-item login-check-forget"
                           wrapperCol={{
                    offset: labelCol,
                    span: wrapperCol,
                }}>
                    <Checkbox name="remember" defaultChecked={true}>记住我</Checkbox>
                    <a className="login-form-forgot" href="/forget">忘记密码</a>
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
                    <a href="/register">注册</a>
                </Form.Item>

            </Form>
        </div>

    );
};

export default Login;