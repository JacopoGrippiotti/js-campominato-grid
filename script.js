const gridContainer = document.getElementById('gridContainer');

function createDivElement(tagname,classname,content); {

    let divElement = document.createElement(tagname);

    divElement.append(content);

    divElement.classList.add(classname);

    return divElement;
}