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
navbar[0].style.color = "green";
navbar[1].style.color = "green";
navbar[2].style.color = "green";
navbar[3].style.color = "green";
navbar[4].style.color = "green";
navbar[5].style.color = "green";

const button = document.querySelector("button");
button.textContent = siteContent.cta.button;

const header = document.querySelector(".cta-text h1");
header.textContent = siteContent.cta.h1;

const headerImg = document.getElementById("cta-img");
headerImg.src = siteContent.cta["img-src"];

const middleImg = document.getElementById("middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];

const middleHeaders = document.querySelectorAll(".main-content h4");
console.log(middleHeaders);
middleHeaders[0].textContent = siteContent["main-content"]["features-h4"];
middleHeaders[1].textContent = siteContent["main-content"]["about-h4"];
middleHeaders[2].textContent = siteContent["main-content"]["services-h4"];
middleHeaders[3].textContent = siteContent["main-content"]["product-h4"];
middleHeaders[4].textContent = siteContent["main-content"]["vision-h4"];
//? middleHeaders.forEach.style.textAlign = "center";

const middleContent = document.querySelectorAll(".main-content p");
console.log(middleContent);
middleContent[0].textContent = siteContent["main-content"]["features-content"];
middleContent[1].textContent = siteContent["main-content"]["about-content"];
middleContent[2].textContent = siteContent["main-content"]["services-content"];
//* middleContent[2].style.margin = "30px";
middleContent[3].textContent = siteContent["main-content"]["product-content"];
middleContent[4].textContent = siteContent["main-content"]["vision-content"];

const footerHead = document.querySelector(".contact h4");
footerHead.textContent = siteContent.contact["contact-h4"];

const footerData = document.querySelectorAll(".contact p");
console.log(footerData);

footerData[0].textContent = siteContent.contact.address;
footerData[1].textContent = siteContent.contact.phone;
footerData[2].textContent = siteContent.contact.email;

const copyRight = document.querySelector("footer p");
copyRight.textContent = siteContent.footer.copyright;

const navExtraOne = document.createElement("a");
navExtraOne.textContent = "Extra1";

const navExtraTwo = document.createElement("a");
navExtraTwo.textContent = "Extra2";

const nav = document.querySelector("nav");
nav.prepend(navExtraOne);
nav.append(navExtraTwo);
