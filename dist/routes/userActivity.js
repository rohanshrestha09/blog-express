"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const { follow, unfollow, likeBlog, unlikeBlog, postComment, deleteComment, bookmarkBlog, unbookmarkBlog, } = require("../controller/userActivity");
const auth = require("../middleware/auth");
const userValidator = require("../middleware/userValidator");
const blogValidator = require("../middleware/blogValidator");
const router = express_1.default.Router();
router.use([
    "/follow/:_queryUserId",
    "/blog/:_blogId/like",
    "/blog/:_blogId/comment",
    "/blog/:_blogId/bookmark",
], auth);
router.post("/follow/:_queryUserId", userValidator, follow);
router.delete("/follow/:_queryUserId", userValidator, unfollow);
router.post("/blog/:_blogId/like", blogValidator, likeBlog);
router.delete("/blog/:_blogId/like", blogValidator, unlikeBlog);
router.post("/blog/:_blogId/comment", blogValidator, postComment);
router.delete("/blog/:_blogId/comment", blogValidator, deleteComment);
router.post("/blog/:_blogId/bookmark", blogValidator, bookmarkBlog);
router.delete("/blog/:_blogId/bookmark", blogValidator, unbookmarkBlog);
module.exports = router;
