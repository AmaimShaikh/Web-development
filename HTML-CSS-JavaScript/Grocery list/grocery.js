//query selector - selects the first element that matches
const itemInput = document.querySelector('.itemInput');
const addItemButton = document.querySelector('.addBtn');
const itemList = document.querySelector('.itemList');


// callback - passing a function as an argument/parameter

//clearing all the items from the list
const clearItems = document.querySelector('.clearBtn');
clearItems.addEventListener('click', event => {
    const itemListClear = document.querySelector('.itemList');
    itemListClear.innerHTML = "";
});


// when the button is clicked, new item is added
addItemButton.addEventListener('click', addItem = event => {
    /* trim() function removes the whitespaces (spaces, tabs, etc) from the beginning and end of a string. therefore when an empty string, 
    or stirng which only has whitespace will not be added to the grocery list */
    if(itemInput.value.trim() === "") {
        return;
    }
    


    // create div
    const itemListDiv = document.createElement('div');
    // assigning class to the div - different ways to add class 
    // itemListDiv.setAttribute('class', 'listItem'); // 1st way
    itemListDiv.classList.add('listItem'); // 2nd way




    // create List
    // create an element list
    const newItem = document.createElement('li');
    // add text in list
    newItem.innerText = itemInput.value;
    // assign class to the list
    newItem.classList.add('newListItem');
    // appending the created list to div
    itemListDiv.appendChild(newItem);




    // create button - completed
    const check = document.createElement('button');
    check.innerHTML = '<i class="fa-solid fa-check"></i>';
    check.classList.add('checkBtn');
    // itemListDiv.appendChild(check);
    itemListDiv.appendChild(check);



    // create button - delete
    // create element
    const del = document.createElement('button');
    // add text/icon
    del.innerHTML = '<i class="fa-solid fa-trash"></i>';
    // assign class name
    del.classList.add('deleteBtn');
    // append this element to the div
    itemListDiv.appendChild(del);



    // append the created div to ul tag
    itemList.appendChild(itemListDiv);
    itemInput.value = "";
});




// item is also added when enter key is pressed
itemInput.addEventListener('keyup', event => {
    if(event.keyCode === 13){
        addItem();
    }
});




// the item will be checked or deleted according to the button clicked
itemList.addEventListener('click', event => {
    const element = event.target;

    // if check button is clicked
    if (element.classList[0] === 'checkBtn') {
        const item = element.parentElement;
        item.classList.toggle('checked');
    }

    // if delete button is clicked
    if (element.classList[0] === 'deleteBtn') {
        const item = element.parentElement;
        item.remove();
    }
});