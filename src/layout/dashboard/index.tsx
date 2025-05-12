import React from 'react';
import { Link, Outlet } from 'react-router-dom';
const Layout: React.FC = () => {
  return (
    <div>


      

  
      <main>
        <Outlet /> {/* Child routes will render here */}
      </main>
    </div>
  );
};

export default Layout;
