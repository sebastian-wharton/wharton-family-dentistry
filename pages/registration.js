// import styles from "../styles/Registration.module.css";
import Login from "../components/Login";
import Signup from "../components/Signup";

const Registration = () => {
  return (
    <>
      <div>
        <h1>Registration</h1>
        <div className="flex">
          <div className="w-[50%] border-r-2 border-_black h-60 pt-2 content-center items-center">
            <h1 className="text-center">Log In</h1>
            <Login />
          </div>
          <div className="w-[50%] border-_black pt-2">
            <h1 className="text-center">Sign Up</h1>
            <Signup />
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
