import { useEffect, useState } from "react";
import ProjectCard from "./projectCard";
import { Link } from "react-router-dom";

const Projects = () => {

    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('./projects.json')
            .then(res => res.json())
        .then(data => setProjects(data))
    },[])

    return (
        <div className="container mx-auto mb-28" id="projects">
            <div>
                <h1 className="text-5xl font-bold text-center mb-20">My Popular <span className='text-cyan-400 border-b-4 border-cyan-500'>Projects</span></h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {
                    projects.map(project => <ProjectCard
                        key={project.id}
                        project={project}
                    ></ProjectCard>)
                }
            </div>
            <div className="mt-8 text-center">
            <Link target="_blank"><button className="btn bg-cyan-400 text-black tracking-wider hover:bg-cyan-600 ">view All Projects</button></Link>
            </div>
        </div>
    );
};

export default Projects;