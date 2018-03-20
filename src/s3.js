import aws from 'aws-sdk'
import multer from 'multer'
import multerS3 from 'multer-s3'
import crypto from 'crypto'

function randomValueBase64 (len = 4) {
  return crypto.randomBytes(Math.ceil(len * 3 / 4))
    .toString('base64') // convert to base64 format
    .slice(0, len) // return required number of characters
    .replace(/\+/g, '0') // replace '+' with '0'
    .replace(/\//g, '0') // replace '/' with '0'
}

export default class S3 {
  constructor ({ accessKeyId, secretAccessKey, region = 'us-east-1', bucket, setOriginalName, isPublic }) {
    this.multer = multer({
      storage: multerS3({
        s3: new aws.S3({ accessKeyId, secretAccessKey, region }),
        bucket,
        acl: isPublic ? 'public-read' : 'private',
        metadata: function (req, file, cb) {
          cb(null, {fieldName: file.fieldname})
        },
        key: function (req, file, cb) {
          const directory = req.body.directory + '/' || ''
          const name = setOriginalName ? file.originalname : `${randomValueBase64()}_${randomValueBase64()}_${randomValueBase64()}_${randomValueBase64()}`
          cb(null, directory + name)
        }
      })
    })
  }

  get upload () {
    return this.multer
  }
}
