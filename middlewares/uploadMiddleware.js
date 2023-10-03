import multer from 'multer'
import path from 'path'

// Set up the storage engine and define where uploaded files should be stored
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, path.join(__dirname, '../../public/documents'))
  },
  filename: (req, file, callback) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
    const extname = path.extname(file.originalname) // Get the file extension
    const newFileName = file.fieldname + '-' + uniqueSuffix + extname
    callback(null, newFileName)
  }
})

// Create the multer instance with file size limit (optional)
const upload = multer({
  storage,
  limits: { fileSize: 1024 * 1024 * 10 } // Set the limit to 10MB (adjust as needed)
})

export default upload
