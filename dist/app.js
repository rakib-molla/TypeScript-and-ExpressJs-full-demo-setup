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
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
// parser 
app.use(express_1.default.json());
app.use(express_1.default.text());
// 
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname, req.ips);
    next();
};
const userRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
app.use('/api/v1/users', userRouter);
app.use('/api/v1/courses', courseRouter);
userRouter.get('/create-user', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        console.log(user);
        res.json({
            success: true,
            message: "User is Created Successfully",
            data: user,
        });
    }
    catch (error) {
        console.log(error);
    }
}));
courseRouter.post('/create-course', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const course = req.body;
        console.log(course);
        res.json({
            success: true,
            message: 'Course Create Successfully ',
            data: course,
        });
    }
    catch (error) {
        next(error);
    }
}));
// app.get('/', logger, (req: Request, res: Response) => {
//   res.json('server is running')
// })
app.post('/', logger, (req, res) => {
    console.log(req.body);
    res.json({
        message: "Successfully Received Your Data"
    });
});
app.get('/', logger, (req, res) => {
    console.log(req.query);
    res.send('get id');
});
// custom error message
app.all('*', (req, res) => {
    res.status(400).json({
        success: false,
        message: "Route is not found"
    });
});
// global error handling
app.use((error, req, res, next) => {
    // console.log(error);
    if (error) {
        res.status(400).json({
            success: false,
            message: "something wen't wrong"
        });
    }
});
exports.default = app;
