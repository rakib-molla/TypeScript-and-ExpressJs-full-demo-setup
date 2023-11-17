
import { error } from 'console';
import express, { NextFunction, Request, Response } from 'express'

const app = express()
const port = 3000

// parser 
app.use(express.json());
app.use(express.text());

// 
const logger = (req: Request, res: Response, next: NextFunction) => {
 console.log(req.url, req.method, req.hostname, req.ips);
 next();
}

const userRouter = express.Router();
const courseRouter = express.Router();

app.use('/api/v1/users', userRouter);
app.use('/api/v1/courses', courseRouter);

userRouter.get('/create-user', async (req: Request, res: Response) => {
 try {
  const user = req.body
  console.log(user);
  res.json({
   success: true,
   message: "User is Created Successfully",
   data: user,
  })
 } catch (error) {
  console.log(error);
 }

})

courseRouter.post('/create-course', async (req: Request, res: Response, next: NextFunction) => {
 try {
  const course = req.body;
  console.log(course);
  res.json({
   success: true,
   message: 'Course Create Successfully ',
   data: course,
  })
 } catch (error) {
  next(error)
  
 }

})


// app.get('/', logger, (req: Request, res: Response) => {
//   res.json('server is running')
// })


app.post('/', logger, (req: Request, res: Response) => {
 console.log(req.body);
 res.json({
  message: "Successfully Received Your Data"
 })
})

app.get('/', logger, (req: Request, res: Response) => {
 console.log(req.query);
 res.send('get id')
})

// custom error message
app.all('*',(req: Request, res: Response)=>{
 res.status(400).json({
  success: false,
  message: "Route is not found"
 })
})

// global error handling
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
 // console.log(error);
 if(error){
  res.status(400).json({
   success: false,
   message: "something wen't wrong"
  })
 }
})

export default app;