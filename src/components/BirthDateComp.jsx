import { useState } from "react"
import Select from "./Select"
import { NonLeapdays, Year, evenDays, leapDays, month, oddDays } from "../utils/DatesAndMonths"
import { isLeapYear } from "../utils/isLeapYear"


export default function BirthDateComp({setUserData}) {

    const [days,setDays] = useState(null)
    const [months,setMonths] = useState([1,2,3,4,5,6,7,8,9,10,11,12])
    const [years,setYears] = useState(Year)
    const [isLeap,setIsLeap] = useState(false)
    const [selectedMonth,setSelectedMonth] = useState()
    const [selectedDay,setSelectedDay] = useState()
    const [selectedYear,setSelectedYear] = useState()



const MonthChange = (e)=>{
    setUserData(prevdata =>( {...prevdata,Month:e.target.value}))
    setSelectedMonth(e.target.value)
    if(e.target.value==4||e.target.value==6||e.target.value==9||e.target.value==11) {
        setDays(evenDays)
    }
    if(e.target.value==2){
        if(isLeap){
            setDays(leapDays)
        }else{
            setDays(NonLeapdays)
        }
    }else if(e.target.value==1||e.target.value==3||e.target.value==5||e.target.value==7||e.target.value==8||e.target.value==10||e.target.value==12){
        setDays(oddDays)
    }
}

const DaysChange = (e)=>{
    setUserData(prevdata =>( {...prevdata,Day:e.target.value}))
}
const YearChange = (e)=>{
    setUserData(prevdata =>( {...prevdata,Year:e.target.value}))
    const ans = isLeapYear(e.target.value)
   console.log(selectedMonth)

   //the below condition for when user selects month and then directly selects year the days and month is feb so we handle that
   if(selectedMonth==2 && ans===true){

    setDays(leapDays)
   }else if(selectedMonth==2 && ans===false){
    setDays(NonLeapdays)
   }
    setIsLeap(ans)
  
}

    return(
        <div className="flex w-full  max-sm:flex-col max-sm:w-full  gap-2">
                    <Select handleChange={MonthChange}  options={month} defaultValue="Month" />
                    <Select handleChange={DaysChange}  className="w-1/2 max-sm:w-full" options={days} defaultValue="Day" />
                    <Select handleChange={YearChange}  className="w-1/2 max-sm:w-full" options={Year} defaultValue="Year" />
                   
                </div>
    )
};
