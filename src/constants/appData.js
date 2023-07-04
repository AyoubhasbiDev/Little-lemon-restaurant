import { bruchetta, lemon_dessert, greek_salad } from "../assets";
import { jack, john, sara, celine } from "../assets";
import {
  faFacebook,
  faLinkedin,
  faYoutube,
  faTwitter,
  faInstagram,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
export const navItems = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "menu",
    title: "Menu",
  },
  {
    id: "testimonials",
    title: "Testimonials",
  },
];

export const menuItems = [
  {
    id: "greeksalad",
    title: "Greek salad",
    price: "12.99$",
    description:
      "Lorem ipsum dolor sit amet consecteturIpsum adipisc  varius pharetra arcu.nislNunc ullamcorper  eget pulvinar lectus purus.",
    getImageSrc: greek_salad,
  },
  {
    id: "bruchetta",
    title: "Bruchetta",
    price: "10.99$",
    description:
      "Lorem ipsum dolor sit amet consecteturIpsum adipisc  varius pharetra arcu.nislNunc ullamcorper  eget pulvinar lectus purus.",
    getImageSrc: bruchetta,
  },
  {
    id: "lemondessert",
    title: "Lemon dessert",
    price: "09.99$",
    description:
      "Lorem ipsum dolor sit amet consecteturIpsum adipisc  varius pharetra arcu.nislNunc ullamcorper  eget pulvinar lectus purus.",
    getImageSrc: lemon_dessert,
  },
];

export const testimonialItems = [
  {
    id: "john",
    name: "John",
    rating: "5",
    getImageSrc: john,
    comment:
      "Lorem ipsum dolor sit amet consecteturSed faucibus lorem diam non blandit",
  },
  {
    id: "celine",
    name: "Celine",
    rating: "3,5",
    getImageSrc: celine,
    comment:
      "Lorem ipsum dolor sit amet consecteturSed faucibus lorem diam non blandit",
  },
  {
    id: "jack",
    name: "Jack",
    rating: "4",
    getImageSrc: jack,
    comment:
      "Lorem ipsum dolor sit amet consecteturSed faucibus lorem diam non blandit",
  },
  {
    id: "sara",
    name: "Sara",
    rating: "4,5",
    getImageSrc: sara,
    comment:
      "Lorem ipsum dolor sit amet consecteturSed faucibus lorem diam non blandit",
  },
];

export const contactItems = [
  {
    id: "adress",
    title: "New York",
    url: "https://www.maps.google.com",
  },
  {
    id: "email",
    title: "ayoub@gmail.com",
    url: "mailto:ayoub@gmail.com",
  },
  {
    id: "phone",
    title: "+1000000000000000",
    url: "tel:+1000000000000000",
  },
];

export const socialMediaItems = [
  {
    id: "facebook",
    title: "facebook",
    icon: faFacebook,
    url: "https://www.facebook.com",
  },
  {
    id: "instagram",
    title: "instagram",
    icon: faInstagram,
    url: "https://www.instagram.com",
  },
  {
    id: "linkedin",
    title: "linkedin",
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    id: "twitter",
    title: "twitter",
    icon: faTwitter,
    url: "https://www.twitter.com",
  },
  {
    id: "youtube",
    title: "youtube",
    icon: faYoutube,
    url: "https://www.youtube.com",
  },
];
