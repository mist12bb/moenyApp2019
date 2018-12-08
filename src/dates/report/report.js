import React from 'react';
import { Table, Tab, Label } from 'semantic-ui-react';
import SumEctActions from '../sum.etc';
import "./report.style.css"
const Report = () => {
  return (
    <div>
      <div className={"report__grid"}>
        <div className={"report__row"}>
        
        <div className={"report__col"} children={"Sum"}/>
        <div className={"report__col"} children={<SumEctActions as="sum"/>}/>
        </div>
        <div className={"report__row"}>
        
        <div className={"report__col"} children={"Mounty expenses"}/>
        <div className={"report__col"} children={<SumEctActions as="sumExps"/>}/>
        </div>
        <div className={"report__row"} >
        <div className={"report__col"} children={"Commtions"} />
        <div className={"report__col"} children={<SumEctActions as="comm"/>}/>
        
        </div>
      </div>
    </div>
  );
};

export default Report;