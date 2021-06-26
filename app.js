//CHAPTER # 26 - 30 MATH METHODS

// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
// var integer = +prompt("Enter a positive integer");
// roundOff = Math.round(integer);
// roundUp = Math.ceil(integer);
// roundDown = Math.floor(integer);
// if(integer>=0){
// document.write("number: " +integer+ "<br>");
// document.write("round off value: " +roundOff+ "<br>");
// document.write("floor value: " +roundDown+ "<br>");
// document.write("ceil value: " +roundUp);
// }
// else{
//     alert("Positive Integer Only!");
// }

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
// var integer = +prompt("Enter a negative integer");
// roundOff = Math.round(integer);
// roundUp = Math.ceil(integer);
// roundDown = Math.floor(integer);
// if(integer<=0){
// document.write("number: " +integer+ "<br>");
// document.write("round off value: " +roundOff+ "<br>");
// document.write("floor value: " +roundDown+ "<br>");
// document.write("ceil value: " +roundUp);
// }
// else{
//     alert("Negative Integer Only!");
// }

// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5
// var num = +prompt("Enter a number");
// document.write("The Absolute value of: " +num+ " is "+ Math.abs(num));

// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:
// var diceRoll = Math.floor( Math.random() * 6 ) +1;
// document.write("random dice value: "+ diceRoll+"<br>");
// var diceRoll = Math.floor( Math.random() * 6 ) +1;
// document.write("random dice value: "+ diceRoll);

// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser
// var toss = Math.random() * 3;
// var floor = Math.floor(toss);
// if(floor === 1){
//     document.write("1 <br> Random Coin Value: Head")
// } else if(floor === 2)
// {
//     document.write("2 <br> Random Coin Value: Tails")
// }

// 6. Write a program that shows a random number between 1
// and 100 in your browser.
// var theRandomNumber = Math.floor(Math.random() * 100) + 1;
// document.write("random number betweeen 1 and 100: "+theRandomNumber);

// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms
//  weight = prompt("Enter your weight in kilograms");
// document.write("The weight of user is "+ weight);

// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.
// var num = +prompt("Enter any number between 1 and 10");
// var theRandomNumber = Math.floor(Math.random() * 10) + 1;
// if (num === theRandomNumber){
//     alert("Congratulation! You got the number")
// }
// else{
//     alert("Try again\n prevent this page from creating additional dialogues ");
// }


//CHAPTER # 31 - 34 DATE METHODS

// 1. Write a program that displays current date and time in
// your browser.
// var rightNow = new Date();  
// document.write(rightNow);

// 2. Write a program that alerts the current month in words.
// For example December.
// var currentDate = new Date();
// var b = currentDate.toString();
// var c = b.slice(4,7);
// if (c === "Jan"){
//     document.write("Current month: January")
// }else if(c === "Feb"){
//     document.write("Current month: February")
// }else if(c === "Mar"){
//     document.write("Current month: March")
// }else if(c === "Apr"){
//     document.write("Current month: April")
// }else if(c === "May"){
//     document.write("Current month: May")
// }else if(c === "Jun"){
//     document.write("Current month: June")
// }else if(c === "Jul"){
//     document.write("Current month: July")
// }else if(c === "Aug"){
//     document.write("Current month: August")
// }else if(c === "Sep"){
//     document.write("Current month: September")
// }else if(c === "Oct"){
//     document.write("Current month: October")
// }else if(c === "Nov"){
//     document.write("Current month: November")
// }else if(c === "Dec"){
//     document.write("Current month: December")
// }

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.
// var currentDate = new Date();
// var b = currentDate.toString();
// var c = b.slice(0,4);
// document.write("Today is "+c);

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.
// var currentDate = new Date();
// var b = currentDate.toString();
// var c = b.slice(0,4);
// if(c === "sat" || "sun"){
//     alert("It's Fun Day")
// }

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.
// var currentDate = new Date();
// var b = currentDate.toString();
// var c = b.slice(8,10);
// if(c <= 15){
//     alert("First fifteen days of the month");
// }
// else{
//     alert("Last days of the month");
// }


// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.
// var todayDate = new Date();
// var Todaymilli = todayDate.getTime();
// var todayMin = todayDate.getMinutes();
// var diff = Todaymilli - todayMin;
// var diffMin = diff/(1000*60*60);
// var accurateMin = Math.floor(diffMin);
// document.write("Current Date: " + todayDate);
// document.write("<br> Elapsed milliseconds since midnight, Jan 1, 1970: " + Todaymilli);
// document.write("<br> Elapsed minutes since midnight, Jan 1, 1970: " + accurateMin)




// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.
// var a = new Date();
// var b = a.toString();
// var c = b.slice(16,19);
// if (c === "12:"){
//     document.write("It's PM")
// }else if(c === "13:"){
//     document.write("It's PM")
// }else if(c === "14:"){
//     document.write("It's PM")
// }else if(c === "15:"){
//     document.write("It's PM")
// }else if(c === "16:"){
//     document.write("It's PM")
// }else if(c === "17:"){
//     document.write("It's PM")
// }else if(c === "18:"){
//     document.write("It's PM")
// }else if(c === "19:"){
//     document.write("It's PM")
// }else if(c === "20:"){
//     document.write("It's PM")
// }else if(c === "21:"){
//     document.write("It's PM")
// }else if(c === "22:"){
//     document.write("It's PM")
// }else if(c === "23:"){
//     document.write("It's PM")
// }else if(c === "24:"){
//     document.write("It's AM")
// }else if(c === "01:"){
//     document.write("It's AM")
// }else if(c === "02:"){
//     document.write("It's AM")
// }else if(c === "03:"){
//     document.write("It's AM")
// }else if(c === "04:"){
//     document.write("It's AM")
// }else if(c === "05:"){
//     document.write("It's AM")
// }else if(c === "06:"){
//     document.write("It's AM")
// }else if(c === "07:"){
//     document.write("It's AM")
// }else if(c === "08:"){
//     document.write("It's AM")
// }else if(c === "09:"){
//     document.write("It's AM")
// }else if(c === "10:"){
//     document.write("It's AM")
// }else if(c === "11:"){
//     document.write("It's AM")
// }



// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.
// var laterDate = new Date("12/31/2020");
// document.write("Later Date: "+laterDate);
 



// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015
 // To set two dates to two variables
//  var date1 = new Date("06/18/2015");
//  var date2 = new Date();
//   var Difference_In_Time = date2.getTime() - date1.getTime();
//   var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
//  document.write(Difference_In_Days+" days have passed since 1st Ramadan, 2015");


// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.
// var date1 = new Date("01/01/2015");
// var date2 = new Date();
// var diff = date2.getTime() - date1.getTime();
// document.write("On reference date " + date2 + "<br>");
// document.write(diff+ " seconds have passed since beginning of 2015");




// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.
//  var dt = new Date();
//  document.write( dt + "<br>");
//  dt.setHours( dt.getHours() + 1 );
//  document.write( dt );




// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?
// var myCurrentDate=new Date();
// var myPastDate=new Date(myCurrentDate);
//     myPastDate.setDate(myPastDate.getDate() - 100);
//     alert("Current date: "+myCurrentDate+
//         "\n100 years back, it was "+myPastDate);
    

// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.
// var age = +prompt("Enter your age");
// var d = new Date();
// var currentYear = d.getFullYear();
// birthYear = currentYear - age;
// document.write("Your age is "+age+"<br>");
// document.write("Your birth year is "+birthYear);


// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,

// var cusName = "ABC Customer"
// document.write("Customer Name: "+`<b>${cusName}</b>`+"<br>");
// var d = new Date();
// var currentMonth = d.getMonth();
// if (currentMonth === 0){
//         document.write("Month: <b>January</b><br>")
//     }else if(currentMonth === 1){
//         document.write("Month: <b>February<b/><br>")
//     }else if(currentMonth === 2){
//         document.write("Month: <b>March</b><br>")
//     }else if(currentMonth === 3){
//         document.write("Month: <b>April</b><br>")
//     }else if(currentMonth === 4){
//         document.write("Month: <b>May</b><br>")
//     }else if(currentMonth === 5){
//         document.write("Month: <b>June</b></b><br>")
//     }else if(currentMonth === 6){
//         document.write("Month: <b>July</b><br>")
//     }else if(currentMonth === 7){
//         document.write("Month: <b>August</b><br>")
//     }else if(currentMonth === 8){
//         document.write("Month: <b>September</b><br>")
//     }else if(currentMonth === 9){
//         document.write("Month: <b>October</b><br>")
//     }else if(currentMonth === 10){
//         document.write("Month: <b>November</b><br>")
//     }else if(currentMonth === 11){
//         document.write("Month: <b>December</b><br>")
//     }
//     var noOfUnits = 410;
//     document.write("Number of units: "+`<b>${noOfUnits}</b>`+"<br>");
//     var chargesPerUnit = 16;
//     document.write("Charges per unit: "+`<b>${chargesPerUnit}</b>`+"<br><br>");
//     var netAmount = noOfUnits * chargesPerUnit;
//     document.write("Net Amount Payable (within due date): "+`<b>${netAmount}</b>`+"<br>");
//     var lateSur = 350;
//     document.write("Late payment surcharge: "+`<b>${lateSur}</b>`+"<br>")
//     var grossAmount = lateSur+netAmount;
//     document.write("Gross Amount Payable (after due date): "+`<b>${grossAmount}</b>`);



