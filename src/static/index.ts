import { Product } from "../assets/images";
const navBarData = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Products",
    path: "/products",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];
const headerData = [
  { title: "Help", path: "/help" },
  { title: "Sign Up", path: "/sign-in" },
  { title: "Log In", path: "/login" },
];

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "High quality sound with noise cancellation",
    price: 129.99,
    image: Product,
  },
  {
    id: 2,
    name: "Smart Watch",
    description: "Track your fitness and notifications",
    price: 89.99,
    image: Product,
  },
  {
    id: 3,
    name: "Running Shoes",
    description: "Comfortable and lightweight design",
    price: 74.99,
    image: Product,
  },
  {
    id: 4,
    name: "Backpack",
    description: "Stylish and durable for everyday use",
    price: 49.99,
    image: Product,
  },
  {
    id: 5,
    name: "Sunglasses",
    description: "UV protection with modern style",
    price: 29.99,
    image: Product,
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    description: "Portable speaker with deep bass",
    price: 59.99,
    image: Product,
  },
  {
    id: 7,
    name: "Laptop Stand",
    description: "Ergonomic design for better posture",
    price: 39.99,
    image: Product,
  },
  {
    id: 8,
    name: "Gaming Mouse",
    description: "High precision with RGB lighting",
    price: 45.99,
    image: Product,
  },
  {
    id: 9,
    name: "Water Bottle",
    description: "Insulated stainless steel bottle",
    price: 19.99,
    image: Product,
  },
  {
    id: 10,
    name: "Desk Lamp",
    description: "LED lamp with adjustable brightness",
    price: 34.99,
    image: Product,
  },
];
export { navBarData, headerData, products };
