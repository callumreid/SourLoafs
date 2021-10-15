const functions = require("firebase-functions");
const {Storage} = require("@google-cloud/storage");
const projectId = "sour-loafs";
const gcs = new Storage({
  projectId,
});
const os = require("os");
const path = require("path");


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
  res.status(200).json({
    message: "it worked",
  });
});
