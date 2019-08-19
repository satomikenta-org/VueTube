
class File {
  constructor(file) {
    this.name = file.name;
    this.mimeType = file.type;
    this.path = file.path;
  }
  get extension() {
    return this.mimeType.split('/')[1];
  }
  get type() {
    return this.mimeType.split('/')[0];
  }
}

class FileUploader {

  static async upload(uploader) {
    return await new FileUploader(uploader).upload();
  }

  constructor(uploader) {
    this.uploader = uploader;
  }

  async upload() {
    try {
      const fileURL = await this.uploader.upload();  
      return fileURL;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = {
  File,
  FileUploader
};