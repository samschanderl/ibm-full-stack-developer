const newPara = document.createElement('p');
const newText = document.createTextNode("Hello World");
newPara.appendChild(newText);
document.body.appendChild(newPara);


// running function and adding paragraph when DOM has loaded
onload = (function () {
    addPara();
})

function addPara() {
    const newPara = document.createElement('p');
    const newText = document.createTextNode("Hello World");
    newPara.appendChild(newText);
    document.body.appendChild(newPara);
}