
import Lottie from 'react-lottie';
import animationData from '../../../../assets/118785-responsive-website-design.json';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import './banner.css'



const Banner = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
      
    const defaultOptions = {
        loop: true, // Set it to false if you don't want the animation to loop
        autoplay: true, // Set it to false if you don't want the animation to play automatically
        animationData: animationData, // Provide the imported animation JSON file
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };
    return (
        <div className="hero banner h-[650px] aos-init" id="banner" data-aos="fade-in" data-aos-duration="1000">
            <div className='container mx-auto'>
                <div className="hero-content text-neutral-content">
                    <div className="w-full md:w-3/4">
                        <h3 className='font-semibold text-xl text-cyan-400 mb-5'> Hi, I&apos;m </h3>
                        <h1 className="mb-5 text-5xl md:text-7xl font-bold"> <span className='text-cyan-400'>Shahadat</span> Rafi</h1>
                        <p className="mb-5 max-w-xl text-xl">Passionate developer empowering businesses with tailored web solutions for seamless user experiences. Let&apos;s transform your vision into success.</p>
                        <button className="btn bg-cyan-400 text-black tracking-wider hover:bg-cyan-600 ">Hire Me</button>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div>
                            <Lottie options={defaultOptions} />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Banner;