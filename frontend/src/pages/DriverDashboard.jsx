import { useAuth } from '../context/AuthContext';
import AuthHeader from '../components/AuthHeader';
import AuthFooter from '../components/AuthFooter';

function DriverDashboard() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      <AuthHeader />
      
      <main className="flex-grow bg-gray-50 py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Driver Dashboard</h1>
            
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-6">
              <h2 className="text-xl font-semibold text-orange-800 mb-4">
                Welcome, {user?.name}!
              </h2>
              
              <div className="space-y-2 text-gray-700">
                <p><span className="font-medium">Email:</span> {user?.email}</p>
                <p><span className="font-medium">Phone:</span> {user?.phone}</p>
                <p><span className="font-medium">User ID:</span> {user?.userId}</p>
                <p><span className="font-medium">Role:</span> {user?.userType}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Today's Route</h3>
                <p className="text-gray-600 text-sm">View your assigned collection route</p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-2">Collection Status</h3>
                <p className="text-gray-600 text-sm">Update bin collection status</p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-800 mb-2">Navigation</h3>
                <p className="text-gray-600 text-sm">Get directions to next location</p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Trip History</h3>
                <p className="text-gray-600 text-sm">View completed collection trips</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <AuthFooter />
    </div>
  );
}

export default DriverDashboard;