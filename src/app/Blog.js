import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { request } from 'graphql-request';
import { Segment, Image } from 'semantic-ui-react';
import NavBar from './NavBar';
import Footer from './Footer'
const API_KEY = 'f90d2070-2844-420f-8391-be56993b8389'; // Replace with your actual Hashnode API key

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const query = `
      query Publication {
        publication(host: "austinohlfs.hashnode.net") {
          isTeam
          title
          posts(first: 5) {
            edges {
              node {
                title
                brief
                url
                coverImage {
                  url
                  attribution
                  photographer
                }
              }
            }
          }
        }
      }
      `;
    
      const headers = {
        Authorization: `Bearer ${API_KEY}`,
      };
    
      try {
        const response = await request('https://gql.hashnode.com/', query, null, headers);
        setBlogs(response.publication.posts.edges.map(edge => edge.node));
        console.log(response);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };
    
    fetchBlogPosts();
  }, []);

  return (
    <StyledContainer>
      <NavBar />
      <StyledSection>
        <StyledHeader>Blog</StyledHeader>
        <Segment.Group>
          {blogs.map(blog => (
            <BlogItem key={blog.url}>
              <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap', alignItems: 'center', width: '100%' }}>
              <BlogImage src={blog.coverImage.url} alt="Thumbnail" />
              <BlogTitle style={{textAlign: 'center', fontSize: '200%'}}><strong>{blog.title}</strong></BlogTitle>
              </div>
              <BlogContent>
                <BlogBrief>{blog.brief}</BlogBrief>
                <BlogLink href={blog.url} target="_blank" rel="noopener noreferrer">Read more...</BlogLink>
              </BlogContent>
            </BlogItem>
          ))}
        </Segment.Group>
      </StyledSection>
    </StyledContainer>
  );
};

export default Blog;

const StyledContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  color: #e0e0e0;
  background: #121212;
  padding: 20px;
`;

const StyledSection = styled.section`
  padding: 60px 0;
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
`;

const StyledHeader = styled.h1`
  text-align: center;
  font-size: 2.5em;
  margin-bottom: 50px;
  background: linear-gradient(45deg, #6a11cb, #2575fc);
  -webkit-background-clip: text;
  color: transparent;
`;

const BlogItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  background-color: #1e1e1e;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
`;

const BlogImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px;
`;

const BlogContent = styled.div`
  padding: 20px;
`;

const BlogTitle = styled.h2`
  font-size: 1.5em;
  color: #f5f5f5;
  display: flex;
  flex-wrap: wrap
`;

const BlogBrief = styled.p`
  margin: 10px 0;
  color: #b0b0b0;
`;

const BlogLink = styled.a`
  color: #2575fc;
  text-decoration: underline;
  transition: color 0.3s ease;

  &:hover {
    color: #6a11cb;
  }
`;
