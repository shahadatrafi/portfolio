

const Skills = () => {

  return (
    <div className="container mx-auto mb-28">
      <div>
        <h1 className="text-5xl font-bold text-center mb-20">My  <span className='text-cyan-400 border-b-4 border-cyan-500'> Expertise</span>  </h1>
      </div>
      <div className="mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full md:w-1/3">
            <h1 className="text-3xl text-center font-bold">Frontend Skills</h1>
          </div>
          <div className="w-full md:w-1/3">
            <h1 className="text-3xl text-center font-bold">Backend Skills</h1>
          </div>
          <div className="w-full md:w-1/3">
            <h1 className="text-3xl text-center font-bold">Tools</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;