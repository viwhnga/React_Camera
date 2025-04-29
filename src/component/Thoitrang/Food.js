import React, { useState } from 'react';
import './food.css'; // Import your CSS file here
const Food = () => {
  const [menu] = useState([
    { id: 1, name: 'Trà sữa khoai môn', price: 40000 },
    { id: 2, name: 'Trà sữa trân châu đường đen ', price: 20000 },
    { id: 3, name: 'Trà sữa thái xanh', price: 50000 },
    { id: 4, name: 'Trà sữa chocolate', price: 35000 },
  ]);

  const [selectedItems, setSelectedItems] = useState([]);
  const [money, setMoney] = useState('');
  const [total, setTotal] = useState(0);
  const [remaining, setRemaining] = useState(0);

  const handleSelectItem = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(itemId => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const handleOrder = () => {
    const selectedFoods = menu.filter(item => selectedItems.includes(item.id));
    const totalPrice = selectedFoods.reduce((sum, item) => sum + item.price, 0);
    setTotal(totalPrice);
    setRemaining(money - totalPrice);
  };

  return (
    <div className="food-order-app">
      <h2>Menu</h2>
      {menu.map(item => (
        <div className="menu-item" key={item.id}>
          <label className="menu-label">
            <input
              type="checkbox"
              checked={selectedItems.includes(item.id)}
              onChange={() => handleSelectItem(item.id)}
              className="menu-checkbox"
            />
            {item.name} - {item.price.toLocaleString()}đ
          </label>
        </div>
      ))}

      <div className="order-section">
        <input
          type="number"
          placeholder="Nhập số tiền hiện có"
          value={money}
          onChange={(e) => setMoney(Number(e.target.value))}
          className="money-input"
        />
        <button onClick={handleOrder} className="order-button">
          Đặt hàng
        </button>
      </div>

      <div className="result">
        <h3>Kết quả:</h3>
        <p><strong>Tổng tiền món đã chọn:</strong> {total.toLocaleString()}đ</p>
        <p><strong>Tiền dư còn lại:</strong> {remaining.toLocaleString()}đ</p>
      </div>
    </div>
  );
};

export default Food;
