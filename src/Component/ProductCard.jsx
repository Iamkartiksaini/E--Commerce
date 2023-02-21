import React from "react";
import "./Card.css";

function ProductCard({ url, name, price, rating }) {
  const x = [1, 2, 3, 4];

  return (
    <div className="shopping_card bg-green-50 m-3 relative w-14rem">
      <div className="image">
        <img src={url} alt="" />
        <div className="tag">New</div>
        <div className="functions text-base">
          <i className="pi text-xl pi-heart hover:text-green-500"></i>
          <i className="pi text-xl pi-cart-plus hover:text-green-500"></i>
          <i className="pi text-xl pi-replay hover:text-green-500"></i>
          <i className="pi text-xl pi-eye hover:text-green-500"></i>
        </div>
      </div>
      <div className="details flex flex-column gap-1 p-1 bg-green-50">
        <h3 className="text-base">{name}</h3>
        <div className="price flex justify-content-between  gap-3 ">
          <p className="text-green-500">${price}</p>
          <span className="flex flex-row gap-1">
            {x.map((value, index) => {
              return (
                <i
                  key={index}
                  className={
                    index + 1 <= rating
                      ? "pi pi-star-fill text-xl text-green-500"
                      : "pi pi-star text-xl text-green-500"
                  }
                ></i>
              );
            })}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
