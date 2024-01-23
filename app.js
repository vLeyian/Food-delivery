const mobile = document.querySelector('.menu-toggle');
const mobilelink = document.querySelector('.sidebar');

mobile.addEventListener('click', function(){
    mobile.classList.toggle("is-active");
    mobilelink.classList.toggle("active");
})

mobilelink.addEventListener('click', function(){
    const menuBars = document.querySelector(".is-active");
    if(window.innerWidth<=768 && menuBars) {
        mobile.classList.toggle("is-active");
        mobilelink.classList.toggle("active");
    }
})

// move the menu to the right and left when click back and next
var step = 100;
var stepfilter = 60;
var scrolling = true;

$(".back").bind("click", function(e){
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft: "-=" + step + "px"
    });
});

$(".next").bind("click", function(e){
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft: "+=" + step + "px"
    })
}) 

$(".back-menus").bind("click", function(e){
    e.preventDefault();
    $(".filter-wrapper").animate({
        scrollLeft: "-=" + stepFilter + "px"
    })
})

$(".next-menus").bind("click", function(e){
    e.preventDefault();
    $(".filter-wrapper").animate({
        scrollLeft: "+=" + stepFilter + "px"
    })
})
 

//companies that provide the foods

[ 
    {
      "name": "Big Square",
      "foodProvided": "Big Burger",
       "rating": 3.5
    },
    {
      "name": "Coston Poa",
      "foodProvided": "Shawarma",
      "rating": 3.7
    },
    {
      "name": "Roberto",
      "foodProvided": "Pizza",
      "rating": 3.2
    },
    {
       "name": "Tarbush",
       "foodProvided": "Beef Steak",
        "rating": 3.0
    },
    {
      "name": "Cafe",
      "foodProvided": "Cafe Latte",
      "rating": 3.9
    },
    {
      "name": "Quickmart",
      "foodProvided": "Salad",
      "rating": 3.6
    }
  ]

  const fetchData = async () => {
    try {
        const response = await fetch('https://api.example.com/data'); // Replace with your API endpoint
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Data from the API:', data);

        // Further processing or updating the UI can be done here
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
};

// Call the fetchData function when your page loads or when you need to fetch data
fetchData();
