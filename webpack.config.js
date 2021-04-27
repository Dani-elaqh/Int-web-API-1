//webpack is able to modify the html code and move it to another folder, so first we say were is the original code for the front end 
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//
const devMode = process.env.NODE_ENV !== 'production';
//specifing where is the object entry where is the main file of the project, and output is where the code is going to go after
//minify to minify the code of html
module.exports = {

    entry:'./frontend/app.js',
    output: {
        path: path.join(__dirname, 'backend/public'),
        filename: 'js/bundle.js'
    },

    mode: 'development',

    //If we are un development mode the files should come from style-loader, otherwise in production mode charge them from MinicssExtractplugin
    module:{
        rules:[
            {
                test:  /\.css/,
                use: [
                    devMode ? 'style-loader': MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },

    
    // devServer: {
    //     host: '0.0.0.0',
    //     allowedHosts: ['localhost', '.gitpod.io'],
    // },

    plugins: [

        new htmlWebpackPlugin({
            template: './frontend/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
                
            }
        }),

        new MiniCssExtractPlugin({
            filename: 'css/bundle.css'

        })

    ], 
    devtool: 'source-map'

};