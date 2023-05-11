import { Navigate } from "react-router-dom";
const Protected = ({ children }) => {

    const user = JSON.parse(localStorage.getItem("user"));
    const service = JSON.parse(localStorage.getItem("user"))?.user.photoURL;

  if (!user) {
    return <Navigate to="/" replace />;
  }
else if(service === undefined)
{
     return <Navigate to="/home" replace />;
}
  return children;
};
export default Protected;