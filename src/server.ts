import { app } from '.'

const port = 2421
app.listen(port, () => {
    console.log(`Now Listing on ${port}`)
})