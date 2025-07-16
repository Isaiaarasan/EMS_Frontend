import React from 'react';

const Footer = () => {
  const styles = {
    footer: {
      background: 'linear-gradient(90deg, #232526 0%, #414345 100%)',
      color: '#b2ebf2',
      textAlign: 'center',
      padding: '1.5rem 0',
      fontSize: '1.08rem',
      letterSpacing: '1px',
      borderTop: '2px solid #00bcd4',
      boxShadow: '0 -2px 12px rgba(0,0,0,0.10)',
      fontFamily: 'Segoe UI, Arial, sans-serif',
      marginTop: '2rem',
    }
  };

  return (
    <footer style={styles.footer}>
      <p>© 2025 EMS. All rights reserved.</p>
    </footer>
  );
};

export default Footer;