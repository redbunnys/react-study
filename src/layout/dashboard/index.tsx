import React from 'react';
import { Link, Outlet } from 'react-router-dom';
const Layout: React.FC = () => {
  return (
    <div>
      <nav style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', gap: '15px' }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/test">test</Link></li>
        </ul>
      </nav>
      <main>
        <Outlet /> {/* Child routes will render here */}
      </main>
    </div>
  );
};

export default Layout;
