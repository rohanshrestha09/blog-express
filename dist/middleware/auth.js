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
const jsonwebtoken_1 = require("jsonwebtoken");
const cookie_1 = require("cookie");
const User_1 = __importDefault(require("../model/User"));
const asyncHandler = require('express-async-handler');
/*declare global {
  namespace Express {
    interface Request {
      shouldSkip: boolean;
    }
  }
}*/
exports.default = asyncHandler((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { headers: { cookie }, } = req;
    if (cookie) {
        const values = cookie.split(';').reduce((res, item) => {
            const [name, value] = item.trim().split('=');
            return Object.assign(Object.assign({}, res), { [name]: value });
        }, {});
        res.locals.cookie = values;
    }
    else
        res.locals.cookie = {};
    const { token } = res.locals.cookie;
    if (!token)
        return res.status(401).json({ message: 'Not authorised' });
    try {
        const { _id } = (0, jsonwebtoken_1.verify)(token, process.env.JWT_TOKEN);
        const auth = yield User_1.default.findById(_id).select('-password');
        if (!auth) {
            const serialized = (0, cookie_1.serialize)('token', '', {
                maxAge: 0,
                path: '/',
            });
            res.setHeader('Set-Cookie', serialized);
            return res.status(404).json({ message: 'User does not exist' });
        }
        res.locals.auth = auth;
        next();
    }
    catch (err) {
        return res.status(404).json({ message: err.message });
    }
}));
