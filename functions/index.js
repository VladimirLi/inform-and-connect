const functions = require("firebase-functions");

const admin = require("firebase-admin");
admin.initializeApp();
const { Translate } = require("@google-cloud/translate").v2;
const translate = new Translate();

const cors = require("cors")({
  origin: true,
});

exports.getArticles = functions.https.onRequest(async (req, res) => {
  const language = req.query.language;
  let kommun = req.query.kommun;
  const topic = req.query.topic;

  if (req.method === "PUT") {
    return res.status(403).send("Forbidden!");
  }

  kommun = kommun ? kommun : "uppsala";
  let data = await (
    await admin.database().ref(`/kommun/${kommun}`).once("value")
  ).val();
  data = Object.values(data);

  if (language && language !== "sv") {
    data = await Promise.all(
      data.map(async (article) => {
        const fullTranslated = await translate.translate(article.fullVersion, {
          from: "sv",
          to: language,
        });
        article.fullVersion = fullTranslated[0];

        const titleTranslated = await translate.translate(article.title, {
          from: "sv",
          to: language,
        });
        article.title = titleTranslated[0];
        console.log(article);
        return article;
      })
    );
  }
  return cors(req, res, () => {
    res.status(200).send(data);
  });
});

exports.getSupportedLanguages = functions.https.onRequest(async (req, res) => {
  const [languages] = await translate.getLanguages("sv");

  return cors(req, res, () => {
    res.status(200).send(languages);
  });
});
