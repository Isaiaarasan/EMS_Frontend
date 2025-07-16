import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'linear-gradient(90deg, #232526 0%, #414345 100%)',
      padding: '1.2rem 2.5rem',
      color: '#e0e0e0',
      boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
      fontFamily: 'Segoe UI, Arial, sans-serif',
    },
    logo: {
      fontSize: '1.7rem',
      fontWeight: 'bold',
      color: '#00bcd4',
      textDecoration: 'none',
      letterSpacing: '2px',
      transition: 'color 0.3s',
    },
    navLinks: {
      display: 'flex',
      gap: '2rem',
    },
    navLink: {
      color: '#e0e0e0',
      textDecoration: 'none',
      fontWeight: 'bold',
      fontSize: '1.08rem',
      letterSpacing: '1px',
      padding: '0.3rem 0.8rem',
      borderRadius: '4px',
      transition: 'background 0.3s, color 0.3s',
    }
  };

  const handleMouseEnter = (e) => {
    e.target.style.background = '#00bcd4';
    e.target.style.color = '#232526';
  };
  const handleMouseLeave = (e) => {
    e.target.style.background = 'transparent';
    e.target.style.color = '#e0e0e0';
  };

  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.logo}>EMS</Link>
      <div style={styles.navLinks}>
        <Link to="/login" style={styles.navLink} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Login</Link>
        <Link to="/register" style={styles.navLink} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;