import { Layout, Menu } from 'antd'
import styles from './index.module.scss'
import React, { useMemo, useState } from 'react'
import SubMenu from 'antd/lib/menu/SubMenu'
import { Route, Link, useLocation } from 'react-router-dom'
import Son from './components/Son'

const { Header, Content, Sider } = Layout

const MyLayout = () => {
  const [son, setSon] = useState([
    { name: '子菜单1-1', path: '/home/son1-1' },
    { name: '子菜单1-2', path: '/home/son1-2' },
  ])
  const [son2, setSon2] = useState([
    { name: '子菜单2-1', path: '/home/son2-1' },
    { name: '子菜单2-2', path: '/home/son2-2' },
  ])
  const location = useLocation()
  const changeSon = useMemo(
    (value) => {
      console.log(value)
      if (location.pathname === '/home/son1-1') {
        const res = son?.map((item) => {
          console.log(item)
          if (item.path === '/home/son1-1') {
            console.log(111)
            return { ...item, name: value }
          }
          return item
        })
      }
    },
    [location, son]
  )
  return (
    <Layout className={styles.root}>
      <Header className="header">
        <div className="logo" />
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu mode="inline" theme="dark">
            <SubMenu key="sub1" title="菜单一">
              {son?.map((x, y) => (
                <Menu.Item key={x.name} className="item">
                  {x.name}
                  <Link to={x.path}></Link>
                </Menu.Item>
              ))}
            </SubMenu>
            <SubMenu key="sub2" title="菜单二">
              {son2.map((x, y) => (
                <Menu.Item key={x.name} className="item">
                  {x.name}
                  <Link to={x.path}></Link>
                </Menu.Item>
              ))}
            </SubMenu>
          </Menu>
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Route path="/home/son1-1">
              <Son name='子菜单1-1' changeSon={changeSon}></Son>
            </Route>
            <Route path="/home/son1-2">
              <Son name="子菜单1-2" changeSon={changeSon}></Son>
            </Route>
            <Route path="/home/son2-1">
              <Son name="子菜单2-1" changeSon={changeSon}></Son>
            </Route>
            <Route path="/home/son2-2">
              <Son name="子菜单2-2" changeSon={changeSon}></Son>
            </Route>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default MyLayout
