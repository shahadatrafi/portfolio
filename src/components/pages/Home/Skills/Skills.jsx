import { FaCircleCheck } from "react-icons/fa6";

const Skills = () => {

  return (
    <div className="container mx-auto mb-28">
      <div>
        <h1 className="text-5xl font-bold text-center mb-20">My  <span className='text-cyan-400 border-b-4 border-cyan-500'> Expertise</span>  </h1>
      </div>
      <div className="mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full md:w-1/3">
            <h1 className="text-3xl text-center mb-10 font-bold">Frontend Skills</h1>
            <ul>
              <li className="font-semibold flex ml-[30%] mb-2 items-center gap-3 text-xl">
                <FaCircleCheck className="text-cyan-400" />
                <span>Html</span>
              </li>
              <li className="font-semibold flex ml-[30%] mb-2 items-center gap-3 text-xl">
                <FaCircleCheck className="text-cyan-400" />
                <span>Css</span>
              </li>
              <li className="font-semibold flex ml-[30%] mb-2 items-center gap-3 text-xl">
                <FaCircleCheck className="text-cyan-400" />
                <span>React.js</span>
              </li>
              <li className="font-semibold flex ml-[30%] mb-2 items-center gap-3 text-xl">
                <FaCircleCheck className="text-cyan-400" />
                <span>Daisy-UI</span>
              </li>
              <li className="font-semibold flex ml-[30%] mb-2 items-center gap-3 text-xl">
                <FaCircleCheck className="text-cyan-400" />
                <span>Bootstrap</span>
              </li>
              <li className="font-semibold flex ml-[30%] mb-2 items-center gap-3 text-xl">
                <FaCircleCheck className="text-cyan-400" />
                <span>Tailwind</span>
              </li>
              <li className="font-semibold flex ml-[30%] mb-2 items-center gap-3 text-xl">
                <FaCircleCheck className="text-cyan-400" />
                <span>Material-UI</span>
              </li>
              <li className="font-semibold flex ml-[30%] mb-2 items-center gap-3 text-xl">
                <FaCircleCheck className="text-cyan-400" />
                <span>Context API</span>
              </li>
              <li className="font-semibold flex ml-[30%] mb-2 items-center gap-3 text-xl">
                <FaCircleCheck className="text-cyan-400" />
                <span>JavaScript</span>
              </li>
              <li className="font-semibold flex ml-[30%] mb-2 items-center gap-3 text-xl">
                <FaCircleCheck className="text-cyan-400" />
                <span>React Router</span>
              </li>
            </ul>

          </div>
          <div className="w-full md:w-1/3">
            <h1 className="text-3xl text-center mb-10 font-bold">Backend Skills</h1>
            <ul>
              <li className="font-semibold flex ml-[30%] mb-2 items-center gap-3 text-xl">
                <FaCircleCheck className="text-cyan-400" />
                <span>Express JS</span>
              </li>
              <li className="font-semibold flex ml-[30%] mb-2 items-center gap-3 text-xl">
                <FaCircleCheck className="text-cyan-400" />
                <span>Node.js</span>
              </li>
              <li className="font-semibold flex ml-[30%] mb-2 items-center gap-3 text-xl">
                <FaCircleCheck className="text-cyan-400" />
                <span>MongoDB</span>
              </li>
              <li className="font-semibold flex ml-[30%] mb-2 items-center gap-3 text-xl">
                <FaCircleCheck className="text-cyan-400" />
                <span>Authentication</span>
              </li>
              <li className="font-semibold flex ml-[30%] mb-2 items-center gap-3 text-xl">
                <FaCircleCheck className="text-cyan-400" />
                <span>NPM</span>
              </li>
              <li className="font-semibold flex ml-[30%] mb-2 items-center gap-3 text-xl">
                <FaCircleCheck className="text-cyan-400" />
                <span>JWT Token</span>
              </li>
              <li className="font-semibold flex ml-[30%] mb-2 items-center gap-3 text-xl">
                <FaCircleCheck className="text-cyan-400" />
                <span>Stack Overflow</span>
              </li>
              <li className="font-semibold flex ml-[30%] mb-2 items-center gap-3 text-xl">
                <FaCircleCheck className="text-cyan-400" />
                <span>Axios</span>
              </li>
            </ul>

          </div>
          <div className="w-full md:w-1/3">
            <h1 className="text-3xl text-center mb-10 font-bold">Tools</h1>
            <ul>
              <li className="font-semibold flex ml-[30%] mb-2 items-center gap-3 text-xl">
                <FaCircleCheck className="text-cyan-400" />
                <span>Firebase</span>
              </li>
              <li className="font-semibold flex ml-[30%] mb-2 items-center gap-3 text-xl">
                <FaCircleCheck className="text-cyan-400" />
                <span>Github</span>
              </li>
              <li className="font-semibold flex ml-[30%] mb-2 items-center gap-3 text-xl">
                <FaCircleCheck className="text-cyan-400" />
                <span>Vercel</span>
              </li>
              <li className="font-semibold flex ml-[30%] mb-2 items-center gap-3 text-xl">
                <FaCircleCheck className="text-cyan-400" />
                <span>Netlify</span>
              </li>
              <li className="font-semibold flex ml-[30%] mb-2 items-center gap-3 text-xl">
                <FaCircleCheck className="text-cyan-400" />
                <span>Docker</span>
              </li>
              <li className="font-semibold flex ml-[30%] mb-2 items-center gap-3 text-xl">
                <FaCircleCheck className="text-cyan-400" />
                <span>AWS</span>
              </li>
              <li className="font-semibold flex ml-[30%] mb-2 items-center gap-3 text-xl">
                <FaCircleCheck className="text-cyan-400" />
                <span>NPM</span>
              </li>
              <li className="font-semibold flex ml-[30%] mb-2 items-center gap-3 text-xl">
                <FaCircleCheck className="text-cyan-400" />
                <span>SiteGround</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;