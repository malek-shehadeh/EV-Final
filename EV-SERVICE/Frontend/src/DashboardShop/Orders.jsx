// Frontend - Orders.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// تكوين الـ axios لاستخدام URL الأساسي
axios.defaults.baseURL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem('shopOwnerToken');
      if (!token) {
        setError('Authentication token not found');
        setLoading(false);
        return;
      }

      console.log('Attempting to fetch orders...');
      
      // تعديل URL للتأكد من استخدام المسار الصحيح
      const response = await axios.get(`${axios.defaults.baseURL}/api/orders/shop-orders`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          // إضافة CORS headers
          'Access-Control-Allow-Origin': '*'
        }
      });

      console.log('Raw API Response:', response);

      if (response.data) {
        setOrders(Array.isArray(response.data) ? response.data : []);
        console.log('Processed Orders:', orders);
      }
      
      setLoading(false);
    } catch (error) {
      console.error('Fetch Error:', error);
      setError(error?.response?.data?.message || 'Failed to fetch orders');
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (orderId) => {
    try {
      const token = localStorage.getItem('shopOwnerToken');
      if (!token) {
        setError('Authentication token not found');
        return;
      }

      const response = await axios.patch(
        `${axios.defaults.baseURL}/api/orders/${orderId}/update-status`,
        { status: 'completed' },
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.data && response.data.success) {
        setOrders(prevOrders =>
          prevOrders.map(order =>
            order._id === orderId
              ? { ...order, status: 'completed' }
              : order
          )
        );
        alert('Order status updated successfully');
      }
    } catch (error) {
      console.error('Update Error:', error);
      alert(error?.response?.data?.message || 'Failed to update order status');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen flex-col gap-4">
        <div className="text-xl text-red-600">{error}</div>
        <button 
          onClick={fetchOrders}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Orders Management</h2>
        <button
          onClick={fetchOrders}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Refresh Orders
        </button>
      </div>
      
      {orders.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow">
          <p className="text-gray-500 text-lg">No orders found</p>
        </div>
      ) : (
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Items
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orders.map((order) => (
                <tr key={order._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {order._id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {order.deliveryInfo?.fullName || 'N/A'}
                    </div>
                    <div className="text-sm text-gray-500">
                      {order.deliveryInfo?.email || 'N/A'}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      {order.cartItems?.map((item, index) => (
                        <div key={item._id || index} className="text-sm text-gray-900">
                          {item.name} x {item.quantity} (${item.price})
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${order.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      order.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : order.status === 'completed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {order.status === 'pending' && (
                      <button
                        onClick={() => handleStatusUpdate(order._id)}
                        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Mark as Completed
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;