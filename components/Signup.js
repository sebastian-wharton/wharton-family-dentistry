const Signup = () => {
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
        <label htmlFor="">
          <span>Repeat Password: </span>
          <input type="text" />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
};

export default Signup;
