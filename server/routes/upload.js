const router = require('express').Router();
const { File, FileUploader } = require('../services/fileManager');
const S3Uploader = require('../services/uploader/S3Uploader');

const asyncWrapper = fn => (...args) => fn(...args).catch(args[2]);

router.post('/', asyncWrapper( async (req, res, next) => {
  const uploader = new S3Uploader(new File(req.files.file));
  const fileURL = await FileUploader.upload(uploader);
  res.json({ fileURL });
}));

router.post('/thumbnail', asyncWrapper( async (req, res, next) => {
  const uploader = new S3Uploader(new File(req.files.file));
  const fileURL = await FileUploader.upload(uploader);
  res.json({ fileURL });
}));

module.exports = router;