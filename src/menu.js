

export default function loadMenu() {
  const hotelMenu = [
      {
        category: "Breakfast",
        items: [
          { name: "Pancakes with Syrup", price: 5.99, image: "https://source.unsplash.com/200x130/?pancakes" },
          { name: "Omelette with Toast", price: 6.49, image: "https://source.unsplash.com/200x130/?omelette" },
          { name: "English Breakfast", price: 8.99, image: "https://source.unsplash.com/200x130/?english-breakfast" },
          { name: "Fresh Fruit Bowl", price: 4.50, image: "https://source.unsplash.com/200x130/?fruit" },
          { name: "Tea or Coffee", price: 2.00, image: "https://source.unsplash.com/200x130/?coffee" }
        ]
      },
      {
        category: "Lunch",
        items: [
          { name: "Grilled Chicken Sandwich", price: 7.99, image: "https://source.unsplash.com/200x130/?chicken-sandwich" },
          { name: "Beef Burger & Fries", price: 9.49, image: "https://source.unsplash.com/200x130/?burger" },
          { name: "Caesar Salad", price: 6.99, image: "https://source.unsplash.com/200x130/?salad" },
          { name: "Spaghetti Bolognese", price: 8.99, image: "https://source.unsplash.com/200x130/?spaghetti" },
          { name: "Vegetable Wrap", price: 6.49, image: "https://source.unsplash.com/200x130/?wrap" }
        ]
      },
      {
        category: "Dinner",
        items: [
          { name: "Grilled Salmon with Veggies", price: 12.99, image: "https://source.unsplash.com/200x130/?salmon" },
          { name: "Steak with Mashed Potatoes", price: 14.49, image: "https://source.unsplash.com/200x130/?steak" },
          { name: "Chicken Curry with Rice", price: 10.99, image: "https://source.unsplash.com/200x130/?curry" },
          { name: "Vegetarian Lasagna", price: 9.49, image: "https://source.unsplash.com/200x130/?lasagna" },
          { name: "Soup of the Day & Bread", price: 5.99, image: "https://source.unsplash.com/200x130/?soup" }
        ]
      },
      {
        category: "Drinks",
        items: [
          { name: "Fresh Juice", price: 3.00, image: "https://source.unsplash.com/200x130/?juice" },
          { name: "Soda", price: 2.00, image: "https://source.unsplash.com/200x130/?soda" },
          { name: "Mineral Water", price: 1.50, image: "https://source.unsplash.com/200x130/?water" },
          { name: "Milkshake", price: 3.50, image: "https://source.unsplash.com/200x130/?milkshake" },
          { name: "House Wine (Glass)", price: 4.99, image: "https://source.unsplash.com/200x130/?wine" }
        ]
      }
    ];

    const container = document.getElementById("content");

    hotelMenu.forEach(section => {
      const title = document.createElement("h2");
      title.textContent = section.category;
      container.appendChild(title);

      const grid = document.createElement("div");
      grid.classList.add("menu-grid");

      section.items.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("menu-item");

        itemDiv.innerHTML = `
          <img src="${item.image}" alt="${item.name}" />
          <h4>${item.name}</h4>
          <p>$${item.price.toFixed(2)}</p>
        `;

        grid.appendChild(itemDiv);
      });

      container.appendChild(grid);
    });
}

