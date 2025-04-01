async getProducts(req, res) {
    try {
        const products = await Product.find().populate('createdBy', 'username');
        // Add full URL to image paths
        const productsWithFullUrls = products.map(product => {
            const doc = product.toObject();
            if (!doc.image.startsWith('http')) {
                doc.image = `${req.protocol}://${req.get('host')}${doc.image}`;
            }
            return doc;
        });
        res.status(200).json({ success: true, data: productsWithFullUrls });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
} 