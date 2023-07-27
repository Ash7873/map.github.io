import React from 'react';
import { Form, Select, Button } from 'antd';

const { Option } = Select;

const FormInput = ({ regions, selectedRegion, onSelectRegion, onSubmit }) => {
  return (
    <Form layout="vertical">
      <Form.Item label="Select Region">
        <Select value={selectedRegion} onChange={onSelectRegion}>
          {regions.map((region) => (
            <Option key={region} value={region}>
              {region}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={onSubmit}>
          Load
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormInput;