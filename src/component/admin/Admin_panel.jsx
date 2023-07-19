import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Views } from './Views';
import { GET } from './GET';
import { Patch } from './Patch';

export const Admin_panel = () => {
    const [activeComponent, setActiveComponent] = useState('');
  
    const handleComponentChange = (componentName) => {
      setActiveComponent(componentName);
    };
  
    const renderComponent = () => {
      switch (activeComponent) {
        case 'admin':
          return <Views />;
        case 'get':
          return <GET />;
        case 'patch':
          return <Patch />;
        default:
          return <GET />;
      }
    };

    return (
        <div>

            <body className="sidebar-is-reduced boys">
                <div className="l-sidebar">
                    <div className="logo">
                        <div className="logo__txt">ADMIN <br />
                            PANEL</div>
                    </div>
                    <div className="l-sidebar__content">
                        <nav className="c-menu js-menu">
                            <ul className="u-list">
                                <li className="c-menu__item is-active plsi" onClick={() => handleComponentChange('admin')} data-toggle="tooltip" title="Flights" typeof='submit'>
                                    <div className="c-menu__item__inner"><i className="fa-solid fa-plus fa-2xl plsi"></i>
                                        <div className="c-menu-item__title"><span>Flights</span></div>
                                    </div>
                                </li>
                                <li className="c-menu__item has-submenu" onClick={() => handleComponentChange('patch')} data-toggle="tooltip" title="Modules">
                                    <div className="c-menu__item__inner"><i className="fa-solid fa-pencil fa-xl" ></i>
                                        <div className="c-menu-item__title"><span>Modules</span></div>
                                        <div className="c-menu-item__expand js-expand-submenu"><i className="fa fa-angle-down"></i></div>
                                    </div>
                                </li>
                                <li className="c-menu__item has-submenu" onClick={() => handleComponentChange('get')} data-toggle="tooltip" title="Statistics">
                                    <div className="c-menu__item__inner"><i className="fa-regular fa-eye fa-xl"></i>
                                        <div className="c-menu-item__title"><span>Statistics</span></div>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </body>
            <main className="l-main">
                {renderComponent()}
            </main>
        </div>
    )
}
