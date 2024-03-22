export  function isLeapYear(Year){

    const year = Number(Year)

 if(year % 4 === 0 ){

    if(year % 100 !== 0){
        return true
    }else{
       return  year % 400 === 0
    }
    
 }else{
    return false
 }
}
// leap year is divisble by 4 and not by 100 
// if it is divisble by 100 then it should also be divisble by 400 to be leap
// so divisible by 4 and 100 and 400 is leap
// divisble by 4 and not 100 is also leap
// divisble by 4 and 100 and not 400 is not leap


