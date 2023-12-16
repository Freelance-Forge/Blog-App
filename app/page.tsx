"use client";

import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import Header from "@/components/Header";
import NewBlog from "@/components/NewBlog";
import MainFeaturedPost from "@/components/MainFeaturedPost";
import FeaturedPost from "@/components/FeaturedPost";
import Main from "@/components/Main";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import post1 from "@/components/blog-post.1.md";

const defaultTheme = createTheme();
const sections = [
  { title: "Technology", url: "#" },
  { title: "Design", url: "#" },
  { title: "Culture", url: "#" },
  { title: "Business", url: "#" },
  { title: "Politics", url: "#" },
  { title: "Opinion", url: "#" },
  { title: "Science", url: "#" },
  { title: "Health", url: "#" },
  { title: "Style", url: "#" },
  { title: "Travel", url: "#" },
];

const mainFeaturedPost = {
  title: "Title of a longer featured blog post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/random?wallpapers",
  imageText: "main image description",
  linkText: "Continue reading…",
};

const newBlog = {
  title: "Title of a longer featured blog post",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat aliquet lorem. Fusce semper efficitur augue, at vehicula sem pretium ac. Cras dignissim turpis ipsum, eu laoreet eros pharetra dapibus. Praesent eros turpis, cursus vel sem vel, iaculis lobortis tortor. Integer laoreet erat a leo viverra facilisis. Nullam id cursus tellus, nec fermentum purus. In mattis ac est in vehicula. Ut volutpat, libero quis pretium bibendum, libero nisl tempus lacus, vel consectetur augue nisi sed elit. Mauris elementum vitae diam eget pretium. Etiam sollicitudin metus in lacus malesuada finibus. Pellentesque tincidunt nisi vel enim consectetur, nec venenatis leo feugiat. Cras ut pellentesque mi. Quisque feugiat iaculis justo in vulputate. Nulla facilisi. Sed vitae vehicula purus, quis ornare metus. Quisque vitae dignissim ante, vitae blandit turpis. Nam vel cursus turpis. Suspendisse tempor nisi odio, ornare euismod metus dignissim vel. Vivamus accumsan iaculis nunc ac scelerisque. Ut iaculis consectetur sem, consequat accumsan justo aliquet rhoncus. Curabitur laoreet, arcu quis consectetur semper, mi diam sollicitudin erat, at iaculis augue lorem eget lacus. Maecenas mattis tempus suscipit. Praesent vestibulum tincidunt ligula, ut maximus lorem pharetra in. Fusce ornare dolor risus, a fermentum purus suscipit nec. Vestibulum varius turpis tortor, at cursus dolor dapibus accumsan. Nam porttitor massa nisl, non viverra mi luctus sed. Proin eu augue quis eros convallis luctus. Duis eleifend urna vitae enim aliquam, at vestibulum leo hendrerit. Nulla lacinia nisl vel venenatis feugiat. Morbi gravida semper congue. Suspendisse ac quam nec nunc rutrum tempus. Nam dignissim eros vel ex sollicitudin ornare. Praesent et lacus sapien. Suspendisse mauris ex, rhoncus ac ligula at, pharetra vehicula nisi. Etiam in nisi laoreet, tempus ligula a, hendrerit nunc. Sed eget urna lobortis, sagittis massa nec, finibus erat. Nullam a ligula quis ex faucibus ultricies id et risus. Fusce pellentesque rutrum nulla vel imperdiet. Duis interdum quam at mi mattis consectetur. Curabitur ut suscipit risus. Aenean tempor ullamcorper nisl, sit amet condimentum nunc gravida nec. Donec pretium pulvinar diam ut porta. Nulla lobortis sapien sollicitudin, commodo tellus vel, placerat dui.",
  image: "https://source.unsplash.com/random?wallpapers",
  authorImage: "https://source.unsplash.com/random?portrait",
  author: "Jatin",
};


const featuredPosts = [
  {
    title: "Featured post",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random?wallpapers",
    imageLabel: "Image Text",
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random?wallpapers",
    imageLabel: "Image Text",
  },
];

const posts = [post1];

const sidebar = {
  title: "About",
  description:
    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
  archives: [
    { title: "March 2020", url: "#" },
    { title: "February 2020", url: "#" },
    { title: "January 2020", url: "#" },
    { title: "November 1999", url: "#" },
    { title: "October 1999", url: "#" },
    { title: "September 1999", url: "#" },
    { title: "August 1999", url: "#" },
    { title: "July 1999", url: "#" },
    { title: "June 1999", url: "#" },
    { title: "May 1999", url: "#" },
    { title: "April 1999", url: "#" },
  ],
  social: [
    { name: "GitHub", icon: GitHubIcon },
    { name: "Twitter", icon: TwitterIcon },
    { name: "Facebook", icon: FacebookIcon },
  ],
};

export default function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{mt: 3}}>
          <NewBlog
            title={newBlog.title}
            description={newBlog.description}
            image={newBlog.image}
            authorImage={newBlog.authorImage}
            author={newBlog.author}
    />
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
          
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}
