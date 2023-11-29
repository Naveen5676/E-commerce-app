import React, { useContext, useRef } from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Itemstore from "../../Store/Itemstore";

const Login = () => {
  const itemctx = useContext(Itemstore);
  const emailinputref = useRef();
  const passwordinputref = useRef();
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    const eneteredEmail = emailinputref.current.value;
    const enetredPassword = passwordinputref.current.value;
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAVdjxsfFD9GI8AS1-icdarMxlh_KQffzA",
      {
        method: "POST",
        body: JSON.stringify({
          email: eneteredEmail,
          password: enetredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            //show  error message
            let errormessage = "Authentication failed";
            if (data && data.error && data.error.message) {
              errormessage = data.error.message;
            }
            // alert(errormessage);
            throw new Error(errormessage);
          });
        }
      })
      .then((data) => {
        itemctx.login(data.idToken);
        itemctx.getemail(eneteredEmail)
        history.replace("/store");

      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center ">
      <Card
        style={{ width: "18rem", border: "1px solid black", padding: "20px" }}
        className="mt-5 mb-5"
      >
        <form onSubmit={submitHandler}>
          <label>Email</label>
          <input
            type="email"
            ref={emailinputref}
            className="form-control mb-2"
          ></input>
          <label>Password</label>
          <input
            type="password"
            ref={passwordinputref}
            className="form-control mb-2"
          ></input>
          <Button type="submit" variant="primary">
            Submit
          </Button>
        </form>
      </Card>
    </div>
  );
};
export default Login;
