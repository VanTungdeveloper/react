import "../assets/css/main.css";
import bgr from "../assets/img/bgr.png";
import na from "../assets/img/nav.png";

function Main() {
    return (
        <div className="main">
            <div className="bgr">
                <img src={bgr} alt="" />
            </div>

            <div className="main-right">
                <div className="main-list">
                    <h3>CÁC KHOA-VIỆN-ĐƠN VỊ THUỘC TRƯỜNG:</h3>

                    <div className="list">
                        <div className="list1">
                            <p>Phân hiệu tại TP.Hồ Chí Minh</p>
                            <p>Các khoa trực thuộc Trường</p>
                            <p>Đơn vị chức năng</p>
                            <p>Cổng thông tin tuyển sinh</p>
                        </div>
                        <div className="list2">
                            <p>Xét Giáo Sư - Phó Giáo sư</p>
                            <p>Cổng thông tin sinh viên</p>
                            <p>Đăng ký học</p>
                            <span>Xem thêm</span>
                        </div>
                    </div>
                </div>

                <div className="main-img">
                    <img src={na} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Main;
