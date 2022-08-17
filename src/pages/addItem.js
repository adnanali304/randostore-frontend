import axios from "axios";
import React from "react";
import { Alert, Form } from "react-bootstrap";
import { API_ENDPOINT } from "../configs";
import { Helmet } from "react-helmet";


const AddItemPage = () => {

    const [response, setResponse] = React.useState(null);
    const [name, setName] = React.useState("");
    const [price, setPrice] = React.useState(0);
    const [image, setImage] = React.useState("./img/bed.jpg");
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        let timeout = null;
        if(response) timeout = setTimeout(() => setResponse(null), 5000);
        return () => {
            if(timeout) clearTimeout(timeout);
        }
    }, [response]);

    const saveItem = () => {
        if(!name.length) return setResponse({type: "error", msg: "Name is required!"});
        if(!price || isNaN(price)) return setResponse({type: "error", msg: "Price is required!"});
        if(!image.length || !image.startsWith("./")) return setResponse({type: "error", msg: "Image Path is required!"});
        setLoading(true);
        axios.post(API_ENDPOINT + "items", {
            name, price,
            img: image,
        })
        .then(res => {
            setResponse({type: "success", msg: "Product Added!"})
        }).catch(e => {
            setResponse({type: "error", msg: "Product Added!"})
        })
        setLoading(false);
    }

    return (
        <>
            <Helmet>
                <title>Add New Item | RandoStore</title>
            </Helmet>
            <h1 className="fw-bold">Add new Item</h1>

            {response && <Alert key="alert" className="my-2" variant={response.type == "success" ? "success" : "danger" }>{response.msg}</Alert>}
            <div className="row">
                <div className="col-md-4">
                    <img src={API_ENDPOINT + image} className="preview"/>
                </div>
                <div className="col-md-8">
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onChange={({ target }) => setName(target.value)} value={name} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number" onChange={({ target }) => setPrice(target.value)} value={price} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Image Path</Form.Label>
                        <Form.Control onChange={({ target }) => setImage(target.value)} value={image} />
                    </Form.Group>
                    <button className="btn btn-primary" onClick={saveItem} disabled={loading}>{loading ? "Saving..." : "Save Item"}</button>

                </div>
            </div>
        </>
    )
}
export default AddItemPage;