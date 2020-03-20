


/////Loop 

// var laps = []
// for(var i=0; i<=10; i++){


//     laps.push(i)

//     console.log(laps)

// }

// calculateAge(2020)



/////-----------Check Age App

function calculateAge(birthYear) {

    return 2020 - birthYear;

    // var custoAge = 2020 - birthYear;
    // console.log(custoAge + " years old")

}

/////////////////////////////


function underageCheck(year, custoName){
     
    
    var age = calculateAge(year)
    var minAge = 21 - age;

    if(minAge > 0){
        console.log(custoName + " is " + age + " years old")
        console.log(custoName + ' is underaged ')
    }else{
        console.log(custoName + " is " + age + " years old")
        console.log(custoName + ' is good to go!')
    }
}


// calculateAge(1990, 'John')

underageCheck(1990, 'John')