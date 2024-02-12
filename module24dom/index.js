const byTagName =document.getElementsByTagName('h1');
console.log(byTagName)

const byId = document.getElementById('h1-id');
byId.innerText='hello';
byId.style.color='red';

// selecting element by queryselector

const byQuerySelector = document.querySelectorAll('#main-id p');
console.log(byQuerySelector)

byQuerySelector

// adding class and removing class by classlist
// const titel = document.getElementById('h1-id');
// titel.classList.add('hello')
// titel.classList.remove('hello')
// titel.setAttribute('title','setByJavaScript')
// let p = document.getElementById('h1-id')
// p.innerHTML='hhiiii';

// titel.appendChild(p)

// const main = document.getElementById('main-id');
// // for creating an tag in parent div 
// const h = document.createElement('h1');
// h.innerHTML = 'hello';

// main.appendChild(h)
// // adding an full section by append child
// const main = document.getElementById('main-id');
// const section = document.createElement('section')

// const h2 = document.createElement('h2')
// h2.innerText='hello'
// section.appendChild(h2)

// main.appendChild(section)

// const ul = document.createElement('ul') 
// section.appendChild(ul)
// const li = document.createElement('li')
// li.innerText='hello'
// ul.appendChild(li)
// const li2 = document.createElement('li')
// li2.innerText='helloOOO'
// ul.appendChild(li2)
// const li3 = document.createElement('li')
// li3.innerText='hellowwww'
// ul.appendChild(li3)


// adding a section at once 
const main = document.getElementById('main-id');
const mainSection = document.createElement('section')
mainSection.innerHTML=(`
<h1>adding a section at once</h1>
<ul>
    <li>hello</li>
    <li>java script</li>
    <li>hello</li>
</ul>
`)
main.appendChild(mainSection)
// .textContent is used as .innerHTML and . innerText

