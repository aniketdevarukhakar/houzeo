let propertyData = [
  {
    id: 1,
    name: "Gateway of India",
    property_type: "Apartment",
    for_sale: "House For Sale",
    price: 2400,
    days_published: 5,
    people_views: 120,
    images: [
      "./images/1.png",
      "./images/2.png",
      "./images/3.png",
      "./images/4.png",
    ],
    broker_info: "2856 Meadow Park Ave",
    address: "Apollo Bandar, Colaba, Mumbai, Maharashtra 400001, India",
    geo_location: { lat: 18.922, lng: 72.8347 },
    beds: 2,
    bathrooms: 2,
    sqft: 850,
  },
  {
    id: 2,
    name: "Taj Mahal",
    property_type: "House",
    for_sale: "Condo For Sale",
    price: 350000,
    days_published: 15,
    people_views: 250,
    images: [
      "./images/1.png",
      "./images/2.png",
      "./images/3.png",
      "./images/4.png",
    ],
    broker_info: "2856 Meadow Park Ave",
    address:
      "Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001, India",
    geo_location: { lat: 27.1751, lng: 78.0421 },
    beds: 3,
    bathrooms: 2,
    sqft: 1800,
  },
  {
    id: 3,
    name: "India Gate",
    property_type: "House",
    for_sale: "Multi-family home For Sale",
    price: 2900,
    days_published: 3,
    people_views: 89,
    images: [
      "./images/1.png",
      "./images/2.png",
      "./images/3.png",
      "./images/4.png",
    ],
    broker_info: "2856 Meadow Park Ave",
    address: "Rajpath Marg, India Gate, New Delhi, Delhi 110001, India",
    geo_location: { lat: 28.6129, lng: 77.2295 },
    beds: 4,
    bathrooms: 3,
    sqft: 2400,
  },
  {
    id: 4,
    name: "Mysore Palace",
    property_type: "Condo",
    for_sale: "House For Sale",
    price: 420000,
    days_published: 10,
    people_views: 305,
    images: [],
    broker_info: "2856 Meadow Park Ave",
    address:
      "Sayyaji Rao Rd, Agrahara, Chamrajpura, Mysuru, Karnataka 570001, India",
    geo_location: { lat: 12.3052, lng: 76.6552 },
    beds: 3,
    bathrooms: 2,
    sqft: 1400,
  },
  {
    id: 5,
    name: "Charminar",
    property_type: "Apartment",
    for_sale: "House For Sale",
    price: 1500,
    days_published: 2,
    people_views: 45,
    images: [
      "./images/1.png",
      "./images/2.png",
      "./images/3.png",
      "./images/4.png",
    ],
    broker_info: "2856 Meadow Park Ave",
    address:
      "Charminar Rd, Char Kaman, Ghansi Bazaar, Hyderabad, Telangana 500002, India",
    geo_location: { lat: 17.3616, lng: 78.4747 },
    beds: 1,
    bathrooms: 1,
    sqft: 600,
  },
  {
    id: 6,
    name: "Golden Temple",
    property_type: "Apartment",
    for_sale: "Multi-family home For Sale",
    price: 8500,
    days_published: 1,
    people_views: 350,
    images: [
      "./images/1.png",
      "./images/2.png",
      "./images/3.png",
      "./images/4.png",
    ],
    broker_info: "2856 Meadow Park Ave",
    address:
      "Golden Temple Rd, Atta Mandi, Katra Ahluwalia, Amritsar, Punjab 143006, India",
    geo_location: { lat: 31.62, lng: 74.8765 },
    beds: 4,
    bathrooms: 3,
    sqft: 3200,
  },
  {
    id: 7,
    name: "Hawa Mahal",
    property_type: "Townhouse",
    for_sale: "Condo For Sale",
    price: 499000,
    days_published: 30,
    people_views: 600,
    images: [
      "./images/1.png",
      "./images/2.png",
      "./images/3.png",
      "./images/4.png",
    ],
    broker_info: "2856 Meadow Park Ave",
    address:
      "Hawa Mahal Rd, Badi Choupad, J.D.A. Market, Pink City, Jaipur, Rajasthan 302002, India",
    geo_location: { lat: 26.9239, lng: 75.8267 },
    beds: 3,
    bathrooms: 2,
    sqft: 2000,
  },
  {
    id: 8,
    name: "Victoria Memorial",
    property_type: "Apartment",
    for_sale: "Multi-family home For Sale",
    price: 2800,
    days_published: 8,
    people_views: 180,
    images: [
      "./images/1.png",
      "./images/2.png",
      "./images/3.png",
      "./images/4.png",
    ],
    broker_info: "2856 Meadow Park Ave",
    address:
      "Victoria Memorial Hall, 1, Queens Way, Kolkata, West Bengal 700071, India",
    geo_location: { lat: 22.5448, lng: 88.3426 },
    beds: 2,
    bathrooms: 2,
    sqft: 1200,
  },
  {
    id: 9,
    name: "Marine Drive",
    property_type: "House",
    for_sale: "Condo For Sale",
    price: 2100,
    days_published: 12,
    people_views: 80,
    images: [
      "./images/1.png",
      "./images/2.png",
      "./images/3.png",
      "./images/4.png",
    ],
    broker_info: "2856 Meadow Park Ave",
    address:
      "Netaji Subhash Chandra Bose Rd, Marine Lines, Mumbai, Maharashtra 400020, India",
    geo_location: { lat: 18.944, lng: 72.8236 },
    beds: 4,
    bathrooms: 3,
    sqft: 2500,
  },
  {
    id: 10,
    name: "Qutub Minar",
    property_type: "Commercial",
    for_sale: "Condo For Sale",
    price: 950000,
    days_published: 25,
    people_views: 450,
    images: [
      "./images/1.png",
      "./images/2.png",
      "./images/3.png",
      "./images/4.png",
    ],
    broker_info: "2856 Meadow Park Ave",
    address: "Seth Sarai, Mehrauli, New Delhi, Delhi 110030, India",
    geo_location: { lat: 28.5244, lng: 77.1855 },
    beds: 0,
    bathrooms: 2,
    sqft: 4000,
  },
];
let propertyItems = document.getElementById("property-list");
let totalPropertyCount = document.getElementById("property-count");
let days = document.querySelectorAll(".days-left");
let hamburg = document.getElementById("hamburger");
let navBar = document.querySelector("nav");
let openBtn = document.querySelector(".open-icon");
let closeBtn = document.querySelector(".close-icon");
let iframeBtn = document.getElementById("mapiframe");
let mapViewDiv = document.getElementById("mapview");
let searchBtn = document.querySelector(".search-btn");
let inputSearchField = document.querySelector(".inputsearch");


hamburg.addEventListener("click", () => {
  navBar.classList.toggle("active");
  openBtn.classList.toggle("hidden");
  closeBtn.classList.toggle("hidden");
});
iframeBtn.addEventListener("click", () => {
  mapViewDiv.classList.toggle("active");
});
let year = document.querySelector(".year");
let date = new Date().getFullYear();
year.innerText = date;

let forSaleSelect = document.getElementById("for-sale");
let priceSelect = document.getElementById("price");
let bedSelect = document.getElementById("bedsBaths");
let propertyTypeSelect = document.getElementById("propertyType");

function getPropertyData() {

  let forSaleOpt = "";
  let priceOpt = "";
  let bedOpt = "";
  let propertyTypeOpt = "";
  let unique = [];
  propertyData.forEach((data) => {
    if (!unique.includes(data.for_sale)) {
      unique.push(data.for_sale);
      forSaleOpt += `<option value="${data.for_sale}">${data.for_sale}</option>`;
    }

    if (!unique.includes(data.price)) {
      unique.push(data.price);
      priceOpt += `<option value="${data.price}">${data.price}</option>`;
    }

    if (!unique.includes(data.beds) || !unique.includes(data.bathrooms)) {
      unique.push(data.beds);
      unique.push(data.bathrooms);
      bedOpt += `<option value="${data.beds}">${data.beds} Beds & ${data.bathrooms} Bath</option>`;
    }

    if (!unique.includes(data.property_type)) {
      unique.push(data.property_type);
      propertyTypeOpt += `<option value="${data.property_type}">${data.property_type}</option>`;
    }
  });

  forSaleSelect.innerHTML = `<option value="none" selected>For Sale</option> ${forSaleOpt}`;
  priceSelect.innerHTML = `<option value="none" selected>Price</option> ${priceOpt}`;
  bedSelect.innerHTML = `<option value="none" selected>Beds & Bath</option> ${bedOpt}`;
  propertyTypeSelect.innerHTML = `<option value="none" selected>Property Type</option> ${propertyTypeOpt}`;
}

document.addEventListener("DOMContentLoaded", getPropertyData);

totalPropertyCount.innerText = propertyData.length + " Homes";
// let propertyList = "";

function renderProperties(propertyData) {
  let propertyList = "";

  propertyData.forEach((data) => {
    //on change event
    // forSaleSelect.addEventListener("change", (e) => {
    //   if (e.target.value === data.for_sale) {
    propertyList += `<li id="card-${data.id}" class="property-item">
                  <a href="" class="property-link">
                    <div class="card-view">
                      <div class="property-img">
                        <swiper-container
                          class="mySwiper swiperlist"
                          pagination="true"
                          pagination-clickable="true"
                          space-between="30"
                          effect="fade"
                          navigation="true">
                        </swiper-container>
                        <div class="flex-box space-between like-container">
                          <div class="days-left">${data.days_published} days on Houzeo</div>
                          <div class="like-right">
                            <img src="./images/like.png" class="like" alt="like icon ${data.id}" width="25" height="24" />
                          </div>
                        </div>
                      </div>
                      <div class="property-details">
                        <div class="flex-box space-between">
                          <div class="options">
                            <label class="selling-option fs-12">
                              <img src="./images/available.png" alt="available icon ${data.id}" width="12" height="13" /> ${data.for_sale}
                            </label>
                          </div>
                          <div class="visit">
                            <i class="fa fa-eye fs-12"></i
                            ><span class="view-count fs-12"> ${data.people_views}</span>
                          </div>
                        </div>

                        <div class="flex-box space-between price-div">
                          <h1 class="Price blue-color">₹ ${data.price}</h1>
                          <div class="rooms">
                            <ul class="flex-box space-around gap-15">
                              <li>
                                <span class="bed-count blue-color">${data.beds}</span>
                                <span class="lightGray">Beds</span>
                              </li>
                              <li>
                                <span class="bath-count blue-color">${data.bathrooms}</span>
                                <span class="lightGray">bath</span>
                              </li>
                              <li>
                                <span class="sqft-count blue-color">${data.sqft}</span>
                                <span class="lightGray">sqft</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div class="address-div lightGray">
                          <div class="address fs-12">
                            <span class="broker-info fs-12">${data.broker_info},</span> ${data.address}
                          </div>
                          <div class="address2 fs-12">
                            Sotheby's International Realty
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>`;
  });

  propertyItems.innerHTML = propertyList;

  let swiperlist = document.querySelectorAll(".swiperlist");
  propertyData.forEach((data, index) => {
    let imagesList = "";
    if (data.images.length > 0) {
      data.images.forEach((imageURL) => {
        imagesList += `<swiper-slide>
                               <img src="${imageURL}" alt="Property Image" width="303" height="175" />
                             </swiper-slide>`;
      });
    } else {
      imagesList = `<img src="./images/property-NA.png" alt="Property Image not found" />`;
    }
    if (swiperlist[index]) {
      swiperlist[index].innerHTML = imagesList;
    }
  });
}

renderProperties(propertyData);

let map; 
let markers = []; 

// Function to initialize or update the map with markers
function updateMap(filteredData) {
  if (!map) {
    // Initialize map if it doesn't exist yet
    lat_long = propertyData[0].geo_location; 
    map = L.map("mapview").setView([lat_long.lat, lat_long.lng], 10);
    
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
  }

  markers.forEach((marker) => {
    map.removeLayer(marker);
  });
  markers = []; 

  filteredData.forEach((property) => {
    const marker = L.marker([property.geo_location.lat, property.geo_location.lng])
      .addTo(map)
      .bindPopup(`<b>${property.name}</b><br>${property.address}`);
    
    markers.push(marker); 
  });
}

//for sale
forSaleSelect.addEventListener("change", (e) => {
  let selectedValue = e.target.value;

  if (selectedValue === "all" || selectedValue === "none") {
    renderProperties(propertyData);
    totalPropertyCount.innerText = propertyData.length + " Homes";
    updateMap(propertyData);
  } else {
    let filteredData = propertyData.filter(
      (data) => data.for_sale === selectedValue
    );
    renderProperties(filteredData);
    updateMap(filteredData);
    totalPropertyCount.innerText = filteredData.length + " Homes";
  }
});

//for price
priceSelect.addEventListener("change", (e) => {
  let selectedValue = e.target.value;

  if (selectedValue === "all" || selectedValue === "none") {
    renderProperties(propertyData);
    updateMap(propertyData);
    totalPropertyCount.innerText = propertyData.length + " Homes";
  } else {
    let filteredData = propertyData.filter(
      (data) => data.price == selectedValue
    );
    renderProperties(filteredData);
    updateMap(filteredData);
    totalPropertyCount.innerText = filteredData.length + " Homes";
  }
});

//for type
propertyTypeSelect.addEventListener("change", (e) => {
  let selectedValue = e.target.value;

  if (selectedValue === "all" || selectedValue === "none") {
    renderProperties(propertyData);
    updateMap(propertyData);
    totalPropertyCount.innerText = propertyData.length + " Homes";
  } else {
    let filteredData = propertyData.filter(
      (data) => data.property_type === selectedValue
    );
    renderProperties(filteredData);
    updateMap(filteredData);
    totalPropertyCount.innerText = filteredData.length + " Homes";
  }
});

//for type
bedSelect.addEventListener("change", (e) => {
  let selectedValue = e.target.value;

  if (selectedValue === "all" || selectedValue === "none") {
    renderProperties(propertyData);
    updateMap(propertyData);
    totalPropertyCount.innerText = propertyData.length + " Homes";
  } else {
    let filteredData = propertyData.filter(
      (data) => data.beds == selectedValue
    );
    renderProperties(filteredData);
    updateMap(filteredData);
    totalPropertyCount.innerText = filteredData.length + " Homes";
  }
});

// for search
searchBtn.addEventListener("click", () => {
  let searchValue = inputSearchField.value.toLowerCase();
  
  let filteredData = propertyData.filter((data) => 
    data.name.toLowerCase().includes(searchValue) || 
    data.address.toLowerCase().includes(searchValue)
  );

  renderProperties(filteredData);
  totalPropertyCount.innerText = filteredData.length + " Homes";
  updateMap(filteredData); 
});

updateMap(propertyData);

