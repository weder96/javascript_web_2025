// Promises provide a structured way to handle async results
fetchData("/endpoint1")
    .then( (result) => {
        return firstProcessStep(result)
    })
    .then( (processedResult) => {
        console.log(`Processed result: ${processedResult}`)
    })
    .catch( (err) => {
        console.error("PANIC!", err);
    })

// Conceptually equivalent to this FAKE example:
try {
    let result = fetchData();
    let processedResult = firstProcessStep(result);
    console.log(`Processed result: ${processedResult}`)
} catch(err) {
    console.error("PANIC!", err);
}