import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import { request } from 'graphql-request';
import { Segment, Image } from 'semantic-ui-react';
import Footer from './Footer';

const API_KEY = 'f90d2070-2844-420f-8391-be56993b8389'; // Replace with your actual Hashnode API key

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Function to fetch blogs from Hashnode GraphQL API
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
        console.log(response)
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };
    
    // Call the fetchBlogPosts function
    fetchBlogPosts();
  }, []);

  return (
    <div>

      <h1 style={{ textAlign: 'center' }}>Blog</h1>
      <Segment.Group>
        {blogs.map(blog => (
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center',  backgroundColor: '#f9f9f9', padding: '20px', marginBottom: '20px', borderRadius: '10px'}}>
            <img style={{ width: '200px', height: '200px', borderRadius: '10px' }} src={blog.coverImage.url} alt="Thumbnail" />
          <div key={blog.url} className="blog-item" style={{  padding: '20px', marginBottom: '20px' }}>
          
          <div>
              <h2>{blog.title}</h2>
              <p>{blog.brief}</p>
              <a href={blog.url} target="_blank" rel="noopener noreferrer">Read more</a>
              </div>
          </div>
      </div>
        ))}
      </Segment.Group>
    </div>
    
  );
};

export default Blog;
