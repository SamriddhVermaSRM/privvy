import { useEffect } from "react";
import "./App.css";
import "./Catalogue.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

import { useState } from "react";
import { useParams } from "react-router-dom";

function Catalogue() {
    const [data, setData] = useState();

    let { name } = useParams();
    console.log(name);

    useEffect(() => {
        fetch("http://localhost:8080/product/all", { method: "GET" })
            .then((response) => response.json())
            .then((result) => { console.log(result); setData(result); })
            .catch((error) => console.log("error", error));
    }, []);

    return (
        <>
            <Header />
            <div className='content-grid'>
                <div className="products">
                    {data ? data.map((product) => {
                        return <Products
                            name={product.name}
                            description={product.description}
                            pathToImg={product.pathToImg}
                            price={product.price}
                            discount={product.discount}
                            id={product.id}
                            key={product.id}
                        />
                    })
                        :
                        <h1>Loading...</h1>
                    }
                </div>
                <Footer />
            </div>
        </>
    )
}

function Products(props) {
    var to_url = "";
    to_url = to_url.concat("/catalogue/", props.name, "&", "id=", props.id);
    to_url = to_url.replaceAll(" ", "-");


    return (
        <a href={to_url} className='product' >
            <img className="image" src={props.pathToImg} alt={props.name} />
            <h2 className="name">{props.name}</h2>
            <p className="description">{props.description}</p>
            <p className="price">{props.price}</p>
            <p className="discount">{props.discount}</p>
        </a>
    )
}

export default Catalogue;