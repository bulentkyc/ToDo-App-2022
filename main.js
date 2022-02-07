const newItemHandler = () => {
    const item = document.querySelector('input').value;
    //alert(item);
    document
    .getElementById('list')
    .insertAdjacentHTML('afterbegin',`
    <li>
        <input type="checkbox">
        <button onclick="deleteItemHandler(this)"> 🗑️</button>
        <button id='btn' onclick="editItemHandler(this)"> ✏️</button>
        <span>${item}</span>
    </li>`);
}

const deleteItemHandler = (elem) => {
    elem.parentElement.remove();
}

console.log(document.getElementById('btn'));
//const dummy = document.querySelector('#list > li');
//deleteItemHandler(dummy);
//console.log(document.querySelector('input'));

const editItemHandler = (elem) => {
    const target = elem.parentElement.querySelector('span');
    console.log(target);
/* 
    if (target.contentEditable == 'false' || target.contentEditable == 'inherit') {
        target.contentEditable = true;
        elem.parentElement.querySelector('span').focus();
        elem.innerText = '🔒';
    } else {
        elem.innerText = '✏️';
        target.contentEditable = false;
    }

 */
    if (target.contentEditable === 'true') {
        elem.innerText = '✏️';
        target.contentEditable = 'false';
    } else {
        target.contentEditable = 'true';
        elem.parentElement.querySelector('span').focus();
        elem.innerText = '🔒';
    }
    //console.log(elem.parentElement);
    //elem.parentElement.querySelector('span').innerHTML = 'Edited';
    
}

if (true && false) {
    console.log('truthy');
} else {
    console.log('falsy');
}
//iherit || false|| true