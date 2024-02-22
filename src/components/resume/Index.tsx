import React from "react";
import { Link } from "react-router-dom";

const Resume: React.FC = () => {
    return (
        <div>
            <h1>Resume</h1>
            <Link to="/projects/music-app">Music App</Link>
        </div>
    );
};

export default Resume;
