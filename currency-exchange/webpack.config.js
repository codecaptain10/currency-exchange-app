//import path
const path = require('path');
//import HtmlWebpackPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
//import MiniCssExtractPlugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//import CssMinimizerPlugin
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");



module.exports = {
    //Mode production or development
    mode: "production",
    //Entry point
    entry: "./src/scripts/app.js",
    //Output
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html",
    }), new MiniCssExtractPlugin(), new CssMinimizerPlugin(), ],
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader, 'css-loader'
            ],
        }, ]
    }
}