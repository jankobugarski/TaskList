

const addTaskButton = document.querySelector('#btn-add');
const taskListContainer = document.querySelector('#tasks-container');
const textBoxTitle = document.querySelector('#txt-title');
//console.log(taskListContainer);
//console.log(addTaskButton);

//console.log(addTaskButton.parentElement);
//console.log(addTaskButton.parentNode);

addTaskButton.addEventListener('click', btnAddClick);
textBoxTitle.addEventListener('keyup', txtKeyUp);
function btnAddClick(e) {
    //console.log(e);
    //console.log(e.target);
    e;
    addItem();

}
function txtKeyUp(e) {
    //console.log(e);
    if (e.keyCode == 13) {
        addItem();
    }
}
function addItem() {

    let txtBox = document.querySelector('#txt-title');
    //console.log(txtBox);    

    let text = txtBox.value;
    text = text.trim();
    if (text == '') {
        alert('Task Title can not be empty!');
        return;
    }

    //console.log(text);

    let itemContainer = document.createElement("div");
    //console.log(itemContainer);
    itemContainer.className = 'task-item';

    let itemText = document.createElement('p');
    itemText.innerHTML = text;
    itemText.className = 'task-title';
    console.log(itemText);

    let checkContainer = document.createElement('div');
    checkContainer.className = 'task-check';

    let removeBtn = document.createElement('button');
    removeBtn.className = 'task-remove-btn';
    removeBtn.addEventListener('click', removeTask);
    removeBtn.innerHTML = 'X';

    let chkDone = document.createElement('input');
    chkDone.type = 'checkbox';
    chkDone.className = 'chk-state';
    chkDone.value = 'done';
    chkDone.addEventListener('change', handleCheckChange);

    checkContainer.appendChild(removeBtn);
    checkContainer.appendChild(chkDone);



    itemContainer.appendChild(itemText);
    itemContainer.appendChild(checkContainer);
    taskListContainer.appendChild(itemContainer);

    txtBox.value = '';

}
function removeTask(e) {
    console.log(e);
    //console.log(e.target);
    if (!confirm('Are you sure?')) {
        return;
    }
    let btnToRemove = e.target;
    let divToRemove = btnToRemove.parentElement.parentElement;
    //console.log(divToRemove);
    divToRemove.remove();
}

function handleCheckChange(e) {
    //console.log(e);
    let chkBox = e.target;

    let checkContainer = chkBox.parentElement;
    let itemContainer = checkContainer.parentElement;

    if (chkBox.checked) {
        itemContainer.children[0].style.textDecoration = 'line-through';
    }
    else {

        itemContainer.children[0].style.textDecoration = 'none';
    }
}
// 6. zadatak
let remove = document.getElementById('btn-remove');
remove.addEventListener('click', function (e) {
    let chkDone1 = document.querySelector('.chk-state');
    if (chkDone1.checked) {
        // console.log('hi')
        let obrisi = document.querySelector('.task-check')
        // console.log(obrisi)
        let divtoRemove = obrisi.parentElement
        divtoRemove.remove()

    }
})
// 7. zadatak
let invert = document.getElementById('btn-invert')
invert.addEventListener('click', function () {
    let chkDone2 = document.querySelectorAll('.chk-state')
    // console.log(chkDone2)
    chkDone2.forEach(element => {
        if (element.checked) {
            element.checked = false;

        }
        else {
            element.checked = true;
        }

    });

})

// 8.zadatak

// NISAM USPEO DA RESIM
// let selectovano = document.getElementById('select');
// let option1 = document.getElementById('l');
// let option2 = document.getElementById('m')
// let option3 = document.getElementById('h')
// let diffic;
// let difficDiv;





// addTaskButton.addEventListener('click', function () {

//     diffic = document.createElement('p');
//     difficDiv = document.createElement('div')
//     difficDiv.appendChild(diffic)
//     taskListContainer.appendChild(difficDiv)
//     if (option1) {
//         diffic.innerHTML = 'low'

//     }
// })



// remove.addEventListener('click', function () {

    
//     if (chkDone2.checked) {
//         let obrisi = difficDiv
//         obrisi.remove()
//     }
// })









