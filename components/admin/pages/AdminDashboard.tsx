import React from 'react';
import { AdminLayout } from '../../layout/AdminLayout';

export const AdminDashboard: React.FC = () => {
    return (
        <AdminLayout>
            <div className="p-8">
                <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-2">Total Projects</h3>
                        <p className="text-3xl font-bold text-primary">24</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-2">Active Clients</h3>
                        <p className="text-3xl font-bold text-primary">12</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-2">Pending Reviews</h3>
                        <p className="text-3xl font-bold text-primary">5</p>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};
