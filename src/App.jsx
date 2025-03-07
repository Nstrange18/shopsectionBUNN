import ProductCard from "./components/ProductCard";

function App() {
  // const baseUrl = "https://fakestoreapi.com/";

  return (
    <div>
      <header className="flex gap-8 !p-4 !ml-25 items-center">
        <div>
          <img src="./public/Images/SHOP.CO.png" className=" w-40 h-5" />
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
            className="absolute left-100 top-1/4  w-5 h-5 cursor-pointer"
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

      <div className="flex gap-2 justify-center align-center !mr-200 !mt-3">
        <p className="text-gray-500 text-sm flex gap-1">
          Home
          <img
            src="./public/Images/arrow-right.png"
            alt=""
            className="w-3 h-3 !mt-1"
          />
          <b className="text-black">Casual</b>
        </p>
      </div>

      <main className="w-full min-h-full flex flex-col items-end relative">
        <aside className="!ml-30 !mt-6 border border-gray-300 w-70 h-270 rounded-2xl absolute left-13">
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
                src="https://www.transparentpng.com/thumb/arrow/right-grey-arrow-icon-png-20.png"
                alt=""
                className="w-5 h-5"
              />
            </div>

            <div className="flex justify-between text-sm text-gray-400 !mt-3">
              <p>Shorts</p>
              <img
                src="https://www.transparentpng.com/thumb/arrow/right-grey-arrow-icon-png-20.png"
                alt=""
                className="w-5 h-5 bg-white"
              />
            </div>

            <div className="flex justify-between text-sm text-gray-400 !mt-3">
              <p>Shirts</p>
              <img
                src="https://www.transparentpng.com/thumb/arrow/right-grey-arrow-icon-png-20.png"
                alt=""
                className="w-5 h-5"
              />
            </div>

            <div className="flex justify-between text-sm text-gray-400 !mt-3">
              <p>Hoodie</p>
              <img
                src="https://www.transparentpng.com/thumb/arrow/right-grey-arrow-icon-png-20.png"
                alt=""
                className="w-5 h-5"
              />
            </div>
          </div>

          <div className="w-60 h-0.5 bg-gray-100 !mt-3 !ml-3.5"></div>

          <div className="flex gap-50 items-center text-xl text-black-400 !mt-3 !ml-2">
            <p>Price</p>
            <p>
              <img
                src="https://www.freeiconspng.com/thumbs/up-arrow-png/up-arrow-png-8.png"
                alt=""
                className="w-5 h-5"
              />
            </p>
          </div>

          <div>
            <img
              src="./public/Images/Range.png"
              alt="Not found"
              className="!ml-2 !mt-2 !p-2"
            />
          </div>

          <div className="w-60 h-0.5 bg-gray-100 !mt-3 !ml-3.5"></div>

          <div className="flex gap-46 items-center text-xl text-black-400 !mt-4 !ml-2">
            <p>Colours</p>
            <p>
              <img
                src="https://www.freeiconspng.com/thumbs/up-arrow-png/up-arrow-png-8.png"
                alt=""
                className="w-5 h-5"
              />
            </p>
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

          <section>
            <p className="flex justify-between !p-4 items-center">
              Size
              <img
                src="https://www.freeiconspng.com/thumbs/up-arrow-png/up-arrow-png-8.png"
                alt=""
                className="w-5 h-5"
              />
            </p>

            <span className="!ml-4 relative h-8">
              <button className="cursor-pointer absolute !p-2 w-23 rounded-3xl border-none bg-gray-200 text-gray-600 text-sm  focus:bg-black focus:text-white transition-all duration-700 ease-in-out">
                XX-small
              </button>
              <button className="cursor-pointer absolute left-26 !p-2 w-20 rounded-3xl border-none bg-gray-200 text-gray-600 text-sm  focus:bg-black focus:text-white transition-all duration-700 ease-in-out">
                X-small
              </button>
              <button className="cursor-pointer absolute top-10 !p-2 w-20 rounded-3xl border-none bg-gray-200 text-gray-600 text-sm  focus:bg-black focus:text-white transition-all duration-700 ease-in-out">
                Small
              </button>
              <button className="cursor-pointer absolute top-10 left-22 !p-2 w-20 rounded-3xl border-none bg-gray-200 text-gray-600 text-sm  focus:bg-black focus:text-white transition-all duration-700 ease-in-out">
                Medium
              </button>
              <button className="cursor-pointer absolute top-20 !p-2 w-20 rounded-3xl border-none bg-gray-200 text-gray-600 text-sm  focus:bg-black focus:text-white transition-all duration-700 ease-in-out ">
                Large
              </button>
              <button className="cursor-pointer absolute top-20 left-22 !p-2 w-20 rounded-3xl border-none bg-gray-200 text-gray-600 text-sm  focus:bg-black focus:text-white transition-all duration-700 ease-in-out">
                X-Large
              </button>
              <button className="cursor-pointer absolute top-30 !p-2 w-24 rounded-3xl border-none bg-gray-200 text-gray-600 text-sm  focus:bg-black focus:text-white transition-all duration-700 ease-in-out ">
                XX-Large
              </button>
              <button className="cursor-pointer absolute top-30 left-27 !p-2 w-20 rounded-3xl border-none bg-gray-200 text-gray-600 text-sm  focus:bg-black focus:text-white transition-all duration-700 ease-in-out">
                3X-Large
              </button>
              <button className="cursor-pointer absolute top-40 !p-2 w-24 rounded-3xl border-none bg-gray-200 text-gray-600 text-sm  focus:bg-black focus:text-white transition-all duration-700 ease-in-out">
                4X-small
              </button>
            </span>
          </section>

          <div className="w-60 h-0.5 bg-gray-100 !mt-50 !ml-3.5"></div>

          <section className="!p-3">
            <p className="flex justify-between items-center">
              Dress Style
              <img
                src="https://www.freeiconspng.com/thumbs/up-arrow-png/up-arrow-png-8.png"
                alt=""
                className="w-5 h-5"
              />
            </p>

            <div className="flex justify-between text-sm text-gray-400 !mt-3">
              <p>Casual</p>
              <img
                src="https://www.transparentpng.com/thumb/arrow/right-grey-arrow-icon-png-20.png"
                alt=""
                className="w-5 h-5"
              />
            </div>

            <div className="flex justify-between text-sm text-gray-400 !mt-3">
              <p>Formal</p>
              <img
                src="https://www.transparentpng.com/thumb/arrow/right-grey-arrow-icon-png-20.png"
                alt=""
                className="w-5 h-5 bg-white"
              />
            </div>

            <div className="flex justify-between text-sm text-gray-400 !mt-3">
              <p>Party</p>
              <img
                src="https://www.transparentpng.com/thumb/arrow/right-grey-arrow-icon-png-20.png"
                alt=""
                className="w-5 h-5"
              />
            </div>

            <div className="flex justify-between text-sm text-gray-400 !mt-3">
              <p>Gym</p>
              <img
                src="https://www.transparentpng.com/thumb/arrow/right-grey-arrow-icon-png-20.png"
                alt=""
                className="w-5 h-5"
              />
            </div>
          </section>

          <span>
            <button className="cursor-pointer w-60 flex justify-center bg-black text-white !p-2 rounded-3xl !ml-4.5 !mt-2">
              Apply Filter
            </button>
          </span>
        </aside>

        <div className="flex items-center gap-5 !mr-28 !mt-2">
          <div>
            <h1 className="text-2xl !mr-55">Casual</h1>
          </div>

          <p className="text-xs text-gray-400">Showing 1-10 of 100 Products </p>

          <div className="flex gap-1 align-center">
            <p className="text-xs text-gray-400">
              Sort by: <b className="text-black">Most Popular</b>
            </p>
            <img
              src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png"
              alt=""
              className="w-3 h-3 !mt-0.5"
            />
          </div>
        </div>

        <section className="w-full max-w-2xl grid grid-cols-3 gap-3 mx-auto !p-3 !mr-21">
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

        <section>
          <div className="w-160 h-0.5 bg-gray-300 !mr-28"></div>

          <span className="flex !p-3 justify-between">

            <button className="cursor-pointer w-30 flex justify-center border-1 border-gray-300 gap-2 text-black text-xs !p-2 rounded-lg !mr-28 !mb-20">
              <img
                src="./public/Images/arrow-left.png"
                alt="arrow-left-with-shaft"
                className="w-3 h-3 !mt-0.99"
              />
              Previous
            </button>

            <span className="flex gap-2 items-center !mb-20 !mr-30">
              <button>
                <img
                  src="https://icons.veryicon.com/png/o/miscellaneous/arrows/double-arrow-left-2.png"
                  alt="double-arrow-left"
                  className="w-5 h-5 cursor-pointer border-gray-500 border-1 rounded-sm bg-gray-400"
                />
              </button>

              <h4>1</h4>

              <button>
                <img
                  src="https://icons.veryicon.com/png/o/miscellaneous/ui-basic-linear-icon/double-arrow-right-1-2.png"
                  alt="double-arrow-right"
                  className="w-5.5 h-5.5 !p-1 cursor-pointer border-gray-500 border-1 rounded-sm bg-gray-400"
                />
              </button>
              
            </span>

            
            <button className="cursor-pointer w-30 flex justify-center border-1 border-gray-300 gap-2 text-black text-xs !p-2 rounded-lg !mr-28 !mb-20">
              Next
              <img
                src="./public/Images/arrow-right-shaft.png"
                alt="arrow-left-with-shaft"
                className="w-3 h-3 !mt-1"
              />
            </button>


          </span>

        </section>
      </main>

      <footer className="bg-gray-300 min-h-100 relative !mt-30">
        <section className="absolute bg-black rounded-2xl w-270 h-40 left-28 bottom-80">
          <span className="align-left flex">
            <h1 className="text-white !p-7 w-130">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>

            <span className="!ml-50 !mt-4 inline w-100">
              <input type="email" placeholder="Enter your email address" className="!p-2 bg-white text-gray-900 rounded-4xl w-70 h-10 !mt-4 text-xs"/>
              <button className="bg-white rounded-4xl text-xs !p-2 w-70 h-10 !mt-3 cursor-pointer">Suscribe to Newsletter</button>
            </span>
          </span>
        </section>
      </footer>
    </div>
  );
}

export default App;
