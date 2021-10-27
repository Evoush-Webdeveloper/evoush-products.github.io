const allproduct = async (url) => {
  const products = await fetch(url);
  return products.json();
};

function FirstProduct(first) {
  CreateElement("div", first, "first", "#e397a3");
}

function SecondProduct(second) {
  CreateElement("div", second, "second", "#1c6242");
}

function ThirdProduct(third) {
  CreateElement("div", third, "third", "salmon");
}

function FourthProduct(fourth) {
  CreateElement("div", fourth, "fourth", "coral");
}

function CreateElement(el, data, dom, color) {
  console.log(data);
  const newEl = document.createElement("div");
  newEl.className = "project-card";
  newEl.innerHTML = `
          <img
            class="project-image"
            src="${data.image.url}"
            alt="Project One Image"
          />
          <h3>${data.seo.title}</h3>
          <p class="subtext">
            ${data.seo.title}
          </p>
          <hr />
          <p class="subtext">
            <a class="project-link" href="https://evoush.com/product/${data.permalink}"
              >View here</a
            >
          </p>
    `;
  document.getElementById(dom).appendChild(newEl);
}

function toggleButton() {
  navList.classList.toggle("show");
}
