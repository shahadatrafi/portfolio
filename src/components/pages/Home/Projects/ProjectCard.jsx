/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ProjectCard = ( {project} ) => {
    
    const { img, liveLink, codeLink, name } = project;

    return (
        <div className="card w-72 h-[500px] bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body -mt-44 bg-base-100 opacity-0 hover:opacity-100 duration-500">
                <h2 className="card-title text-xl text-cyan-400">{name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-between">
                    <Link to={liveLink} target="_blank"><button className="btn btn-xs bg-cyan-400 text-black tracking-wider hover:bg-cyan-600 ">Preview</button></Link>
                    <Link to={codeLink} target="_blank"><button onClick={codeLink} className="btn btn-xs bg-cyan-400 text-black tracking-wider hover:bg-cyan-600 ">View Code</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;