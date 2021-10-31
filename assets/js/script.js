const url = "https://evoush-mock-api.herokuapp.com/products";
const loading = document.getElementById("loading");
loading.style.visibility = "hidden";
const hamburgerButton = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");

hamburgerButton.addEventListener("click", toggleButton);

allproduct(url)
  .then((res) => {
    console.log(res.data.length);
    const products = res.data.slice().reverse();
    const firsts = products.slice(0, 3);
    const seconds = products.slice(4, 7);
    const thirds = products.slice(7, 10);
    const fourths = products.slice(11, 14);

    if (res.data.length > 0) {
      loading.style.visibility = "visible";
      setTimeout(function () {
        loading.style.visibility = "hidden";
        firsts.map((first) => {
          FirstProduct(first);
        });

        seconds.map((second) => {
          SecondProduct(second);
        });

        thirds.map((third) => {
          ThirdProduct(third);
        });

        fourths.map((fourth) => {
          FourthProduct(fourth);
        });
      }, 1500);
    } else {
      loading.style.visibility = "visible";
    }
  })
  .catch((err) => {
    console.log(err);
  });
