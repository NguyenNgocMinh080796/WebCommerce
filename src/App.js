import './App.css';
import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom'
import { Button, Col, FloatButton, Form, Input, Layout, Popover, Row, Space, Typography } from 'antd';
import MenuComponent from './component/MenuComponent'
import ContentComponent from './component/ContentComponent'
import FooterComponent from './component/FooterComponent'
import { useDispatch } from 'react-redux';
import { ProductAction, SearchProductAction } from './redux/action/ProductAction';

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography

function App() {
  const dispatch = useDispatch()

  return (
    <BrowserRouter>
      <Layout className="layout">
        <Header
          style={{
            display: 'flex',
            alignItems: 'center',
            position: 'fixed',
            zIndex: 10,
            width: window.innerWidth
          }}
        >
          <Row justify="center" align="middle">
            <Col span={6}>
              <NavLink to='/' ><Title italic style={{ color: '#fff', width: 400, cursor: 'pointer' }}>E - COMMERCE</Title></NavLink>
            </Col>
            <Col span={17} >
              <MenuComponent />
            </Col>
          </Row>
        </Header>

        <Content
          style={{
            minHeight: window.innerHeight,
            overflowY: 'auto'
          }}
        >
          <div>
            <ContentComponent />
          </div>
        </Content>

        <Footer
          style={{
            color: '#fff',
            textAlign: 'center',
            backgroundColor: '#001529',
            marginTop: 100
          }}
        >
          <FooterComponent />
        </Footer>

      </Layout>

      <Popover
        placement='left'
        style={{ maxWidth: 300 }}
        content={
          <Form
            onFinish={(values) => { dispatch(SearchProductAction(values.productname)) }}
            autoComplete="off"
          >
            <Space direction='vertical'>
              <Text strong>What product are you looking for?</Text>

              <Space direction='horizontal' size='small'>
                <Form.Item name="productname">
                  <Input />
                </Form.Item>
                <Form.Item  >
                  <Button type="primary" htmlType="submit">
                    Search
                  </Button>
                </Form.Item>
                <Form.Item  >
                  <Button onClick={() => { dispatch(ProductAction()) }}>
                    Reset
                  </Button>
                </Form.Item>
              </Space>

            </Space>
          </Form>
        }
      >
        <FloatButton icon={<i className="fa-solid fa-magnifying-glass" />} trigger="click" />
      </Popover>

      {/* <FloatButton.Group icon={<i className="fa-solid fa-magnifying-glass" />} trigger="click">
        <Form
          onFinish={(values) => { dispatch(SearchProductAction(values.productname)) }}
          autoComplete="off"
          style={{
            left: 24 + 70,
            width: 500
          }}
        >
          <Space direction='vertical'>
            <Text strong>What product are you looking for?</Text>

            <Space direction='horizontal'>
              <Form.Item name="productname">
                <Input />
              </Form.Item>
              <Form.Item  >
                <Button type="primary" htmlType="submit">
                  Search
                </Button>
                <Button type="primary" htmlType="submit">
                  Search
                </Button>
              </Form.Item>
            </Space>

          </Space>
        </Form>
      </FloatButton.Group> */}

      <FloatButton.BackTop />
    </BrowserRouter>
  );
}

export default App;
