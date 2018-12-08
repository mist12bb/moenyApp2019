import React from 'react';
import { sum_array_objs } from '../../../util/mr.util/funcions';
import {connect} from "react-redux";

import { acitons } from './init';
import { bindActionCreators } from 'redux';
import { set_actions_sum } from '../../redux.moeny-report/actions/actions.report';

const ReportSum = ({sumRedux, onSetAmountSum, sum}) => {
  
  return (
    <div>
      <p onChange={()=>{
        
      }}>{sum}</p>
    </div>
  );
};
const mapStateToProps = (state) => ({
  sumRedux: state.sumAct
})
const mapDispatchToProps = (dispatch)=>{
  return bindActionCreators({
    onSetAmountSum: set_actions_sum
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportSum)