"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const { getAllBlogs, getBlog, postBlog, updateBlog, deleteBlog, publishBlog, unpublishBlog, } = require("../controller/blog");
const auth = require("../middleware/auth");
const blogValidator = require("../middleware/blogValidator");
const router = express_1.default.Router();
router.get("/blog", getAllBlogs);
router.use(["/blog/:_blogId", "/blog/:_blogId/publish"], auth, blogValidator);
router.post("/blog", auth, postBlog);
router.get("/blog/:_blogId", getBlog);
router.put("/blog/:_blogId", updateBlog);
router.delete("/blog/:_blogId", deleteBlog);
router.post("/blog/:_blogId/publish", publishBlog);
router.delete("/blog/:_blogId/publish", unpublishBlog);
module.exports = router;
