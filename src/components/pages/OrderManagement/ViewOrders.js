import React, { useState } from "react";

const ViewOrders = () => {
  // Sample orders data
  const [orders, setOrders] = useState([
    { id: 1, customer: "John Doe", status: "Pending", details: "Product A" },
    { id: 2, customer: "Jane Smith", status: "Shipped", details: "Product B" },
    { id: 3, customer: "Alice Johnson", status: "Delivered", details: "Product C" },
  ]);

  // Function to cancel an order
  const cancelOrder = (orderId) => {
    setOrders(orders.map((order) =>
      order.id === orderId ? { ...order, status: "Cancelled" } : order
    ));
  };

  // Function to approve an order
  const approveOrder = (orderId) => {
    setOrders(orders.map((order) =>
      order.id === orderId ? { ...order, status: "Approved" } : order
    ));
  };

  // Function to disapprove an order
  const disapproveOrder = (orderId) => {
    setOrders(orders.map((order) =>
      order.id === orderId ? { ...order, status: "Disapproved" } : order
    ));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Order Management</h1>
      <div className="overflow-x-auto">

      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Order ID</th>
            <th className="py-2 px-4 border-b">Customer</th>
            <th className="py-2 px-4 border-b">Details</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{order.id}</td>
              <td className="py-2 px-4 border-b">{order.customer}</td>
              <td className="py-2 px-4 border-b">{order.details}</td>
              <td className="py-2 px-4 border-b">{order.status}</td>
              <td className="py-2 px-4 border-b">
                {order.status === "Pending" && (
                  <>
                    <button
                      onClick={() => approveOrder(order.id)}
                      className="bg-green-500 text-white px-3 py-1 rounded mr-2"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => disapproveOrder(order.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded mr-2"
                    >
                      Disapprove
                    </button>
                  </>
                )}
                <button
                  onClick={() => cancelOrder(order.id)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded"
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default ViewOrders;