import React, { Component } from "react";
import "./_FormInformation.scss";
import Navbar from "./../../NavbarPayment/Navbar";
class Step2 extends Component {
  getBack = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  next = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    return (
      <>
        <Navbar acitve1={false} active2={true} active3={false} />
        <div className="bodyDelivery">
          <div className="row">
            <div className="col">
              <div className="page-title">
                <h2>Delivery</h2>
              </div>
              <div className="page-content">
                <div className="form row">
                  <div className="provinceDistric">
                    <div className="col-6 form-group">
                      <label>Province</label>
                      <select className="form-control" name="Address_Province">
                        <option value="">Select province</option>
                        <option value="274f5dec-359a-4577-b290-115ab57ba3c4">
                          TP Hồ Chí Minh
                        </option>
                        <option value="869fcb10-e787-4907-9e14-95e1d91b79b5">
                          Hà Nội
                        </option>
                      </select>
                    </div>
                    <div className="col-6 form-group">
                      <label>District</label>
                      <select className="form-control" name="Address_District">
                        <option value="">Select district</option>
                        <option value="b5d2ba47-198f-40e5-a31c-cb5ca73b3741">
                          Quận 1
                        </option>
                        <option value="86b4ab47-74ca-4639-bd42-4ed306a2cf3b">
                          Quận 2
                        </option>
                        <option value="268c3af2-c91f-4784-a12b-b4d9b37bf0aa">
                          Quận 3
                        </option>
                        <option value="ac31b2bb-7336-49aa-92e3-3ddbad8e669e">
                          Quận 4
                        </option>
                        <option value="f2374275-2016-4580-b6a0-28d5a5462611">
                          Quận 5
                        </option>
                        <option value="3e6f722a-5916-488a-9cf8-2c2dc1429fb0">
                          Quận 6
                        </option>
                        <option value="63e5238e-0075-4ae5-ace5-89bea3343d55">
                          Quận 7
                        </option>
                        <option value="94149561-9ad4-491f-add2-50e9100a9a1a">
                          Quận 8
                        </option>
                        <option value="057b89d9-fb30-47ce-b07f-c3e37de9b25a">
                          Quận 9
                        </option>
                        <option value="8aa0ec7f-99cb-4225-b286-c22649184611">
                          Quận10
                        </option>
                        <option value="f1313424-83d8-4e1e-adc3-1853eb335756">
                          Quận 11
                        </option>
                        <option value="d33128ed-d747-41d7-b868-9908f66ca0fd">
                          Quận 12
                        </option>
                        <option value="258c5b5e-7795-4b5a-afb4-bc23c49122c3">
                          Huyện Bình Chánh
                        </option>
                        <option value="ae2edc43-9260-46d3-836d-db302cabc00b">
                          Huyện Hóc Môn{" "}
                        </option>
                        <option value="e2ac1626-b1dd-42fc-91ab-fd4588d64547">
                          Quận Bình Tân
                        </option>
                        <option value="4ba4f327-a833-42b2-8d1e-3e034c49ed8c">
                          Quận Bình Thạnh
                        </option>
                        <option value="92335cb3-00d9-4540-9ba5-feaa3b3e6864">
                          Quận Gò Vấp{" "}
                        </option>
                        <option value="e65c63b8-a748-4208-ad00-cb805077533b">
                          Quận Phú Nhuận
                        </option>
                        <option value="93219203-86db-4ade-af4e-18bc14b83f05">
                          Quận Tân Bình
                        </option>
                        <option value="1423fb08-47f5-4d22-8327-9ddc5640e84e">
                          Quận Tân Phú
                        </option>
                        <option value="3f2cc161-a282-4fef-9a50-977c3222eaa7">
                          Quận Thủ Đức
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12 form-group">
                    <label>
                      House Number<span className="star">(*)</span>
                    </label>
                    <div className="desc">
                      <p> Enter the house number before selecting a road. </p>
                      <p>
                        {" "}
                        Enter only the number, part or alley, please fill in the
                        Information box below.{" "}
                      </p>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                      <p> Example: 12Bis / 34E, how to fill: </p>
                      <p> - House number: 12 </p>
                      <p> - Instruction information box: 12Bis / 34E </p>
                    </div>
                    <input
                      className="form-control"
                      type="number"
                      name="Address_AddressNumber"
                    />
                    <div className="col-12 form-group">
                      <label>
                        Street<span className="star">(*)</span>
                      </label>
                      <div className="desc">
                        <p>
                          Please enter the unsigned street name and select the
                          road name from the suggestion. If no street name is
                          found, your address is outside our delivery area.
                        </p>
                      </div>
                      <select
                        id="streetaddress"
                        className="js-example-basic-single select2-hidden-accessible"
                        name="Address_Address"
                        style={{ width: "100%" }}
                        data-storesuggest=""
                        data-select2-id="streetaddress"
                        tabIndex="-1"
                        aria-hidden="true"
                      >
                        <option data-select2-id="2" />
                        <option
                          data-streetid="5224"
                          value="Bmc-Vo Van Kiet-P.Cau Kho"
                        >
                          Bmc-Vo Van Kiet-P.Cau Kho
                        </option>
                        <option
                          data-streetid="5225"
                          value="Co Bac-P.Cau Ong Lanh"
                        >
                          Co Bac-P.Cau Ong Lanh
                        </option>
                        <option data-streetid="5226" value="Co Bac-P.Co Giang">
                          Co Bac-P.Co Giang
                        </option>
                        <option
                          data-streetid="5227"
                          value="Co Giang-P.Cau Ong Lanh"
                        >
                          Co Giang-P.Cau Ong Lanh
                        </option>
                        <option
                          data-streetid="5228"
                          value="Co Giang-P.Co Giang"
                        >
                          Co Giang-P.Co Giang
                        </option>
                        <option
                          data-streetid="5229"
                          value="De Tham-P.Cau Ong Lanh"
                        >
                          De Tham-P.Cau Ong Lanh
                        </option>
                        <option data-streetid="5230" value="De Tham-P.Co Giang">
                          De Tham-P.Co Giang
                        </option>
                        <option
                          data-streetid="5231"
                          value="Ho Hao Hon-P.Co Giang"
                        >
                          Ho Hao Hon-P.Co Giang
                        </option>
                        <option
                          data-streetid="5232"
                          value="Nguyen Canh Chan-P.Cau Kho "
                        >
                          Nguyen Canh Chan-P.Cau Kho{" "}
                        </option>
                        <option
                          data-streetid="5233"
                          value="Nguyen Khac Nhu-P.Co Giang"
                        >
                          Nguyen Khac Nhu-P.Co Giang
                        </option>
                        <option
                          data-streetid="5234"
                          value="Nguyen Van Cu-P.Cau Kho "
                        >
                          Nguyen Van Cu-P.Cau Kho{" "}
                        </option>
                        <option
                          data-streetid="5235"
                          value="Tran Dinh Xu-P.Cau Kho "
                        >
                          Tran Dinh Xu-P.Cau Kho{" "}
                        </option>
                        <option
                          data-streetid="5236"
                          value="Tran Dinh Xu-P.Co Giang"
                        >
                          Tran Dinh Xu-P.Co Giang
                        </option>
                        <option
                          data-streetid="5237"
                          value="Tran Dinh Xu-P.Co Giang"
                        >
                          Tran Dinh Xu-P.Co Giang
                        </option>
                        <option
                          data-streetid="5238"
                          value="Tran Hung Dao-P.Cau Kho "
                        >
                          Tran Hung Dao-P.Cau Kho{" "}
                        </option>
                        <option
                          data-streetid="5239"
                          value="Tran Hung Dao-P.Cau Ong Lanh"
                        >
                          Tran Hung Dao-P.Cau Ong Lanh
                        </option>
                        <option
                          data-streetid="5240"
                          value="Tran Hung Dao-P.Co Giang"
                        >
                          Tran Hung Dao-P.Co Giang
                        </option>
                        <option
                          data-streetid="5241"
                          value="Tran Hung Dao-P.Co Giang"
                        >
                          Tran Hung Dao-P.Co Giang
                        </option>
                        <option
                          data-streetid="5242"
                          value="Vo Van Kiet-P.Cau Kho "
                        >
                          Vo Van Kiet-P.Cau Kho{" "}
                        </option>
                        <option
                          data-streetid="5243"
                          value="Vo Van Kiet-P.Co Giang"
                        >
                          Vo Van Kiet-P.Co Giang
                        </option>
                        <option
                          data-streetid="12584"
                          value=" Nam Quoc Cang-P.Pham Ngu Lao"
                        >
                          {" "}
                          Nam Quoc Cang-P.Pham Ngu Lao
                        </option>
                        <option
                          data-streetid="12585"
                          value=" Nguyen Trai-P.Nguyen Cu Trinh"
                        >
                          {" "}
                          Nguyen Trai-P.Nguyen Cu Trinh
                        </option>
                        <option
                          data-streetid="12586"
                          value=" Nguyen Trai-P.Nguyen Thai Binh"
                        >
                          {" "}
                          Nguyen Trai-P.Nguyen Thai Binh
                        </option>
                        <option
                          data-streetid="12587"
                          value=" Suong Nguyet Anh-P.Ben Thanh"
                        >
                          {" "}
                          Suong Nguyet Anh-P.Ben Thanh
                        </option>
                        <option
                          data-streetid="12588"
                          value="Ad-18 Nam Quoc Cang-P.Pham Ngu Lao"
                        >
                          Ad-18 Nam Quoc Cang-P.Pham Ngu Lao
                        </option>
                        <option
                          data-streetid="12589"
                          value="Apartment Happy Land-67 Ntmk-P.Ben Thanh"
                        >
                          Apartment Happy Land-67 Ntmk-P.Ben Thanh
                        </option>
                        <option
                          data-streetid="12590"
                          value="Bui Thi  Xuan-P.Ben Thanh "
                        >
                          Bui Thi Xuan-P.Ben Thanh{" "}
                        </option>
                        <option
                          data-streetid="12591"
                          value="Bui Thi Xuan -P. Pham Ngu Lao"
                        >
                          Bui Thi Xuan -P. Pham Ngu Lao
                        </option>
                        <option
                          data-streetid="12592"
                          value="Bui Thi Xuan-P.Ben Thanh"
                        >
                          Bui Thi Xuan-P.Ben Thanh
                        </option>
                        <option
                          data-streetid="12593"
                          value="Bui Vien -P.Pham Ngu Lao "
                        >
                          Bui Vien -P.Pham Ngu Lao{" "}
                        </option>
                        <option
                          data-streetid="12594"
                          value="Bui Vien-P. Nguyen Thai Binh"
                        >
                          Bui Vien-P. Nguyen Thai Binh
                        </option>
                        <option
                          data-streetid="12595"
                          value="Cach Mang Thang 8-P.Ben Thanh"
                        >
                          Cach Mang Thang 8-P.Ben Thanh
                        </option>
                        <option
                          data-streetid="12596"
                          value="Cao Ba Nha-P. Nguyen Cu Trinh"
                        >
                          Cao Ba Nha-P. Nguyen Cu Trinh
                        </option>
                        <option
                          data-streetid="12597"
                          value="Central Plaza-208 Nguyen Trai-P.Nguyen Cu Trinh"
                        >
                          Central Plaza-208 Nguyen Trai-P.Nguyen Cu Trinh
                        </option>
                        <option
                          data-streetid="12598"
                          value="Cong Quynh-P.Nguyen Cu Trinh"
                        >
                          Cong Quynh-P.Nguyen Cu Trinh
                        </option>
                        <option
                          data-streetid="12599"
                          value="Cong Quynh-P.Pham Ngu Lao "
                        >
                          Cong Quynh-P.Pham Ngu Lao{" "}
                        </option>
                        <option
                          data-streetid="12600"
                          value="Cua Dong Cho Ben Thanh"
                        >
                          Cua Dong Cho Ben Thanh
                        </option>
                        <option
                          data-streetid="12601"
                          value="Cua Nam Cho Ben Thanh"
                        >
                          Cua Nam Cho Ben Thanh
                        </option>
                        <option
                          data-streetid="12602"
                          value="Cua Tay Cho Ben Thanh"
                        >
                          Cua Tay Cho Ben Thanh
                        </option>
                        <option
                          data-streetid="12603"
                          value="Dang Tran Con-P.Ben Thanh"
                        >
                          Dang Tran Con-P.Ben Thanh
                        </option>
                        <option
                          data-streetid="12604"
                          value="De Tham-P. Nguyen Cu Trinh"
                        >
                          De Tham-P. Nguyen Cu Trinh
                        </option>
                        <option
                          data-streetid="12605"
                          value="De Tham-P.Pham Ngu Lao "
                        >
                          De Tham-P.Pham Ngu Lao{" "}
                        </option>
                        <option
                          data-streetid="12606"
                          value="Dinh Thong Nhat-135 Nkkn"
                        >
                          Dinh Thong Nhat-135 Nkkn
                        </option>
                        <option
                          data-streetid="12607"
                          value="Do Quang Dau-P. Pham Ngu Lao "
                        >
                          Do Quang Dau-P. Pham Ngu Lao{" "}
                        </option>
                        <option
                          data-streetid="12608"
                          value="Golden Land-275 Nguyen Trai-P.Nguyen Cu Trinh"
                        >
                          Golden Land-275 Nguyen Trai-P.Nguyen Cu Trinh
                        </option>
                        <option
                          data-streetid="12609"
                          value="Ham Nghi-So Chan-P.Ben Thanh"
                        >
                          Ham Nghi-So Chan-P.Ben Thanh
                        </option>
                        <option
                          data-streetid="12610"
                          value="Ham Nghi-So Le-P.Ben Thanh"
                        >
                          Ham Nghi-So Le-P.Ben Thanh
                        </option>
                        <option
                          data-streetid="12611"
                          value="Htdc-36 Bui Thi Xuan-P.Ben Nghe"
                        >
                          Htdc-36 Bui Thi Xuan-P.Ben Nghe
                        </option>
                        <option
                          data-streetid="12612"
                          value="Huyen Tran Cong Chua-P.Ben Thanh"
                        >
                          Huyen Tran Cong Chua-P.Ben Thanh
                        </option>
                        <option
                          data-streetid="12613"
                          value="Huynh Thuc Khang-P.Ben Thanh"
                        >
                          Huynh Thuc Khang-P.Ben Thanh
                        </option>
                        <option
                          data-streetid="12614"
                          value="Jabel-14 Cong Quynh-P.Nguyen Cu Trinh"
                        >
                          Jabel-14 Cong Quynh-P.Nguyen Cu Trinh
                        </option>
                        <option
                          data-streetid="12615"
                          value="Khanh Minh-55 Suong Nguyet Anh-P.Ben Thanh"
                        >
                          Khanh Minh-55 Suong Nguyet Anh-P.Ben Thanh
                        </option>
                        <option
                          data-streetid="12616"
                          value="Le Anh Xuan-P.Ben Thanh"
                        >
                          Le Anh Xuan-P.Ben Thanh
                        </option>
                        <option
                          data-streetid="12617"
                          value="Le Lai-P.Ben Thanh"
                        >
                          Le Lai-P.Ben Thanh
                        </option>
                        <option
                          data-streetid="12618"
                          value="Le Loi-So Chan-P.Ben Thanh"
                        >
                          Le Loi-So Chan-P.Ben Thanh
                        </option>
                        <option
                          data-streetid="12619"
                          value="Le Loi-So Le-P.Ben Thanh"
                        >
                          Le Loi-So Le-P.Ben Thanh
                        </option>
                        <option
                          data-streetid="12620"
                          value="Le Loi-So Le-P.Ben Thanh"
                        >
                          Le Loi-So Le-P.Ben Thanh
                        </option>
                        <option
                          data-streetid="12621"
                          value="Le Thanh Ton-So Chan-P.Ben Thanh"
                        >
                          Le Thanh Ton-So Chan-P.Ben Thanh
                        </option>
                        <option
                          data-streetid="12622"
                          value="Le Thanh Ton-So Chan-P.Ben Thanh"
                        >
                          Le Thanh Ton-So Chan-P.Ben Thanh
                        </option>
                        <option
                          data-streetid="12623"
                          value="Le Thanh Ton-So Le-P.Ben Thanh"
                        >
                          Le Thanh Ton-So Le-P.Ben Thanh
                        </option>
                        <option
                          data-streetid="12624"
                          value="Le Thanh Ton-So Le-P.Ben Thanh"
                        >
                          Le Thanh Ton-So Le-P.Ben Thanh
                        </option>
                        <option
                          data-streetid="12625"
                          value="Le Thi Rieng-P.Ben Thanh"
                        >
                          Le Thi Rieng-P.Ben Thanh
                        </option>
                        <option
                          data-streetid="12626"
                          value="Luong Huu Khanh-P. Pham Ngu Lao "
                        >
                          Luong Huu Khanh-P. Pham Ngu Lao{" "}
                        </option>
                        <option
                          data-streetid="12627"
                          value="Luong Huu Khanh-P. Pham Ngu Lao "
                        >
                          Luong Huu Khanh-P. Pham Ngu Lao{" "}
                        </option>
                        <option data-streetid="12628" value="Luu Van Lang">
                          Luu Van Lang
                        </option>
                        <option
                          data-streetid="12629"
                          value="Ly Tu Trong-So Chan-P.Ben Thanh"
                        >
                          Ly Tu Trong-So Chan-P.Ben Thanh
                        </option>
                        <option
                          data-streetid="12630"
                          value="Ly Tu Trong-So Le-P.Ben Thanh"
                        >
                          Ly Tu Trong-So Le-P.Ben Thanh
                        </option>
                        <option
                          data-streetid="12631"
                          value="Nam Ky Khoi Nghia - P.Ben Thanh"
                        >
                          Nam Ky Khoi Nghia - P.Ben Thanh
                        </option>
                        <option
                          data-streetid="12632"
                          value="Nam Ky Khoi Nghia - P.Nguyen Thai Binh "
                        >
                          Nam Ky Khoi Nghia - P.Nguyen Thai Binh{" "}
                        </option>
                        <option
                          data-streetid="12633"
                          value="Nam Ky Khoi Nghia -P.Ben Nghe "
                        >
                          Nam Ky Khoi Nghia -P.Ben Nghe{" "}
                        </option>
                        <option
                          data-streetid="12634"
                          value="Nam Quoc Cang-P. Pham Ngu Lao"
                        >
                          Nam Quoc Cang-P. Pham Ngu Lao
                        </option>
                        <option
                          data-streetid="12635"
                          value="Nguyen An Ninh-P.Ben Thanh"
                        >
                          Nguyen An Ninh-P.Ben Thanh
                        </option>
                        <option data-streetid="12636" value="NGUYEN BIEU-P.2">
                          NGUYEN BIEU-P.2
                        </option>
                        <option
                          data-streetid="12637"
                          value="Nguyen Canh Chan-P.Nguyen Cu Trinh"
                        >
                          Nguyen Canh Chan-P.Nguyen Cu Trinh
                        </option>
                        <option
                          data-streetid="12638"
                          value="Nguyen Cu Trinh -P.Pham Ngu Lao"
                        >
                          Nguyen Cu Trinh -P.Pham Ngu Lao
                        </option>
                        <option
                          data-streetid="12639"
                          value="Nguyen Cu Trinh-P. Pham Ngu Lao "
                        >
                          Nguyen Cu Trinh-P. Pham Ngu Lao{" "}
                        </option>
                        <option
                          data-streetid="12640"
                          value="Nguyen Cu Trinh-P.Nguyen Cu Trinh"
                        >
                          Nguyen Cu Trinh-P.Nguyen Cu Trinh
                        </option>
                        <option
                          data-streetid="12641"
                          value="Nguyen Du-So Chan-P.Ben Thanh"
                        >
                          Nguyen Du-So Chan-P.Ben Thanh
                        </option>
                        <option
                          data-streetid="12642"
                          value="Nguyen Du-So Le-P.Ben Thanh"
                        >
                          Nguyen Du-So Le-P.Ben Thanh
                        </option>
                        <option
                          data-streetid="12643"
                          value="Nguyen Du-So Le-P.Ben Thanh"
                        >
                          Nguyen Du-So Le-P.Ben Thanh
                        </option>
                        <option
                          data-streetid="12644"
                          value="Nguyen Thai Hoc-P.Pham Ngu Lao"
                        >
                          Nguyen Thai Hoc-P.Pham Ngu Lao
                        </option>
                        <option
                          data-streetid="12645"
                          value="Nguyen Thai Hoc-P.Pham Ngu Lao"
                        >
                          Nguyen Thai Hoc-P.Pham Ngu Lao
                        </option>
                        <option
                          data-streetid="12646"
                          value="Nguyen Thi Minh Khai-P. Nguyen Cu Trinh"
                        >
                          Nguyen Thi Minh Khai-P. Nguyen Cu Trinh
                        </option>
                        <option
                          data-streetid="12647"
                          value="Nguyen Thi Minh Khai-P.Ben Thanh"
                        >
                          Nguyen Thi Minh Khai-P.Ben Thanh
                        </option>
                        <option
                          data-streetid="12648"
                          value="Nguyen Thi Minh Khai-P.Pham Ngu Lao"
                        >
                          Nguyen Thi Minh Khai-P.Pham Ngu Lao
                        </option>
                        <option
                          data-streetid="12649"
                          value="Nguyen Thi Minh Khai-So Le-P.Ben Thanh"
                        >
                          Nguyen Thi Minh Khai-So Le-P.Ben Thanh
                        </option>
                        <option
                          data-streetid="12650"
                          value="Nguyen Thi Nghia-P.Ben Thanh"
                        >
                          Nguyen Thi Nghia-P.Ben Thanh
                        </option>
                        <option
                          data-streetid="12651"
                          value="Nguyen Trai-P.Ben Thanh"
                        >
                          Nguyen Trai-P.Ben Thanh
                        </option>
                        <option
                          data-streetid="12652"
                          value="Nguyen Trai-P.Nguyen  Cu Trinh "
                        >
                          Nguyen Trai-P.Nguyen Cu Trinh{" "}
                        </option>
                        <option
                          data-streetid="12653"
                          value="Nguyen Trai-P.Pham Ngu Lao"
                        >
                          Nguyen Trai-P.Pham Ngu Lao
                        </option>
                        <option
                          data-streetid="12654"
                          value="Nguyen Trung Truc-P.Ben Thanh"
                        >
                          Nguyen Trung Truc-P.Ben Thanh
                        </option>
                        <option data-streetid="12655" value="Nguyen Van Cu-P.3">
                          Nguyen Van Cu-P.3
                        </option>
                        <option
                          data-streetid="12656"
                          value="Nguyen Van Cu-P.Nguyen Cu Trinh"
                        >
                          Nguyen Van Cu-P.Nguyen Cu Trinh
                        </option>
                        <option
                          data-streetid="12657"
                          value="Nguyen Van Trang -P.Ben Thanh "
                        >
                          Nguyen Van Trang -P.Ben Thanh{" "}
                        </option>
                        <option
                          data-streetid="12658"
                          value="Nguyen Van Trang-P.Pham Ngu Lao"
                        >
                          Nguyen Van Trang-P.Pham Ngu Lao
                        </option>
                        <option
                          data-streetid="12659"
                          value="Norch-102 Bui  Thi Xuan-P.Ben Thanh"
                        >
                          Norch-102 Bui Thi Xuan-P.Ben Thanh
                        </option>
                        <option
                          data-streetid="12660"
                          value="Pham Hong Thai-P.Ben Thanh"
                        >
                          Pham Hong Thai-P.Ben Thanh
                        </option>
                        <option
                          data-streetid="12661"
                          value="Pham Ngu Lao-P.Cau Kho "
                        >
                          Pham Ngu Lao-P.Cau Kho{" "}
                        </option>
                        <option
                          data-streetid="12662"
                          value="Pham Ngu Lao-P.Pham Ngu Lao "
                        >
                          Pham Ngu Lao-P.Pham Ngu Lao{" "}
                        </option>
                        <option
                          data-streetid="12663"
                          value="Pham Viet Chanh-P.Pham Ngu Lao "
                        >
                          Pham Viet Chanh-P.Pham Ngu Lao{" "}
                        </option>
                      </select>
                      <span
                        className="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="1"
                        style={{ width: "100%" }}
                      >
                        <span className="selection">
                          <span
                            className="select2-selection select2-selection--single"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabIndex="0"
                            aria-labelledby="select2-streetaddress-container"
                          >
                            <span
                              className="select2-selection__rendered"
                              id="select2-streetaddress-container"
                              role="textbox"
                              aria-readonly="true"
                              title="
                            "
                            />
                            <span
                              className="select2-selection__arrow"
                              role="presentation"
                            >
                              <b role="presentation" />
                            </span>
                          </span>
                        </span>
                        <span className="dropdown-wrapper" aria-hidden="true" />
                      </span>
                    </div>
                    <div className="col-12 form-group">
                      <label>Information Guide</label>
                      <div className="desc">
                        <p>
                          Please enter the full number of lane, alley / lot,
                          floor (apartment)
                        </p>
                      </div>
                      <input
                        className="form-control"
                        type="text"
                        name="Address_FullAddress"
                      />
                    </div>
                    <div className="col-12 form-button">
                      <a
                        className="btn btn-prev"
                        href="/"
                        onClick={this.getBack}
                      >
                        Go Back
                      </a>
                      <a
                        className="btn-book btn btn-next"
                        href="/"
                        onClick={this.next}
                      >
                        Order
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Step2;
