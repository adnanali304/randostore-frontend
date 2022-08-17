import React from "react";
import axios from "axios";

import ProductBlock from "../components/productBlock";
import { API_ENDPOINT } from "../configs";
import { Form } from "react-bootstrap";
import { Helmet } from "react-helmet";

const HomePage = () => {
    const [products, setProducts] = React.useState([]);
    const [filteredProducts, setFilteredProducts] = React.useState([]);
    const [loading, setLoading] = React.useState(false)
    const [sortBy, setSortBy] = React.useState("id");
    const [search, setSearch] = React.useState("");

    React.useEffect(() => {
        fetchProducts();
    }, []);

    /// Filtering Effect
    React.useEffect(() => {
        let filteredProductsList = [...products];
        filteredProductsList = filteredProductsList.filter(item => item.name.toLowerCase().startsWith(search))
        if(sortBy == "id") filteredProductsList = filteredProductsList.sort((a, b) =>  a.id - b.id);
        else if(sortBy == "price") filteredProductsList = filteredProductsList.sort((a, b) =>  a.price - b.price)
        else if(sortBy) filteredProductsList = filteredProductsList.sort(function(a, b){
            if(a.name < b.name) { return -1; }
            if(a.name > b.name) { return 1; }
            return 0;
        });
        setFilteredProducts(filteredProductsList)
    }, [products, sortBy, search]);

    const fetchProducts = async () => {
        setLoading(true);
        await axios.get(`${API_ENDPOINT}items`)
        .then(res => {
            setProducts(res.data);
        })
        .catch(e => setProducts([]))
        setLoading(false);
    }
    
    return (
        <>
            <Helmet>
                <title>RandoStore</title>
            </Helmet>
            <div className="row g-5">
                <div className="col-md-3">
                    <Form.Group className="mb-3">
                        <Form.Label class="fw-semibold">Search</Form.Label>
                        <Form.Control type="text" value={search} onChange={({target}) => setSearch(target.value)}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label class="fw-semibold">Sort By</Form.Label>
                        <Form.Select aria-label="Default select" onChange={({target}) => setSortBy(target.value)} value={sortBy}>
                            <option value="name">Name (ASC)</option>
                            <option value="id">ID (DESC)</option>
                            <option value="price">Price (ASC)</option>
                        </Form.Select>
                    </Form.Group>
                </div>
                <div className="col-md-9">
                    <div className="row g-2">
                        {loading ? 
                            <p className="text-center">Loading...</p> 
                        : filteredProducts.length ? 
                            filteredProducts.map((item, key) => <div className="col-md-4" key={key}><ProductBlock {...item}/></div>)
                        : 
                            <p className="text-center">No Items were found!</p>
                        }
                    </div>
                </div>
            </div>
        </>
    )

}

export default HomePage;