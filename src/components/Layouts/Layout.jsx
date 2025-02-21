import React, { useState, useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import { FaBell } from 'react-icons/fa';

const notifications = [
  { id: 1, sender: 'John Doe', message: 'Your report is ready.', avatar: '/path/to/avatar1.jpg' },
  { id: 2, sender: 'Jane Smith', message: 'Meeting at 3 PM tomorrow.', avatar: '/path/to/avatar2.jpg' },
  { id: 3, sender: 'Alice Brown', message: 'Updated the project plan.', avatar: '/path/to/avatar3.jpg' },
  { id: 4, sender: 'Charlie Black', message: 'Can you review the document?', avatar: '/path/to/avatar4.jpg' },
  { id: 5, sender: 'David White', message: 'Reminder: Submit your report by Friday.', avatar: '/path/to/avatar5.jpg' },
  { id: 6, sender: 'Emma Green', message: 'Follow-up on the last email.', avatar: '/path/to/avatar6.jpg' },
];

function Layout() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Dashboard');
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const notificationsRef = useRef(null);

  // Close notifications dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
        setNotificationsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const userRole = "admin"; // Change to "admin" or "user" to test different roles

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-full w-64 bg-blue-600 text-white transform transition-transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:relative md:flex-none`}
      >
        {/* <Sidebar setActiveItem={setActiveItem} />
         */}
         <Sidebar role={userRole} />
      </aside>

      {/* Backdrop for small screens */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col container">
        {/* Header */}
        <header className="bg-dashboardbackground px-4 py-1 sticky top-0 z-10 flex items-center justify-between border-b-2">
          {/* Left Section: Hamburger Button */}
          <button
            className="md:hidden text-blue-600"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>

          {/* Right Section: Notifications and User Avatar */}
          <div className="flex items-center space-x-6 ml-auto">
          
            <div className="flex items-center flex-col gap-2">
              <img
                src="https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH?rs=1&pid=ImgDetMain"
                alt="User"
                className="w-10 h-10 rounded-full"
              />
              <span className="font-medium text-gray-700">Username</span>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto px-1 main-bg">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;