var addButton = document.getElementById('add');
addButton.addEventListener('click', addItem);

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeItem);

var ul = document.getElementById('list');

function addItem(){
    var input = document.getElementById('input');
    var item = input.value;
    var ul = document.getElementById('list');
    var textnode = document.createTextNode(item);

    if(item ===''){
        return false;
    }
    else{
        //create li
        var li = document.createElement('li');
        //create checkbox
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id','check')
        //create label
        var label = document.createElement('label');
        label.setAttribute('for','item') //optional
        //add these elements on web page
        ul.appendChild(label)
        li.appendChild(checkbox)
        label.appendChild(textnode)
        li.appendChild(label)
        ul.insertBefore(li,ul.childNodes[0])
        setTimeout(()=>{
            li.className = 'visual';
        },3);

        input.value = '';
    }
}

function removeItem(){
    var li = document.getElementById('li')
    li = ul.children;
    for (let index = 0; index <li.length; index++) {
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
        }
    }
}