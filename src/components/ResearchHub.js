// src/components/ResearchHub.js
import React from 'react';
import './ResearchHub.css'; // Import the CSS file for styling

function ResearchHub() {
  const researchArticles = [
    { id: 1, title: 'Understanding Machine Learning', author: 'Alice Smith', link: '#' },
    { id: 2, title: 'Deep Learning for Beginners', author: 'Bob Johnson', link: '#' },
    { id: 3, title: 'Natural Language Processing Techniques', author: 'Charlie Brown', link: '#' },
    { id: 4, title: 'Data Science Methodologies', author: 'David Wilson', link: '#' },
  ];

  return (
    <div className="research-hub">
      <h2>Research Hub</h2>
      <ul className="article-list">
        {researchArticles.length > 0 ? (
          researchArticles.map((article) => (
            <li key={article.id} className="article-item">
              <a href={article.link} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
              <p>by {article.author}</p>
            </li>
          ))
        ) : (
          <p>No research articles available.</p>
        )}
      </ul>
    </div>
  );
}

export default ResearchHub;
