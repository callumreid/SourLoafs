const functions = require("firebase-functions");
const {Storage} = require("@google-cloud/storage");
const projectId = "sour-loafs";
const keyFilename = "sour-loafs-firebase-adminsdk-7hwnx-e292270eb0.json";
const os = require("os");
const path = require("path");
const cors = require("cors")({origin: true});
const Busboy = require("busboy");
const fs = require("fs");
const gcs = new Storage({
  projectId,
  keyFilename,
});


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.onFileChange = functions.storage.object().onFinalize((event) => {
  const bucket = event.bucket;
  const contentType = event.contentType;
  const filePath = event.name;
  console.log("File change detected, funcion execution started");

  if (path.basename(filePath).startsWith("sour-loafs-")) {
    console.log("This file has already been renamed");
    return;
  }

  const destBucket = gcs.bucket(bucket);
  const tmpFilePath = path.join(os.tmpdir(), path.basename(filePath));
  const metaData = {contentType: contentType};
  return destBucket.file(filePath).download({
    destination: tmpFilePath,
  })
      .then(()=> {
        return destBucket.upload(tmpFilePath, {
          destination: "sour-loafs-" + path.basename(filePath),
          metadata: metaData,
        });
      });
});

exports.uploadFile = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    if (req.method !== "POST") {
      return res.status(500).json({
        message: "POST req only pls",
      });
    }
    const busboy = new Busboy({headers: req.headers});
    let uploadData = null;
    busboy.on("file", (fieldname, file, filename, encoding, mimetype) => {
      const filepath = path.join(os.tmpdir(), filename);
      uploadData = {file: filepath, type: mimetype};
      file.pipe(fs.createWriteStream(filepath));
    });
    busboy.on("finish", () => {
      const bucket = gcs.bucket("sour-loafs.appspot.com");
      bucket.upload(uploadData.file, {
        uploadType: "media",
        metadata: {
          metadata: {
            contentType: uploadData.type,
          },
        },
      }).then(() => {
        res.status(200).json({
          message: "it worked",
        });
      }).catch((err) => {
        res.status(500).json({
          error: err,
        });
      });
    });
    busboy.end(req.rawBody);
  });
});
