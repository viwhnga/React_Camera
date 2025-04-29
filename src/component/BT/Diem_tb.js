import React, { useState } from 'react';

export default function Diem_tb() {
  const [toan, setToan] = useState();
  const [ly, setLy] = useState();
  const [diemTB, setDiemTB] = useState();

  const calculateAverage = () => {
    const tb = (toan + ly) / 2;
    setDiemTB(tb);
  };
  const getXepLoai = () => {
    if (diemTB >= 8) {
      return "Giỏi";
    } else if (diemTB >= 6.5) {
      return "Khá";
    } else if (diemTB >= 5) {
      return "Trung bình";
    } else {
      return "Yếu";
    }
  };  
  return (
    <div style={{ padding: '20px' }}>
      <h2>Tính Điểm Trung Bình Môn</h2>
      <div>
        <label>Điểm Toán: </label>
        <input
          type="number" value={toan} onChange={(e) => setToan(Number(e.target.value))} />
      </div>
      <div>
        <label>Điểm Lý: </label> <input type="number" value={ly} onChange={(e) => setLy(Number(e.target.value))} />
      </div>
      <button onClick={calculateAverage}>Tính điểm trung bình</button>
      <h3>Điểm trung bình: {diemTB}</h3>
      <h3>Xếp loại: {diemTB > 0 ? getXepLoai() : ""}</h3>
    </div>
  );
}
