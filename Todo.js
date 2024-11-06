// code for creating the list and showing it on the screen...
// const addItemtoList = ()=>{

//     const a = document.getElementById("TaskInput");

//     const error = document.getElementById("displayError");

//     const inputValue = a.value;

//     if(inputValue)
//     {
//         const getInitialList = document.getElementById("initialUnorderedList");

//         const newListItem = document.createElement("li");

//         const buttonElement = document.createElement('button');

//         buttonElement.className = 'closeButton';

//         const closeIcon = document.createTextNode("\u00D7");

//         buttonElement.append(closeIcon);


//         buttonElement.addEventListener('click', ()=>{
//            buttonElement.parentNode.style.display = 'none';
//         });

//         const i = document.createElement('i');

//         i.className = 'fa-solid fa-check check-mark';

//         i.style.display = 'none';

//         newListItem.className = "ListItem_forToDo";
        
//        newListItem.addEventListener('click', ()=>{
//         if(newListItem.className == 'ListItem_forToDo_checked')
//         {
//             newListItem.className = 'ListItem_forToDo';
//             i.style.display = 'none';
//         }
//         else
//         {
//             newListItem.className = 'ListItem_forToDo_checked';
//             i.style.display = 'inline';
//         }
//        });
        
//         newListItem.textContent = inputValue;

//         newListItem.appendChild(buttonElement);

//         newListItem.appendChild(i);

//         getInitialList.appendChild(newListItem);
//     }
//     else
//     {
//         error.textContent = "Input cannot be Empty...";
        
//         setTimeout(()=>{
//             error.textContent = null; 
            
//         }, 2000);
//     }

//     a.value = null;
// }

// code for on enter key to add task...
document.addEventListener("keydown", (e)=>{
    if(e.keyCode == 13)
    {
        // addItemtoList();
        addItemTable();
    }
});

const addItemTable = ()=>{
    const a = document.getElementById("TaskInput");
    const error = document.getElementById("displayError");
    const inputVal = a.value;
    if(inputVal)
    {
        const table = document.getElementById('table_main');
        const newRow = document.createElement('tr');
        const newCol1 = document.createElement('td');
        const newCol2 = document.createElement('td');
        const newCol3 = document.createElement('td');
        newCol1.innerHTML = inputVal;
        newCol2.innerHTML = "Incomplete";
        newCol1.addEventListener("click", () => {
            if(newCol1.innerHTML !== "-")
            {
                newCol3.innerHTML = newCol1.innerHTML;
                newCol1.innerHTML = "-";
                newCol2.innerHTML = "Complete";
            }
            else
            {
                newCol1.innerHTML = newCol3.innerHTML;
                newCol3.innerHTML = "";
                newCol2.innerHTML = "Incomplete";                
            }
        });
        newRow.appendChild(newCol1);
        newRow.appendChild(newCol2);
        newRow.appendChild(newCol3);
        table.appendChild(newRow);
    } else {
        error.textContent = "Input cannot be Empty...";
        setTimeout(()=>{
            error.textContent = null;
        }, 2000);
    }
    
    a.value = null;
};
