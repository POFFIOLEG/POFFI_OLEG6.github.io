function calculate() {
    var quantity = document.getElementById("quantity").value;
    var product = document.getElementById("product").value;
    var result = quantity * product;
    alert("Стоимость заказа: " + result + " рублей");
   }


   $(".lazy").slick({
    lazyLoad: "ondemand",
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500
  });
  