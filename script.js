


/////Loop 

// var laps = []
// for(var i=0; i<=10; i++){


//     laps.push(i)

//     console.log(laps)

// }

// calculateAge(2020)



/////-----------Check Age App

// function calculateAge(birthYear) {

//     return 2020 - birthYear;

//     // var custoAge = 2020 - birthYear;
//     // console.log(custoAge + " years old")

// }

/////////////////////////////


// function underageCheck(year, custoName){


//     var age = calculateAge(year)
//     var minAge = 21 - age;

//     if(minAge > 0){
//         console.log(custoName + " is " + age + " years old")
//         console.log(custoName + ' is underaged ')
//     }else{
//         console.log(custoName + " is " + age + " years old")
//         console.log(custoName + ' is good to go!')
//     }
// }


// calculateAge(1990, 'John')

// underageCheck(1990, 'John')



// ////switch statement

// var whatDoYouDo = function (job, firstName) {

//     switch (job) {
//         case "teacher":
//             return firstName + " is a teacher";

//         case "driver":
//             return firstName + " is a driver";

//         default:
//             return firstName + " is doing somthing else"


//     }

//     console.log()
// }

// console.log(
//     whatDoYouDo('driver', 'john')
// )
// console.log(
//     whatDoYouDo('mechanic', 'john')
// )


//////Arrays

// var mariah = ['beautiful', 'teacher', 26, false]

// console.log(mariah)

// mariah.push('nice')

// console.log(mariah)

// mariah.pop()
// console.log(mariah)

// mariah.shift()
// console.log(mariah)


// var isATeacher = mariah.indexOf('teacher');
// console.log(isATeacher)

// if (isATeacher >= 0){
//     console.log('She is a teacher')
// }else{
//     console.log('SHE DOES Something ELSE')
// }


// ///tip calculator


// var difBills = [124, 48, 268]

// var tipToPay;
// var tip;
// var difTips = []

// var finalBills = []

// for (var i=0; i< difBills.length; i++){

//     if(difBills[i] < 50){
//         tipToPay = .2
//         tip = difBills[i]*tipToPay
//         difTips.push(tip)
//         finalBills.push(tip+difBills[i])
    
//     }else if(difBills[i]> 50 && difBills[i]<200){
//         tipToPay = .15
//         tip = difBills[i]*tipToPay
//         difTips.push(tip)
//         finalBills.push(tip+difBills[i])



//     }else{
//         tipToPay = .10;
//         tip = difBills[i]*tipToPay
//         difTips.push(tip)
//         finalBills.push(tip+difBills[i])

//     }

//     console.log(difTips)
//     console.log(finalBills)


// }

////---------Objects and properties and Methods

// var john = {
//     fistName: "john",
//     lastName: "Smith",
//     birthYear: 1990,
//     family:['Jane', "Mark", "Kyle"],
//     job: "teacher",
//     isMarried: false,
//     calcAge: function(){
//         console.log(this.lastName)
//         return (2020 - this.birthYear)

        
//     }
// }


// var age = (john.calcAge());
// john.age = age
// console.log(john)


var john = {
    fullName: "John Smith",
    mass: 95,
    height: 1.8,
    calcBMI: function(){
        return (this.mass / (this.height * this.height))
    }

}


var mark = {
    fullName: "Mark Twain",
    mass: 105,
    height: 2.1,
    calcBMI: function(){
        return (this.mass / (this.height*this.height))
    }
}

console.log(john.calcBMI())
john.BMI = john.calcBMI()
console.log(john)

console.log(mark.calcBMI())
mark.BMI = mark.calcBMI()
console.log(mark)

if(john.BMI > mark.BMI){
    console.log(john.fullName + ' BMI is higher')
}else{
    console.log('Mark BMI is higher')
}
