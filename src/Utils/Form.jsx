import { useDispatch, useSelector } from 'react-redux';
import '../styling/form.css'
import { createProduct, updateProduct } from '../features/ProductSlice';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Form(props) {

    const [product, setProducts] = useState({ ...props });
    const [editing, setEditing] = useState(false);
    const { id } = useParams();

    if (id && !editing) {
        setEditing(true);
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const lastProduct = useSelector((state) => state.products?.products.length)

    const handleChange = (e) => {
        setProducts({ ...product, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editing) {
            //dispatch Update [Put]
            setEditing(false);
            dispatch(updateProduct(product))

        } else {
            dispatch(createProduct({ id: lastProduct + 1, ...product }))
        }

        navigate("/Products")
    }


    return (
        <>
            <div className="Form-container">
                <form className="container-info" onSubmit={handleSubmit}>
                    <div className="field-div">
                        <label>Product Name</label>
                        <input
                            type="text"
                            name="title"
                            value={product.title}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="field-div">
                        <label>Price</label>
                        <input
                            type="number"
                            name="price"
                            value={product.price}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="field-div">
                        <label>Category</label>
                        <input
                            type="text"
                            name="category"
                            value={product.category}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="field-div">
                        <label>Description</label>
                        <input
                            type="text"
                            name="description"
                            value={product.description}
                            onChange={handleChange}
                            required
                            minLength='20'
                        />
                    </div>
                    <div className="field-div">
                        <label>Image link</label>
                        <input
                            type="text"
                            name="image"
                            value={product.image}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="submit-button">
                        <button type="submit">{editing ? "Update" : "Submit"}</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form