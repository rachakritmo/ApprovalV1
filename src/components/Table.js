import React from 'react';
import styles from './Table.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
// @fortawesome/fontawesome-free, @fortawesome/free-solid-svg-icons, and @fortawesome/free-regular-svg-icons
import { initializeIcons } from "@fluentui/react";
import {makeStyles} from "@fluentui/react-components";
import { Link } from 'react-router-dom';
import "./Table.css";

initializeIcons();
const useStyles = makeStyles({
    root: {
      margin: "10px",
      display: "inline-block", 
     "@media (max-width: 1000px)": {
      display: "flex",
      flexDirection: "column",
      marginBottom: "20px",
    },
    },
    status: {
      display: "flex",
      marginTop: "-25px",
      alignItems: "center",
      justifyContent: "flex-end",
     "@media (max-width: 600px)": {
      display: "block",
      flexDirection: "column",
      marginTop: "25px",
    }
    },
    orderProcess: {
      fontSize: "70%",
    },
    statusText: {
      display: "inline-block", 
      "@media (max-width: 600px)": {
        marginRight: "5px"
      }
    }
  });

function Table() {
    const dec = useStyles();
    return (
        <>
       
          {/* table */}
          <table className={styles.table}>
            <><thead>
            <tr>
                <th scope="col">รายการบันทึก</th>
                <th scope="col">สร้างโดย</th>
                <th scope="col">สถานะ</th>
                <th scope="col">ช่วงเวลา</th>
            </tr>
        </thead><tbody>
                <tr className={styles.tr}>
                
                    <td><Link to = {"/ApprovalDetail"} style={{textDecoration:"none",color: "inherit"}}>
                        <div style={{ fontWeight: "bold", paddingBottom: 10 }}>
                            ทดสอบขออนุมัติการซื้อ 1
                        </div>
                        <div style={{ fontSize: "90%" }}>DEFAULT-PR-202404-0001</div>
                        </Link>
                    </td> 
                    <td>
                        <div style={{ fontWeight: "bold", paddingBottom: 10 }}>
                            Lorem Ipsum
                        </div>
                        <div style={{ fontSize: "90%" }}>แผนก : ไอที</div>
                    </td>
                    <td>
                        <div className="statusPending">
                            <FontAwesomeIcon icon={faClock} className="iconPending" />
                            <div className={dec.statusText}>รอดำเนินการ</div>
                            <div style={{ fontSize: "70%" }}>ลำดับอนุมัติ 1/2</div>
                        </div>
                    </td>
                    <td data-label="ช่วงเวลา" style={{ fontWeight: "bold" }}>
                        12/04/2024
                    </td>
                </tr>
                {/* 2 */}
                <tr>
                    <td>
                        <div style={{ fontWeight: "bold", paddingBottom: 10 }}>
                            ทดสอบขออนุมัติการซื้อ 1
                        </div>
                        <div style={{ fontSize: "90%" }}>DEFAULT-PR-202404-0001</div>
                    </td>
                    <td>
                        <div style={{ fontWeight: "bold", paddingBottom: 10 }}>
                            Lorem Ipsum
                        </div>
                        <div style={{ fontSize: "90%" }}>แผนก : ไอที</div>
                    </td>
                    <td>
                        <div className="statusPending">
                            <FontAwesomeIcon icon={faClock} className="iconPending" />
                            <div className={dec.statusText}>รอดำเนินการ</div>
                            <div style={{ fontSize: "70%" }}>ลำดับอนุมัติ 1/2</div>
                        </div>
                    </td>
                    <td data-label="ช่วงเวลา" style={{ fontWeight: "bold" }}>
                        12/04/2024
                    </td>
                </tr>
                {/* 3 */}
                <tr>
                    <td>
                        <div style={{ fontWeight: "bold", paddingBottom: 10 }}>
                            ทดสอบขออนุมัติการซื้อ 1
                        </div>
                        <div style={{ fontSize: "90%" }}>DEFAULT-PR-202404-0001</div>
                    </td>
                    <td>
                        <div style={{ fontWeight: "bold", paddingBottom: 10 }}>
                            Lorem Ipsum
                        </div>
                        <div style={{ fontSize: "90%" }}>แผนก : ไอที</div>
                    </td>
                    <td>
                        <div className="statusPending">
                            <FontAwesomeIcon icon={faClock} className="iconPending" />
                            <div className={dec.statusText}>รอดำเนินการ</div>
                            <div style={{ fontSize: "70%" }}>ลำดับอนุมัติ 1/2</div>
                        </div>
                    </td>
                    <td data-label="ช่วงเวลา" style={{ fontWeight: "bold" }}>
                        12/04/2024
                    </td>
                </tr>
            </tbody></>
          </table>
         
       </>
    );
  }
  
  export default Table;
  