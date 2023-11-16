import React from "react";
import { useLoaderData } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import ApiIcon from "@mui/icons-material/Api";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/amazonSlice";
const Products = () => {
  const dispatch = useDispatch()
  const data = useLoaderData();
  const productsData = data.data;
  return (
    <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 xl:gap-10 gap-6 px-4">
      {productsData.map((item) => (
        <div
          key={item.id}
          className="bg-white h-auto border-[1px] border-gray-200 py-6 z-30 hover:border-transparent shadow-none hover:shadow-testShadow duration-200 flex flex-col gap-4 relative"
        >
          <span className="text-xs capitalize italic absolute top-2 right-2 text-gray-500">
            {item.category}
          </span>
          <div className="w-full h-auto flex items-center justify-center relative group">
            <img
              className="w-52 h-64 object-contain"
              src={item.image}
              alt="ProductImg"
            ></img>
            <ul className="w-full h-36 bg-gray-100 absolute duration-700 flex flex-col items-end justify-center gap-2 font-titleFont px-2 bottom-[-170px] group-hover:bottom-0 duration-700">
              <li className="productli">
                Compare{" "}
                <span>
                  <ApiIcon />
                </span>
              </li>
              <li className="productli">
                Add to Cart{" "}
                <span>
                  <ShoppingCartIcon />
                </span>
              </li>
              <li className="productli">
                View Details{" "}
                <span>
                  <ArrowCircleRightIcon />
                </span>
              </li>
              <li className="productli">
                Add to WishList{" "}
                <span>
                  <FavoriteIcon />
                </span>
              </li>
            </ul>
          </div>
          <div className="px-4 z-10 bg-white">
            <div className="flex items-center justify-between">
              <h2 className="font font-titleFont tracking-wide text-lg text-amazon_blue font-medium">
                {item.title.substring(0, 20)}
              </h2>
              <p>${item.price}</p>
            </div>
            <div>
              <p className="text-sm mb-1">
                {item.description.substring(0, 100)}...
              </p>
              <div className="text-yellow-500">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            </div>
            <button onClick={()=>dispatch(addToCart({
              id:item.id,
              title:item.title,
              price:item.price,
              image:item.image,
              category:item.category,
              description:item.description,
              quantity:1,
            }))} className="w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 hover:from-yellow-300 hover:to-yellow-300 border-yello-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3">
              Add To Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
