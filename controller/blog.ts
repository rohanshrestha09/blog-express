import { Request, Response } from "express";
import {
  uploadBytes,
  ref,
  getDownloadURL,
  getStorage,
  deleteObject,
} from "firebase/storage";
const asyncHandler = require("express-async-handler");
const Blog = require("../model/Blog");

const storage = getStorage();

module.exports.getAllBlogs = asyncHandler(
  async (req: Request, res: Response): Promise<Response> => {
    const { sort, pageSize } = req.query;

    try {
      switch (sort) {
        case "likes":
          return res.status(200).json({
            blogs: await Blog.find({})
              .sort({ likes: -1 })
              .limit(pageSize || 10),
            message: "Blogs Fetched Successfully",
          });

        case "views":
          return res.status(200).json({
            blogs: await Blog.find({})
              .sort({ views: -1 })
              .limit(pageSize || 10),
            message: "Blogs Fetched Successfully",
          });

        case "latest":
          return res.status(200).json({
            blogs: await Blog.find({})
              .sort({ createdAt: -1 })
              .limit(pageSize || 10),
            message: "Blogs Fetched Successfully",
          });

        default:
          return res.status(200).json({
            blogs: await Blog.find({}).limit(pageSize || 10),
            message: "Blogs Fetched Successfully",
          });
      }
    } catch (err: any) {
      return res.status(404).json({ message: err.message });
    }
  }
);

module.exports.getBlog = asyncHandler(
  async (req: Request, res: Response): Promise<Response> => {
    const blog = res.locals.blog;

    try {
      return res
        .status(200)
        .json({ blog, message: "Blog Fetched Successfully" });
    } catch (err: any) {
      return res.status(404).json({ message: err.message });
    }
  }
);

module.exports.postBlog = asyncHandler(
  async (req: Request, res: Response): Promise<Response> => {
    const { _id: _authorId } = res.locals.user;

    const { title, content } = req.body;

    try {
      if (!title)
        return res.status(403).json({ message: "Title field missing" });

      if (!req.files)
        return res.status(403).json({ message: "Image required" });

      const { _id: _blogId } = await Blog.create({
        author: _authorId,
        title,
        content,
      });

      const file = req.files.image as any;

      if (!file.mimetype.startsWith("image/"))
        return res.status(403).json({ message: "Please choose an image" });

      const filename = file.mimetype.replace("image/", `${_blogId}.`);

      const storageRef = ref(storage, `blogs/${filename}`);

      const metadata = {
        contentType: file.mimetype,
      };

      await uploadBytes(storageRef, file.data, metadata);

      const url = await getDownloadURL(storageRef);

      await Blog.findByIdAndUpdate(_blogId, {
        image: url,
        imageName: filename,
      });

      return res.status(200).json({ message: "Blog Posted Successfully" });
    } catch (err: any) {
      return res.status(404).json({ message: err.message });
    }
  }
);

module.exports.updateBlog = asyncHandler(
  async (req: Request, res: Response): Promise<Response> => {
    const { title, content } = req.body;

    const { _id: _blogId, image, imageName } = res.locals.blog;

    try {
      if (!title)
        return res.status(403).json({ message: "Title field missing" });

      if (!req.files)
        return res.status(403).json({ message: "Image required" });

      const file = req.files.image as any;

      if (!file.mimetype.startsWith("image/"))
        return res.status(403).json({ message: "Please choose an image" });

      if (image) deleteObject(ref(storage, `blogs/${imageName}`));

      const filename = file.mimetype.replace("image/", `${_blogId}.`);

      const storageRef = ref(storage, `blogs/${filename}`);

      const metadata = {
        contentType: file.mimetype,
      };

      await uploadBytes(storageRef, file.data, metadata);

      const url = await getDownloadURL(storageRef);

      await Blog.findByIdAndUpdate(_blogId, {
        image: url,
        imageName: filename,
        title,
        content,
      });

      return res.status(200).json({ message: "Blog Updated Successfully" });
    } catch (err: any) {
      return res.status(404).json({ message: err.message });
    }
  }
);

module.exports.deleteBlog = asyncHandler(
  async (req: Request, res: Response): Promise<Response> => {
    const { _id: _blogId, image, imageName } = res.locals.blog;

    try {
      if (image) deleteObject(ref(storage, `blogs/${imageName}`));

      await Blog.findByIdAndDelete(_blogId);

      return res.status(200).json({ message: "Blog Deleted Successfully" });
    } catch (err: any) {
      return res.status(404).json({ message: err.message });
    }
  }
);

module.exports.publishBlog = asyncHandler(
  async (req: Request, res: Response): Promise<Response> => {
    const { _id: _blogId } = res.locals.blog;

    try {
      await Blog.findByIdAndUpdate(_blogId, { isPublished: true });

      return res.status(200).json({ message: "Blog Published Successfully" });
    } catch (err: any) {
      return res.status(404).json({ message: err.message });
    }
  }
);

module.exports.unpublishBlog = asyncHandler(
  async (req: Request, res: Response): Promise<Response> => {
    const { _id: _blogId } = res.locals.blog;

    try {
      await Blog.findByIdAndUpdate(_blogId, { isPublished: false });

      return res.status(200).json({ message: "Blog Unpubished Successfully" });
    } catch (err: any) {
      return res.status(404).json({ message: err.message });
    }
  }
);