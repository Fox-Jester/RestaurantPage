
const content = document.querySelector("#content");

function createMenuItem(name, price){
    const contentItem = document.createElement("div");
    contentItem.classList.add("content-block", "item");
   

    const div = document.createElement("div");
    div.classList.add("buy-group")

    const itemName = document.createElement("p");
    itemName.classList.add("item-name");
    itemName.textContent = name;

    const itemPrice = document.createElement("p");
    itemPrice.textContent = price

    const itemBtn = document.createElement("button");
    itemBtn.textContent = "Buy";

    div.appendChild(itemPrice);
    div.appendChild(itemBtn);
    contentItem.appendChild(itemName);
    contentItem.appendChild(div);
    content.appendChild(contentItem);
}

export default function createMenu(){
    const menuArray = [
        { name: "Mystery Smoothie", price: "$5.99" },
        { name: "StrawberryBanana", price: "$5.99" },
        { name: "BerryBlast", price: "$6.50" }
    ];
    menuArray.forEach(item => createMenuItem(item.name, item.price));
}