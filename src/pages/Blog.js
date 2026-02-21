import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';
import blogPosts from '../data/blogPosts';

const Blog = () => {
  return (
    <div className="blog">
      <h1 className="page-title">Blog</h1>
      <div className="blog-posts">
        {blogPosts.map((post) => (
          <article key={post.id} className="blog-post-card">
            <div className="post-header">
              <h2 className="post-title">
                <Link to={`/blog/${post.id}`} className="post-title-link">
                  {post.title}
                </Link>
              </h2>
              <div className="post-meta">
                <span className="post-date">{post.date}</span>
                <span className="post-read-time">{post.readTime} min read</span>
              </div>
            </div>
            <p className="post-excerpt">{post.excerpt}</p>
            <Link to={`/blog/${post.id}`} className="read-more">
              Read More →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
