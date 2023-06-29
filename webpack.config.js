const path = require("path");
const postcssPlugins = [
    require("postcss-import"), 
    require("postcss-mixins"),
    require("postcss-simple-vars"), 
    require("postcss-nested"), 
    require("autoprefixer"),
    require("postcss-hexrgba")
];

module.exports = {
    entry: "./app/assets/scripts/App.js",
    output: {
        filename: "bundled.js",
        path: path.resolve(__dirname, 'app')
    },
    devServer: {
        watchFiles: ('./app/**/*.html'),
        static: {
            directory: path.join(__dirname, "./app")
          },
        hot: true,
        host: '0.0.0.0',
        port: 3000
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader", {loader: "postcss-loader", 
                options: {postcssOptions: {plugins: postcssPlugins}}}],
            }
        ]
    }
}


