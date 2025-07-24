export default function loadContact() {
  const content = document.getElementById("content");
  const contactDiv = document.createElement("div");

  const overlay = document.createElement("div");
  overlay.classList.add("overlay");

  const title = document.createElement("h1");
  title.textContent = "Contact Us";

  const phone = document.createElement("p");
  phone.textContent = "📞 +123-456-789";

  const email = document.createElement("p");
  email.textContent = "📧 info@restaurant.com";

  contactDiv.append(title, phone, email);
  overlay.appendChild(contactDiv);
  content.appendChild(overlay);
}
