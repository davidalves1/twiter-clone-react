const Tweet = require('../models/Tweet')

const index = async function (req, res) {
  // o '-' antes do createdAt no sort indica que é para ordenar
  // como DESC
  const tweets = await Tweet.find({}).sort('-createdAt')

  return res.json(tweets)
}

const store = async function (req, res) {
  const tweet = await Tweet.create(req.body)

  req.io.emit('tweet', tweet)

  return res.json(tweet)
}

module.exports = {
  index,
  store
}
