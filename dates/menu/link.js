import React from 'react'
import {Link} from 'react-router-dom';
import { IconGroup, Icon } from 'semantic-ui-react';

const  LinkMenu = ({herf, name, content}) =>  {
  let size = "small";
  if (herf != "/add-action") {
    size = "big"
  }

  return (
    <div>
      <Link to={herf}  >
      <Icon name={name} size={size} size="big"/>
      {content}
      </Link>
    </div>
  )
}

export default LinkMenu
