import React from 'react'

function ProjectDetails(props) {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis modi vero dolorem! In aperiam eum sed voluptates dolore, praesentium minima, repellendus hic unde quos sequi cupiditate. Odio distinctio corporis accusamus!</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Shawn</div>
                    <div>9th June 2020, 2am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
