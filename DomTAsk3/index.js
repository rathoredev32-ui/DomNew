var mainHeading = document.getElementById("main-heading");
      mainHeading.textContent = "Fruit World";

      mainHeading.style.color = "orange";

      var headerDiv = document.getElementById("header");
      headerDiv.style.backgroundColor = "green";

      headerDiv.style.borderBottom = "2px solid orange";

      var basketHeading = document.getElementById("basket-heading");
      basketHeading.style.color = "green";

      var thanksDiv = document.getElementById("thanks");
      var paragraph = document.createElement("p");
      paragraph.textContent = "Please visit us again";
      thanksDiv.appendChild(paragraph);