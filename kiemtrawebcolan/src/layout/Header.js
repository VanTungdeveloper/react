import logo from "../assets/img/log.png";
import en from "../assets/img/en.png";
import search from "../assets/img/Screenshot 2023-06-10 132343.png";
import "../assets/css/header.css";
// import { Link } from 'react-router-dom';
function Header() {
    return (
        <header className="header-page">
            <div className="container-header">
                <div className="header-logo">
                    <a href="/">
                        <img src={logo} alt="" />
                    </a>
                </div>
                <div className="header-right">
                    <div className="conact">
                        <span>Sơ đồ web</span>
                        <span>Thư điện tử</span>
                        <span>Liên hệ</span>
                        <a href="/">
                            <img src={en} alt="" />
                        </a>
                        <a href="/login">
                            <button>Đăng nhập</button>
                        </a>
                    </div>
                    <div className="header-search">
                        <input type="text" placeholder="Tìm kiếm" />
                        <a href="/">
                            <img src={search} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;