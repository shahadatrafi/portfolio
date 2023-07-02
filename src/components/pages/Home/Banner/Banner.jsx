
import banner from '../../../../assets/HomeBanner.jpg'

const Banner = () => {
    return (
        <div className="hero h-[250ox] md:h-[650px] " style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className='container mx-auto'>
                <div className="hero-content text-neutral-content">
                    <div className="w-full">
                        <h3 className='font-semibold text-xl text-cyan-400 mb-5'> Hi, I&apos;m </h3>
                        <h1 className="mb-5 text-7xl font-bold"> <span className='text-cyan-400'>Shahadat</span> Rafi</h1>
                        <p className="mb-5 max-w-xl text-xl">Passionate developer empowering businesses with tailored web solutions for seamless user experiences. Let&apos;s transform your vision into success.</p>
                        <button className="btn bg-cyan-400 text-black tracking-wider hover:bg-cyan-600 ">Hire Me</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;