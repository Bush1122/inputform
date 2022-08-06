import "./Form.css";

export default function Form() {
  return (
    <div>
      <form className="form">
        <h1 className="Hello">Hello</h1>
        <input
          className="Username"
          type="text"
          placeholder="Username"
          id="Username"
        />
        <input
          className="Password"
          type="Password"
          placeholder="Password"
          id="Password"
        />
        <button type="Submit">Login</button>
      </form>
    </div>
  );
}
