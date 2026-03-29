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
  // {
  //   title: "About",
  //   path: "/about",
  // },
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
      "Key Takeaways Short answer: yes - mastering React fundamentals in 2026 (components, props, state, and core hooks) is still essential because they’re the durable mental map that lets you reason when AI or new tooling fails. React still powers real products - about 6% of websites and roughly 40% of frontend developers prefer it - and modern tools like the React Compiler can speed initial loads by up to 12% and make interactions more than 2.5× faster, but those gains only matter if you understand how data flows and where state should live. You walk out of a job interview, your maps app open, and that familiar blue GPS dot suddenly freezes on a 2% battery warning. Detour signs push you off the route you memorized, and as soon as the line disappears you realize: you’ve been following directions, not learning the city. That’s where a lot of React developers are now. AI can spit out a working component, a neat little useEffect, even an entire page, right up until something changes - a requirement tweak, a framework upgrade, a weird production bug - and your “frozen blue dot” of copy-paste code stops moving. At the same time, React quietly remains one of the most widely used pieces of web tech on the planet, powering around 6% of all websites and preferred by roughly 40% of frontend developers, according to industry summaries like the React trends reports from Netguru. That scale means you’re not just learning a trendy library; you’re learning the way a huge chunk of modern UIs are actually built and maintained. Businesses in finance, healthcare, SaaS, and e-commerce are still betting on React, which is great news for your career - unless your knowledge is only “I can get this tutorial to run.” Layer on AI copilots and the React Compiler and it’s easy to feel like the map is updating faster than you can read the street names. Tools like Copilot and ChatGPT can scaffold components in seconds, and Meta’s new compiler automatically removes a lot of the old useMemo/useCallback performance busywork. But those tools assume you already understand what your code is trying to say. As the AWS Builder Center put it in their best-practices writeup on modern React, your role has shifted from hand-tuning renders to clearly expressing intent in your components. Your job now is not to outsmart React, but to write components that express intent clearly and let the compiler do the heavy lifting. This guide is about building that internal street grid so you’re not lost when the signal drops. We’ll focus on the landmarks that don’t change: components, props, state, and a small set of hooks you can trust, including newer primitives like use(). You’ll learn how data actually moves through a React app, what really causes components to render, where the React Compiler helps (and where it doesn’t), and how to navigate modern stacks like Next.js or Vite even when AI suggestions contradict each other. By the end, you should feel like someone who recognizes the clock tower and main avenues of React - confident enough to take a detour when the happy-path tutorial, or your AI assistant, suddenly runs out of battery.",
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
      "Tailwind CSS has rapidly become one of the most popular utility-first CSS frameworks for modern web development. Its approach of using small, composable utility classes allows developers to rapidly build responsive and visually appealing websites without writing custom CSS. Despite its popularity, many developers are unaware of the full range of features and best practices that Tailwind offers, which can dramatically improve both productivity and code maintainability. One of the key advantages of Tailwind is its responsiveness and mobile-first design philosophy. By leveraging responsive variants like sm:, md:, lg:, and xl:, developers can control how elements appear across different screen sizes with minimal effort. Additionally, Tailwind provides powerful pseudo-class variants such as hover:, focus:, and active:, which enable interactive designs without custom CSS. Understanding how to combine these variants effectively allows for highly dynamic and user-friendly interfaces. Beyond the basics, Tailwind offers configuration options that unlock advanced capabilities. Developers can extend the default theme to include custom colors, spacing, typography, and more. This makes it easy to maintain design consistency across large projects. Plugins further enhance Tailwind’s functionality, offering solutions for forms, typography, aspect ratios, and animations. Utilizing these plugins correctly can significantly reduce repetitive coding and streamline the development workflow. Optimizing Tailwind for performance is another critical aspect. By using the purge feature, developers can remove unused CSS from the final build, reducing file size and improving page load times. Additionally, combining Tailwind with modern build tools like PostCSS and webpack allows for highly efficient and maintainable projects. In this blog, we will explore hidden utilities, responsive tricks, performance optimizations, and lesser-known features of Tailwind CSS. From practical examples of complex layouts to tips on writing scalable and maintainable code, this guide will help developers take full advantage of Tailwind in 2026. By the end, you’ll be able to build faster, cleaner, and more responsive web applications with confidence and ease."
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
    fullDesc:"A portfolio is more than just a personal website; it is a developer’s showcase, reflecting skills, style, and problem-solving abilities. Building a modern portfolio with Next.js offers numerous advantages, including server-side rendering, fast load times, and optimized SEO performance. These features make Next.js an ideal choice for developers looking to impress potential employers and clients with a professional and responsive online presence.Next.js provides a flexible file-based routing system that simplifies navigation and organization of pages. Coupled with dynamic routing, developers can easily manage projects, blogs, and contact pages. Integration with Tailwind CSS allows for rapid UI development while maintaining a consistent and responsive design. By using Tailwind’s utility classes, developers can implement responsive layouts, animations, and typography without writing extensive CSS files, saving time and improving maintainability. Deployment is another essential aspect of modern portfolios. Platforms like Vercel provide seamless integration with Next.js, allowing developers to deploy updates instantly, manage custom domains, and take advantage of serverless functions for backend tasks. Optimizing images, preloading fonts, and employing code-splitting techniques further enhances performance and user experience, ensuring the portfolio loads quickly on any device."
    
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
