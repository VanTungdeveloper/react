import home from "../assets/img/home.png";
import "../assets/css/navbar.css";

function Navbar() {
    return ( 
        <div className="navi">
            <div className="container-nav">
                <ul>
                    <li>
                        <img src={home} alt=""/>
                    </li>
                    <li>GIỚI THIỆU</li>
                    <li>TIN TỨC</li>
                    <li>ĐÀO TẠO</li>
                    <li>TUYỂN SINH</li>
                    <li>KHOA HỌC CÔNG NGHỆ</li>
                    <li>HỢP TÁC</li>
                    <li>ĐẢNG ĐOÀN THỂ</li>
                    <li>TUYỂN DỤNG</li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;