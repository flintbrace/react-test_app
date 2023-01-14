const Form = () => {
  return (
    <form
      name="TestContact"
      method="POST"
      data-netlify="true"
      className="testForm"
    >
      <label>First Namee:</label>
      <input type="text" name="First Name" />
      <label>Last Name:</label>
      <input type="text" name="Last Name" />
      <label>Email :</label>
      <input type="email" name="Email" />
      <label>Phone:</label>
      <input type="number" name="Phone" />
      <button>Submit</button>
    </form>
  );
};

export default Form;