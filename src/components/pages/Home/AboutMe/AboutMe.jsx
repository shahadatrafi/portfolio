import profile from '../../../../assets/shahadatRafi.jpg'

const AboutMe = () => {


    return (
        <div className="hero my-32" id='about'>
            <div className="container">
                <div className="hero-content flex-col lg:flex-row-reverse lg:justify-between">
                    <img src={profile} className="max-w-md md:w-5/12 mb-20 md:mb-0 rounded-lg shadow-2xl" />
                    <div className='md:w-6/12'>
                        <h1 className="text-5xl font-bold mb-12"> <span className='text-cyan-400 border-b-4 border-cyan-500'>About</span> Me </h1>
                        <p className="py-6 max-w-2xl text-justify ">
                            Hi there! I&apos;m Shahadat Hossen Rafi, a passionate web developer with a strong focus on building outstanding web applications. With my expertise in HTML, CSS, and JavaScript, I have successfully completed numerous projects, showcasing my skills in front-end development.
                        </p>
                        <p className="py-6 max-w-2xl text-justify ">
                            Alongside my web development proficiency, I have a deep understanding of WordPress. I have executed multiple projects using WordPress, leveraging its powerful features to create dynamic and user-friendly websites.
                        </p>
                        <p className="py-6 max-w-2xl text-justify ">
                            I believe in continuously expanding my knowledge and staying up-to-date with the latest web technologies and trends. With attention to detail and a commitment to delivering high-quality work, I strive to create visually appealing and responsive websites that provide an exceptional user experience.
                        </p>
                        <p className="py-6 max-w-2xl text-justify ">
                            I am excited to collaborate and bring your ideas to life. Let&apos;s work together to develop innovative solutions that meet your specific needs and exceed your expectations.
                        </p>
                        <a href="Frontend Developer - Shahadat Rafi's Resume (1).pdf" download="Frontend Developer - Shahadat Rafi's Resume (1).pdf"><button className="btn mt-8 bg-cyan-400 text-black tracking-wider hover:bg-cyan-600 ">Get Resume</button></a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutMe;