const path= require("path");

module.exports = {
    entry: "./src/todo.js",
    mode: "development",
    output: {
        path: path.resolve(__dirname,"build"),
        filename: "bundle.js"
    },

    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
            test:/\.js$/i,
            // use:["babel-loader"],
            exclude:/node_modules/
        },
        ],
      },
}
