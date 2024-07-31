// START OF CAROUSEL JS
document.querySelectorAll(".carousel-arrow").forEach(button => {
    button.addEventListener("click", () => {
        const direction = button.classList.contains("prev") ? -1 : 1;
        const carousel = document.querySelector(".carousel");
        const scrollAmount = carousel.clientWidth * direction;
        carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
});
// END OF CAROUSEL JS

// START OF ACCORDION JS
const accordions = document.querySelectorAll(".accordion-container");

accordions.forEach(accordion => {
    const title = accordion.querySelector(".accordion-title");
    title.addEventListener("click", () => {
        accordion.classList.toggle("active");
        
        // Toggle content visibility
        const content = accordion.querySelector(".accordion-content");
        if (accordion.classList.contains("active")) {
            content.style.height = content.scrollHeight + "px";
        } else {
            content.style.height = 0;
        }
    });
});

// END OF ACCORDION JS

// START OF DROPDOWN JS
function Dropdown() {
    document.getElementById('myDropdown').classList.toggle('show');
  }
  
  window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName('dropdown-content');
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };

  // END OF DROPDOWN JS