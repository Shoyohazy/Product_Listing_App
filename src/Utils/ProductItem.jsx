import React from "react";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../features/ProductSlice";
import { addCartItem } from "../features/CartSlice";
import { Link } from "react-router-dom";

function ProductItem(props, { index }) {
  const { title, price, category, id, image } = props;
  const dispatch = useDispatch();
  const handleDelete = () => {
    //dispatch delete thunk
    dispatch(deleteProduct(id));
  };
  const addCartHandler = () => {
    dispatch(
      addCartItem({
        id,
        price,
        title,
        image,
      })
    );
  };

  return (
    <tbody key={id} className={index % 2 == 0 ? "gray-bg" : "white-bg"}>
      <tr>
        <td className="product-image">
          <img src={image} />
        </td>
        <td>{title}</td>
        <td className="add-cart-button">
          <button onClick={addCartHandler}>Add to Cart</button>
        </td>
        <td>${price}</td>
        <td>{category}</td>
        <td className="table-buttons">
          <Link to={`/Products/${id}`}>
            <button>
              <i className="gg-eye-alt"></i>
            </button>
          </Link>
          <Link to={`/Product/${id}`}>
            <button>
              <i className="gg-pen"></i>
            </button>
          </Link>
          <Link>
            <button onClick={handleDelete}>
              <i className="gg-trash"></i>
            </button>
          </Link>
        </td>
      </tr>
    </tbody>
  );
}

export default ProductItem;
