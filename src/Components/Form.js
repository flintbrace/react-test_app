const Form = () => {
  return (
    <form className="testForm" name="testContact" method="POST">
      <input type="hidden" name="form-name" value="testContact" />
      <label>First Name:</label>
      <input type="text" name="FirstName" />
      <label>Last Name:</label>
      <input type="text" name="LastName" />
      <label>Email :</label>
      <input type="email" name="Email" />
      <label>Phone:</label>
      <input type="number" name="Phone" />
      <button>Submit</button>
    </form>
  );
};

export default Form;
