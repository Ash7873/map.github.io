import React from 'react';
import { Card } from 'antd';

const RegionInfo = ({ regionData }) => {
  return (
    <Card title="Region Info">
      <ul>
        <li>Currency: {regionData.currency}</li>
        <li>Speed Units: {regionData.speedUnits}</li>
        <li>Distance Units: {regionData.distanceUnits}</li>
        <li>Volume Units: {regionData.volumeUnits}</li>
        <li>Timezone(s): {regionData.timezones.join(', ')}</li>
      </ul>
    </Card>
  );
};

export default RegionInfo;