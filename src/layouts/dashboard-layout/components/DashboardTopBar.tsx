/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo } from 'react'
import { Layout, MenuProps, Typography, Dropdown, Avatar, Menu, Space } from "antd"
import {
    UserOutlined,
    SettingOutlined,
    EyeOutlined,
    LogoutOutlined,
} from '@ant-design/icons';
import { useRouter } from 'next/router';

const DashboardTopBar = () => {
    const { Header } = Layout
    const { push } = useRouter();

    const handleSignout = async () => {
        push('/');
    };
    const items: MenuProps["items"] = useMemo(() => ([
        { label: "Profile", key: "profile", icon: <UserOutlined /> },
        { label: "Settings", key: "settings", icon: <SettingOutlined /> },
        { label: "View Profile", key: "viewProfile", icon: <EyeOutlined /> },
        { label: 'Signout', key: 'signout', icon: <LogoutOutlined />, onClick: handleSignout },
    ]), [handleSignout])

    return (
        <Header className='flex justify-between item-center'>
            <Typography.Title className='text-white'>Dashboard</Typography.Title>
            <Dropdown arrow placement="bottomCenter" overlay={<Menu items={items} />} className='mt-4'>
                <Space className='flex justify-center items-center'>
                    <Avatar src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" />
                </Space>
            </Dropdown>
        </Header>
    )
}

export default DashboardTopBar
