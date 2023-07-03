import { Outlet } from "react-router-dom";
import { Link } from 'react-scroll'

import profilePic from '../../../assets/Shahadat Rafi 2.jpg'

const Main = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col ">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <div className="avatar justify-center my-16">
                        <div className="w-48 rounded-full">
                            <img src={profilePic} />
                        </div>
                    </div>
                    <li className="font-semibold text-xl"><Link to="banner" spy={true} smooth={true} offset={50} duration={500} >Home</Link></li>
                    <li className="font-semibold text-xl"><Link to="about" spy={true} smooth={true} offset={50} duration={500} >About Me</Link></li>
                    <li className="font-semibold text-xl"><Link to="skills" spy={true} smooth={true} offset={50} duration={500} >Skills</Link></li>
                    <li className="font-semibold text-xl"><Link to="projects" spy={true} smooth={true} offset={50} duration={500} >Projects</Link></li>
                    <li className="font-semibold text-xl"><Link to="contact" spy={true} smooth={true} offset={50} duration={500} >Contact</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Main;