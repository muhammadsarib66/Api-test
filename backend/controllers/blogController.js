const Blog = require('../models/blogModel');


exports.CreateBlog = async (req, res) => {
    try {
        console.log(req.body);
        const data = await Blog.create(req.body);

        res.status(201).json({ success: true, message: "data created successfully" });

    } catch (err) {
        res.status(400).json({ success: false, message: "data not created" });
    }
}

exports.getBlogInfo = async (req, res) => {
    try {
        const allBlogs = await Blog.find();
        res.status(200).json({ success: true, allBlogs })

    } catch (err) {
        res.status(500).json({ success: false });

    }
}

exports.getSingleBlogInfo = async (req, res) => {
    try {
        const { id } = req.params;
        const singleBlog = await Blog.findById(id);
        res.status(200).json({ success: true, singleBlog })
    } catch (err) {
        res.status(500).json({ success: false });
    }
}

exports.getBlogbyCat = async (req, res) => {
    try {
        const { cat } = req.params;
        const getblogbycat = await Blog.find({ categories: cat });

        res.status(200).json({ success: true, getblogbycat })
    } catch (err) {
        res.status(500).json({ success: false });
    }
}


exports.DeleteSingleBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Blog.deleteOne({ _id: id });
        res.status(200).json({ success: true, result })
    } catch (err) {
        res.status(500).json({ "error": err })
        console.log(err, 'arha hai error')
    }
}

exports.DeletecatBlog = async (req, res) => {
    try {
        const { cat } = req.params;
        const result = await Blog.deleteMany({ categories: cat });
        res.status(200).json({ success: true, result })
    } catch (err) {
        res.status(500).json({ "error": err })
        console.log(err, 'arha hai error')
    }
}