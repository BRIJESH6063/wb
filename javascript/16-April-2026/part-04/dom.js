/*

window --> GLOBAL OBJECT
const temp = window.document.getElementById('first') ;
temp.textContent = 'Hello Coder Army!' ;
temp.style.backgroundColor = 'orange' ;


const h2List = document.getElementsByTagName('h2') ;
const arr = [...h2List] ;
for(const x of h2List) {
    console.log(x) ;
}
-----------------------------------------------------------------------------------------------

const h2Element = document.createElement('h2') ;
h2Element.textContent = 'STRIKE is comming soon' ;
h2Element.id = 'second' ;

const element = document.getElementById('first') ;
element.after(h2Element) ;
// element.before(h2Element) ;

const h3Element = document.createElement('h3') ;
h3Element.textContent = 'DIWALI aaa rahii haii' ;
h3Element.id = 'third' ;
h3Element.className='diwali' ;
// h3Element.className='holi' ;    // overridden previous className
// h3Element.className+=' holi' ;  // works but not efficient, use 'classList' instead
h3Element.classList.add('diwali') ;
h3Element.classList.add('holi') ;  // works all fine
// h3Element.classList.remove('holi') ; 

h3Element.style.backgroundColor = 'orange' ;
h3Element.style.fontSize = '24px' ;
h3Element.setAttribute('hello', 'ji') ;


console.log(h3Element.getAttribute('class')) ;
console.log(h3Element.getAttribute('hello')) ;

const element2 = document.getElementById('second') ;
element2.after(h3Element) ;

----------------------------------------------------------------------------------------------
const l1 = document.createElement('li') ;
l1.textContent = 'Milk' ;
const l2 = document.createElement('li') ;
l2.textContent = 'Cake' ;
const l3 = document.createElement('li') ;
l3.textContent = 'Chocolate' ;
const l4 = document.createElement('li') ;
l4.textContent = 'Samosa' ;


const unorderedList = document.getElementById('uList') ;
unorderedList.append(l1, l2) ;
unorderedList.prepend(l4) ;
unorderedList.children[1].after(l3)

----------------------------------------------------------------------------------
const products = ['Milk', 'Chocolate', 'Honey', 'Tea', 'Sugar'] ;
const unorderedList = document.getElementById('uList') ;

products.forEach((prod) => {
    const list = document.createElement('li') ;
    list.textContent=prod ;
    unorderedList.append(list) ;
})

---->>> Appending again and again causes disturbance
        append all to 'fragment' and finally append fragment to 'ul' in one go. 

const products = ['Milk', 'Chocolate', 'Honey', 'Tea', 'Sugar'] ;

const unorderedList = document.getElementById('uList') ;
const fragment = document.createDocumentFragment() ;

products.forEach((prod) => {
    const list = document.createElement('li') ;
    list.textContent=prod ;
    fragment.append(list) ;
})

unorderedList.append(fragment) ;
----------------------------------------------------------------------------------
--------------------  Remove element from document  ------------------------------
const s1 = document.getElementById('first') ;
s1.remove() ;



*/

// const products = ['Milk', 'Chocolate', 'Honey', 'Tea', 'Sugar'] ;
// const unorderedList = document.getElementById('uList') ;
// const fragment = document.createDocumentFragment() ;
// products.forEach((prod) => {
//     const list = document.createElement('li') ;
//     list.textContent=prod ;
//     fragment.append(list) ;
// })
// unorderedList.append(fragment) ;




/*
const week = document.getElementById('week') ;

const li = document.createElement('li') ;
li.textContent = 'help' ;
------------------------- Older ways not recommended --------------------------------
week.insertAdjacentElement('afterbegin', li) ;
week.insertAdjacentElement('afterend', li) ;
week.insertAdjacentElement('beforebegin', li) ;
week.insertAdjacentElement('beforeend', li) ;
---->>> Last one overrides all above positions of insertion
*/





























