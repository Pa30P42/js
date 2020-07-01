const listRef = document.querySelector("#categories");
console.log(`В списке ${listRef.children.length} категории`);
//First
const itemRef = document.querySelectorAll(".item");
console.log(`Категория ${itemRef[0].firstElementChild.textContent}`);

console.log(`Количество элементов ${itemRef[0].children[1].children.length}`);
// Second
console.log(`Категория ${itemRef[1].firstElementChild.textContent}`);

console.log(`Количество элементов ${itemRef[1].children[1].children.length}`);
//Third
console.log(`Категория ${itemRef[2].firstElementChild.textContent}`);

console.log(`Количество элементов ${itemRef[2].children[1].children.length}`);
