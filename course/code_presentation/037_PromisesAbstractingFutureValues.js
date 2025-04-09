// "Callback Hell": a pyramid of nested callbacks
fetchData("/endpoint1", (result1) => {
    fetchData("/endpoint2", (result2) => {
        fetchData("/endpoint3", (result3) => {
            // do something with results 1 through 3
        })
    })
})

// What happens when an async call fails?
fetchData("/endpoint1", (result, err) => {
    if(err) {
        console.error("PANIC!");
    }
    else {
        // Do something useful
    }
})

// Can't try/catch - the error will be thrown later
try {
    fetchData("/endpoint1")
} catch(err) {
    console.log("Won't ever get here!")
}

