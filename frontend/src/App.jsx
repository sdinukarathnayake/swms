import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './utils/PrivateRoute';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CitizenDashboard from './pages/citizen/CitizenDashboard';
import CityAuthorityDashboard from './pages/CityAuthorityDashboard';
import DriverDashboard from './pages/DriverDashboard';
import WasteCollectionStaffDashboard from './pages/WasteCollectionStaffDashboard';
import SensorManagerDashboard from './pages/SensorManagerDashboard';

// Citizen Report Pages
import ReportBinRequest from './pages/citizen/ReportBinRequest';
import ReportBinForm from './pages/citizen/ReportBinForm';
import ReportConfirmation from './pages/citizen/ReportConfirmation';
import TrackRequests from './pages/citizen/TrackRequests';
import RequestDetails from './pages/citizen/RequestDetails';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Routes - Dashboards */}
          <Route
            path="/citizen-dashboard"
            element={
              <PrivateRoute allowedUserTypes={['CITIZEN']}>
                <CitizenDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/city-authority-dashboard"
            element={
              <PrivateRoute allowedUserTypes={['CITY_AUTHORITY']}>
                <CityAuthorityDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/driver-dashboard"
            element={
              <PrivateRoute allowedUserTypes={['DRIVER']}>
                <DriverDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/waste-collection-staff-dashboard"
            element={
              <PrivateRoute allowedUserTypes={['WASTE_COLLECTION_STAFF']}>
                <WasteCollectionStaffDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/sensor-manager-dashboard"
            element={
              <PrivateRoute allowedUserTypes={['SENSOR_MANAGER']}>
                <SensorManagerDashboard />
              </PrivateRoute>
            }
          />

          <Route
            path="/citizen/report-bin-request"
            element={
              <PrivateRoute allowedUserTypes={['CITIZEN']}>
                <ReportBinRequest />
              </PrivateRoute>
            }
          />
          <Route
            path="/citizen/report-bin-form"
            element={
              <PrivateRoute allowedUserTypes={['CITIZEN']}>
                <ReportBinForm />
              </PrivateRoute>
            }
          />
          <Route
            path="/citizen/report-confirmation"
            element={
              <PrivateRoute allowedUserTypes={['CITIZEN']}>
                <ReportConfirmation />
              </PrivateRoute>
            }
          />
          <Route
            path="/citizen/track-requests"
            element={
              <PrivateRoute allowedUserTypes={['CITIZEN']}>
                <TrackRequests />
              </PrivateRoute>
            }
          />
          <Route
            path="/citizen/request-details/:id"
            element={
              <PrivateRoute allowedUserTypes={['CITIZEN']}>
                <RequestDetails />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;