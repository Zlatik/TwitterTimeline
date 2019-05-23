const path = require("path");
const webpack = require("webpack");

module.exports = {
    devtool:"source-map",
    entry: "./main.js",
    output:{
        path:path.join(__dirname,"../src"),
        filename:"bundle.js",
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
            },
            
    
        ]
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('test')
            }
        }),
        new webpack.LoaderOptionsPlugin({
                minimize: true
        }),
        
    ]

}