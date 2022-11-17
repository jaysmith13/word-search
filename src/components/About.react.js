import React from "react";

const About = () => (
    <div className="about-application">
        <h2>
            React Word-Search
        </h2>
    <p>Instructions and Rules: </p>
    <p>1. Please enter a list of names or phrases.</p>
    <p>2. Your entered list will be sorted by size. The biggest words first will be listed first.</p>
    <p>4. A blank grid will be generated that is 2 characters wider and taller than the longest word.</p>
    <p>5. A list of possibilities are made of all of the places the word could fit into the grid, with in different directions.</p>
    <p>6. If the words don't fit, the grid will increase in size to accommodate your list.</p>
    </div>
)


export default About