
import { Link, useNavigate } from "react-router-dom"
import logo from "../assets/logo.svg"
import Button from "../components/Button"
import Container from "../components/Container"
import Input from "../components/Input"
import Select from "../components/Select"
import { useRef, useState } from "react"
import BirthDateComp from "../components/BirthDateComp"

export default function SignupPage(params) {
    const [userData,setUserData] = useState({
        name:"",
        phoneNumber:"",
        Month:"",
        Year:"",
        Day:""
    })
  const [err,SetErr] = useState({})
  const navigate= useNavigate()
  


const handleOnChange = (e)=>{
    const newUserData = {...userData,[e.target.name]:e.target.value}
    console.log(newUserData);
    setUserData(newUserData)
}


const handleError = ()=>{
    const error = {}
    if(!userData.Month.trim() || !userData.Year.trim() || !userData.Day.trim() ){
       
        error.dob="Please select Date of Birth"
    } 
    if(userData.Month==="Month" ){
        error.dob="Select Month"
    }
    if(userData.Day==="Day"){
        error.dob="Select Day"
    }
    if(userData.Year==="Year"){
        error.dob="Select Year"
    }
    if(!userData.name.trim()){
        error.name="please enter name"
    }if(!userData.phoneNumber){
        error.phoneNumber="please enter Phone number"
    }

    return error
    
}
const handleNext = ()=>{
    const error = handleError()
    
    SetErr(error)
    if(Object.keys(error).length===0){
        console.log("User Registered Sucessfully");
        navigate("/home")
    }
  
}

    return(
        <Container>
        <div className=" mt-10 w-1/3 px-5 py-10 flex flex-col gap-5 items-center bg-white
        max-xl:w-1/2  max-md:w-2/3  max-sm:w-4/5">
            <img className=" w-10 " src={logo} alt="" />
            <div className=" w-full p-1 flex flex-col gap-5 items-start">
                <h4 className=" text-3xl font-bold text-black max-sm:text-2xl">Create an account</h4>
                <Input onChange={handleOnChange} name="name"  placeholder="Name"  />
                {err.name && <p className="text-sm px-2 mt-[-10px] text-red-700 " >{err.name}</p>}
                <Input onChange={handleOnChange} name="phoneNumber" onc placeholder="Phone number"  />
                {err.phoneNumber && <p className="text-sm px-2 mt-[-10px] text-red-700 " >{err.phoneNumber}</p>}
             <Link to="/email-signup"> <p className="px-2 leading-tight tex-lg text-sm text-[#1DA1F2]  ">Use email</p></Link>  
            </div>
            <div  className=" w-full px-2 flex flex-col gap-5 items-start">
                <h2 className=" font-bold">Date of birth</h2>
                <p className=" text-sm text-start" >Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.</p>
                <BirthDateComp setUserData={setUserData}  />
                {err.dob && <p className="text-sm px-2 mt-[-10px] text-red-700 " >{err.dob}</p>}
                <Button onClick={handleNext} children="Next"  className="w-full mt-10  "/>
            </div>
        </div>
        </Container> 
    )
};
