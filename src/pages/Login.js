import React ,{ useState }from "react";
import "./Login.css";
import Loading from "../components/Loading";
// import { useCookies } from "react-cookie";
import Cookies from 'js-cookie';
import { useNavigate, useSearchParams } from "react-router-dom";
export default function Login() {
    // const [cookies, setCookie] = useCookies(["mm_token"]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    // let SERVER_URL = 'http://16.16.169.123:5000'
    let SERVER_URL = 'https://vocalseparator-production-bf57.up.railway.app'
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setError("");
  
      if (!email || !password) {
        setError("Please fill in both fields.");
        return;
      }
  
      // Simulate login logic
      console.log("Logging in with", email, password);

      let requestObj={
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({email,password})
      }

      setLoading(true)

      fetch(`${SERVER_URL}/login`,requestObj)
      .then(res=>res.json())
      .then(response=>{
        setLoading(false)
        if(response.error){
            setError(response.error)
        }else{
            const mm_token = response.token;
            const date = new Date();
            date.setTime(
                date.getTime() + 21 * 24 * 60 * 60 * 1000
            );
        //   setCookie("mm_token", mm_token, { path: "/", expires: date });
            Cookies.set('mm_token', mm_token, { expires: 21 });
          navigate(`/success`);
        }
        
      })
    };
  
    return (
      <div className="auth-page">
        <div className="auth-box">
          <div className="logo">muteify</div>
          <h2 className="auth-title">Login</h2>
          <form className="auth-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              className="auth-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="auth-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <div className="error-message">{error}</div>}
            <button type="submit" className="cta-button">Login</button>
          </form>
          <div className="auth-divider">or</div>
          <button className="google-button">Continue with Google</button>

            <div className="footnote">
                <p>Don't have an account? <a href="/register">Register</a> </p>
            </div>
        </div>
        {loading?<Loading/>:null}
      </div>
    );
  }