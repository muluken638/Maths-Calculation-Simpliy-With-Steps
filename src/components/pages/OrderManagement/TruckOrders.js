import React from "react";

const TruckOrders = () => {
  // Sample orders data with tracking information
  const orders = [
    {
      id: 1,
      customer: "John Doe",
      status: "Shipped",
      details: "Product A",
      location: "New York, NY",
      estimatedDelivery: "2023-10-25",
    },
    {
      id: 2,
      customer: "Jane Smith",
      status: "In Transit",
      details: "Product B",
      location: "Chicago, IL",
      estimatedDelivery: "2023-10-27",
    },
    {
      id: 3,
      customer: "Alice Johnson",
      status: "Delivered",
      details: "Product C",
      location: "Los Angeles, CA",
      estimatedDelivery: "2023-10-20",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Track Orders</h1>
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="p-4 border border-gray-300 rounded-lg">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold">Order #{order.id}</h2>
                <p className="text-gray-600">{order.details}</p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  order.status === "Shipped"
                    ? "bg-blue-100 text-blue-800"
                    : order.status === "In Transit"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-green-100 text-green-800"
                }`}
              >
                {order.status}
              </span>
            </div>
            <div className="mt-4">
              <p className="text-gray-700">
                <strong>Location:</strong> {order.location}
              </p>
              <p className="text-gray-700">
                <strong>Estimated Delivery:</strong> {order.estimatedDelivery}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TruckOrders;