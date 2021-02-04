import './App.css';
import { Layout, Menu, PageHeader, Breadcrumb, Row, Col } from 'antd';
import React from 'react';
import Carousel from './components/CarouselComponent';
import News from './components/NewComponent';

const { Header, Content, Footer } = Layout;

function App() {
  // const fn = () => {
  //   let data = {
  //     "nameKanji": "情報",
  //     "userName":"userName 1  6",
  //     "nameAlphabet": "vantu",
  //     "roleType":  "Super Admin",
  //     "mailAddress": "tu.nguyenvan@vti.com.vn",
  //     "department": "VTI",
  //     "phoneNumber": "0965268724",
  //     "position": "dev",
  //     "company_id":1,
  //     "companyId": 1,
  //     "linkedProjects": [1, 2]
  // };
  // for(let i = 0; i < 100; i ++){
  //   setTimeout(() => {
  //     data.userName = "user_000000123" + i; 
  //     data.mailAddress = "tu.nguyenvan12"+ i+"@vti.com.vn"
  //     fetch('http://localhost:8888/drone/api/users', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(data),
  //     })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log('Success:', data);
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //     });
  //   });
    
  // }
    
  // }
  const routes = [
    {
      path: 'index',
      breadcrumbName: 'First-level Menu',
    },
    {
      path: 'first',
      breadcrumbName: 'Second-level Menu',
    },
    {
      path: 'second',
      breadcrumbName: 'Third-level Menu',
    },
  ];
  return (
    <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 10%' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">
      <Carousel/>
      <PageHeader
        className="site-page-header"
        title="Tin tức & Sự kiện"
        style={{paddingLeft: 0}}
      />
      <Row style={{
        display: 'flex',
        justifyContent:"space-between"
      }}>
        <Col span={7}>
          <News/>
        </Col>
        <Col span={7}>
          <News/>
        </Col>
        <Col span={7}>
          <News/>
        </Col>
      </Row>
      <PageHeader
        className="site-page-header"
        title="Tin tức & Sự kiện"
        style={{paddingLeft: 0}}
      />
      <Row style={{
        display: 'flex',
        justifyContent:"space-between"
      }}>
        <Col span={5}>
          <News/>
        </Col>
        <Col span={5}>
          <News/>
        </Col>
        <Col span={5}>
          <News/>
        </Col>
        <Col span={5}>
          <News/>
        </Col>
        
      </Row>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  );
}

export default App;
