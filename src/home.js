export default function loadHome() {
  // Fixed

  const content = document.getElementById("content");
  const homeDiv = document.createElement("div");
  homeDiv.classList.add("home");

  const heading = document.createElement("h1");
  heading.textContent = "Welcome to My Restaurant";

  const description = document.createElement("p");
  description.textContent =
    "Enjoy the finest dishes prepared with love and passion.";

  const overlay = document.createElement("div");
  overlay.classList.add("overlay");

  const itemContainer = document.createElement("div");

  homeDiv.append(heading, description, itemContainer);

  content.appendChild(homeDiv);

  const menus = [
    {
      link: "https://www.foodandwine.com/recipes/classic-cheese-pizza",
      img: "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg",
    },
    {
      name: "Beef Tacos",
      link: "#tacos",
      img: "https://www.onceuponachef.com/images/2023/08/Beef-Tacos-760x570.jpg",
    },
    {
      name: "Chicken Curry",
      link: "#curry",
      img: "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/chicken_curry_61994_16x9.jpg",
    },
    {
      name: "Spaghetti Carbonara",
      link: "#carbonara",
      img: "https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-master768-v2.jpg?quality=75&auto=webp",
    },
    {
      name: "Grilled Salmon",
      link: "#salmon",
      img: "https://hips.hearstapps.com/hmg-prod/images/how-to-grill-salmon-recipe2-1655870552.jpg?crop=0.982xw:0.982xh;0,0&resize=1200:*",
    },
    {
      name: "Caesar Salad",
      link: "#salad",
      img: "https://www.grocery.coop/sites/default/files/NCG_Dennis_Becker_Classic_Caesar_Salad_715_x_477.jpg",
    },
    {
      name: "Sushi Rolls",
      link: "#sushi",
      img: "https://int.japanesetaste.com/cdn/shop/articles/how-to-make-makizushi-sushi-rolls-japanese-taste.jpg?v=1707914944&width=1440",
    },
    {
      name: "Pad Thai",
      link: "#padthai",
      img: "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_728,h_546/k%2FPhoto%2FRecipes%2F2024-04-pad-thai-190%2Fpad-thai-190-251",
    },
    {
      name: "Falafel Wrap",
      link: "#falafel",
      img: "https://cdn-ildggll.nitrocdn.com/sCKbknHaHrEtuwTSsHiAUCeqNJThkOVZ/assets/images/optimized/rev-ffc4053/makefoodlovely.com/wp-content/uploads/2025/01/Copycat-Starbucks-Spicy-Falafel-Pocket-Recipe.png",
    },
  ];

  let currentIndex = 0;

  function updateMenuItems() {
    itemContainer.innerHTML = "";

    const menu = menus[currentIndex];

    const link = document.createElement("a");
    link.href = menu.link;

    link.style.color = "white";
    link.style.textDecoration = "none";
    link.style.fontSize = "1.2rem";
    link.target = "_blank";

    const img = document.createElement("img");
    img.src = menu.img;
    img.alt = menu.name;
    img.style.width = "1300px";
    img.style.height = "650px";
    img.style.borderRadius = "90px";
    img.style.margin = "10px 0";
    img.style.opacity = "3";

    itemContainer.appendChild(img);
    itemContainer.appendChild(link);

    currentIndex = (currentIndex + 1) % menus.length;
  }

  updateMenuItems();
  setInterval(updateMenuItems, 10000); // 10 seconds
}
