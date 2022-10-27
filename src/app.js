import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import ejs from 'ejs'
import expressFileUpload from 'express-fileupload'
import routes from './routes/routes.js';
import { errorHandlerMiddleware } from './middleware/errorHandler.middleware.js';
dotenv.config()

const app = express();

app.use(express.json())
app.use(expressFileUpload())

app.set('view engine', 'ejs')
app.set('views', path.join(process.cwd(), 'src', 'view'))
app.use('/assets', express.static(path.join(process.cwd(), 'src', 'assets')))

const PORT = process.env.PORT || 9090;

app.use(routes)

app.use(errorHandlerMiddleware)

app.listen(PORT, console.log(PORT))
