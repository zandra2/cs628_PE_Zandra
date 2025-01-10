import React from 'react';
import './Resume.css';

const Resume = () => {
    return (
        <div className="resume">
            <header className="header">
                <h1>Zandra Nguyen</h1>
                <p>1234 1st Street, Bellevue, WA, 98007 | (425) 123-9999 | nguyenzandra@cityuniversity.edu</p>
            </header>
            <section className="section">
                <h2>Education</h2>
                <div className="education">
                    <h3>Master of Science in Computer Science</h3>
                    <p>City University of Seattle | 123 125th AVE S | Dec 2025</p>
                    <p>GPA: 4.0</p>
                </div>
            </section>
            <section className="section">
                <h2>Skills</h2>
                <div className="skills">
                    <p>Programming Language: Python, Javascript, Typescript</p>
                    <p>Framework & Library: Python, React, Angular, Express.js, Node.js</p>
                    <p>Database: MySQL, Postgres, MongoDB, Microsoft SQL Server</p>
                    <p>Version Control: Git</p>
                </div>
            </section>
            <section className="section">
                <h2>Projects</h2>
                <div className="projects">
                    <h3>Memory Game</h3>
                    <p>Built a memory game using React and deployed it on Github</p>
                    <p>
                        Source code: {" "}
                        <a
                            href="https://zandra2.github.io/memory-card/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://zandra2.github.io/memory-card/
                        </a>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Resume;