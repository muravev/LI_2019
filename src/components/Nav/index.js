import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import './index.css';


class Nav extends React.Component {
  render() {
    return (
      <div className='navigation'>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName={'active-link'}>Главная</NavLink>
            </li>
            <li>
              <NavLink exact to="/users" activeClassName={'active-link'}>Пользователи</NavLink>
            </li>
            <li>
              <NavLink exact to="/logout" activeClassName={'active-link'}>Выход</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
