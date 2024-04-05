import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa6";
import q1 from '../../assets/qZone1.png';
import q2 from '../../assets/qZone2.png';
import q3 from '../../assets/qZone3.png';
const RightSightNav = () => {
    return (
        <div>
            <div className="">
                <h2 className="pb-3 text-xl font-bold">Login With</h2>
                <button className="btn btn-outline w-full text-blue-500 ">
                <FaGoogle />
                    Log in with Google
                </button>
                <button className="btn btn-outline w-full mt-2">
                <FaGithub />
                    Log in with Github
                </button>
            </div>
            <div className="p-4  mb-6 ">
                <h2 className="text-3xl">Find Us On</h2>
                <a href="https://www.facebook.com/shantodev.nil" className="p-4 flex items-center text-lg border rounded-t-lg gap-4">
                <CiFacebook />
                Facebook
                </a>
                <a href="" className="p-4 flex items-center text-lg border rounded-t-lg gap-4">
                <FaTwitter />
                Facebook
                </a>
                <a href="" className="p-4 flex items-center text-lg border rounded-t-lg gap-4">
                <FaInstagram />
                Facebook
                </a>
            </div>
            <div className="p-4  mb-6 bg-slate-100">
                <h2 className="text-3xl">Q-Zone</h2>
                <img src={q1} alt="" className="mt-3" />
                <img src={q2} alt="" className="mt-3" />
                <img src={q3} alt=""  className="mt-3"/>
            </div>
        </div>
    );
};

export default RightSightNav;