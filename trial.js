var body = document.body
console.log(body)

var h1 = document.body.childNodes [1]
console.log(h1)
//console.log(h1.childNodes)

var helloWorld = h1.innerHTML
console.log(helloWorld)
// ^^innerHTML is something to use when pulling in the text or tags within whatever element you attach it too
h1.innerHTML = 'Hello Universe'

console.dir(h1)
//^^Will you give you info in the console about the meta data of certain elements within HTML


var helloH1 =
document.getElementById('hello')
console.log(helloH1)

var navItems = document.getElementsByClassName('nav-item')
console.log(navItems)
//^^Not as common as getElementById. querySelectorAll is more useful that this.

var navItems = document.querySelectorAll('body *')
console.log(navItems)

var helloH1 = document.querySelectorAll('#hello')
console.log(helloH1[0])
//^^Add the 0 in the log to select first item in the list, etc...
//^^additionally querySelector will bring in a single item(first match/object)

//CONVERT NODELIST TO AN ARRAY DATA TYPE
// console.log(Array.from(navItems).filter())
//^^Need to add array.from or you will get error because node does not recognize this last as an array.

navItems.forEach(function(navItem) {
    // console.dir(navItem)
    // console.log(navItem.tagName)
    navItem.addEventListener('mouseover', function(e) {
        e.target.classlist.add('red')
    })
        navItem.addEventListener('mouseout', function(e) {
            e.target.classlist.remove('red')
        })
        navItem.addEventListener('click', function(e) {
            e.target.remove()
        })

    // if (navItem.tagName === 'LI' && navItem.cLassList.contains('active')) {
    //     //navItem.style.color = 'red'
    //     nav.item.cLassList.add('red')
    // }
})
//^^This selects all the list items "LI" in our body (through navItems) and changes them to red.

 var navItems = document.querySelectorAll('.nav-item')

 navItems.forEach(function(navItem.id) {
     console.log(navItem.id)
     console.log(navItem.tagname)
     console.log(navItem.className)
     console.log(navItem.getAttribute('title'))
     console.log(navItem.getAttribute('title', 'Foo'))
     console.log(navItem.getAttribute('data-details'))
     navItem.innerHTML = '<a href="http://google.com">' + navItem.getAttribute('data-details') + '</a>'
     console.log(navItem.innerHTML)
 })

var searchInput = document.getElementById('search')
var searchInput = document.querySelector('#search')
//^^2 WAYS TO FIND THE SAME THING



searchInput.setAttribute('value', 'pizza parties in my area')
searchInput.value = 'movies near me'

alert(searchInput.value)
alert(searchInput.getAttribute('value'))
