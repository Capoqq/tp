import mongoose from 'mongoose';
const URI_MONGO = process.env.MONGODB_URI;
const conectarDB = async() => {
    try{
        await mongoose.connect(URI_MONGO,{
            
        })
        console.log('mongo conectado')
    }catch(error){
        console.log(error)
        process.exit(1)
    }
}
export default conectarDB
