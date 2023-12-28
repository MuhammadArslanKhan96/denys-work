import {
    HomeOutlined,
    ShoppingCartOutlined,
    UnorderedListOutlined,
    UserOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import Link from 'next/link';
import React, { useMemo } from 'react';

const { Sider } = Layout;

interface MenuItem {
    label: React.ReactNode;
    icon?: React.ReactNode;
    key: string;
    children?: MenuItem[];
}

function DashboardSideBar() {
    const menuItems: MenuItem[] = useMemo(() => ([
        {
            label: <Link href="/dashboard">Dashboard</Link>,
            icon: <HomeOutlined />,
            key: 'dashboard',
        },
        {
            label: <Link href="/dashboard">Products</Link>,
            icon: <ShoppingCartOutlined />,
            key: 'dashboard/products',
        },
        {
            label: 'Categeories',
            icon: <UnorderedListOutlined />,
            key: 'dashboard/categories',
            children: [
                {
                    label: 'Product 1',
                    key: 'dashboard/categories/simple',
                    icon: <ShoppingCartOutlined />
                },
                {
                    label: 'Product 2',
                    key: '/dashboard/categories/product',
                    icon: <ShoppingCartOutlined />
                },
            ],
        },
        {
            key: 'sub1',
            icon: <UserOutlined />,
            label: 'Company User',
            children: [
                {
                    key: '/dashboard/user/1',
                    label: 'Users 1',
                    icon: <UserOutlined />

                },
                {
                    key: '/dashboard/user/2',
                    label: 'Users 2',
                    icon: <UserOutlined />

                },
            ],
        },
    ]), []);

    return (
        <Sider className='bottom-0 flex  gap-x1-0'>
            <Menu
                theme='dark'
                mode='inline'
                className='!w-full'
            >
                {menuItems.map(item =>
                    item.children ? (
                        <Menu.SubMenu key={item.key} title={item.label} icon={item.icon}>
                            {item.children.map(subItem => (
                                <Menu.Item key={subItem.key} icon={subItem.icon}>
                                    {subItem.label}
                                </Menu.Item>
                            ))}
                        </Menu.SubMenu>
                    ) : (
                        <Menu.Item key={item.key} icon={item.icon}>
                            {item.label}
                        </Menu.Item>
                    )
                )}
            </Menu>
        </Sider>
    );
}

export default DashboardSideBar;
