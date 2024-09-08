const app = document.getElementById("app");

const bodyDiv = document.createElement("div");
const bodyImage = document.createElement("img");
bodyImage.className = "bodyImage";
bodyImage.src = "asset/body.png";

bodyDiv.appendChild(bodyImage);

// Navbar
const MainDiv = document.createElement("div");
MainDiv.className = "container";

const SubDiv = document.createElement("div");
SubDiv.className = "navbar";

const list = document.createElement("ul");
list.className = "list";

const sublist1 = document.createElement("li");
const sublist2 = document.createElement("li");
const sublist3 = document.createElement("li");
const sublist4 = document.createElement("li");

sublist4.textContent = "Signin";
sublist3.textContent = "SignUp";
sublist2.textContent = "About";
sublist1.textContent = "Home";

// Dropdown
const DropDown = document.createElement("select");
DropDown.className = "Drop";

const option1 = document.createElement("option");
const option2 = document.createElement("option");
const option3 = document.createElement("option");
const option4 = document.createElement("option");
const option5 = document.createElement("option");

// Dropdown Contents
option1.value = "mobile";
option1.text = "Mobile";
option2.value = "laptop";
option2.text = "Laptop";
option3.value = "tablet";
option3.text = "Tablet";
option4.value = "desktop";
option4.text = "Desktop";
option5.value = "smartwatch";
option5.text = "Smartwatch";

// Dropdown Append
DropDown.appendChild(option1);
DropDown.appendChild(option2);
DropDown.appendChild(option3);
DropDown.appendChild(option4);
DropDown.appendChild(option5);

const logoImage = document.createElement("img");
logoImage.className = "Logo";
logoImage.src = "asset/logo.png";

// Search Elements
const Search = document.createElement("input");
Search.className = "search";
Search.placeholder = "Search";

const SearchDiv = document.createElement("div");
SearchDiv.appendChild(Search);

const searchButton = document.createElement("button");
searchButton.className = "but";
const iCard = document.createElement("i");
iCard.className = "fa fa-search";
searchButton.appendChild(iCard);
SearchDiv.appendChild(searchButton);

// Append Elements
SubDiv.appendChild(logoImage);
SubDiv.appendChild(DropDown);
SubDiv.appendChild(SearchDiv);
SubDiv.appendChild(list);
list.appendChild(sublist1);
list.appendChild(sublist2);
list.appendChild(sublist3);
list.appendChild(sublist4);

MainDiv.appendChild(SubDiv);
app.appendChild(MainDiv);
app.appendChild(bodyDiv);
