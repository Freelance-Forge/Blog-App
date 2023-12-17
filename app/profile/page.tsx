// UserProfile.tsx
import React from 'react';
import { Avatar, Paper, Typography } from '@mui/material';

const UserProfile: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '16px',
  };

  const avatarStyle: React.CSSProperties = {
    width: '80px',
    height: '80px',
  };

  const usernameStyle: React.CSSProperties = {
    marginTop: '8px',
    fontSize: '1.5rem',
  };

  return (
    <Paper elevation={3} style={containerStyle}>
      <Avatar alt="User Avatar" src="/path/to/avatar.jpg" style={avatarStyle} />
      <Typography variant="h6" style={usernameStyle}>
        Vikram Dave
      </Typography>
      <Typography variant="body2">
        BTech Computer Science Student
      </Typography>
      {/* Add more user details or customization as needed */}
    </Paper>
  );
};

export default UserProfile;
