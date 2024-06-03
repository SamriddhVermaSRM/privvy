import { useEffect, useState } from "react";
import "./update.css";

function UpdateProducts() {

    const [products, setProducts] = useState();
    console.log("refreshed");
    useEffect(() => {
        getAllProducts();
    }, [])

    const [selectedProduct, setSelectedProduct] = useState(-1);
    const [updateProduct, setUpdateProduct] = useState(false);

    const getAllProducts = () => {
        fetch("http://localhost:8080/product/all")
            .then(response => response.json())
            .then(result => { console.log(result); setProducts(result); })
            .catch(error => console.log('error', error));
        console.log("getting all")
    }

    const HandleSubmitUP = (e) => {
        console.log("submitting");
        e.preventDefault();
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

        fetch("http://localhost:8080/product/updateProduct/" + selectedProduct, requestOptions)
            .then(response => response.text())
            .then(result => { console.log(result); getAllProducts(); })
            .catch(error => console.log('error', error))
    }

    const HandleSubmitAP = (e) => {
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
            .then(result => { console.log(result); getAllProducts(); })
            .catch(error => console.log('error', error));
    }


    const showProducts = (products, selectedProduct, setSelectedProduct) => {
        return products.map((product) => {
            let style = {};
            if (selectedProduct === product.id) {
                style = {
                    boxShadow: '0px 0px 10px 0px #000000',
                };
            }
            return (
                <button style={style} className='product-card' key={product.id} onClick={() => setSelectedProduct(product.id)}>
                    <img src={product.pathToImg} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <h4>Rs. {product.price}</h4>
                    <h4>Discount: {product.discount}%</h4>
                </button>
            );
        })
    }

    return (
        <>
            <div className='product-list'>
                {
                    products ? showProducts(products, selectedProduct, setSelectedProduct) : <h1>Loading...</h1>
                }

            </div>
            {updateProduct ? <FormField functionn={HandleSubmitAP} uporap={updateProduct} /> : <FormField functionn={HandleSubmitUP} />}
            <br />
            <button onClick={() => setUpdateProduct(!updateProduct)}>Add Product</button>
        </>
    );
}


function FormField(props) {
    return (
        <div className='product-update'>
            <h1>{props.uporap ? "Add Product" : "Update Product"}</h1>
            <form onSubmit={props.functionn}>
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
                <button type="submit">{props.uporap ? "Add Product" : "Update Product"}</button>
            </form>
        </div>
    );
}


export default UpdateProducts;