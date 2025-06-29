// src/pages/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <div style={{
            backgroundColor: '#f8f9fa',
            borderTop: '1px solid #e9ecef',
            padding: '24px 0',
            textAlign: 'center',
            color: '#6c757d',
            fontSize: '14px'
        }}>
            <p style={{ marginBottom: '12px', color: '#495057' }}>
                © 2025 Sriram Srinivasa Raghavan. Built with React and lots of ☕.
            </p>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '24px',
                flexWrap: 'wrap'
            }}>
                <a
                    href="mailto:hypowergravity@gmail.com"
                    style={{
                        color: '#007bff',
                        textDecoration: 'none',
                        fontWeight: '500'
                    }}
                >
                    Email
                </a>
                <a
                    href="https://github.com/hypowergravity"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        color: '#007bff',
                        textDecoration: 'none',
                        fontWeight: '500'
                    }}
                >
                    GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/sriram-srinivasa-raghavan-1816a9109"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        color: '#007bff',
                        textDecoration: 'none',
                        fontWeight: '500'
                    }}
                >
                    LinkedIn
                </a>
            </div>
        </div>
    );
};

export default Footer;