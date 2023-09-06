import { useState } from "react";
import "./App.scss";
import About from "./components/about/About";
import Hero from "./components/hero/Hero";
import Product from "./components/product/Product";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import d1 from "./assets/burger.avif";
import d2 from "./assets/salas.avif";
import d3 from "./assets/coke.avif";
import d4 from "./assets/momos.avif";
import d5 from "./assets/pizzalarge.avif";
import d6 from "./assets/frenchFries.avif";
import Footer from "./components/footer/Footer";

function App() {
  const [page, setPage] = useState(1);
  const arr = [
    {
      url: d1,
      title: "Grilled Tomatoes at Home",
      desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      key: 1,
    },
    {
      url: d2,
      title: "Snacks for Travel",
      desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      key: 2,
    },
    {
      url: d3,
      title: "Post-workout Recipes",
      desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      key: 3,
    },
    {
      url: d4,
      title: "How To Grill Corn",
      desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      key: 4,
    },
    {
      url: d5,
      title: "Crunchwrap Supreme",
      desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      key: 5,
    },
    {
      url: d6,
      title: "Broccoli Cheese Soup",
      desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      key: 6,
    },
  ];
  return (
    <div className="App">
      <Hero />
      <About />
      <div className="product-list">
        <h1>Latest Articles</h1>
        <div className="products">
          {arr.slice(page*3 - 3,page*3).map((item) => (
            <Product item={item} />
          ))}
        </div>
        <div className="pagination">
          <button className="icon" onClick={() => setPage(1)}>
            <AiFillCaretLeft />
          </button>
          <div>{`${page}/2`}</div>
          <button className="icon" onClick={() => setPage(2)}>
            <AiFillCaretRight />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
