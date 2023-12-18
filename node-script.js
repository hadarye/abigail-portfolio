fetch("https://drive.google.com/embeddedfolderview?id=1kSPX_JQYE_NEK4dTfXvezNR4Ygq2YPLy#list").then((response) => {
    response.text().then((result) => {
        console.log(result)
    })
})

// parser = new DOMParser();
// xmlDoc = parser.parseFromString(text,"text/xml");
// xmlDoc.getElementByTagName('a')