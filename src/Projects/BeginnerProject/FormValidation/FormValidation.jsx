import { useState } from "react";
import "./style.css";

const FormValidation = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    const [errorUserName, setErrorUserName] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPass, setErrorPass] = useState("");
    const [erorrConfirmPass, setErrorConfirmPass] = useState("");

    const [userColor, setUserColor] = useState("");
    const [emailColor, setEmailColor] = useState("");
    const [passColor, setPassColor] = useState("");
    const [confirmPassColor, setConfirmPassColor] = useState("");

    const validate = (e) => {
        e.preventDefault();

        if (username.length > 8) {
            setErrorUserName("");
            setUserColor("green");
        } else {
            setErrorUserName("Username must be 8 letters long.");
            setUserColor("red");
        }

        if (email.includes("@gmail")) {
            setErrorEmail("");
            setEmailColor("green");
        } else {
            setErrorEmail("Most contains gmail");
            setEmailColor("red");
        }

        if (pass.length > 8) {
            setErrorPass("");
            setPassColor("green");
        } else {
            setErrorPass("Must have 8");
            setPassColor("red");
        }

        if (confirmPass === pass) {
            setErrorConfirmPass("");
            setConfirmPassColor("green");
        } else {
            setErrorConfirmPass("Must match");
            setConfirmPassColor("red");
        }
    };

    return (
        <>
            <div className="card">
                <div className="card-image"></div>
                <form>
                    <input
                        type="text"
                        placeholder="Name"
                        style={{ borderColor: userColor }}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <p className="error">{errorUserName}</p>
                    <input
                        type="email"
                        placeholder="Email"
                        style={{ borderColor: emailColor }}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <p className="error">{errorEmail}</p>
                    <input
                        type="password"
                        placeholder="Password"
                        style={{ borderColor: passColor }}
                        onChange={(e) => setPass(e.target.value)}
                    />
                    <p className="error">{errorPass}</p>
                    <input
                        type="password"
                        placeholder="Confirm password"
                        style={{ borderColor: confirmPassColor }}
                        onChange={(e) => setConfirmPass(e.target.value)}
                    />
                    <p className="error">{erorrConfirmPass}</p>
                    <button className="submit-btn" onClick={validate}>
                        Log in
                    </button>
                </form>
            </div>
        </>
    );
};

export default FormValidation;
