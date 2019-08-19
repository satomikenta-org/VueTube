require('dotenv').config();
const fs = require('fs');
const AWS = require('aws-sdk');

AWS.config.update({
  credentials: new AWS.Credentials(
      process.env.S3_ACCESS_KEY,
      process.env.S3_SECRET_KEY,
  ),
  region: process.env.S3_REGION
});
  
const s3 = new AWS.S3();
  
class S3Uploader {
  constructor(file) {
    this.file = file;
  }

  getBuffer () {
    return fs.readFileSync(this.file.path);
  };

  configure() {
    const params = {
      Bucket: process.env.S3_BUCKET_NAME,
      Key: `${this.file.type}/${Date.now()}.${this.file.extension}`,
      Body: this.getBuffer(),
      ContentType: this.file.mimeType
    };
    return params;
  }

  async upload() {
    const params = this.configure();
    await s3.putObject(params).promise();
    return params.Key;
  }

}

module.exports = S3Uploader;
