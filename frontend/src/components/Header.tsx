import * as React from 'react';
import { Link } from 'react-router-dom';

import { Dropdown } from './Dropdown';

export interface IHeaderProps {
  dropdownLists: string[];
  pathname: string;
}

export class Header extends React.Component<IHeaderProps> {
  public checkActive(urls: string[]) {
    let active = false;
    urls.forEach((url) => {
      if (this.props.pathname === '/' + url) {
        active = true;
      }
    });
    return active ? 'active' : '';
  }

  public componentDidMount() {
    const elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
  }

  public render() {
    return (
      <div>
        <nav>
          <div className='nav-wrapper'>
            <div className='container'>
              <a className='brand-logo'><Link to='/'>Logo</Link></a>
              <a href='#' data-target='nav-mobile' className='sidenav-trigger'><i className='material-icons'>menu</i></a>
              <ul id='nav-desktop' className='right hide-on-med-and-down'>
                <li className={this.checkActive(['react'])} key='react'><Link to='/react'>React</Link></li>
                <li className={this.checkActive(this.props.dropdownLists)} key='materialize'>
                  <a className='dropdown-button' href='#' data-target='header-dropdown-desktop'>Dropdown</a>
                </li>
                <li className={this.checkActive(['404'])} key='404'><Link to='/404'>NotFound</Link></li>
                <Dropdown id='header-dropdown-desktop' dropdownLists={this.props.dropdownLists} />
              </ul>
            </div>
          </div>
        </nav>
        <ul id='nav-mobile' className='sidenav'>
          <li className={this.checkActive(['react'])} key='react'><Link to='/react'>React</Link></li>
          <li className={this.checkActive(this.props.dropdownLists)} key='materialize'>
            <a className='dropdown-button' href='#' data-target='header-dropdown-mobile'>Dropdown</a>
          </li>
          <li className={this.checkActive(['404'])} key='404'><Link to='/404'>NotFound</Link></li>
          <Dropdown id='header-dropdown-mobile' dropdownLists={this.props.dropdownLists} />
        </ul>
      </div>
    );
  }
}
