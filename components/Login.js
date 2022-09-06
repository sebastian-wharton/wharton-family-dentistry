const Login = () => {
  return (
    <>
      <form action="" className="p-4 justify-center w-full flex flex-col">
        <label htmlFor="">
          <span>Username: </span>
          <input type="text" />
        </label>
        <label htmlFor="">
          <span>Password: </span>
          <input type="text" />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
};

export default Login;

// Add logos & move labels to placeholders. style buttons
