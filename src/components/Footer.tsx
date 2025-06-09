import React from 'react';

interface FooterSection {
  title: string;
  content: React.ReactNode;
}

const Footer: React.FC = () => {
  const footerSections: FooterSection[] = [
    {
      title: "SaaS Product",
      content: <p>Your solution for [problem your SaaS solves].</p>
    },
    {
      title: "Contact",
      content: (
        <>
          <p>Email: info@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </>
      )
    },
    {
      title: "Links",
      content: (
        <ul>
          <li><a href="/terms">Terms of Service</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
        </ul>
      )
    }
  ];

  return (
    <footer className="Footer">
      <div className="footer-content">
        {footerSections.map((section, index) => (
          <div key={index} className="footer-section">
            <h3>{section.title}</h3>
            {section.content}
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} SaaS Product. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer; 