import { FaEnvelope, FaFacebook, FaLinkedinIn, FaLocationDot, FaMobileScreen } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useRef, } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_cpjfpfb', 'template_s74jf8c', form.current, 'wkepOqHDe7kBZSKDB')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    };
    
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <div className="container mx-auto mb-28 aos-init" data-aos="fade-up" data-aos-duration="1000" id="contact">
            <div>
                <h1 className="text-5xl font-bold text-center mb-10"><span className='text-cyan-400 border-b-4 border-cyan-500'>Contact</span> Me</h1>
            </div>
            <div className="">
                <div className="hero-content flex-col lg:flex-row-reverse mx-auto mb-16">
                    <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
                        <form ref={form} onSubmit={sendEmail} className="card-body w-full">
                            <div className="form-control">
                                <input type="text" placeholder="Email" name="user_email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="Name" name="user_name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <textarea name="message" className="textarea textarea-bordered h-24" placeholder="Type your message here"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Send" className="btn  bg-cyan-400 text-black tracking-wider hover:bg-cyan-600 "></input>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="w-full md:w-1/2">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.5631271537404!2d91.80773795!3d22.483045700000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd73b69c76fcd%3A0x3bc834fd695ca9b4!2sShahadat%20Rafi!5e0!3m2!1sen!2sbd!4v1688362036969!5m2!1sen!2sbd" width="100%" height="350" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                        <div className="w-full md:w-1/2 mt-20 md:mt-0">
                            <div>
                                <h1 className="text-3xl font-bold text-center mb-16"><span className='text-cyan-400 border-b-4 border-cyan-500'>Connect</span> With Me Via</h1>
                            </div>
                            <ul>
                                <li className="font-semibold flex ml-[20%] mb-3 items-center gap-3 text-xl">
                                    <FaMobileScreen className="text-cyan-400 text-2xl" />
                                    <span>Mobile: +8801690003722</span>
                                </li>
                                <li className="font-semibold flex ml-[20%] mb-3 items-center gap-3 text-xl">
                                    <FaEnvelope className="text-cyan-400 text-2xl" />
                                    <span>Email: shahadatrafi0@gmail.com</span>
                                </li>
                                <li className="font-semibold flex ml-[20%] mb-3 items-center gap-3 text-xl">
                                    <FaLocationDot className="text-cyan-400 text-2xl" />
                                    <span>Address: Chittagong, Bangladesh</span>
                                </li>
                                <li className="font-semibold flex ml-[20%] mb-3 items-center gap-3 text-xl">
                                    <FaLinkedinIn className="text-cyan-400 text-2xl" />
                                    <span>LinkedIn</span>
                                </li>
                                <li className="font-semibold flex ml-[20%] mb-3 items-center gap-3 text-xl">
                                    <FaFacebook className="text-cyan-400 text-2xl" />
                                    <span>FaceBook</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;