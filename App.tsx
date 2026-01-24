import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { BaseLayout } from './components/layout/BaseLayout';
import { HomePage } from './components/pages/home/HomePage';
import { MeetingPage } from './components/pages/meeting/meeting-page';
import { PrivacyPolicy } from './components/pages/privacy/privacy-page';
import { RefundPolicy } from './components/pages/refund/refund-page';
import { ServicesPage } from './components/pages/services/services-page';
import { AboutPage } from './components/pages/about/about-page';
import { ContactPage } from './components/pages/contact/contact-page';
import { BlogPage } from './components/pages/blog/blog-page';
import { ThankYouPage } from './components/pages/thank-you/thank-you-page';
import ScrollToTop from './components/shared/ScrollToTop';

// Admin Imports
import { AdminLogin } from './components/admin/pages/login/AdminLogin';
import { AdminDashboard } from './components/admin/pages/AdminDashboard';
import { AdminLayout } from './components/admin/layout/AdminLayout';

// Wrapper to provide onBookMeeting functionality compatible with Router
const ServicesPageWrapper = () => {
  const navigate = useNavigate();
  return <ServicesPage onBookMeeting={() => navigate('/services#requirment')} />;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Public Website Routes */}
        <Route element={<BaseLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPageWrapper />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/meeting" element={<MeetingPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/refund" element={<RefundPolicy />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Route>

        {/* Admin Auth (outside layout) */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Admin Routes (with AdminLayout) */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          {/* Add more admin routes here as needed */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;