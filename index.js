const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function(drivers) { 
    return drivers.slice(0,2)
}
//returnFirstTwoDrivers()

 function returnLastTwoDrivers (drivers) {
    return drivers.slice(2)
}
//returnLastTwoDrivers()

  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers] 

  //function selectingDrivers() {}
  const createFareMultiplier = () =>{
   return (function createFareMultiplier(num=`5`){
   return num * num
   } )
  }
  const fareDoubler = (double) => {
   return double * 2
  }
  function fareTripler(value){
    return value * 3
  }
   function selectDifferentDrivers(arrayOfDrivers,driverSelector){
    return driverSelector(arrayOfDrivers)
   }