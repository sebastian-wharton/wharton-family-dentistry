const Contact = () => {
  return (
    <>
      <h1> Contact </h1>
      <div className="flex">
        <form action="" className="p-4 justify-center w-full flex flex-col">
          <label htmlFor="">
            <span>Full Name: </span>
            <input type="text" className="shadow-md pt-1" />
          </label>
          <label htmlFor="">
            <span>Subject: </span>
            <input type="text" className="shadow-md pt-1" />
          </label>
          <label htmlFor="">
            <span>Message: </span>
            <input type="text" className="shadow-md pt-1" />
          </label>
          <button className="pt-1">Send Message</button>
        </form>
        <div className="img w-[100%] m-5 bg-slate-800"></div>
      </div>
    </>
  );
};

export default Contact;
