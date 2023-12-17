import React from 'react'
import {useLocation} from 'react-router-dom';
import "./Footer.css"

function Footer() {
  const location = useLocation();
  const showFooter = !location.pathname.startsWith('/bug/');

  return showFooter &&
    <footer>
      <p>&copy; 2023 Bug List. All rights reserved.</p>
    </footer>;
}

export default Footer