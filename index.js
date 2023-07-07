//Q1
//Write a program that allow to user enter number then print it 
// var enterNum=Number(prompt("Enter Your Number"))
// console.log(enterNum)










//Q2
//Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print n
// var enterNum=Number(prompt("Enter Your Number"))
// if(enterNum%3 && enterNum%4){
//     console.log("Yes")
// }else{
//     console.log("No")
// }










//Q3
//Write a program that allows the user to insert 2 integers then print the max 
// var enterNum1=Number(prompt("Enter Your Number1"))
// var enterNum2=Number(prompt("Enter Your Number2"))
// if(enterNum1>enterNum2){
//     console.log(enterNum1)
// }
// else{
//     console.log(enterNum2)
// }







  
//Q4
//Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive. 
// var enterNum=Number(prompt("Enter Your Number"))
// if(enterNum<0){
//     console.log("negative")
// }else{
//     console.log("positive")
// }
















//Q5
//Write a program that take 3 integers from user then print the max element and the min element
// var enterNum1=Number(prompt('Enter UR num1'))
// var enterNum2=Number(prompt('Enter UR num2'))
// var enterNum3=Number(prompt('Enter UR num3'))
// var max=0
// var min=0
// if(enterNum1>=enterNum3 && enterNum1>=enterNum2){
//        max=enterNum1
//        if(enterNum2>=enterNum3){
//          min=enterNum3
//        }else{
//         min=enterNum2
//        }
      
// }else if(enterNum2>=enterNum1&&enterNum2>=enterNum3){
//     max=enterNum2
//     if(enterNum3>=enterNum1){
//          min=enterNum1
//     }else{
//         min=enterNum3
//     }
   
// } else{
//     max=enterNum3
//    if(enterNum1>=enterNum2){
//     min=enterNum2
//    }else{
//     min=enterNum1
//    }
  
// }
// console.log(`max number is ${max} and min number is ${min}`)











//Q6
//Write a program that allows the user to insert integer number then  check If a number is oven or odd
// var urNumber=Number(prompt("Ernter Ur Number "))
// if(urNumber%2==0){
//     console.log(`${urNumber} is even`)
// }else{
//     console.log(`${urNumber} is odd`) 
// }








//Q8
//Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant 
// var urLetter=prompt("Ernter Ur Letter ")
// if(urLetter=="a" || urLetter=="e" || urLetter=="i" || urLetter=="o" || urLetter=="u"){
//     console.log(`${urLetter} is vowel `)
// }else{
//     console.log(`${urLetter} is consonant  `)
// }








//Q9
//Write a program that allows user to insert integer then print all numbers between 1 to that’s number
// var urNumber=Number(prompt("Ernter Ur Number "))
// for(i=1;i<=urNumber;i++){
//     console.log(i)
// }









//Q10
//Write a program that allows user to insert integer then print a multiplication table up to 12
// var urNumber=Number(prompt("Ernter Ur Number "))
// for(i=1;i<=12;i+=1){
//    var res=i*urNumber
//    console.log(`${urNumber} * ${i} = ${res}`)
// }










//Q11
//Write a program that allows to user to insert number then print all even numbers between 1 to this numbe
// var urNumber=Number(prompt("Ernter Ur Number "))
// console.log("hii")
// var even=0
// for(i=1;i<urNumber;i++){
//    if(i%2==0){
//     even=i
//     console.log(even)
//    }
// }









//Q12
// Write a program that take two integers then print the power 
// var urNumber1=Number(prompt("Ernter Ur Number1 "))
// var urNumber2=Number(prompt("Ernter Ur Number2 "))
// var res=urNumber1**urNumber2
// console.log(res)











//Q12
//Write a program to enter marks of five subjects and calculate total, average and percentage.
    // var num=0
    // for(i=0;i<5;i++){
    // num+= Number(prompt("Enter a number"));
    // }
    // var totle=num
    // var average=totle/5
    // var percentage=(totle/500)*100
    // var grad=""
    // if(percentage>=90){
    //         grad="A"
    //      }else if(percentage>=80){
    //         grad='B'
    //      }else if(percentage>=70){
    //         grad='C'
    //      }else if(percentage>=60){
    //         grad='D'
    //      }else if(percentage>=40){
    //         grad='E'
    //      }else if(percentage<40){
    //         grad='F'
    // }
    // console.log(`the totle of numbers is ${totle}`)
    // console.log(`the average of numbers is ${average}`)
    // console.log(`the percentage of number is ${percentage}%`)
    // console.log(`the grad of numbers is ${grad}`)









//Q13
//Write a program to input month number and print number of days in that month.
    // var urMonth=Number(prompt("Enter Ur Month"))
    // if(urMonth==1){
    //     console.log(`days in month 1 are : 31 day`)
    // }else if(urMonth==2){
    //     console.log(`days in month 2 are : 28 day`)

    // }
    // else if(urMonth==3){
    //     console.log(`days in month 3 are : 31 day`)

    // }
    // else if(urMonth==4){
    //     console.log(`days in month 4 are : 30 day`)

    // }
    // else if(urMonth==5){
    //     console.log(`days in month 5 are : 31 day`)

    // }
    // else if(urMonth==6){
    //     console.log(`days in month 6 are : 30 day`)

    // }
    // else if(urMonth==7){
    //     console.log(`days in month 7 are : 31 day`)

    // }else if(urMonth==8){
    //     console.log(`days in month 8 are : 31 day`)

    // }
    // else if(urMonth==9){
    //     console.log(`days in month 9 are : 30 day`)

    // }
    // else if(urMonth==10){
    //     console.log(`days in month 10 are : 31 day`)

    // }else if(urMonth==11){
    //     console.log(`days in month 11 are : 30 day`)

    // }else if(urMonth==12){
    //     console.log(`days in month 12 are : 31 day`)

    // }else{
    //     console.log("Enter Month Valid!!..")
    // }














//Q14
//Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer   , Find percentage and grade  
    // var urNumberPhysics=Number(prompt("Ernter Ur Number Physics "))
    // var urNumberChemistry=Number(prompt("Ernter Ur Number Chemistry "))
    // var urNumberBiology=Number(prompt("Ernter Ur Number Biology "))
    // var urNumberMathematics =Number(prompt("Ernter Ur Number Mathematics  "))
    // var urNumberComputer =Number(prompt("Ernter Ur Number Computer  "))

    //or
    //  var subjectName=['Physics','Chemistry','Biology','Mathematics','Computer']
    //  var num=0
    //  for(i=0;i<5;i++){
    //     for(i=0;i<subjectName.length;i++){
    //         // console.log(i)
    //         num+= Number(prompt(`Enter a number of ${subjectName[i]}`));
    //     }
    //  }
    //  var totle=num
    //  var percentage=(totle/500)*100
    //  var grad=""
    //  if(percentage>=90){
    //     grad="A"
    //     }else if(percentage>=80){
    //         grad='B'
    //     }else if(percentage>=70){
    //         grad='C'
    //     }else if(percentage>=60){
    //         grad='D'
    //     }else if(percentage>=40){
    //         grad='E'
    //     }else if(percentage<40){
    //         grad='F'
    //  }

    //   console.log(`the percentage of number is ${percentage}%`)
    //   console.log(`the grad of numbers is ${grad}`)












//************************Using switch case********************************/
//Q15
//Write a program to print total number of days in month
// var month=Number(prompt('Enter Ur Month'))
// switch(month){
//     case 1:
//         console.log(`days in month 1 are : 31 day`)
//         break;
//     case 2:
//         console.log(`days in month 2 are : 28 day`)
//         break;
//     case 3:
//         console.log(`days in month 3 are : 31 day`)
//         break;
//     case 4:
//         console.log(`days in month 4 are : 30 day`)
//         break;
//     case 5:
//         console.log(`days in month 5 are : 31 day`)
//         break;
//     case 6:
//         console.log(`days in month 6 are : 30 day`)
//         break;
//     case 7:
//         console.log(`days in month 7 are : 31 day`)
//         break;
//     case 8:
//         console.log(`days in month 8 are : 31 day`)
//         break;
//     case 9:
//         console.log(`days in month 9 are : 30 day`)
//         break;
//     case 10:
//         console.log(`days in month 10 are : 31 day`)
//         break;
//     case 11:
//         console.log(`days in month 11 are : 30 day`)
//         break;
//     case 12:
//         console.log(`days in month 12 are : 31 day`)
//         break; 
//     default:
//         console.log("Please Enter Month Vaild..!!")                                               
        
//     }












//Q16
//Write a program to check whether an alphabet is vowel or consonant
// var urLetter=prompt('Enter Ur Letter')

// switch(urLetter=='a'||urLetter=='o'||urLetter=='i'||urLetter=='e'||urLetter=='u'){
//     case true:
//         console.log(`this letter is Vowel`)
//         break;
//     case false:
//         console.log(`this letter is consonant `)
//         break;
//     default:
//         console.log('Please Enter Ur Vaild Letter..!!')        
// }












//Q17
//- Write a program to find maximum between two numbers 
// function getMax(num1,num2){
//     switch(num1>num2){
//         case true:
//             console.log(`max of nums is ${num1}`)
//             break;
//         case false:
//             console.log(`max of nums is ${num2}`)  
//             break; 
//         default:
//             console.log("max nums is nan")     
//     }
// }
// getMax(100,50)

//or
// var enterUrNumber1=Number(prompt('Enter Ur Number1'))
// var enterUrNumber2=Number(prompt('Enter Ur Number2'))
// switch(enterUrNumber1>enterUrNumber2){
//             case true:
//                 console.log(`max of nums is ${enterUrNumber1}`)
//                 break;
//             case false:
//                 console.log(`max of nums is ${enterUrNumber2}`)  
//                 break; 
//             default:
//                 console.log("max nums is nan")     
//         }









//Q18
//Write a program to check whether a number is even or odd 
// var urNumber=Number(prompt('Enter Ur Number'))
// switch(urNumber%2==0){
//     case true:
//         console.log(`${urNumber} is even`)
//         break;
//     case false:
//         console.log(`${urNumber} is odd`)
//         break;     
//     default:
//         console.log(`this not a numbre`)
//         break;       
// }













//Q19
// Write a program to check whether a number is positive or negative or zero
// var urNumber=Number(prompt('Enter Ur Number'))
// switch( urNumber>=1){
//     case true:
//         console.log('this number is positive')
//         break;
//     case false:
//         switch(urNumber<0){
//             case true:
//                 console.log('this number is negative')
//                 break;
//             case false:
//                 console.log('this number is zerrroo')
//                 break;    
//         }
//         break;    
//     default:    
//        console.log('enter ur correct number..') 
//        break;            
// }











//Q20
// Write a program to create Simple Calculator
// var operator=prompt('choose Ur Operator(+,-,*,/)')
// var urNum1=Number(prompt('Enter Ur Num1'))
// var urNum2=Number(prompt('Enter Ur Num2'))
// var urNum3=Number(prompt('Enter Ur Num3'))
// var res=0
// switch(operator){
//     case '+':
//         res=urNum1+urNum2+urNum3
//         console.log(res)
//         break;
//     case '-':
//         res=urNum1-urNum2-urNum3
//         console.log(res)
//         break;
//     case '*':
//         res=urNum1*urNum2*urNum3
//         console.log(res)
//         break;
//     case '/':
//         res=urNum1/urNum2/urNum3
//         console.log(res)
//         break;   
//     default:
//         console.log("Enter Ur Nums")
// }



