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
    console.log(elem.parentElement);
    //elem.parentElement.querySelector('span').innerHTML = 'Edited';
    elem.parentElement.querySelector('span').contentEditable = true;
    elem.parentElement.querySelector('span').focus();
}