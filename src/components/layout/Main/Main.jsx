import { Outlet } from "react-router-dom";
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
                    <li className="font-semibold text-xl"><a>Home</a></li>
                    <li className="font-semibold text-xl"><a>About Me</a></li>
                    <li className="font-semibold text-xl"><a>Skills</a></li>
                    <li className="font-semibold text-xl"><a>Projects</a></li>
                    <li className="font-semibold text-xl"><a>Testimonial</a></li>
                    <li className="font-semibold text-xl"><a>Contact</a></li>
                </ul>

            </div>
        </div>
    );
};

export default Main;