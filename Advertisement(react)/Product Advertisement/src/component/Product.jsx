const Product = () => {
    return <main className="product container">
        <div className="product-content">
            <h1>All the Best for your feet</h1>
            <p>Here we in Zulfikran Inc, offer a wide variety of shoes to make your
                feet more comfortable. Wether in working environment or even in the comfortable
                of your house, we strive to deliver the best of our product.
            </p>
            <div className="product-btn">
                <button>Shop Now</button>
                <button>Other Product</button>
            </div>
        </div>
        <div className="product-image">
            <img src="/images/hero-image.png" alt="" />
        </div>
    </main>;
};

export default Product;