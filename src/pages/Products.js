import { Link } from "react-router-dom";
import { Fragment } from "react/cjs/react.development";

const Products = () => {
    return (
        <Fragment>
            <h1>Products</h1>
            <ul>
                <li><Link to='/products/p1'>Book</Link></li>
                <li><Link to='/products/p2'>Carpet</Link></li>
                <li><Link to='/products/p3'>Slides</Link></li>
            </ul>
        </Fragment>
    )
}

export default Products;