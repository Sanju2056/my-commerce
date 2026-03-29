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
  { title: "Sign Up", path: "/signup" },
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
];
const footerData = [
  {
    title: "COMPANY INFO",
    children: [
      {
        title: "About Us",
        link: "/aboutUs",
      },
      {
        title: "Latest Posts",
        link: "/latestPost",
      },
      {
        title: "Contact Us",
        link: "/contactUs",
      },
      {
        title: "Shop",
        link: "/shop",
      },
    ],
  },
  {
    title: "HELP LINKS",
    children: [
      {
        title: "Tracking",
        link: "/tracking",
      },
      {
        title: "Order Status",
        link: "/orderStatus",
      },
      {
        title: "Delivery",
        link: "/delivery",
      },
      {
        title: "Shipping Info",
        link: "/shippingInfo",
      },
      {
        title: "FAQ",
        link: "/faq",
      },
    ],
  },
  {
    title: "USEFUL LINKS",
    children: [
      {
        title: "Special Offers",
        link: "/specialOffers",
      },
      {
        title: "Gift Cards",
        link: "/giftCards",
      },
      {
        title: "Advertising",
        link: "/advertising",
      },
      {
        title: "Terms of Use",
        link: "/terms",
      },
    ],
  },
];
const blogs = [
  
  {
    id: 1,
    userName: "Sanju Gurung",
    userProfile: "https://randomuser.me/api/portraits/men/32.jpg",
    date: "March 10, 2026",
    title: "Mastering React Hooks in 2026",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    shortDesc:
      "A beginner-friendly guide to understanding React Hooks like useState and useEffect.",
    fullDesc:
      "React Hooks have completely changed how we build components. In this blog, we explore useState, useEffect, and custom hooks with practical examples. You'll learn how to manage state efficiently and structure your components better for scalability.",
  },
  {
    id: 2,
    userName: "Aarav Sharma",
    userProfile: "https://randomuser.me/api/portraits/men/45.jpg",
    date: "March 12, 2026",
    title: "Tailwind CSS Tips You Didn’t Know",
    thumbnail: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3",
    shortDesc:
      "Boost your productivity with these lesser-known Tailwind tricks.",
    fullDesc:
      "Tailwind CSS is powerful, but many developers only scratch the surface. In this post, we explore hidden utilities, responsive tricks, and performance tips that will make your workflow faster and cleaner.",
  },
  {
    id: 3,
    userName: "Priya Koirala",
    userProfile: "https://randomuser.me/api/portraits/women/65.jpg",
    date: "March 14, 2026",
    title: "Building a Modern Portfolio with Next.js",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    shortDesc:
      "Create a stunning developer portfolio using Next.js and Tailwind.",
    fullDesc:
      "Your portfolio is your first impression. In this guide, we walk through building a fast, SEO-friendly portfolio using Next.js, including routing, optimization, and deployment strategies.",
  },
  {
    id: 4,
    userName: "Rohan Adhikari",
    userProfile: "https://randomuser.me/api/portraits/men/22.jpg",
    date: "March 15, 2026",
    title: "JavaScript ES6 Features Explained",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    shortDesc: "Understand modern JavaScript features with simple examples.",
    fullDesc:
      "ES6 introduced powerful features like arrow functions, destructuring, and promises. This blog breaks them down into easy concepts so you can write cleaner and more efficient JavaScript.",
  },
  {
    id: 5,
    userName: "Sneha Patel",
    userProfile: "https://randomuser.me/api/portraits/women/12.jpg",
    date: "March 16, 2026",
    title: "Responsive Design Best Practices",
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    shortDesc: "Make your websites look great on all devices.",
    fullDesc:
      "Responsive design is essential in modern web development. Learn how to use flexible layouts, media queries, and Tailwind utilities to create seamless experiences across devices.",
  },
  {
    id: 6,
    userName: "David Lee",
    userProfile: "https://randomuser.me/api/portraits/men/18.jpg",
    date: "March 17, 2026",
    title: "Understanding Async/Await in JavaScript",
    thumbnail: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
    shortDesc: "Simplify asynchronous code with async/await.",
    fullDesc:
      "Async/await makes handling asynchronous code easier than ever. This article explains how it works, common mistakes, and best practices for handling API calls.",
  },
  {
    id: 7,
    userName: "Anjali Singh",
    userProfile: "https://randomuser.me/api/portraits/women/44.jpg",
    date: "March 18, 2026",
    title: "UI/UX Principles Every Developer Should Know",
    thumbnail: "https://images.unsplash.com/photo-1559027615-cd4628902d4a",
    shortDesc: "Improve user experience with these design principles.",
    fullDesc:
      "Good UI/UX can make or break your product. Learn key principles like hierarchy, contrast, and usability to create better user interfaces.",
  },
  {
    id: 8,
    userName: "Michael Chen",
    userProfile: "https://randomuser.me/api/portraits/men/11.jpg",
    date: "March 19, 2026",
    title: "State Management in React: Beginner Guide",
    thumbnail: "https://images.unsplash.com/photo-1587620962725-abab7fe55159",
    shortDesc: "Learn how to manage state effectively in React apps.",
    fullDesc:
      "Managing state can get tricky as apps grow. This guide covers useState, useReducer, and when to consider external libraries.",
  },
  {
    id: 9,
    userName: "Kiran Thapa",
    userProfile: "https://randomuser.me/api/portraits/men/29.jpg",
    date: "March 20, 2026",
    title: "How to Deploy Your React App",
    thumbnail: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    shortDesc: "Step-by-step guide to deploying your app online.",
    fullDesc:
      "Deployment is the final step of development. Learn how to deploy your React apps using Vercel, Netlify, and GitHub Pages.",
  },
  {
    id: 10,
    userName: "Emily Watson",
    userProfile: "https://randomuser.me/api/portraits/women/30.jpg",
    date: "March 21, 2026",
    title: "CSS Grid vs Flexbox",
    thumbnail: "https://images.unsplash.com/photo-1508780709619-79562169bc64",
    shortDesc: "Understand when to use Grid vs Flexbox.",
    fullDesc:
      "Both Grid and Flexbox are powerful layout systems. This article compares them with real examples so you know when to use each.",
  },
  {
    id: 11,
    userName: "Rahul Verma",
    userProfile: "https://randomuser.me/api/portraits/men/55.jpg",
    date: "March 22, 2026",
    title: "Building Animations with Framer Motion",
    thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    shortDesc: "Add smooth animations to your React apps.",
    fullDesc:
      "Framer Motion is a powerful animation library. Learn how to create smooth page transitions and interactive animations.",
  },
  {
    id: 12,
    userName: "Sara Ali",
    userProfile: "https://randomuser.me/api/portraits/women/50.jpg",
    date: "March 23, 2026",
    title: "Dark Mode in React",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    shortDesc: "Implement dark mode easily in your apps.",
    fullDesc:
      "Dark mode is now a must-have feature. This guide shows how to implement it using React state and Tailwind CSS.",
  },
  {
    id: 13,
    userName: "James Brown",
    userProfile: "https://randomuser.me/api/portraits/men/60.jpg",
    date: "March 24, 2026",
    title: "Optimizing React Performance",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    shortDesc: "Make your React apps faster and smoother.",
    fullDesc:
      "Performance matters. Learn techniques like memoization, lazy loading, and code splitting to improve your app speed.",
  },
  {
    id: 14,
    userName: "Nisha Rai",
    userProfile: "https://randomuser.me/api/portraits/women/21.jpg",
    date: "March 25, 2026",
    title: "API Integration in React",
    thumbnail: "https://images.unsplash.com/photo-1504639725590-34d0984388bd",
    shortDesc: "Fetch and display API data in your app.",
    fullDesc:
      "Learn how to integrate APIs using fetch and axios, handle loading states, and manage errors effectively.",
  },
  {
    id: 15,
    userName: "Alex Johnson",
    userProfile: "https://randomuser.me/api/portraits/men/70.jpg",
    date: "March 26, 2026",
    title: "Getting Started with TypeScript",
    thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    shortDesc: "A beginner-friendly intro to TypeScript.",
    fullDesc:
      "TypeScript adds type safety to JavaScript. This blog helps you get started with types, interfaces, and real-world usage.",
  },
];
export { navBarData, headerData, products, footerData, blogs };
