import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <h1 style={{ textAlign: "center" }}>Registration</h1>
        <div className="box">
          <form
            action="https://getform.io/f/edf71bdc-19d6-44ec-bfb4-22f5ef3a8899"
            method="post"
          >
            <div className="inp">
              <label htmlFor="firstname">First Name: </label>
              <input type="text" required name="firstname" id="firstname" />
            </div>
            <div className="inp">
              <label htmlFor="firstname">Last Name: </label>
              <input type="text" required name="lastname" id="lastname" />
            </div>
            <div className="inp">
              <label htmlFor="firstname">Phone number: </label>
              <input type="tel" required name="phonenumber" id="phone" />
            </div>
            <div className="inp">
              <label htmlFor="firstname">Email: </label>
              <input type="email" required name="email" id="enail" />
            </div>
            <div className="inp date">
              <label htmlFor="date">Date of join: </label>
              <input type="date" required name="dateofjoin" id="date" />
            </div>
            <div className="inp check">
              <label htmlFor="language">Language: </label>
              <span>
                <span className="cbox">
                  <input
                    type="checkbox"
                    name="language"
                    id="py"
                    value="python"
                  />
                  <label htmlFor="language">Python</label>
                </span>

                <span className="cbox">
                  <input
                    type="checkbox"
                    name="language"
                    id="language"
                    value="Java"
                  />
                  <label htmlFor="language">Java</label>
                </span>

                <span className="cbox">
                  <input
                    type="checkbox"
                    name="language"
                    id="language"
                    value="JavaScript"
                  />
                  <label htmlFor="language">JavaScript</label>
                </span>

                <span className="cbox">
                  <input
                    type="checkbox"
                    name="language"
                    id="language"
                    value="C/C++"
                  />
                  <label htmlFor="language">C/C++</label>
                </span>

                <span className="cbox">
                  <input
                    type="checkbox"
                    name="language"
                    id="language"
                    value="HTML/CSS"
                  />
                  <label htmlFor="language">HTML/CSS</label>
                </span>
              </span>
            </div>
            <div className="inp dropdown">
              <label htmlFor="field">Field of Interest: </label>
              <select name="fieldOfInterest" id="field">
                <option value="Machine learning">Machine learning</option>
                <option value="Data analysis">Data analysis</option>
                <option value="Web development">Web development</option>
                <option value="Data structures">Data structures</option>
                <option value="Algorithms">Algorithms</option>
                <option value="Software Development">
                  Software Development
                </option>
              </select>
            </div>
            <div className="inp feedback">
              <label htmlFor="feedback">Feedback: </label>
              <textarea name="note" rows={10} id="feedback"></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
