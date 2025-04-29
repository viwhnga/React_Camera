import React, { useEffect, useState } from 'react';

const Method = () => {
  const [costumes, setCostumes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://6809104e1f1a52874cdbc8bb.mockapi.io/apiCamera/Products')
      .then((res) => res.json())
      .then((data) => {
        setCostumes(data);
        setLoading(false);
      });
  }, []);

  // 💡 Filter các sản phẩm theo category
  const filterItems = (category) => {
    if (!category) {
      return costumes; // If no category is specified, return all items
    }
    return costumes.filter(item => item.category === category);
  };

  if (loading) return <p className="text-center mt-3">Đang tải dữ liệu...</p>;

  // Component để hiển thị các sản phẩm
  const ProductList = ({ category }) => {
    const items = filterItems(category);
    return (
      <div className="row">
        {items.map((item, index) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
            <div className="card h-100 shadow-sm">
              <div className="d-flex align-items-center p-2 gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="img-fluid rounded"
                  style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                />
                <div>
                  <h6 className="mb-1">{item.name}</h6>
                  <p className="mb-0 text-muted">Loại: {item.category}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container my-4">
      {/* Hiển thị sản phẩm loại "Áo" */}
      <h6 className="mb-4">Sản phẩm loại "Lolita & Fashion Cosplay":</h6>
      <ProductList category="Lolita & Fashion Cosplay" />

      {/* Hiển thị tất cả sản phẩm (Bộ Sưu Tập) */}
      <h6 className="mt-5 mb-4">Tất cả sản phẩm:</h6>
      <ProductList /> {/* No category filter, so it displays all products */}
    </div>
  );
};

export default Method;
