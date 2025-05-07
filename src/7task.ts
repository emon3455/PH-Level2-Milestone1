{
    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }
      
    function getDayType(day: Day): string{
        if(Day[day]==="Saturday" || Day[day]==="Sunday"){
            return "Weekend"
        }else{
            return "Weekday"
        }
        
    }
    console.log(getDayType(Day.Monday));
    console.log(getDayType(Day.Sunday));
    
}