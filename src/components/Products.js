import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  let componentMount = true;
  return (
    <div>Products</div>
  )
}

export default Products