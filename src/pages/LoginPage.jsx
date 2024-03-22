import Container from "../components/Container"
<Link></Link>

import logo from "../assets/logo.svg"
import Input from "../components/Input"
import Button from "../components/Button"
import { Link } from "react-router-dom"


export default function LoginPage(params) {
    return(
        <Container>
        <div className=" mt-10 w-1/3 px-5 py-10 flex flex-col gap-10  justify-start bg-white max-xl:w-1/2  max-md:w-2/3  max-sm:w-4/5" >
        <img className=" w-10 " src={logo} alt="" />
            <h5 className="text-3xl font-bold text-start max-Phonesm:text-2xl"  >Log in to Twitter</h5>
            <div className="flex flex-col gap-5">
            <Input type="text" placeholder="Phone number,email address" className="h-14" />
            <Input type="password" placeholder="Password"  className="h-14" />
            <Button children="Log in" />
            </div>
            <div className="flex justify-between text-sm text-[#1DA1F2] ">
                
               <Link> <a>Forget Password?</a></Link>
               <Link to="/"> <a>Sign up to Twitter</a></Link>
            </div>
        </div>
        </Container>
    )
};
