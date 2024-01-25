import './styles.css';
import homeIcon from '../../assets/home.svg';
import productsIcon from '../../assets/products.svg';
import { useEffect, useState } from 'react';
import { UserDTO } from '../../models/user';
import * as userService from '../../services/user-service';
import LoggedUser from '../LogedUser';
import { Link, NavLink } from 'react-router-dom';

export default function HeaderAdmin() {
  const [, setUser] = useState<UserDTO>();

  useEffect(() => {
    userService.findMe()
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.log('Error', error);
      })
  }, []);

  return (
    <header className="dsc-header-admin">
      <nav className="dsc-container">
        <Link to="/">
          <h1>DSCommerce</h1>
        </Link>
        <div className="dsc-navbar-right">
          <div className="dsc-menu-items-container">
            <NavLink
              to="/admin/home"
              className={({ isActive }) => isActive ? "dsc-menu-item-active" : ""}
            >
              <div className="dsc-menu-item">
                <img src={homeIcon} alt="Início" />
                <p>Início</p>
              </div>
            </NavLink>
            <NavLink
              to="/admin/products"
              className={({ isActive }) => isActive ? "dsc-menu-item-active" : ""}
            >
              <div className="dsc-menu-item">
                <img src={productsIcon} alt="Cadastro de produtos" />
                <p>Produtos</p>
              </div>
            </NavLink>
          </div>
          <LoggedUser />
        </div>
      </nav>
    </header>
  )
}
