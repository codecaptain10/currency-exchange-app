//import path
const path = require('path');
//import HtmlWebpackPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
//import MiniCssExtractPlugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//import CssMinimizerPlugin
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
//import ImageMinimizerPlugin
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
//import TerserPlugin
const TerserPlugin = require("terser-webpack-plugin");




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
    }), new MiniCssExtractPlugin(), new CssMinimizerPlugin(), new ImageMinimizerPlugin(), ],
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ],

            },

            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                // use: [{loader: 'url-loader'}],

            },


        ]
    },

    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },

}