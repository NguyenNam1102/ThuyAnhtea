import React from "react";
import './Nav.css';
import { NavLink, Link } from 'react-router-dom';



class Navigation extends React.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink activeclassname="active" to="/">TRANG CHỦ</NavLink>
                <NavLink activeclassname="active" to="/san-pham-tra" id="nav">
                    SẢN PHẨM TRÀ
                    <i class="fas fa-angle-down m-left-5"></i>
                    <ul class="subnav-teaproducts">
                        <div class="row clearfix">
                            <div class="col-lg-3 col-md-3 col-sm-3">
                                <div class="nav-column">
                                    <h3 class="title-mega">
                                        <a href="">TRÀ THÁI NGUYÊN</a>
                                    </h3>
                                    <ul>
                                        <li>
                                            <a href="">Trà Đinh Thái Nguyên</a>
                                        </li>
                                        <li>
                                            <a href="">Trà Nõn Tôm Thái Nguyên</a>
                                        </li>
                                        <li>
                                            <a href="">Trà Móc Câu Thái Nguyên</a>
                                        </li>
                                        <li>
                                            <a href="">Trà Búp Thái Nguyên</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-3">
                                <div class="nav-column">
                                    <h3 class="title-mega">
                                        <a href="">TRÀ ƯỚP HOA</a>
                                    </h3>
                                    <ul>
                                        <li>
                                            <a href="">Trà Sen Tây Hồ</a>
                                        </li>
                                        <li>
                                            <a href="">Trà Lài Tự Nhiên Thái Nguyên</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-3">
                                <div class="nav-column">
                                    <h3 class="title-mega">
                                        <a href="">TRÀ SHAN TUYẾT CỔ THỤ</a>
                                    </h3>
                                    <ul>
                                        <li>
                                            <a href="">Trà Tà Xùa - Sơn La</a>
                                        </li>
                                        <li>
                                            <a href="">Trà Suối Giàng - Yên Bái</a>
                                        </li>
                                        <li>
                                            <a href="">Trà Hà Giang</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-3">
                                <div class="nav-column">
                                    <h3 class="title-mega">
                                        <a href="">TRÀ Ô LONG</a>
                                    </h3>
                                    <ul>
                                        <li>
                                            <a href="">Trà Oolong Quý Long</a>
                                        </li>
                                        <li>
                                            <a href="">Trà Oolong Lộc Hương</a>
                                        </li>
                                        <li>
                                            <a href="">Trà Oolong Kim Tuyên</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-3">
                                <div class="nav-column">
                                    <h3 class="title-mega">
                                        <a href="">HỘP QUÀ TẶNG</a>
                                    </h3>
                                    <ul>
                                        <li>
                                            <a href="">Hộp Trà Hồng Phúc</a>
                                        </li>
                                        <li>
                                            <a href="">Hộp Trà Sen Tây Hồ</a>
                                        </li>
                                        <li>
                                            <a href="">Hộp Giấy Mỏng</a>
                                        </li>
                                        <li>
                                            <a href="">Hộp Nhựa Mica</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-3">
                                <div class="nav-column">
                                    <h3 class="title-mega">
                                        <a href="">TRÀ THẢO DƯỢC</a>
                                    </h3>
                                    <ul>
                                        <li>
                                            <a href="">Trà Nụ Vối</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-3">
                                <div class="nav-column">
                                    <h3 class="title-mega">
                                        <a href="">Trà Ngon 10 Vị</a>
                                    </h3>
                                    <ul>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </ul>
                </NavLink>
                <NavLink activeclassname="active" to="/hop-tra-qua-tang" id="nav">
                    SP HỘP TRÀ QUÀ TẶNG
                    <i class="fas fa-angle-down m-left-5"></i>
                    <ul class="subnav-teabox">
                        <li class="">
                            <a href="" class="color-dark">Hộp Trà Hồng Phúc</a>
                        </li>
                        <li class="">
                            <a href="" class="color-dark">Hộp Trà Sen Tây Hồ</a>
                        </li>
                        <li class="">
                            <a href="" class="color-dark">Hộp Giấy Mỏng</a>
                        </li>
                        <li class="">
                            <a href="" class="color-dark">Hộp Nhựa Mica</a>
                        </li>
                    </ul>
                </NavLink>
                <NavLink activeclassname="active" to="/dung-cu" id="nav">
                    SP DỤNG CỤ TRÀ
                    <i class="fas fa-angle-down m-left-5"></i>
                    <div class="subnav-teautensil clearfix">
                        <div class="row clearfix">
                            <div class="col-lg-3 col-md-3 col-sm-3">
                                <div class="nav-column">
                                    <h3 class="title-mega">
                                        <a href="">ẤM CHÉN THƯỞNG TRÀ</a>
                                    </h3>
                                    <ul>
                                        <li>
                                            <a href="">Ấm Chén Bát Tràng </a>
                                        </li>
                                        <li>
                                            <a href="">Chén Uống Trà</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-3">
                                <div class="nav-column">
                                    <h3 class="title-mega">
                                        <a href="">BÀN TRÀ - KHAY TRÀ</a>
                                    </h3>
                                    <ul>
                                        <li>
                                            <a href="">Bàn Trà Điện</a>
                                        </li>
                                        <li>
                                            <a href="">Bàn Trà Tre, Gỗ</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-3">
                                <div class="nav-column">
                                    <h3 class="title-mega">
                                        <a href="">DỤNG CỤ TRÀ KHÁC</a>
                                    </h3>
                                    <ul>
                                        <li>
                                            <a href="">Lọc, chuyên, hũ, xúc trà,...</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </NavLink>
                <NavLink activeclassname="active" to="/dai-ly">ĐẠI LÝ</NavLink>
                <NavLink activeclassname="active" to="/blog-tra">BLOG TRÀ</NavLink>
                <NavLink activeclassname="active" to="/lien-he">LIÊN HỆ</NavLink>
                <a class="search-button">
                    <i class="fas fa-search"></i>
                </a>
            </div>
        )
    }
}

export default Navigation;













