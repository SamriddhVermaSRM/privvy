import "./update.css";
import React, { useState } from 'react';
import { useEffect } from 'react';


let id = 0;
function setId(idtoSet) {
    if(idtoSet != null)
    id = idtoSet;
}

function UpdateProducts() {
    const [productList, setProductList] = useState();
    const [updateProduct, setUpdateProduct] = useState(false);

    const HandleSubmitUpdateProduct = (e) => {
        e.preventDefault();
        setUpdateProduct(false);
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify({
            "name": e.target.name.value,
            "description": e.target.description.value,
            "pathToImg": e.target.image.value,
            "price": e.target.price.value,
            "discount": e.target.discount.value
        });

        let requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://localhost:8080/product/updateProduct/" + id, requestOptions)
        .then(response => response.text())
        .then(result => {console.log(result);setUpdateProduct(true);})
        .catch(error => console.log('error', error));
    }

    const HandleSubmitAddProduct = (e) => {
        e.preventDefault();
        setUpdateProduct(false);
        let myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            let raw = JSON.stringify({
            "name": e.target.name.value,
            "description": e.target.description.value,
            "pathToImg": e.target.image.value,
            "price": e.target.price.value,
            "discount": e.target.discount.value
            });

            let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
            };

            fetch("http://localhost:8080/product/saveProduct", requestOptions)
            .then(response => response.text())
            .then(result => {console.log(result);setUpdateProduct(true);})
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        let data = null;
        fetch("http://localhost:8080/product/all", {method: 'GET'})
        .then(response => response.json())
        .then(result => {data = result;console.log(result);setProductList(data);})
        .catch(error => console.log('error', error));
    }, [updateProduct]);

    return (
        <>
            <div className="product-grid">
                <div className='product-list'>
                {
                    productList? productList.map((product) => {
                        return (
                            <button onClick={() => setId(product.id)} className='product-card' key={product.id}>
                                <img src={product.pathToImg + ''} alt={product.name} />
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <h4>Rs. {product.price}</h4>
                                <h4>Discount: {product.discount}%</h4>
                            </button>
                        );
                    }) : <h1>Loading...</h1>
                }
                </div>
                <div className='product-update'>
                    <h1>Update Products</h1>
                    <form onSubmit={HandleSubmitUpdateProduct}> 
                        <label>
                            Product Name:
                        </label>
                        <input autoComplete="off" autoCorrect="no" type="text" name="name" /> 
                        <label>
                            Product Description:
                        </label>
                        <textarea autoComplete="off" autoCorrect="no" name="description" /> {/* Update type to "textarea" */}
                        <label>
                            Product Price:
                        </label>
                        <input autoComplete="off" autoCorrect="no" type="text" name="price" /> 
                        <label>
                            Product Image:
                        </label>
                        <input autoComplete="off" autoCorrect="no" type="text" name="image" />
                        <label>
                            Product Discount:
                        </label>
                        <input autoComplete="off" autoCorrect="no" type="text" name="discount" /> 
                        <button type="submit">Update Product</button>
                    </form>
                </div>
                <div className='product-update'>
                    <h1>Add Products</h1>
                    <form onSubmit={HandleSubmitAddProduct}> 
                        <label>
                            Product Name:
                        </label>
                        <input autoComplete="off" autoCorrect="no" type="text" name="name" /> 
                        <label>
                            Product Description:
                        </label>
                        <textarea autoComplete="off" autoCorrect="no" name="description" /> {/* Update type to "textarea" */}
                        <label>
                            Product Price:
                        </label>
                        <input autoComplete="off" autoCorrect="no" type="text" name="price" /> 
                        <label>
                            Product Image:
                        </label>
                        <input autoComplete="off" autoCorrect="no" type="text" name="image" /> 
                        <label>
                            Product Discount:
                        </label>
                        <input autoComplete="off" autoCorrect="no" type="text" name="discount" />
                        <button type="submit">Add Product</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default UpdateProducts;