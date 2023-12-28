import React, { ReactNode } from 'react'
import { Layout } from "antd"
import { DashboardSideBar, DashboardTopBar } from './components'

type DashboardLayoutProps = {
    children: ReactNode
}

const DashboardLayout = (props: DashboardLayoutProps) => {
    const { children } = props
    const { Content } = Layout

    return (
        <Layout className='h-full'>
            <DashboardTopBar />
            <Layout>
                <DashboardSideBar />
                <Content className='overflow-y-auto'>
                    {children}
                </Content>
            </Layout>
        </Layout>
    )
}

const WithAuth = (props: DashboardLayoutProps) => {
    return (
        <DashboardLayout {...props} />
    )
}

export default WithAuth