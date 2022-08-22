"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const asyncHandler = require("express-async-handler");
const User = require("../model/User");
const Blog = require("../model/Blog");
module.exports = asyncHandler((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { _queryUserId } = req.params;
    try {
        const queryUser = yield User.findById(new mongoose_1.default.Types.ObjectId(_queryUserId)).select("-password");
        if (!queryUser)
            return res.status(404).json({ message: "User does not exist" });
        res.locals.queryUser = Object.assign(Object.assign({}, queryUser._doc), { blogs: yield Blog.find({ author: _queryUserId }) });
        next();
    }
    catch (err) {
        return res.status(404).json({ message: err.message });
    }
}));
