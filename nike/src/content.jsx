import "./content.css";

export default function Content() {
  return (
    <div className="content">
      <div className="slogan">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <span>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </span>
        <div>
          <button id="shop_btn">Shop now</button>
          <button id="category_btn">Category</button>
        </div>
        <div id="link">
          <span>Also Available On</span>
          <div className="anchors">
          <a href="https://www.flipkart.in/">
            <img src="./images/flipkart.png" alt="" />
          </a>
          <a href="https://www.amazon.in/">
            <img src="./images/amazon.png" alt="" />
          </a>
          </div>
        </div>
      </div>
      <div className="shoes_model">
        <img src="./images/shoe_image.png" alt="" />
      </div>
    </div>
  );
}
