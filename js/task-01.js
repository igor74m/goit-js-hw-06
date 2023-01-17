

const categoriesItemsEl = document.querySelectorAll("#categories .item");
console.log("Number of categories: ", categoriesItemsEl.length);
const categoriesItemsTitleEl = document.querySelectorAll("#categories .item h2");
for(let categoriesItemTitleEl of categoriesItemsTitleEl) {
    console.log(`Category:`, categoriesItemTitleEl.textContent);
    const categoriesItemsTitleListEl = categoriesItemTitleEl.nextElementSibling.children.length;
    console.log(`Elements:`, categoriesItemsTitleListEl);
   
};
 


