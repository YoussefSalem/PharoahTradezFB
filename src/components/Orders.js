import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../global/AuthContext";

import useOrders from "../hooks/useOrders";
const Orders = () => {
  const orders = useOrders();
  const history = useNavigate();
  const { currentUser } = useAuth();

  // useEffect(() => {
  //   if (!currentUser) {
  //     history("/");
  //   } else if (currentUser.uid !== process.env.REACT_APP_ADMIN_ID) {
  //     history("/");
  //   }
  // });

  return (
    <>
      {orders &&
        orders.map((Order) => (
          <div className="content" key={Order.id}>
            <div className="order card m-4 p-2">
              <div className="alert-danger p-2">
                <span className="font-weight-bolder">Order Number : </span> {""}
                {Order.id}
                <div>
                  <div className="alert-info">
                    <span className="font-weight-bolder">Name : </span>
                    {Order.Name}
                  </div>
                  <div className="alert-info">
                    <span className="font-weight-bolder">Phone : </span>{" "}
                    {Order.Phone}
                  </div>
                  <div className="alert-info">
                    <span className="font-weight-bolder">Email : </span>{" "}
                    {Order.Email}
                  </div>
                  <div className="alert-info">
                    <span className="font-weight-bolder">Street : </span>{" "}
                    {Order.Street}
                  </div>
                  <div className="alert-info">
                    <span className="font-weight-bolder">ZipCode : </span>{" "}
                    {Order.Zip}
                  </div>
                  <div className="alert-info">
                    <span className="font-weight-bolder">City : </span>{" "}
                    {Order.City}
                  </div>
                </div>
                {Order.order.map((Article, index) => (
                  <div key={index} className="article p-2">
                    <div className="orderImage">
                      <img scr={Article.ProductImage} alt={Article.Name} />
                    </div>
                    <p>
                      <span className="font-weight-bold">Art. Number : </span>
                      {Article.ArticleNumber}
                    </p>
                    <p>
                      {" "}
                      <span className="font-weight-bold">Art. Name : </span>
                      {Article.ProductName}
                    </p>
                    <p>
                      {" "}
                      <span className="font-weight-bold">
                        {" "}
                        <span className="font-weight-bold">Art. Price : </span>
                      </span>
                      {Article.ProductPrice}
                    </p>
                    <p>
                      {" "}
                      <span className="font-weight-bold">Art. Quantity : </span>
                      {Article.qty}
                    </p>
                  </div>
                ))}
                <div className="alert-warning p-2">
                  <span className="font-weight-bolder">Total Price : </span>{" "}
                  {Order.TotalPrice}
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};
export default Orders;
