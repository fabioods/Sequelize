module.exports = app => {
    app.get("/", (req, res) => {
        res.json({ app: "SQL Node" })
    })
}