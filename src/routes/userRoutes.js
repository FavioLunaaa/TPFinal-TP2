"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("../controllers/userController"));
const extractJWT_1 = __importDefault(require("../middlewares/extractJWT"));
class UserRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        //CREAR USUARIO
        this.router.post('/user', userController_1.default.createUser);
        //LOGIN
        this.router.post('/user/login', userController_1.default.login);
        //LOGOUT
        this.router.post('/user/logout/:id', extractJWT_1.default, userController_1.default.logout);
        //GET ALL USERS
        this.router.get('/users', userController_1.default.getAllUsers);
        //PUT USER NAME
        this.router.put('/user/settings/:id', extractJWT_1.default, userController_1.default.changeName);
        //GET USUARIO
        this.router.get('/user/:id', extractJWT_1.default, userController_1.default.getUser);
        //DELETE USUARIO
        this.router.delete('/user/me/:id', extractJWT_1.default, userController_1.default.deleteUser);
    }
}
const userRoutes = new UserRoutes();
exports.default = userRoutes.router;
