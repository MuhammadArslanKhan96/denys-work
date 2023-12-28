import { MailOutlined, LockOutlined } from '@ant-design/icons';
import useAuth from '@src/hooks/useAuth';
import { LoginProps } from '@src/types';
import { Card, Form, Button, Input, Typography, message } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const LoginPage = () => {
    const { push } = useRouter();
    const [loading, setloading] = useState<boolean>(false);
    const { login } = useAuth();

    const onFinish = async (props: LoginProps) => {
        try {
            setloading(true);
            await login(props);
            push('/dashboard');
            message.success('Login successful!');
        } catch (error) {
            console.error(error);
            message.error('Invalid credentials. Please try again.');
        } finally {
            setloading(false);
        }
    };

    return (
        <div className="flex justify-center items-center h-[91.2vh] w-full bg-gradient-to-r from-blue-500 to-purple-500">
            <Card className="p-8 rounded-lg shadow-lg bg-white">
                <Typography.Title level={2} className="text-center text-2xl mb-6 text-gray-800">
                    Welcome Back!
                </Typography.Title>
                <Form
                    labelCol={{ span: 6 }}
                    onFinish={onFinish}
                    disabled={loading}
                    className="w-[400px] flex justify-center flex-col"
                >
                    <Form.Item
                        name="email"
                        rules={[
                            { required: true, message: 'Please enter your email address!' },
                            { type: 'email', message: 'Please enter a valid email address!' },
                        ]}
                    >
                        <Input
                            type="email"
                            placeholder="Enter your email address"
                            prefix={<MailOutlined />}
                            className="rounded-md"
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please enter your password!' }]}
                    >
                        <Input.Password
                            placeholder="Enter your password"
                            prefix={<LockOutlined />}
                            className="rounded-md"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" block loading={loading}>
                            Login
                        </Button>
                    </Form.Item>
                    <Form.Item className="flex justify-center">
                        <Link href="/auth/signup">
                            <span className="text-gray-500 hover:text-gray-700">Create a new account? Sign up</span>
                        </Link>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

export default LoginPage;
