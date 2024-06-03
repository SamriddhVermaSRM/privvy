import { useEffect } from "react";
import "./product.css"
import { useParams } from "react-router-dom";
import { useState } from "react";

function Product() {
    const [data, setData] = useState();

    const { params } = useParams();
    console.log(params);

    // regex to remove the id from the name
    let id = params.split("id=")[1];
    id = id.replace("id=", "");


    console.log(id);
    useEffect(() => {
        fetch("http://localhost:8080/product/" + id, { method: "GET" })
            .then((response) => response.json())
            .then((result) => { console.log(result); setData(result); })
            .catch((error) => console.log("error", error));
    }, [id]);

    return (
        <div className="product">
            <h1>{data ? data.name : <>loading</>}</h1>
        </div>
    );
}

export default Product;