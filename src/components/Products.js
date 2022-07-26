import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  let componentMount = true;
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const res = await fetch("https://fakestoreapi.com/products");
      if (componentMount) {
        setData(await res.clone().json());
        setFilter(await res.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMount = false;
      };
    };
    getProducts();
  }, []);
  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };
  return (
    <div>Products</div>
  )
}

export default Products