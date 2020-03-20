


/////Loop 

// var laps = []
// for(var i=0; i<=10; i++){


//     laps.push(i)

//     console.log(laps)

// }

// calculateAge(2020)



/////-----------Check Age App

function calculateAge(birthYear) {

    var custoAge = 2020 - birthYear;
    console.log(custoAge + " years old")

}


function underageCheck(year, custoName){
     
    
    var age = calculateAge(year)
    var minAge = 21;

    if(age >= minAge){
        console.log(custoName + ' is good to go!')
    }else{
        console.log(custoName + ' is underaged.')
    }
}


// calculateAge(1990, 'John')

underageCheck(1990, 'John')