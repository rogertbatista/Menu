// items
const menu = [
{
    id: 1,
    title:"Raspberry Pancakes",
    category:"Breakfast",
    price: 15.99,
    img:"./img/pancake_01.jpg",
    desc:"Indulge in a breakfast delight that combines the warmth of fluffy pancakes with the vibrant burst of fresh raspberries. Our raspberry pancakes are a culinary masterpiece that will awaken your taste buds and brighten your mornings."
},
{
    id: 2,
    title: "Bacons and Eggs",
    category: "Breakfast",
    price: 10.99,
    img: "./img/bacon_eggs.jpg",
    desc: "Bacon and eggs, a beloved and timeless breakfast duo, have been gracing breakfast plates around the world for generations. This classic combination is a true morning comfort, offering a harmonious blend of flavors and textures that satisfy the palate and provide the perfect start to the day."
},
{
    id: 3,
    title: "Sandwich",
    category: "Breakfast",
    price: 7.99,
    img: "./img/sandwich.jpg",
    desc: "Prepare yourself for a culinary adventure that's both delicious and satisfying - the classic sandwich, reinvented for your taste buds. Our sandwiches are a symphony of flavors, textures, and fresh ingredients that will take your palate on a journey you won't soon forget."
},
{
    id: 4,
    title: "Cheeseburguer",
    category: "Lunch",
    price: 12.99,
    img: "./img/cheeseburguer.jpg",
    desc: "Indulge in the ultimate comfort food, the cheeseburger, where every bite is a celebration of flavor and satisfaction. Our cheeseburgers are a true masterpiece of culinary delight, promising a symphony of tastes and textures that will leave your taste buds dancing with joy."
},
{
    id: 5,
    title: "Lasagna",
    category: "Lunch",
    price: 19.99,
    img: "./img/lasagna.jpg",
    desc: "Our lasagna is not just a dish; it's a culinary masterpiece that invites you to savor layer upon layer of comforting flavors and textures. Each bite tells a story of tradition, craftsmanship, and the love we pour into creating this Italian classic."
},
{
    id: 6,
    title: "Parmegiana",
    category: "Lunch",
    price: 9.99,
    img: "./img/parmegiana.jpg",
    desc: "Prepare your taste buds for a culinary journey to Italy with our Chicken Parmigiana. It's a dish that embodies the essence of comfort food elevated to gourmet heights. With every forkful, you'll experience the rich layers of flavors and textures that make this Italian classic a beloved favorite around the world."
},
{
    id: 7,
    title: "Pizza",
    category: "Lunch",
    price: 29.99,
    img: "./img/pizza.jpg",
    desc: "Embark on a journey to the heart of Italy with our delectable pizza, a timeless masterpiece that transcends borders and tantalizes taste buds. Our pizza is not just a meal; it's an experience—a celebration of flavors, textures, and traditions that have been perfected over generations."
},
{
    id: 8,
    title: "Ice Cream",
    category: "Desserts",
    price: 5.99,
    img: "./img/ice_cream.jpg",
    desc: "Our artisanal ice cream is more than a frozen treat; it's a symphony of flavors and textures that dance across your taste buds, leaving you craving more with every spoonful. Crafted with the utmost care and attention to detail, our ice cream is a celebration of taste, quality, and pure enjoyment."
},
{
    id: 9,
    title: "Cheesecakes",
    category: "Desserts",
    price: 5.99,
    img: "./img/cheesecakes.jpg",
    desc: "Our cheesecake is more than a dessert; it's a masterpiece of culinary delight that elevates the senses with each luxurious bite. Crafted with meticulous attention to detail and the finest ingredients, our cheesecake is a symphony of flavors and textures that will leave you craving more." 
},
{
    id: 10,
    title: "Cupcakes",
    category: "Desserts",
    price: 3.99,
    img: "./img/cupcakes.jpg",
    desc: "Our cupcakes are more than just tiny treats; they're little bundles of joy crafted to make every moment sweet and memorable. Each one is a miniature work of art, a delightful blend of flavors, and a perfect indulgence for your taste buds."
},
{
    id: 11,
    title: "Beer",
    category: "Drinks",
    price: 12.99,
    img: "./img/beer.jpg",
    desc: "Raise your glass to a new level of beer craftsmanship. Our premium craft beer is a testament to the art of brewing, where quality ingredients and meticulous attention to detail come together to create a symphony of flavor that will tantalize your taste buds."  
},
{
    id: 12,
    title: "Juices",
    category: "Drinks",
    price: 9.99,
    img: "./img/juices.jpg",
    desc: "Our juices are more than just beverages; they are an embodiment of nature's bounty captured in a bottle. Crafted with the finest, sun-ripened fruits and vegetables, each sip of our juice is a journey to orchards and gardens, a refreshing and invigorating delight for your taste buds."
},
{
    id: 13,
    title: "Soda",
    category: "Drinks",
    price: 7.99,
    img: "./img/soda.jpg",
    desc: "Our craft soda is more than just a drink; it's a symphony of effervescence, flavor, and nostalgia in every sip. Crafted with care and an unwavering commitment to quality, our soda takes you on a journey through time, bringing back the classic soda fountain experience with a modern twist."
},
{
    id: 14,
    title: "Pasta",
    category: "Lunch",
    price: 19.99,
    img: "./img/pasta.jpg",
    desc: "Our pasta dishes are a culinary masterpiece, a celebration of tradition, and a voyage to the heart of Italy. Each plate of pasta we serve is a work of art, crafted with the finest ingredients and a passion for creating memorable dining experiences."
}
];

const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector('.btn-container');

window.addEventListener('DOMContentLoaded',function(){
    displayMenuItems(menu);
    displayMenuButtons();
}); 

function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function (item) {
        return `<article class="menu-item">
                <img src=${item.img} class="photo" alt=${item.title}>
                <div class="item-info">
                    <header>
                        <h4>${item.title}</h4>
                        <h4 class="price">${item.price}</h4>
                    </header>
                    <p class="item-text">
                        ${item.desc}
                    </p>
                </div>
            </article>`
    }).join('');
    sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons(){
    const categories = menu.reduce(function (values, item) {
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    }, ["All"]);
    const categoryBtns = categories.map(function (category) {
        return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`
    }).join('');
    container.innerHTML = categoryBtns;
    const filterBtns = container.querySelectorAll('.filter-btn');
    filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            console.log(e.currentTarget.dataset.id);
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItem) {
                if (menuItem.category === category) {
                    console.log(menuItem.category);
                    return menuItem;
                }
            });
            if (category === 'All') {
                displayMenuItems(menu);
            }
            else {
                displayMenuItems(menuCategory);
                console.log(menuCategory);
            }
        });
    });
}