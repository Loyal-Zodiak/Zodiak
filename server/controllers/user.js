const {OAuth2Client} = require('google-auth-library'),
  axios = require('axios')

class UserController {
  static googleLogin(req, res, next) {
    const clientId = process.env.GOOGLE_CLIENT_ID
    const client = new OAuth2Client(clientId)
    client.verifyIdToken({
        idToken: req.body.idToken,
        audience: clientId
    })
      .then(ticket => {
        const googlePayload = ticket.getPayload()
        // lanjut ke JOVI
        console.log(googlePayload.name)
        res.status(200).json({name: googlePayload.name})
      })
      .catch(next)
  }
  static githubLogin (req, res, next) {
    let githubToken = null
    axios({
      method: 'post',
      url: `https://github.com/login/oauth/access_token?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}&code=${req.query.code}`
    })
      .then(({data}) => {
        githubToken = data.slice(13, 53)
        return axios({
          url: 'https://api.github.com/user',
          method: 'get',
          headers: {
            Authorization: `token ${process.env.GITHUB_TOKEN}`
          }
        })
      })
      .then(({data}) => {
        // lanjut ke JOVI
        console.log(data.login)
        res.status(200).json({name: data.login})
      })
      .catch(next)
  }
}

module.exports = UserController