// import styles from "../styles/Registration.module.css";
import Login from "../components/Login";
import Signup from "../components/Signup";

const Registration = () => {
  return (
    <>
      <div>
        <h1>Registration</h1>
        <div className="flex">
          <div className="w-[50%] bg-_gd border-r-2 m-2 h-60 pt-2 content-center items-center">
            <h2>Log In</h2>
            <Login />
          </div>
          <div className="w-[50%] bg-_teal border-r-2 m-2 pt-2">
            <h2>Sign Up</h2>
            <Signup />
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
