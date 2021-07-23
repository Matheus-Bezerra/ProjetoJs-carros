const sectionBmw = document.getElementById('sectionBmw')
const sectionAudi = document.getElementById('sectionAudi')
const sectionMercedes = document.getElementById('sectionMercedes')
const sectionFerrari = document.getElementById('sectionFerrari')
const sectionLamborghini = document.getElementById('sectionLamborghini')
const sectionMcLaren = document.getElementById('sectionMcLaren')
hideOrShowElement('bmw')
function hideElement() {
    sectionBmw.style.display = 'none'
    sectionAudi.style.display = 'none'
    sectionMercedes.style.display = 'none'
    sectionFerrari.style.display = 'none'
    sectionLamborghini.style.display = 'none'
    sectionMcLaren.style.display = 'none'
}

const items = Array.from(document.getElementsByClassName('item'))
console.log(items)

items.forEach((item) => {
    item.addEventListener('click', linkItem)
})

function linkItem(event) {
    const attributteSelected = event.target.getAttribute('data')
    console.log(attributteSelected)
    linkItemActive(attributteSelected)
    hideOrShowElement(attributteSelected)
}

function linkItemActive(attributteSelected) {
    items.forEach((item) => {
        const attributeItem = item.getAttribute('data')
        if(attributeItem === attributteSelected) {
            item.classList.add('active')
            return
        }

        item.classList.remove('active')
    })
}

function hideOrShowElement(attributteSelected) {
    hideElement()
    if(attributteSelected === 'bmw') {
        sectionBmw.style.display = 'block'
    }
    if(attributteSelected == 'audi') {
        sectionAudi.style.display = 'block'
    }
    if(attributteSelected == 'mercedes') {
        sectionMercedes.style.display = 'block'
    }
    if(attributteSelected == 'ferrari') {
        sectionFerrari.style.display = 'block'
    }
    if(attributteSelected == 'lamborghini') {
        sectionLamborghini.style.display = 'block'
    }
    if(attributteSelected == 'mcLaren') {
        sectionMcLaren.style.display = 'block'
    }
}
