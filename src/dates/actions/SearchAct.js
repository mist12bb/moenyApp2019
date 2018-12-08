import React from 'react'
import { Input } from 'semantic-ui-react'
import { withState } from 'recompose';

const InputExampleIcon = ({value, setValue, bindSearchToActions}) => {
  return (
    <Input icon='search' placeholder='Search...' onChange={
      (e) =>{
        const searchValue = e.target.value;
      setValue(searchValue);
      bindSearchToActions(searchValue)
      }

    } />
  )
}

export default withState("value", "setValue", 0)(InputExampleIcon);