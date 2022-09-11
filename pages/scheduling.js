const Scheduling = () => {
  return (
    <>
      <div>
        <h1> Scheduling </h1>
        <div className="flex">
          <div>
            <p>Are you a new patient or returning?</p>
            <br />
            <input type="radio" name="New" id="new" />
            New
            <input type="radio" name="returning" id="returning" />
            Returning
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Scheduling;
