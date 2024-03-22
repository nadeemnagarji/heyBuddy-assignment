
import HeromImg from "../assets/heroImg.png"
import Container from "../components/Container"
import logo from "../assets/logo.svg"
import appleLogo from "../assets/appleLogo.svg"
import googleLogo from "../assets/GoogleIcon.svg"
import { Link, useNavigate } from "react-router-dom"
import Footer from "../components/Footer"

export default function MainSignUp(params) {
    const navigate = useNavigate()
    return(
       <div className="w-screen box-border  flex flex-col gap-12 cursor-pointer">
       <div className="w-screen  max-tablet:flex-col  flex  items-center gap-10 p-0 max-tablet:p-2  ">
            <img className="w-1/2 h-[90vh]  max-tablet:w-full" src={HeromImg} alt="" />
            <div className=" w-1/3 p-2  max-lg:w-1/2 max-xl:w-1/2  flex flex-col items-start gap-8 max-xl:gap-5 max-tablet:w-3/4 max-Phone:w-4/5 max-Phonesm:w-full max-tablet:gap-10 max-tablet:p-0 max-tablet:justify-center">
                <img className="w-10 max-tablet:self-center" src={logo} alt="" />
                <h2 className=" text-[4vw] max-2xl:text-[3vw] font-extrabold   max-tablet:text-5xl max-tablet:self-center max-Phone:text-4xl">Happening now</h2>
                <p className=" text-3xl font-bold max-2xl:text-[2vw] max-tablet:self-center max-tablet:text-3xl max-Phone:text-2xl ">Join Twitter today</p>
            <div className="  flex flex-col  gap-4 self-cent max-tablet:justify-centerer max-xl:w-4/5 max-lg:w-full">
                <div onClick={()=> navigate("/email-signup")}
                className=" border py-2 px-20 max-xl:px-16 max-lg:px-12  rounded-full flex items-center gap-4  cursor-pointer max-tablet:justify-center"><img src={googleLogo} alt="" /><p className="font-bold">Sign up with Google</p>
                </div>
                <div className=" border py-2 px-20 max-xl:px-16  max-lg:px-12 rounded-full flex items-center gap-4  cursor-pointer max-tablet:justify-center"><img src={appleLogo} alt="" /><p className="font-bold">Sign up with Apple</p>
                </div>
                <div 
                onClick={()=> navigate("/phone-signup")} 
                className="  border py-2 px-20 max-xl:px-16 max-lg:px-12  rounded-full  w-full self-start  cursor-pointer max-tablet:justify-center" ><p className="font-bold justify-start ">Sign up with phone or email</p>
                </div>
            </div>
            <div className=" text-sm flex flex-col gap-5 items-start max-xl:py-2 ">
                <p>By singing up you agree to the <span className="text-[#1DA1f2]"> Terms of Service</span> and <span className="text-[#1DA1f2]"> Privacy Policy</span>, including <span className="text-[#1DA1f2]">Cookie Use </span> .</p>
                <p>Already have an account? <Link to="/login" > <span className="text-[#1DA1f2]" > Log in </span> </Link></p>
            </div>
            </div>  
       </div>
      
       <Footer />
       </div>
    )
};
