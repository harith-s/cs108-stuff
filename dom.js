function makeChanges() {
    const list = document.getElementsByTagName("img");
    for (let i = 0; i < list.length; i++){
        list[i].src = "guitar.png";
    }
    const element = document.getElementsByTagName("h1");
    for (let i = 0; i < element.length; i++){
        element[i].remove()
    }

    const paras = document.getElementsByTagName('p')
    for (let i = 0; i < paras.length; i++){
        paras[i].innerHTML = "Enough of JavaScript, let's stop.";
    } 
    const list2 = document.getElementsByTagName('h2')
    for (let i = 0; i < list2.length; i++){
        list2[i].innerHTML = list2[i].innerHTML.toUpperCase();
    } 
    const h3 = document.createElement("h3");
    document.getElementById('div1').appendChild(h3);

}