const path = require("path")

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js"
    },
    module: {
        rules:[{
            test: /\.css$/i,
            use: ["style-loader", "css-loader"]
        }]
    },
    watch:true
}