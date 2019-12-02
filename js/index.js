const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

const navbar = document.querySelectorAll("nav a");
navbar[0].textContent = siteContent.nav["nav-item-1"];
navbar[1].textContent = siteContent.nav["nav-item-2"];
navbar[2].textContent = siteContent.nav["nav-item-3"];
navbar[3].textContent = siteContent.nav["nav-item-4"];
navbar[4].textContent = siteContent.nav["nav-item-5"];
navbar[5].textContent = siteContent.nav["nav-item-6"];
//? navbar.forEach.style.color = "green";
navbar[0].style.color = "red";
navbar[1].style.color = "orange";
navbar[2].style.color = "yellow";
navbar[3].style.color = "green";
navbar[4].style.color = "blue";
navbar[5].style.color = "purple";

const navbarExtraOne = document.createElement("a");
navbarExtraOne.textContent = "ExtraOne";
navbarExtraOne.style.color = "grey";
const navbarExtraTwo = document.createElement("a");
navbarExtraTwo.textContent = "ExtraTwo";
navbarExtraTwo.style.color = "grey";

const nav = document.querySelector("nav");
nav.prepend(navbarExtraOne);
nav.append(navbarExtraTwo);

const button = document.querySelector("button");
button.textContent = siteContent.cta.button;
button.style.color = "red";
button.style.backgroundColor = "grey";

const header = document.querySelector(".cta-text h1");
header.textContent = siteContent.cta.h1;

const headerImg = document.getElementById("middle-img");
headerImg.src = siteContent["main-content"]["middle-img-src"];

const middleHeaders = document.querySelectorAll(".main-content h4");
middleHeaders[0].textContent = siteContent["main-content"]["features-h4"];
middleHeaders[1].textContent = siteContent["main-content"]["about-h4"];
middleHeaders[2].textContent = siteContent["main-content"]["services-h4"];
middleHeaders[3].textContent = siteContent["main-content"]["product-h4"];
middleHeaders[4].textContent = siteContent["main-content"]["vision-h4"];
middleHeaders[0].style.textAlign = "center";

// const middleHeadersArray = Array.prototype.slice.call(middleHeaders);

// middleHeadersArray.forEach(e => (e.style.color = "red"));

// middleHeadersArray.forEach(e => (e.style.textAlign = "center"));

middleHeaders.forEach(e => (e.style.color = "red"));

middleHeaders[0].style.color = "green";
middleHeaders[2].style.color = "green";
middleHeaders[4].style.color = "green";

const middleContent = document.querySelectorAll(".main-content p");
middleContent[0].textContent = siteContent["main-content"]["features-content"];
middleContent[1].textContent = siteContent["main-content"]["about-content"];
middleContent[2].textContent = siteContent["main-content"]["services-content"];
middleContent[3].textContent = siteContent["main-content"]["product-content"];
middleContent[4].textContent = siteContent["main-content"]["vision-content"];

const footerHead = document.querySelector(".contact h4");
footerHead.textContent = siteContent.contact["contact-h4"];

const footerData = document.querySelectorAll(".contact p");
footerData[0].textContent = siteContent.contact.address;
footerData[1].textContent = siteContent.contact.phone;
footerData[2].textContent = siteContent.contact.email;

const copyRight = document.querySelector("footer p");
copyRight.textContent = siteContent.footer.copyright;
