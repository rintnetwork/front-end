const axios = require("axios")

const handler = async () => {
  try {
    const response = await axios.get(
      `https://api.reyerscan.io/api?module=stats&action=nodecount&apikey=${process.env.reyERSCAN_API_KEY}`
    )
    if (response.status < 200 || response.status >= 300) {
      return { statusCode: response.status, body: response.statusText }
    }

    const { data } = response
    return { statusCode: 200, body: JSON.stringify(data) }
  } catch (error) {
    console.error(error)
    return { statusCode: 500, body: JSON.stringify({ msg: error.message }) }
  }
}

module.exports = { handler }
