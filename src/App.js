import './App.css';
import logo from './img/logo-loc-tan-cuong-ngang-02.png';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Home from './components/Home';
import TeaProducts from './components/TeaProducts';
import TeaBox from './components/TeaBox';
import TeaUtensil from './components/TeaUtensil';
import Agent from './components/Agent';
import Blog from './components/Blog';
import Contact from './components/Contact';
import imgytb from './img/youtube-icon.png';
import imgfb from './img/facebook-icon.png';
import imgsp from './img/shopee-icon1.png';
import imglzd from './img/lazada-icon.png';
import { Button, Grid } from "@mui/material";
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import ForumIcon from '@mui/icons-material/Forum';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import YouTubeIcon from '@mui/icons-material/YouTube';


function App(props) {
  const { children, value, index, ...other } = props;
  return (
    <div className="container">
      <div className='header'>
        <div className='header-firt'>
          <div className='hotline'>
            Gọi ngay :
            <b>
              &nbsp;
              <a href="tel:0933862589" class="">0834765056</a>
              &nbsp;
              &nbsp;
              <a href="tel:0933862589" class="">0827231697</a>
            </b>
          </div>
        </div>

        <div className='header-second'>
          <div>
            <i class="fa-solid fa-user"></i>
            &nbsp;
            <a href="https://" class="">
              Đăng nhập
            </a>
          </div>
          &nbsp;
          l
          &nbsp;
          <div>
            <i class="fa-solid fa-pencil"></i>
            &nbsp;
            <a href="https://" class="">
              Đăng kí
            </a>
          </div>
        </div>
      </div>
      <div className='header-home'>
        <div className='header-logo'>
          <a href="https://loctancuong.com" class="logo d-inline-b">
            <img src={logo} alt="logo"></img>
          </a>
        </div>
        <div className='header-Loan'>

          <button className="header-language">
            <img src="https://static.loveitopcdn.com/backend/images/flags/en.png" alt="Tiếng Anh" class="d-inline-middle" />
            <b> English</b>
          </button>
          &nbsp;
          &nbsp;

          <button className="header-shopping">
            <i class="fas fa-shopping-cart"></i>
            <b> Giỏ hàng</b>
          </button>
        </div>


      </div>
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/san-pham-tra" element={<TeaProducts />} />
          <Route exact path="/hop-tra-qua-tang" element={<TeaBox />} />
          <Route exact path="/dung-cu" element={<TeaUtensil />} />
          <Route exact path="/dai-ly" element={<Agent />} />
          <Route exact path="/blog-tra" element={<Blog />} />
          <Route exact path="/lien-he" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>

      <div className="footer">
        <div className="footer-top">
          <h1>Lộc Tân Cương • Chuyên Các Loại Trà Ngon Nhất Tại Việt Nam</h1>
          Lộc Tân Cương chuyên kinh doanh các loại trà Tân Cương Thái Nguyên ngon, cao cấp nhất như Trà Đinh, Trà Nõn Tôm, Trà Móc Câu. Ngoài ra, chúng tôi còn cung cấp các loại trà đặc sản của các vùng miền khác như trà ô long Lâm Đồng, trà sen, trà lài, trà shan tuyết cổ thụ Tà Xùa, Suối Giàng,...& các loại quà tặng, dụng cụ trà cao cấp. HOTLINE: 0933.862.589
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <div>
              <strong>CÔNG TY TNHH LỘC TÂN CƯƠNG</strong>
              <div className='footer-bottom-left-first'>
                <p><span><strong>Mã Số Thuế : </strong>0312393412</span></p>
                <p><span><strong>Nhà Máy SX : </strong>Xóm Nam Hưng, Xã Tân Cương, TP.Thái Nguyên</span></p>
              </div>
              <div className="footer-bottom-left-second">
                <strong>Cửa hàng tại&nbsp;Hà Nội:</strong>
                <p>
                  <span>○ Số 189 Giáp Nhất, Thượng Đình, Thanh Xuân, Hà Nội</span>
                </p>
                <p>
                  <span className="footer-time">(8h - 18h, từ T2 - CN, Lễ làm bình thường)</span>
                </p>
              </div>
              <div className="footer-bottom-left-third">
                <strong>Cửa hàng tại TP.HCM : </strong>
                <p>
                  <span>○ Số 589 Hoàng Văn Thụ, Phường 4, Q. Tân Bình, TP.HCM</span>
                </p>
                <p>
                  <span className="footer-time">(8h - 21h, từ T2 - CN, Lễ làm bình thường)</span>
                </p>
                <p>
                  <span>○ Số 50 Thanh Đa, phường 27, quận Bình Thạnh, TP.HCM</span>
                </p>
                <p>
                  <span className="footer-time">(8h - 17h, từ T2 - T7, nghỉ CN và Lễ)</span>
                </p>
              </div>
            </div>
          </div>
          <div className="footer-bottom-between">
            <div className="footer-contact">
              <strong>LIÊN HỆ</strong>
              <div className="footer-bottom-right-first">
                <div>
                  <span>Tại Hà Nội : </span>
                  <span>
                    <a href="tel:02473014747">
                      <span><strong>(024).7301.4747</strong></span>
                    </a>
                  </span>
                </div>
                <div>
                  <span>Tại TPHCM : </span>
                  <span>
                    <a href="tel:02473014747">
                      <span><strong>(024).7301.4747</strong></span>
                    </a>
                  </span>
                </div>
                <div>
                  <span>Hotline / Zalo : </span>
                  <span>
                    <a href="tel:02473014747">
                      <span><strong>(024).7301.4747</strong></span>
                    </a>
                  </span>
                </div>
              </div>
              <div className="footer-bottom-right-second">
                <div>Email : loctancuong@gmail.com</div>
                <div>Website : https://loctancuong.com</div>
              </div>
              <div className="footer-bottom-right-third">
                <p><span><span></span></span><a href="https://www.youtube.com/user/LocTanCuong"><img src={imgytb} /></a><a href="https://www.facebook.com/traloctancuong"><img src={imgfb} /></a><a href="https://bit.ly/3jiAnuu"><img src={imgsp} /></a><a href="https://www.lazada.vn/shop/loc-tan-cuong-tea"><img src={imglzd} /></a>
                  <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"> </script>
                </p>
              </div>
            </div>

          </div>
          <div className="footer-bottom-right">
            <div className="footer-support">
              <strong>HỖ TRỢ KHÁCH HÀNG</strong>
              <div className="footer-support-link">
                <p><span><a href="https://loctancuong.com/ve-loc-tan-cuong.html">Giới thiệu</a></span></p>
                <p><span><a href="https://loctancuong.com/ve-loc-tan-cuong.html">Hướng dẫn mua hàng</a></span></p>
                <p><span><a href="https://loctancuong.com/ve-loc-tan-cuong.html">Chính sách thanh toán & giao nhận</a></span></p>
                <p><span><a href="https://loctancuong.com/ve-loc-tan-cuong.html">Chính sách bảo hành</a></span></p>
                <p><span><a href="https://loctancuong.com/ve-loc-tan-cuong.html">Chính sách bảo mật thông tin</a></span></p>
                <p><span><a href="https://loctancuong.com/ve-loc-tan-cuong.html">Chính sách đổi hàng</a></span></p>
                <p><span><a href="https://loctancuong.com/ve-loc-tan-cuong.html">Cam kết hoàn tiền 100%</a></span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="prioritize">
        <div class="prioritize-app">
          <Grid style={{ margin: '0px 10px' }}>
            <Button variant="contained" startIcon={<PhoneForwardedIcon />}>
              Gọi Ngay 0933862589
            </Button>
          </Grid>
          <Grid style={{ margin: '0px 10px' }}>
            <Button variant="contained" startIcon={<ForumIcon />}>
              Chat Zalo
            </Button>
          </Grid>
          <Grid style={{ margin: '0px 10px' }}>
            <Button variant="contained" startIcon={<ShoppingCartIcon />}>
              10 Mẫu Trà Thử
            </Button>
          </Grid>
          <Grid style={{ margin: '0px 10px' }}>
            <Button variant="contained" startIcon={<YouTubeIcon />}>
              Kênh Youtube
            </Button>
          </Grid>
        </div>
        <div className='scroll-to-top demo'>
          <a>TOP</a>
        </div>
      </div>
    </div >
  );
}

export default App;
