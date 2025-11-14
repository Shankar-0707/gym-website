import React from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="bg-gray-800 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-600 rounded-full"></div>
              <span className="text-xl font-bold">FITNESS<span className="text-red-600">PRO</span></span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-300">Welcome, {user?.name}</span>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to Your <span className="text-red-600">Dashboard</span>
          </h1>
          <p className="text-xl text-gray-300">
            Ready to crush your fitness goals today?
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { title: 'Workouts This Week', value: '4', color: 'bg-red-600' },
            { title: 'Calories Burned', value: '1,200', color: 'bg-green-600' },
            { title: 'Membership', value: user?.membershipType || 'Basic', color: 'bg-blue-600' }
          ].map((stat, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl p-6 text-center hover:transform hover:scale-105 transition-all">
              <div className={`w-16 h-16 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <span className="text-2xl font-bold">{stat.value}</span>
              </div>
              <h3 className="text-xl font-semibold">{stat.title}</h3>
            </div>
          ))}
        </div>

        {/* Workout Schedule */}
        <div className="bg-gray-800 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Your Workout Schedule</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { day: 'Monday', workout: 'Chest & Triceps', time: '6:00 AM' },
              { day: 'Wednesday', workout: 'Back & Biceps', time: '6:00 AM' },
              { day: 'Friday', workout: 'Legs & Shoulders', time: '6:00 AM' }
            ].map((session, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-xl hover:bg-gray-600 transition-colors">
                <h3 className="text-xl font-bold text-red-400 mb-2">{session.day}</h3>
                <p className="text-lg mb-2">{session.workout}</p>
                <p className="text-gray-400">{session.time}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold mb-8">Quick Actions</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition-colors">
              Book Personal Training
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg font-semibold transition-colors">
              View Progress
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg font-semibold transition-colors">
              Nutrition Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;