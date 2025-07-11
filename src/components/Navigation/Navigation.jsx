import React, { useContext } from 'react';
import UserContext from '../User/User';
import './Navigation.css';

export default function Navigation() {
  const user = useContext(UserContext);

  return(
    <div className="navigation-wrapper">
      Welcome, {user.name}
    </div>
  )
}
