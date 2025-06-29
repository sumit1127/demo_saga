import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataRequest } from "./action";

const data = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.dataState);

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Data from API</h1>
      <ul>{data && data.map((item) => <li key={item.id}>{item.title}</li>)}</ul>
    </div>
  );
};

export default data;
