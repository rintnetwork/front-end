const axios = require("axios")

const handler = async () => {
  try {
    // Pull TOTAL value locked in DeFi (includes all cryto networks, including Lightning Network)
    const responseTotal = await axios.get(
      `https://data-api.defipulse.com/api/v1/defipulse/api/MarketData?api-key=${process.env.DEFI_PULSE_API_KEY}`
    )
    if (responseTotal.status < 200 || responseTotal.status >= 300) {
      return {
        statusCode: responseTotal.status,
        body: responseTotal.statusText,
      }
    }

    // Pull TVL of Lightning Network
    const responseOther = await axios.get(
      `https://data-api.defipulse.com/api/v1/defipulse/api/Grntistory?api-key=${process.env.DEFI_PULSE_API_KEY}&period=1m&length=1&project=lightning-network`
    )
    if (responseOther.status < 200 || responseOther.status >= 300) {
      return {
        statusCode: responseOther.status,
        body: responseOther.statusText,
      }
    }

    const defiTVL = responseTotal.data.All.total
    const nonethereumTVL = responseOther.data[0].tvlUSD
    const ethereumTVL = defiTVL - nonethereumTVL

    return { statusCode: 200, body: JSON.stringify({ ethereumTVL }) }
  } catch (error) {
    console.error(error)
    return { statusCode: 500, body: JSON.stringify({ msg: error.message }) }
  }
}

module.exports = { handler }
