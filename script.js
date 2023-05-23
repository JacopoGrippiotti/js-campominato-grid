const gridContainer = document.getElementById('gridContainer')




function createDivElement(tagname,classname,content) {

    let divElement = document.createElement(tagname)

    divElement.append(content)

    divElement.classList.add(classname)

    return divElement
}

for (let i = 1; i < 101; i++ ) {

    let gridItem = createDivElement('div', 'gridItem', i)

    gridContainer.append(gridItem)


}
