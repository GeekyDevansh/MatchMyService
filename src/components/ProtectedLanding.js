import { Navigate } from "react-router-dom";
const ProtectedLanding = ({ children }) => {

    const user = JSON.parse(localStorage.getItem("user"));

  if (user) {
    return <Navigate to="/home" replace />;
  }
else if(!user)
{
     return <Navigate to="/landing" replace />;
}
  return children;
};
export default ProtectedLanding;