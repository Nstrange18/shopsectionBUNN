import ProductCard from "./components/ProductCard";

function App() {
  const baseUrl = "https://fakestoreapi.com/";

  return (
    <div>
      <header className="flex gap-8 !p-4 !ml-25 items-center">
        <div>
          <img src="public/Icons/SHOP.CO.png" className=" w-40 h-5" />
        </div>

        <nav className="flex gap-7 text-gray-600 text-xs p-7">
          <ul>
            <li>
              <a href="">Shop</a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="">On Sale</a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="">New Arrivals</a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="">Brands</a>
            </li>
          </ul>
        </nav>

        <div className="relative inline-block">
          <input
            type="text"
            placeholder="Search for products"
            className="border bg-gray-300 text-xs border-gray-300 rounded-2xl w-md h-8 !p-2"
          />
          <img
            src="https://icons.veryicon.com/png/o/miscellaneous/simple-linear-icon-library/search-316.png"
            alt="search icon"
            className="absolute left-100 top-1/4  w-5 h-5 pointer-events-none"
          />
        </div>

        <div className="flex gap-7 items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5166/5166615.png"
            alt="Cart Icon"
            className="w-10 h-10"
          />

          <img
            src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png"
            alt="Profile"
            className="w-6 h-6"
          />
        </div>
      </header>

      <div className="w-260 h-0.5 bg-gray-100 !ml-30"></div>

      <p className="text-gray-500 text-xs !ml-43 !mt-3 !p-1 ">
        Home > <b>Casual</b>
      </p>
      <main className="w-full h-screen flex flex-col !mb-30 items-end relative">
        <aside className="!ml-30 !mt-6 border border-gray-300 w-70 h-200 rounded-2xl absolute left-13">
          <div className="!p-4">
            <div className="flex gap-40">
              <h3 className="text-xl">Filters</h3>
              <img
                src="./public/Images/Vector.png"
                alt="vector"
                width={25}
                height={20}
              />
            </div>

            <div className="w-60 h-0.5 bg-gray-100 !mt-5"></div>

            <div className="flex justify-between text-sm text-gray-400 !mt-3">
              <p>T-shirts</p>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk5kDQV5KACPIGgkKIQbFCA9tjVwzpDSbwew&shttps://i.pinimg.com/736x/cb/f6/bf/cbf6bf908e789a4affe50c1ad2554782.jpg"
                alt=""
                width={20}
                height={10}
              />
            </div>

            <div className="flex justify-between text-sm text-gray-400 !mt-3">
              <p>Shorts</p>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk5kDQV5KACPIGgkKIQbFCA9tjVwzpDSbwew&shttps://i.pinimg.com/736x/cb/f6/bf/cbf6bf908e789a4affe50c1ad2554782.jpg"
                alt=""
                width={20}
                height={10}
              />
            </div>

            <div className="flex justify-between text-sm text-gray-400 !mt-3">
              <p>Shirts</p>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk5kDQV5KACPIGgkKIQbFCA9tjVwzpDSbwew&shttps://i.pinimg.com/736x/cb/f6/bf/cbf6bf908e789a4affe50c1ad2554782.jpg"
                alt=""
                width={20}
                height={10}
              />
            </div>

            <div className="flex justify-between text-sm text-gray-400 !mt-3">
              <p>Hoodie</p>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk5kDQV5KACPIGgkKIQbFCA9tjVwzpDSbwew&shttps://i.pinimg.com/736x/cb/f6/bf/cbf6bf908e789a4affe50c1ad2554782.jpg"
                alt=""
                width={20}
                height={10}
              />
            </div>
          </div>

          <div className="w-60 h-0.5 bg-gray-100 !mt-3 !ml-3.5"></div>

          <div className="flex gap-52 items-center text-xl text-black-400 !mt-3 !ml-2">
            <p>Price</p>
            <p> ∧ </p>
          </div>

          <div>
            <img
              src="./public/Images/Range.png"
              alt="Not found"
              className="!ml-2 !mt-2 !p-2"
            />
          </div>

          <div className="w-60 h-0.5 bg-gray-100 !mt-3 !ml-3.5"></div>

          <div className="flex gap-50 items-center text-xl text-black-400 !mt-4 !ml-2">
            <p>Colours</p>
            <p> ∧ </p>
          </div>

          <div className="grid grid-cols-5 gap-1 !p-4">
            <div className="bg-green-500 border-none w-10 h-10 rounded-full"></div>
            <div className="bg-red-500 border-none w-10 h-10 rounded-full"></div>
            <div className="bg-yellow-500 border-none w-10 h-10 rounded-full"></div>
            <div className="bg-orange-500 border-none w-10 h-10 rounded-full"></div>
            <div className="bg-blue-500 border-none w-10 h-10 rounded-full"></div>
            <div className="bg-purple-500 border-none w-10 h-10 rounded-full"></div>
            <div className="bg-indigo-600 border-none w-10 h-10 rounded-full"></div>
            <div className="bg-pink-500 border-none w-10 h-10 rounded-full"></div>
            <div className="bg-white border-1 border-gray-300 w-10 h-10 rounded-full"></div>
            <div className="bg-black border-none w-10 h-10 rounded-full"></div>
          </div>

          <div className="w-60 h-0.5 bg-gray-100 !mt-3 !ml-3.5"></div>

          <img
            src="./public/Images/Size.png"
            alt="Size"
            className="!p-2 w-60 !ml-3"
          />
        </aside>

        <div className="flex items-center gap-5 !mr-28 !mt-2 !mb-">
          <div>
            <h1 className="text-2xl !mr-55">Casual</h1>
          </div>

          <p className="text-xs text-gray-400">Showing 1-10 of 100 Products </p>
          <p className="text-xs text-gray-400">
            Sort by: <b className="text-black">Most Popular ∨ </b>
          </p>
        </div>

        <section className="w-full max-w-2xl grid grid-cols-3 gap-6 mx-auto !p-4 !mr-21">
          <ProductCard
            image="https://static.vecteezy.com/system/resources/previews/050/591/151/non_2x/bright-blue-t-shirt-folded-neatly-on-a-transparent-background-free-png.png"
            title="Blue Shirt XL"
            price="300"
          />

          <ProductCard
            image="https://static.vecteezy.com/system/resources/previews/052/321/989/non_2x/vibrant-orange-t-shirt-mockup-on-transparent-background-free-png.png"
            title=" Orange Shirt"
            price="350"
          />

          <ProductCard
            image="https://static.vecteezy.com/system/resources/previews/055/070/903/non_2x/vibrant-red-shirt-on-white-background-for-fashion-and-advertising-purposes-png.png"
            title="Red Long Sleeve"
            price="250"
          />

          <ProductCard
            image="https://png.pngtree.com/png-clipart/20240630/original/pngtree-styling-colorful-shirts-a-fashion-guide-png-image_15449903.png"
            title="Vibrant Shirt"
            price="200"
          />

          <ProductCard
            image="https://img.pikbest.com/png-images/20241201/stylish-men-shirts-on-transparent-background_11155341.png!w700wp"
            title="Vibrant Long Sleeve"
            price="200"
          />

          <ProductCard
            image="https://static.vecteezy.com/system/resources/previews/054/197/058/non_2x/vibrant-yellow-t-shirt-for-casual-wear-and-fashion-on-transparent-background-png.png"
            title="Yellow Shirt"
            price="200"
          />

          <ProductCard
            image="https://png.pngtree.com/png-clipart/20240713/original/pngtree-flower-shirt-and-t-transparent-background-png-image_15549737.png"
            title="Flower Shirt"
            price="200"
          />

          <ProductCard
            image="https://static.vecteezy.com/system/resources/previews/055/532/425/non_2x/bright-floral-hawaiian-shirt-displayed-on-a-clean-background-perfect-for-summer-gatherings-and-beach-outings-floral-hawaiian-shirt-lies-file-of-isolated-object-on-transparent-background-free-png.png"
            title="Vibrant Floral Shirt"
            price="200"
          />

          <ProductCard
            image="https://i.pinimg.com/736x/07/73/47/07734771f63ae29b6d535a849243f909.jpg"
            title="Blue T-Shirt"
            price="200"
          />
        </section>

        <div className="w-60 h-0.5 bg-gray-100 !mt-3 !ml-3.5"></div>

        <img src="./public/Images/number.png" alt="" />
      </main>
    </div>
  );
}

export default App;
