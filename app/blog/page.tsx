import React from "react";
import {
  Container,
  Paper,
  Typography,
  Avatar,
  TextField,
  Button,
} from "@mui/material";

interface NewBlogProps {
  title?: string;
  description?: string;
  image?: string;
  author?: string;
  authorImage?: string;
}

const NewBlog: React.FC<NewBlogProps> = ({
  title = "How Beautiful Our Life Is",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat aliquet lorem. Fusce semper efficitur augue, at vehicula sem pretium ac. Cras dignissim turpis ipsum, eu laoreet eros pharetra dapibus. Praesent eros turpis, cursus vel sem vel, iaculis lobortis tortor. Integer laoreet erat a leo viverra facilisis. Nullam id cursus tellus, nec fermentum purus. In mattis ac est in vehicula. Ut volutpat, libero quis pretium bibendum, libero nisl tempus lacus, vel consectetur augue nisi sed elit. Mauris elementum vitae diam eget pretium. Etiam sollicitudin metus in lacus malesuada finibus. Pellentesque tincidunt nisi vel enim consectetur, nec venenatis leo feugiat. Cras ut pellentesque mi. Quisque feugiat iaculis justo in vulputate. Nulla facilisi. Sed vitae vehicula purus, quis ornare metus. Quisque vitae dignissim ante, vitae blandit turpis. Nam vel cursus turpis. Suspendisse tempor nisi odio, ornare euismod metus dignissim vel. Vivamus accumsan iaculis nunc ac scelerisque. Ut iaculis consectetur sem, consequat accumsan justo aliquet rhoncus. Curabitur laoreet, arcu quis consectetur semper, mi diam sollicitudin erat, at iaculis augue lorem eget lacus. Maecenas mattis tempus suscipit. Praesent vestibulum tincidunt ligula, ut maximus lorem pharetra in. Fusce ornare dolor risus, a fermentum purus suscipit nec. Vestibulum varius turpis tortor, at cursus dolor dapibus accumsan. Nam porttitor massa nisl, non viverra mi luctus sed. Proin eu augue quis eros convallis luctus. Duis eleifend urna vitae enim aliquam, at vestibulum leo hendrerit. Nulla lacinia nisl vel venenatis feugiat. Morbi gravida semper congue. Suspendisse ac quam nec nunc rutrum tempus. Nam dignissim eros vel ex sollicitudin ornare. Praesent et lacus sapien. Suspendisse mauris ex, rhoncus ac ligula at, pharetra vehicula nisi. Etiam in nisi laoreet, tempus ligula a, hendrerit nunc. Sed eget urna lobortis, sagittis massa nec, finibus erat. Nullam a ligula quis ex faucibus ultricies id et risus. Fusce pellentesque rutrum nulla vel imperdiet. Duis interdum quam at mi mattis consectetur. Curabitur ut suscipit risus. Aenean tempor ullamcorper nisl, sit amet condimentum nunc gravida nec. Donec pretium pulvinar diam ut porta. Nulla lobortis sapien sollicitudin, commodo tellus vel, placerat dui.",
  image = "https://source.unsplash.com/random?wallpapers",
  author = "Jatin",
  authorImage = "https://source.unsplash.com/random?portrait",
}) => {
  const useStyles = {
    header: {
      position: "relative",
      height: "200px",
      backgroundColor: "#333",
      color: "#fff",
      textAlign: "left",
      padding: "12px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      borderRadius: "16px",
      margin: "0 auto", // Center the header
      maxWidth: "90%", // Adjust the width as needed
    } as React.CSSProperties,
    avatar: {
      width: "60px",
      height: "60px",
      marginRight: "8px",
    } as React.CSSProperties,
    contentContainer: {
      marginTop: "16px",
    },
    commentForm: {
      marginTop: "16px",
      border: "none",
      padding: "16px",
      borderRadius: "8px",
    },
    commentButton: {
      marginTop: "8px",
      marginLeft: "auto",
      outline: "1px solid #2196f3",
      backgroundColor: "transparent",
      color: "#2196f3",
    } as React.CSSProperties,
  };

  return (
    <Container>
      {/* Header */}
      <Paper
        style={{
          ...useStyles.header,
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
        }}
        elevation={3}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          style={{ padding: "8px 0" }}
        >
          {title}
        </Typography>
        <div style={{ display: "flex", alignItems: "center" }}>
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
            <TextField
              label="Your Name"
              variant="outlined"
              margin="normal"
              fullWidth
              required
            />
            <TextField
              label="Your Comment"
              variant="outlined"
              margin="normal"
              fullWidth
              multiline
              rows={4}
              required
            />
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
