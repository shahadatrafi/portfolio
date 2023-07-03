/* eslint-disable react/prop-types */
import { FaCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {

    const { img, liveLink, codeLink, name, features } = project;

    return (
        <div className="card w-96 md:w-80 mx-auto h-[500px] bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body -mt-56 bg-base-100 opacity-0 hover:opacity-100 duration-500">
                <h2 className="card-title text-xl text-cyan-400">{name}</h2>
                <ul>
                    {
                        features.map(f => <li className="font-semibold flex mb-2 items-center gap-3 "
                        key={f.id}>
                            <FaCircleCheck className="text-cyan-400" />
                            <span>{f}</span>
                        </li>)
                    }
                </ul>
                <div className="card-actions justify-between">
                    <Link to={liveLink} target="_blank"><button className="btn btn-xs bg-cyan-400 text-black tracking-wider hover:bg-cyan-600 ">Preview</button></Link>
                    <Link to={codeLink} target="_blank"><button onClick={codeLink} className="btn btn-xs bg-cyan-400 text-black tracking-wider hover:bg-cyan-600 ">View Code</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;