import React from 'react';

export const AdminDashboard: React.FC = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6 text-white">Admin Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
                    <h3 className="text-lg font-semibold mb-2 text-white">Total Projects</h3>
                    <p className="text-3xl font-bold text-orange-500">24</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
                    <h3 className="text-lg font-semibold mb-2 text-white">Active Clients</h3>
                    <p className="text-3xl font-bold text-orange-500">12</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
                    <h3 className="text-lg font-semibold mb-2 text-white">Pending Reviews</h3>
                    <p className="text-3xl font-bold text-orange-500">5</p>
                </div>
            </div>
        </div>
    );
};
