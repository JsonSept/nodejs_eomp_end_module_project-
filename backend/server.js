import express from 'express'
import {config} from 'dotenv'
import cors from 'cors'
import productsRouter from './routes/products.js'
import usersRouter from './routes/users.js'
import bcrypt from 'bcrypt'
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken'
config();

const PORT = process.env.PORT
const app = express();

app.use(cors({
    origin: 'http://localhost:8080',
    credentials:true
}))
app.use(express.json())
app.use(express.static('../frontend/src/views/ProductView.vue'))
app.use(express.static('../frontend/src/views/ItemView.vue'))
app.use(cookieParser())



const authenticate = (req,res,next) =>{
    let {cookie} = req.headers
    let tokenInHeader = cookie && cookie.split('=')[1]
    if(tokenInHeader===null) res.sendStatus(401)
    jwt.verify(tokenInHeader,process.env.SECRET_KEY,(err,user)=>{
if(err) return res.sendStatus(403)
req.user = user
next()
})
}

app.use('/users',authenticate,usersRouter)
app.use('/products',authenticate,productsRouter)


app.post('/users',(req,res)=>{
    const {emailAdd,userPass} = req.body
    bcrypt.hash(userPass,10, async (err,hash)=>{
        if(err) throw err
        await addUser(emailAdd,hash)
    })
    res.send({
       msg: "You have registered successfully"
    })
})


const auth = async (req,res,next) => {  //middleware (req,res,next())
    const {password,username} = req.body
    const hashedPassword = await checkUser(username )
    bcrypt.compare(password,hashedPassword, (err,result)=>{
        if(err) throw err
        if(result === true){
            const {username} = req.body
        const token = jwt.sign({username:username},
        process.env.SECRET_KEY,{expiresIn:'1h'})
        //res.cookie('jwt',token,{httpOnly:false}) //true only backend user can access on frontend--- if it is set to true than only the backend user can set the
        res.send({
            token:token, //first one is the token ,second one is the value of the token
            msg:'You have logged in!!! YAY!'
        })
        next()
        }else{
            res.send({msg:'The username or password is incorrect'})
        }
    })
}


app.listen(PORT, ()=>{
    console.log('http://localhost:'+ PORT);
})