import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './BlogPost.css';
import blogPosts from '../data/blogPosts';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="blog-post">
        <h1>Post Not Found</h1>
        <Link to="/blog" className="back-link">← Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="blog-post">
      <Link to="/blog" className="back-link">← Back to Blog</Link>
      <article className="post-content">
        <header className="post-header">
          <h1 className="post-title">{post.title}</h1>
          <div className="post-meta">
            <span className="post-date">{post.date}</span>
            <span className="post-read-time">{post.readTime} min read</span>
          </div>
        </header>
        <div className="post-body">
          {post.content.map((paragraph, index) => (
            <p key={index} className="post-paragraph">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
