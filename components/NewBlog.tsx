import React from 'react';
import { Container, Paper, Typography, Avatar, TextField, Button } from '@mui/material';

interface NewBlogProps {
  title: string;
  description: string;
  image: string;
  author: string;
  authorImage: string;
}

const NewBlog: React.FC<NewBlogProps> = ({ title, description, image, author, authorImage }) => {
  const useStyles = {
    header: {
      position: 'relative',
      height: '200px',
      backgroundColor: '#333',
      color: '#fff',
      textAlign: 'left',
      padding: '12px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      borderRadius: '16px',
      margin: '0 auto', // Center the header
      maxWidth: '90%', // Adjust the width as needed
    } as React.CSSProperties,
    avatar: {
      width: '60px',
      height: '60px',
      marginRight: '8px',
    } as React.CSSProperties,
    contentContainer: {
      marginTop: '16px',
    },
    commentForm: {
      marginTop: '16px',
      border: 'none',
      padding: '16px',
      borderRadius: '8px',
    },
    commentButton: {
      marginTop: '8px',
      marginLeft: 'auto',
      outline: '1px solid #2196f3',
      backgroundColor: 'transparent',
      color: '#2196f3',
    } as React.CSSProperties,
  };

  return (
    <Container>
      {/* Header */}
      <Paper style={{ ...useStyles.header, backgroundImage: `url(${image})`, backgroundSize: 'cover' }} elevation={3}>
        <Typography variant="h4" component="h1" gutterBottom style={{ padding: '8px 0' }}>
          {title}
        </Typography>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Avatar style={useStyles.avatar} alt={author} src={authorImage} />
          <Typography variant="subtitle1">{`by ${author}`}</Typography>
        </div>
      </Paper>

      {/* Content */}
      <Container style={useStyles.contentContainer}>
        {/* Blog Content */}
        <Typography variant="body1" paragraph>
          {description}
        </Typography>

        {/* Comment Form */}
        <Paper elevation={3} style={useStyles.commentForm}>
          <Typography variant="h5" component="h2" gutterBottom>
            Leave a Comment
          </Typography>
          <form>
            <TextField label="Your Name" variant="outlined" margin="normal" fullWidth required />
            <TextField label="Your Comment" variant="outlined" margin="normal" fullWidth multiline rows={4} required />
            <Button style={useStyles.commentButton} type="submit">
              Submit Comment
            </Button>
          </form>
        </Paper>
      </Container>
    </Container>
  );
};

export default NewBlog;
