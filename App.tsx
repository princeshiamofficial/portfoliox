import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { BaseLayout } from './components/layout/BaseLayout';
import { HomePage } from './components/pages/home/HomePage';
import { MeetingPage } from './components/pages/meeting/meeting-page';
import { PrivacyPolicy } from './components/pages/privacy/privacy-page';
import { RefundPolicy } from './components/pages/refund/refund-page';
import { ServicesPage } from './components/pages/services/services-page';

// Admin Imports
import { AdminLogin } from './components/admin/pages/login/AdminLogin';

// Wrapper to provide onBookMeeting functionality compatible with Router
const ServicesPageWrapper = () => {
  const navigate = useNavigate();
  return <ServicesPage onBookMeeting={() => navigate('/meeting')} />;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Website Routes */}
        <Route element={<BaseLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/meeting" element={<MeetingPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/refund" element={<RefundPolicy />} />
          <Route path="/services" element={<ServicesPageWrapper />} />
        </Route>

        {/* Admin Auth */}
        <Route path="/admin/login" element={<AdminLogin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;