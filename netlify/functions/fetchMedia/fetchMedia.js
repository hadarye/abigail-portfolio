// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {
  try {
    const response = await fetch("https://drive.google.com/embeddedfolderview?id=1kSPX_JQYE_NEK4dTfXvezNR4Ygq2YPLy#list");
    const result = await response.text()
    return {
      statusCode: 200,
      body: result
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
