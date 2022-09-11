const Signup = () => {
  return (
    <>
      <form action="" className="p-4 justify-center w-full flex flex-col">
        <label htmlFor="">
          <span>Username: </span>
          <input type="text" className="shadow-md pt-1" />
        </label>
        <label htmlFor="">
          <span>Password: </span>
          <input type="text" className="shadow-md pt-1" />
        </label>
        <label htmlFor="">
          <span>Repeat Password: </span>
          <input type="text" className="shadow-md pt-1" />
        </label>
        <button className="pt-1">Submit</button>
      </form>
    </>
  );
};

export default Signup;
