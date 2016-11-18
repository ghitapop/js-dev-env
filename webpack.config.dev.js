/**
 * Created by Ghita Pop on 11/18/2016.
 */

'use strict';

import path from 'path';

export default {
    debug: true,
    devtool: 'inline-source-map',
    noInfo: false,
    entry: [
        path.resolve(__dirname, 'src/index')
    ],
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'src'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [],
    module: {
        loaders: [
            {
                test: /\.js$/, 
                loaders: ['babel'], 
                exclude: /node_modules/,
            },
            {test: /\.css$/, loaders: ['style', 'css']}
        ]
    }
}

