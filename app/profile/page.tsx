import React from 'react';
import { Avatar, Paper, Typography, Link, Divider } from '@mui/material';

const UserProfile: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '16px',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: '16px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    color: '#fff',
    animation: 'gradientAnimation 10s infinite alternate', // Added animation
  };

  const avatarStyle: React.CSSProperties = {
    width: '100px',
    height: '100px',
    marginBottom: '16px',
  };

  const usernameStyle: React.CSSProperties = {
    marginTop: '8px',
    fontSize: '1.5rem',
  };

  const detailsStyle: React.CSSProperties = {
    marginTop: '8px',
    textAlign: 'center',
  };

  const dividerStyle: React.CSSProperties = {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    margin: '12px 0',
  };

  return (
    <Paper elevation={3} style={containerStyle}>
      <Avatar alt="User Avatar" src="https://source.unsplash.com/random?portrait" style={avatarStyle} />
      <Typography variant="h6" style={usernameStyle}>
        Vikram Dave
      </Typography>

      <Divider style={dividerStyle} />

      <div style={detailsStyle}>
  
        <Typography variant="body2">
          Email: vikram.dave@example.com
        </Typography>
        <Typography variant="body2">
          <Link href="https://twitter.com/vikramdave" color="inherit" target="_blank" rel="noopener">
            Twitter
          </Link>
          {' | '}
          <Link href="https://linkedin.com/in/vikramdave" color="inherit" target="_blank" rel="noopener">
            LinkedIn
          </Link>
          {' | '}
          <Link href="https://instagram.com/vikramdave" color="inherit" target="_blank" rel="noopener">
            Instagram
          </Link>
        </Typography>
      </div>
    </Paper>
  );
};

export default UserProfile;
