import React from "react";
import { Link, Outlet } from "react-router-dom";

function Forms() {
  return (
    <div className="products">
      <div className="productsNav">
        <Link to="/forms/simpleForm"> Simple Form </Link>
        <Link to="/forms/otherForm"> Hook Form </Link>
        <Link to="/forms/complexForm"> Formik form </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Forms;
