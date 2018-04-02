const path = require("path");
const webpack = require("webpack");
module.exports = {
    entry: "./main.js",
    output:{
        path:__dirname,
        filename:"bundle.js",
    },

    devServer:{
        port:8080,
        inline:false,
        proxy:{
            "proxy":`0.0.0.0:${process.env.port}`
        }
    },
    resolve:{
        extensions:['.js','.json','.css'],
    },
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                exclude:/node_modules/,
                loader:'babel-loader',
                query:{
                    presets:['es2015','react']
                }
            },
            {
                test:/\.css?$/,
                loader:'css-loader',
                query: {
                    modules: true
                }
            }
        ]
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        })
    ]

}