import React, { useState } from 'react';
import { Card, Form, Input, Button, Typography, message } from 'antd';
import { SignUpProps } from '@src/types';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { MailOutlined, UserOutlined } from '@ant-design/icons';

const SignUpPage = () => {
    const [loading, setloading] = useState<boolean>(false);
    const { asPath, push } = useRouter();

    const onFinish = async (props: SignUpProps) => {
        try {
            setloading(true);
            push('/dashboard');
            message.success('Your account is successfully created!');
        } catch (error) {
            console.error(error);
        } finally {
            setloading(false);
        }
    };

    return (
        <div className="flex justify-center items-center h-[91.2vh] bg-gradient-to-r from-blue-500 to-purple-500">
            <Card className="p-8 rounded-lg shadow-lg bg-white">
                <Typography.Title level={2} className="text-center text-2xl mb-6 text-gray-800">
                    Create Account
                </Typography.Title>
                <Form
                    labelCol={{ span: 6 }}
                    onFinish={onFinish}
                    className="w-[400px] flex flex-col"
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please enter a name' }]}
                    >
                        <Input placeholder="Enter your username" prefix={<UserOutlined />} className="rounded-md" />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[
                            { required: true, message: 'Please enter your email address!' },
                            { type: 'email', message: 'Please enter a valid email address!' },
                        ]}
                    >
                        <Input type="email" placeholder="Enter your email address" prefix={<MailOutlined />} className="rounded-md" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            { required: true, message: 'Please enter a password' },
                            { min: 6, message: 'Must be at least six characters!' },
                        ]}
                    >
                        <Input.Password placeholder="Enter your password" className="rounded-md" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" block loading={loading}>
                            Register
                        </Button>
                    </Form.Item>
                    <Form.Item className="flex justify-center">
                        <Link href="/auth/login">
                            <span className="text-gray-500 hover:text-gray-700">Already have an account? Login</span>
                        </Link>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

export default SignUpPage;
