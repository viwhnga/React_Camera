import React, { Component } from "react";
import data from "./DataClothes.js"; // Import file dữ liệu mẫu

class ThoiTrangNam extends Component {
    constructor(props) {
        super(props);

        // Kiểm tra LocalStorage, nếu không có thì lấy dữ liệu mẫu
        let storedProducts = localStorage.getItem('products');
        if (!storedProducts) {
            const sampleProducts = data('products'); // Lấy dữ liệu mẫu
            localStorage.setItem('products', JSON.stringify(sampleProducts));
            storedProducts = JSON.stringify(sampleProducts); // Gán lại để dùng luôn
        }

        const products = JSON.parse(storedProducts);

        this.state = {
            id: products.length > 0 ? parseInt(products[products.length - 1].id) + 1 : 1,
            name: "",
            name_category: "Thời trang nam",
            code: "",
            image: "",
            price: "",
            old_price: "",
            products: products
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleImageChange(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                this.setState({
                    image: reader.result
                });
            };
            reader.readAsDataURL(file); // Chuyển file ảnh thành Base64
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        const newProduct = {
            id: this.state.id,
            name: this.state.name,
            name_category: this.state.name_category,
            code: this.state.code,
            image: this.state.image,
            price: this.state.price,
            old_price: this.state.old_price
        };

        const updatedProducts = [...this.state.products, newProduct];

        localStorage.setItem('products', JSON.stringify(updatedProducts));

        this.setState({
            id: this.state.id + 1,
            name: "",
            name_category: "Thời trang nam",
            code: "",
            image: "",
            price: "",
            old_price: "",
            products: updatedProducts
        });

        alert('Sản phẩm đã được thêm thành công!');
    }

    render() {
        return (
            <div className="col-sm-4">
                <div id="form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Dép"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name_category">Category</label>
                        <select
                            className="form-control"
                            id="name_category"
                            name="name_category"
                            value={this.state.name_category}
                            onChange={this.handleChange}
                        >
                            <option value="Thời trang nam">Nam</option>
                            <option value="Thời trang nữ">Nữ</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="code">Code</label>
                        <input
                            className="form-control"
                            id="code"
                            name="code"
                            placeholder="XXXXXXX"
                            value={this.state.code}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image" id="avatar-label">
                            Image
                        </label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            className="form-control"
                            onChange={this.handleImageChange} // Đổi hàm riêng cho image
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input
                            className="form-control"
                            id="price"
                            name="price"
                            placeholder="10000"
                            value={this.state.price}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="old_price">Old price</label>
                        <input
                            className="form-control"
                            id="old_price"
                            name="old_price"
                            placeholder="1500"
                            value={this.state.old_price}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary mb-2"
                        id="submit"
                        onClick={this.handleSubmit}
                    >
                        Save
                    </button>
                </div>
            </div>
        );
    }
}

export default ThoiTrangNam;
