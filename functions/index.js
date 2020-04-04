const functions = require("firebase-functions");

const admin = require("firebase-admin");
admin.initializeApp();
const { Translate } = require("@google-cloud/translate").v2;
// const translate = new Translate{}

exports.getArticles = functions.https.onRequest(async (req, res) => {
  const language = req.query.language;
  const kommun = req.query.kommun;
  const topic = req.query.topic;

  const data = await admin
    .database()
    .ref(`/kommun/${kommun}`)
    .once(
      "value",
      async (data) => {
        data.fullTranslated = await translate.translate(data.fullVersion, {
          from: "se",
          to: language,
        });
        return data;
      },
      (errorObject) => {
        console.log("The read failed: " + errorObject.code);
      }
    );

  res.send(data);
});
