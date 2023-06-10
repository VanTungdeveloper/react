import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/img/log.png";
import user from "../assets/img/user.png";
import pas from "../assets/img/pass.png";
import "../assets/css/login.css";
// import Img01 from "../assets/img/60.png";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const ref = useRef();
    useEffect(() => {
        ref.current.focus();
    }, [])

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
        setUsernameError("");
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setPasswordError("");
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        // Kiểm tra dữ liệu
        if (!username || !password) {
            
            if (username) {
            regex.test(username?undefined :  setUsername(username) || setUsernameError("Vui lòng nhập tên tài khoản"));
            }
            if (!password) {
                setPasswordError("Vui lòng nhập mật khẩu");
            }
        } else if (!/^[a-zA-Z]+$/.test(username)) {
            setUsernameError("Tên đăng nhập chỉ có thể chứa chữ");
        } else if (password.length < 8 || !/\d/.test(password) || !/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
            setPasswordError("Mật khẩu tối thiểu 8 ký tự, có ký tự hoa, có ký tự thường, có ký tự số");
        } else {
            setUsernameError("");
            setPasswordError("");
            alert("Bạn đã gửi liên hệ thành công. Chúng tôi sẽ sớm liên hệ lại với Bạn");
        }
    };

    return (
        <>
            <div className="container">
                <div className="form-login">
                    <div className="form-login-right">
                        <div className="logo-login">
                            <img src={logo} alt="" />
                        </div>
                        <div className="form-login-right-top">
                            <form onSubmit={handleSubmit}>
                                <div className="form-login-right-top-input">
                                    <div className="wrap-input">
                                        <img src={user} alt="" />
                                        <input ref={ref} type="text" placeholder="Địa chỉ email" value={username} onChange={handleUsernameChange} />
                                    </div>
                                    {usernameError && <div className="error-message" style={{ width: "100%", color: "#e04562", backgroundColor: "#f9e4e8" }}>{usernameError}</div>}
                                    <div className="wrap-input">
                                        <img src={pas} alt="" />
                                        <input type="password" placeholder="Nhập vào mật khẩu" value={password} onChange={handlePasswordChange} />
                                    </div>
                                    {passwordError && <div className="error-message" style={{ width: "100%", color: "#e04562", backgroundColor: "#f9e4e8" }}>{passwordError}</div>}
                                </div>
                                <div className="confirm-btn">
                                    <input type="checkbox" />
                                    <p>Duy trì đăng nhập</p>
                                </div>
                                <div className="form-login-right-under-btn">
                                    <button type="submit" className="btn-login">
                                        ĐĂNG NHẬP
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
