import {v2 as cloudinary} from "cloudinary"
import e from "express"
import fs from "fs"


cloudinary.config({
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
    api_key : process.env.CLOUDINARY_API_KEY,
    api_secret : process.env.CLOUDINARY_API_SECRET
})

const uploadToCloudinary = async (filePath,folder) => {
    try {
        const result = await cloudinary.uploader.upload(filePath,{
            folder : folder

        })
        fs.unlinkSync(filePath)
        return result.secure_url
    }
    catch(error){
        console.error("Error uploading to Cloudinary:",error)
        throw error
    }
}
export default uploadToCloudinary