/* getElementBy

metodos getElementByTabName se aplicam a tudo, h1, head, body, p, etc
querrySelectOne, querrySelectAll, da pra fazer forEach, pegando elementos array []

    getElementById
        jeito um =
            console.log(document.getElementById('blog-title'));

        jeito dois =
            const element = document.getElementById
            console.log(element)

    getElementByClassName
        const element = document.getElementByClass('')
        console.log(element)

    qual usar?
    getElementById (element)
    getElementByClassName (HTMLCollection)
    getElementByTagName (HTMLCollection)
    querrySelector (element)
    querrySelectorAll (Nodelist)
*/

// manipular conteudos

/* textContent

const element = document.querySelector('h1')

element.textContent += " Ola devs"

console.log(element.textContent)
*/

/* innerText


const element = document.querySelector('h1')

element.innerText = " Ola devs"

console.log(element.innerText)
*/

/* innerHTML

msm coisa q innerText mas da pra colocar coisas HTML dentro
*/

