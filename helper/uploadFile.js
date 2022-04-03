const util = require("util");
let multer  = require('multer');
const fs = require('fs');
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now()+file.originalname);
      }
  })
const fileFilter=(req,file,cb)=>{
    const match = ["image/png", "image/jpeg","image/jpg"];
    if(match.indexOf(file.mimetype) === -1){
        // console.log("should be reject")
        cb(new Error("File should be Image"),false)
    }else{
        cb(null,true)
    }
}


// let uploadZip1=multer({storage:storage}).single("file");

let uploadFile = multer({storage: storage,limits:{fileSize:1024*1024*2},fileFilter:fileFilter}).single("file");
let uploadFilesMiddleware = util.promisify(uploadFile);
let deleteUploadedFile=util.promisify(fs.unlink);

module.exports.uploadFile=uploadFilesMiddleware
module.exports.deleteUploadedFile=deleteUploadedFile;