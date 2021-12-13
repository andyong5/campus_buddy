import React from "react";

import { useLocation } from "react-router-dom";
function FrontPage() {
  const location = useLocation();
  const data = location.state;
  console.log(data);
  return (
    <>
    <h1>Hello front page</h1>
      {/* <h1>Hello {data.full_name}</h1>
      <img src={data.image_url} alt="profile" width="50" height="auto"></img> */}
    </>
  );
}
export default FrontPage;
