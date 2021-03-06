var body = document.body
console.log(body)

// 1. Count the number of records in the "Current Quarter Details" table.
var recordCount = document.querySelectorAll('tbody tr')
console.log(recordCount.length)

// 2. Set each dashboard image to different images, one for each season. Make sure you also set the alt="" attribute with an appropriate description.
var seasons = document.querySelectorAll('img')
seasons[0].setAttribute('src', "http://unsplash.it/400?image=11");
seasons[0].setAttribute('alt', "Winter");

seasons[1].setAttribute('src', "http://unsplash.it/400?image=22");
seasons[1].setAttribute('alt', "Spring");

seasons[2].setAttribute('src', "http://unsplash.it/400?image=33");
seasons[2].setAttribute('alt', "Summer");

seasons[3].setAttribute('src', "http://unsplash.it/400?image=44");
seasons[3].setAttribute('alt', "Fall");

//Setting the images to each individual season was a hang up! BUT so easy after I figured out what was wrong [ ¯\_(ツ)_/¯ ]

// 3. Below each dashboard image, there's a season/quarter name. Below those, there are three dots. Replace those three dots with a randomly generated number formatted as currency, like $12,589.00.
//USE Math.random
var dots = document.querySelectorAll('.text-muted')
dots.forEach(function(dotdot) {
    dotdot.innerHTML = "$" + Math.round(Math.random() * 1000) + ".00"
})


// 4. Change the currently selected left side menu item from Overview to Reports.
//USE classLists
 var reports = document.querySelectorAll('.nav-sidebar > li');
 reports[0].classList.remove('active');
 reports[1].classList.add('active');

 //console.log(reports)


// 5. Set the default search input value to "Q4 sales".

var defaultSearch = document.querySelectorAll('.form-control')
defaultSearch.forEach(function(defaultSearch){
    defaultSearch.setAttribute('placeholder', 'Q4 sales')
})
//.value = 'Q4 Sales' is another way of adding this input without a function

// 6. Add the "table-hover" class to the table. See the Bootstrap table docs.

// var tableTops = document.querySelectorAll('.table-striped', '.table');
// tableTops.forEach(function(tableHover) {
//     tableHover.add('class' ,'table-hover')
// });
// console.log(tableTops);

//^^First attempt. below is the in class explanation

// document.querySelector('table').classlist.add('table-hover')

//Had some issues with this function. Keep receiving an error message with '.add'. I actually went and dug around on Git and google before figuring out my issue. It works but still throws an error.


// 7. Add the "success" class to the 7th - 10th row of the table, like: <tr class="success">...</tr>
var successGuy = document.querySelectorAll('tbody > tr')
successGuy[6].classList.add('success');
successGuy[7].classList.add('success');
successGuy[8].classList.add('success');
successGuy[9].classList.add('success');
//console.log(successGuy)

//Alternate way to achieve this below----IN CLASS

// var rows = document.querySelectorAll('tbody tr')
// rows = Array.from(rows)
// rows = rows.filter(function(row, index) {
//     return (index >= 7 && index <=10)
// })
// console.log(rows)

//ANOTHER ALTERNATE IN CLASS Example
// var rows = document.querySelectorAll('tbody tr')
// rows.forEach(function(row, i) {
//     // console.log(row)
//     if (i >= 7 && i <=10)
// row.classList.add('success')
// })


// 8. Change the table header names to: ID, First Name, Last Name, Department, Client.

var newHeaders = document.querySelectorAll('tr > th');
newHeaders[0].innerHTML = 'ID'
newHeaders[1].innerHTML = 'First Name'
newHeaders[2].innerHTML = 'Last Name'
newHeaders[3].innerHTML = 'Department'
newHeaders[4].innerHTML = 'Client'

console.log(newHeaders)

// 9. Make an array of objects, each object representing a single row in the table. Remove the commas from the ID column and convert it to an actual Number data type. Example: [{id: 1001, firstName: 'Lorem', lastName: 'ipsum', department: 'dolor', client: 'sit'}]

 //var newArray = document.querySelectorAll('tbody > tr')

 var rows = document.querySelectorAll('tbody > tr')
 var newArray = []
 rows.forEach(function(row){
     var rowObject = {
        id: Number(row.children[0].innerHTML.replace(',', '')),
        firstName: row.children[1].innerHTML ,
        lastName:  row.children[2].innerHTML,
        departments:  row.children[3].innerHTML,
        client: row.children[4].innerHTML ,
     }
     newArray.push(rowObject)
     //console.log(newArray)
 })
//ALTERNATE PATH TO THIS SOLUTION BELOW-- IN CLASS

 // var rows = document.querySelectorAll('tbody > tr')
 // rows= Array.from(rows).map(function(row){
 //     return {
 //        id: Number(row.children[0].innerHTML.replace(',', '')),
 //        firstName: row.children[1].innerHTML ,
 //        lastName:  row.children[2].innerHTML,
 //        departments:  row.children[3].innerHTML,
 //        client: row.children[4].innerHTML ,
 //    }
 //     //console.log(newArray)
 // })




// 10. Make each word in the table capitalized.

var bigWords = document.querySelectorAll('table');
bigWords.forEach(function(makeBig){
makeBig.classList.add('text-capitalize')
})
//Alternate WAY TO ACHIEVE THIS---IN CLASS
