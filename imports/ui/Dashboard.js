import React from 'react';
import ShieldsList from './ShieldsList';
import PrivateHeader from './PrivateHeader';

export default () => {
  return (
    <div>
      <PrivateHeader title="Netpro"/>
      <div className="page-content">
        <ShieldsList/>
      </div>
    </div>
  );
};
