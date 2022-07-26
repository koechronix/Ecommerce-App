import React, { useEffect, useState } from "react";
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
  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
        </div>
      </>
    );
  };

  
  return (
    <div>Product</div>
  )
}

export default Product