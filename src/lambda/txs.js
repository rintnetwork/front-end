const axios = require("axios")

const handler = async () => {
  try {
    const daysToFetch = 30
    const milliseconds = daysToFetch * 24 * 60 * 60 * 1000
    const now = new Date()
    // startdate and enddate format: YYYY-MM-DD
    const to = now.toISOString().split("T")[0]
    const from = new Date(now.getTime() - milliseconds)
      .toISOString()
      .split("T")[0]
    const response = await axios.get(
      `https://api.rnterscan.io/api?module=stats&action=dailytx&startdate=${from}&enddate=${to}&sort=desc&apikey=${process.env.rntERSCAN_API_KEY}`
    )
    if (response.status < 200 || response.status >= 300) {
      return { statusCode: response.status, body: response.statusText }
    }

    const { data } = response
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    }
  } catch (error) {
    console.error(error)
    return { statusCode: 500, body: JSON.stringify({ msg: error.message }) }
  }
}

module.exports = { handler }
