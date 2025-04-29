import React, { Component } from "react";

class ThoiTrangNam extends Component {
    constructor(props) {
        super(props);
        this.list = this.props.products;
        this.state = {
            id: this.list.length > 0 ? parseInt(this.list[this.list.length - 1].id) + 1 : 1,
            name: "",
            name_category: "Thời trang nam",
            code: "",
            image: "",
            price: "",
            old_price: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
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
        // Here you would typically call a function to add the new product
        // For example: this.props.onAddProduct(newProduct);
        console.log("New product:", newProduct);
        
        // Reset form and increment ID
        this.setState({
            id: this.state.id + 1,
            name: "",
            name_category: "Thời trang nam",
            code: "",
            image: "",
            price: "",
            old_price: ""
        });
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
                            placeholder="Product name"
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
                            <option value="Thời trang nam">Thời trang nam</option>
                            <option value="Thời trang nữ">Thời trang nữ</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="code">Code</label>
                        <input
                            className="form-control"
                            id="code"
                            name="code"
                            placeholder="XXXXXXXX"
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
                            onChange={this.handleChange}
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