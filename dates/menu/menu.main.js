import React from 'react';
import { Menu, Input, Icon} from "semantic-ui-react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import "./menu-main.style.css";
import LinkMenu from './link';
const MenuMain = () => {
  return (
    <Menu vertical>
          <Menu.Item>
            <Input placeholder="search"/>
          </Menu.Item>
          <Menu.Item>
            home
              <Menu.Menu>
              <Menu.Item>
             
               <LinkMenu herf={"/actions"} name={"home"}/>
              </Menu.Item>
                <Menu.Item>
                <LinkMenu name={'reddit'} herf={"/report"}/>
                </Menu.Item>
                <Menu.Item>
                        <LinkMenu name={"add circle"} herf={"/add-action"}/>
                </Menu.Item>
              </Menu.Menu>
          </Menu.Item>
          <Menu.Item>
            <Icon name="grid layout"/>
            Browse
          </Menu.Item>
        </Menu>
  
  );
};

export default MenuMain;