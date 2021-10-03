let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');
//Form submit event
form.addEventListener('submit', addItem);

//Delete event
itemList.addEventListener('click', removeItem);

//Remove item
function removeItem(e) {
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      let li = e.target.parentElement;
      itemList.removeChild(li);
  }
}
}
// FIlter event
filter.addEventListener('keyup', filterItems);

//Filter Items
function filterItems(e){
  //convert text to lower case
  let text = e.target.value.toLowerCase();
  //Get li's
  let items= itemList.getElementsByTagName('li');
  //convert to arraw
   Array.from(items).forEach(function(item){
    let itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = 'block';
    }else {
      item.style.display = 'none';
    }
  });
}

//Add Items
function addItem(e) {
  e.preventDefault();

  //Get input value
  let newItem = document.getElementById('item').value;

  //Create new li element
  let li = document.createElement('li');

  //Add class
  li.className = 'list-group-item';

  //Add text note with input value
  li.appendChild(document.createTextNode(newItem));

  //Create del button element
  let deletebtn = document.createElement('button');

  //Add class's to del button
  deletebtn.className = 'btn btn-danger btn-sm float-right delete';

  //Append text node
  deletebtn.appendChild(document.createTextNode('X'));

  //Append btn to li
  li.appendChild(deletebtn);

  //Append li to list
  itemList.appendChild(li);



}
