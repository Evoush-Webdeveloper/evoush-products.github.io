const url = "https://evoush-mock-api.herokuapp.com/products";
const loading = document.getElementById("loading");
loading.style.visibility = "hidden";

allproduct(url)
  .then((res) => {
    console.log(res.data.length);
    const products = res.data.slice().reverse();
    const firsts = products.slice(0, 5);
    const seconds = products.slice(4, 9);
    const thirds = products.slice(9, 13);

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
      }, 1500);
    } else {
      loading.style.visibility = "visible";
    }
  })
  .catch((err) => {
    console.log(err);
  });
