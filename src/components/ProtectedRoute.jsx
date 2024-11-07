
import { Navigate } from 'react-router-dom';
import useAuthStore from '../store/authStore.js';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return children;
};

// Define prop types for validation
ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
