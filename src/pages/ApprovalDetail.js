import "./ApprovalDetail.css";
import React, { useState } from "react";
import { Select } from "@fluentui/react-components";
import Sidebar from "../components/Sidebar";
import ModalApprove from "../components/ModalApprove";
import ModalApproveSuccess from "../components/ModalApproveSuccess"
import ModalEdit from "../components/ModalEdit";
import ModalEditSuccess from "../components/ModalEditSuccess"
import ModalReject from "../components/ModalReject";
import ModalRejectSuccess from "../components/ModalRejectSuccess"
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import { Link } from 'react-router-dom';
// Icon
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoReloadCircleOutline } from "react-icons/io5";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { GoDownload } from "react-icons/go";

function ApprovalDetail() {
  const [showModalOne, setShowModalOne] = useState(false);
  const [showModalTwo, setShowModalTwo] = useState(false);
  const [showModalEditOne, setShowEditOne] = useState(false);
  const [showModalEditTwo, setShowEditTwo] = useState(false);
  const [showModalRejectOne, setShowRejectOne] = useState(false);
  const [showModalRejectTwo, setShowRejectTwo] = useState(false);

  const handleOpenModalApprove = () => {
    setShowModalOne(true);
  };

  const handleCloseModalApprove = () => {
    setShowModalOne(false);
  };

  const handleOpenModalApproveSuccess = () => {
    setShowModalTwo(true);
    handleCloseModalApprove(); // ปิด ModalOne เมื่อเปิด ModalTwo
  };

  const handleCloseModalApproveSuccess = () => {
    setShowModalTwo(false);
  };

  //Modal Edit
  const handleOpenModalEdit = () => {
    setShowEditOne(true);
  };

  const handleCloseModalEdit = () => {
    setShowEditOne(false);
  };

  const handleOpenModalEditSuccess = () => {
    setShowEditTwo(true);
    handleCloseModalEdit(); // ปิด ModalOne เมื่อเปิด ModalTwo
  };

  const handleCloseModalEditSuccess = () => {
    setShowEditTwo(false);
  };

  //Model Reject
  const handleOpenModalReject = () => {
    setShowRejectOne(true);
  };

  const handleCloseModalReject = () => {
    setShowRejectOne(false);
  };

  const handleOpenModalRejectSuccess = () => {
    setShowRejectTwo(true);
    handleCloseModalReject(); // ปิด ModalOne เมื่อเปิด ModalTwo
  };

  const handleCloseModalRejectSuccess = () => {
    setShowRejectTwo(false);
  };
  //
  return (
    <FluentProvider theme={webLightTheme}>
      <div className="container">
        {/* back Page arrow left */}
        <Link Link to = {"/"} style={{color: "#242424"}}>
        <button className="backPage">
          <svg
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            style={{ verticalAlign: "-0.40rem" }}
          >
            <path
              d="M12.727 3.687a1 1 0 1 0-1.454-1.374l-8.5 9a1 1 0 0 0 0 1.374l8.5 9.001a1 1 0 1 0 1.454-1.373L4.875 12l7.852-8.313Z"
              fill="#212121"
            />
          </svg>
          กลับสู่หน้าหลัก
        </button>
        </Link>
        {/* back Page arrow left */}
        <div className="row">
          <div className="columnApprove">
            <div className="status-buttons">

              {/* ปุ่มไม่อนุมัติ */}

              <button className="status-button not-approved" onClick={handleOpenModalReject}>
                <IoIosCloseCircleOutline className="icon-move" />
                ไม่อนุมัติ
              </button>
              {showModalRejectOne && ( // แสดง ModalOne เมื่อ showModalOne เป็น true
                <ModalReject onClose={handleCloseModalReject}
                  onConfirm={handleOpenModalRejectSuccess}
                />
              )}
              {showModalRejectTwo && ( // แสดง ModalTwo เมื่อ showModalTwo เป็น true
                <ModalRejectSuccess onClose={handleCloseModalRejectSuccess}/>
              )}

              {/* ปุ่มแก้ไข */}

              <button className="status-button pending" onClick={handleOpenModalEdit}>
                <IoReloadCircleOutline className="icon-move" />
                แก้ไข
              </button>
              {showModalEditOne && ( // แสดง ModalOne เมื่อ showModalOne เป็น true
                <ModalEdit onClose={handleCloseModalEdit}
                  onConfirm={handleOpenModalEditSuccess}
                />
              )}
              {showModalEditTwo && ( // แสดง ModalTwo เมื่อ showModalTwo เป็น true
                <ModalEditSuccess onClose={handleCloseModalEditSuccess}/>
              )}


              {/* ปุ่มอนุมัติ */}

              <button className="status-button approved" onClick={handleOpenModalApprove}>
                {/* <button className="status-button approved" onClick={() => setModalOpen(true)}> */}
                <IoCheckmarkCircleOutline className="icon-move" />
                อนุมัติ
              </button>
              {/* {isModalOpen && <Modal onConfirm={handleConfirm} onCancel={handleCancel} />} */}
              {showModalOne && ( // แสดง ModalOne เมื่อ showModalOne เป็น true
                <ModalApprove onClose={handleCloseModalApprove}
                  onConfirm={handleOpenModalApproveSuccess}
                />
              )}
              {showModalTwo && ( // แสดง ModalTwo เมื่อ showModalTwo เป็น true
                <ModalApproveSuccess onClose={handleCloseModalApproveSuccess}/>
              )}


            </div>
            <div className="order">
              <div className="orderAprrove">ลำดับการอนุมัติ 1 / 2</div>
            </div>

            <div className="select-page">
              <button className="back-page-doc">
                <IoIosArrowBack style={{ marginRight: "10" }} />
              </button>
              <div className="move-text-back">หน้า</div>
              <Select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </Select>
              <div className="move-text-forward">จาก 1</div>
              <button className="forward-page-doc">
                <IoIosArrowForward style={{ marginLeft: "10" }} />
              </button>
              <button className="download">
                <GoDownload style={{ marginRight: "10" }} />
                ดาวน์โหลด
              </button>
            </div>
            <div className="boxDoc">แสดงไฟล์เอกสาร</div>
          </div>
          <div className="columnDetail">
            <Sidebar />
          </div>
        </div>
      </div>
    </FluentProvider>
  );
}

export default ApprovalDetail;
