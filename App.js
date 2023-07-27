import logo from './logo.svg';
import './App.css';




import React, { useState } from 'react';
import { Layout } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import FormInput from './FormInput';
import RegionInfo from './RegionInfo';
import OSMMap from './OSMMap';
import './App.css';

const { Header, Sider, Content, Footer } = Layout;

const App = () => {
  const [selectedRegion, setSelectedRegion] = useState('');
  const regionData = useSelector((state) => state.regionData);
  const collapsed = useSelector((state) => state.sidebar.collapsed);
  const dispatch = useDispatch();

  const handleSidebarToggle = () => {
    // Implement the toggle sidebar action using Redux here
  };

  const regions = ['United States', 'India', 'United Kingdom'];

  const handleSelectRegion = (value) => {
    setSelectedRegion(value);
  };

  const handleLoadRegion = () => {
    // Implement the logic to fetch and load region data using Redux actions
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={handleSidebarToggle}>
        {/* Sidebar content */}
        <FormInput
          regions={regions}
          selectedRegion={selectedRegion}
          onSelectRegion={handleSelectRegion}
          onSubmit={handleLoadRegion}
        />
      </Sider>
      <Layout>
        <Header className="header">
          {/* Header content */}
        </Header>
        <Content className="content">
          {/* OSMMap component */}
          <OSMMap selectedRegion={selectedRegion} />
        </Content>
        <Footer className="footer">
          {/* Plain text footer */}
        </Footer>
      </Layout>
      <RegionInfo regionData={regionData} />
    </Layout>
  );
};

export default App;



