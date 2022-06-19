import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./context/AuthProvider";
import './index.css';

const Home = () => {
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const logout = async () => {
        // if used in more components, this should be in context 
        // axios to /logout endpoint 
        setAuth({});
        navigate('/linkpage');
    }

    return (
        <div className="centre">
            <h1>Home</h1>
            <Link to="/user">Take a survey</Link>
            <br />
            <br />
            <Link to="/admin/login">Go to the Login Page</Link>
            <br />
            <Link to="admin/survey">Go to the Admin page</Link>
            <br />
            
        </div>
    )
}

export default Home