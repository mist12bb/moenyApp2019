import React from 'react';
import {Icon} from "react-icons-kit"
import Table from './Table';
import { actions } from './util';

const Box = () => {
  return (
    <div>
      <div>
      <Table actions={actions}></Table>
      </div>
    </div>
  );
};

export default Box;