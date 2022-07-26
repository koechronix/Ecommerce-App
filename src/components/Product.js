import React, { useState} from "react";
import { useParams } from "react-router-dom";



const Product = () => {
  const { id } = useParams;
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const addProduct = (product) =>{
    dispatch(addCart(product));
    // console.log(product, "product")
  };

  useEffect (() => {
    const getProducts = async () => {
      setLoading(true);
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await res.json());
      setLoading(false);
    }

       getProduct ();

  }, [])
  return (
    <div>Product</div>
  )
}

export default Product