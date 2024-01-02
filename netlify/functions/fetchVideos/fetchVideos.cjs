// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2

const handler = async () => {
  try {
    const response = await fetch("https://drive.google.com/embeddedfolderview?id=1X9Ag_rT1nSP5HT1uEJcJMIrylbNlSiaU#list");
    const result = await response.text();
    return {
      statusCode: 202,
      body: result
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}
module.exports = {handler}
