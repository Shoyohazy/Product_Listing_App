import React, { useEffect, useState } from 'react'
import '../styling/products.css'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../features/ProductSlice';
import ProductItem from '../Utils/ProductItem';
function Products() {
    const { products, loading } = useSelector((state) => state.products);
    const [sortedProductsOption, setSortedProductsOption] = useState('A-Z');
    const [searchQuery, setSearchQuery] = useState('')

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())                     //get request for products
    }, [dispatch])

    const handleSortData = (e) => {
        setSortedProductsOption(e.target.value);    //sort option A-Z etc..
    }

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value)              //word to be searched
    }

    //Logic for selecting the option of sorting
    const sortProduct = (products, sortedProductsOption) => {
        const productsCopy = [...products]
        switch (sortedProductsOption) {
            case 'A-Z':
                return productsCopy.sort((a, b) => a.title.localeCompare(b.title));
            case 'Z-A':
                return productsCopy.sort((a, b) => b.title.localeCompare(a.title));
            case 'High-Low':
                return productsCopy.sort((a, b) => b.price - a.price);
            case 'Low-High':
                return productsCopy.sort((a, b) => a.price - b.price);
            default:
                return productsCopy
        }
    }

    //logic for search query
    const searchedData = products.filter((product) => {
        return product.title?.toLowerCase()?.includes(searchQuery.toLowerCase())
    })

    const sortedData = sortProduct(searchedData, sortedProductsOption);


    if (loading) {
        return <div>data is loading</div>
    }
    return (
        <div className="table-container">
            <div className='Filter'>
                <select value={sortedProductsOption} onChange={handleSortData}>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                    <option value="High-Low">High-Low</option>
                    <option value="Low-High">Low-High</option>
                </select>
                <input
                    className="search-bar"
                    type="search"
                    id="search-bar"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search..."
                />
            </div>
            <table className="table-info">
                <thead className="headings">
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th></th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {sortedData.map((item, index) => (
                    <ProductItem
                        key={item.id} {...item} index={index} />
                ))}
            </table>
        </div>
    )
}

export default Products
