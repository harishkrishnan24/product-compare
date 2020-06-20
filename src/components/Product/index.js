import React from "react";

import "./style.css";

import Image from "../Image";
import ProductSelector from "../ProductSelector";

const Product = ({ product, newProduct, clickHandler }) => {
	const formatCurrency = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "INR",
	});

	return (
		<div className='product'>
			<div className='product-header'>
				<div className='image-container'>
					<Image
						noImage={newProduct}
						clickHandler={clickHandler}
						imageUrl={product.image}
						altName={product.title}
					/>
				</div>
				{newProduct ? (
					<div className='mt-4'>
						<ProductSelector />
					</div>
				) : (
					<div>
						<p className='product-title'>{product.title}</p>
						<p className='product-price'>
							<span className='font-weight-bold pr-2'>
								{formatCurrency.format(product.finalPrice)}
							</span>
							<span className='text-muted pr-2 old-price'>
								{formatCurrency.format(product.price)}
							</span>
							<span className='text-success'>{product.totalDiscount}% off</span>
						</p>
					</div>
				)}
			</div>
		</div>
	);
};

Product.defaultProps = {
	product: {
		image: "",
		title: "",
		finalPrice: "",
		price: "",
		totalDiscount: "",
	},
	newProduct: false,
	clickHandler: () => {},
};

export default Product;
