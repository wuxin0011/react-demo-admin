const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.less$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            },
        ],
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    }
};