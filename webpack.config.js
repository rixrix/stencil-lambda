// NOTE: paths are relative to each functions folder

var outputFilename = 'index.js';
var distDir = './lib';
var sourceEntryPoint = './index.ts';
var libraryTarget = 'commonjs2';

/*
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
module.exports = {
    /**
     * The entry point for the bundle
     *
     * See: http://webpack.github.io/docs/configuration.html#entry
     */
    entry: sourceEntryPoint,

    target: 'node',

    /**
     * Options affecting the output of the compilation.
     *
     * See: http://webpack.github.io/docs/configuration.html#output
     */
    output: {
        /**
         * The output directory as absolute path (required).
         *
         * See: http://webpack.github.io/docs/configuration.html#output-path
         */
        path: distDir,

        /**
         * Specifies the name of each output file on disk.
         * IMPORTANT: You must not specify an absolute path here!
         *
         * See: http://webpack.github.io/docs/configuration.html#output-filename
         */
        filename: outputFilename,

        /**
         * Set the target library format
         *
         * See: http://webpack.github.io/docs/configuration.html#output-librarytarget
         */
        libraryTarget: libraryTarget
    },
    externals: {
        // aws-sdk does not (currently) build correctly with webpack. However,
        // Lambda includes it in its environment, so omit it from the bundle.
        // See: https://github.com/apex/apex/issues/217#issuecomment-194247472
        'aws-sdk': 'aws-sdk'
    },
    module: {
        /**
         * Array of module loaders
         *
         * See: http://webpack.github.io/docs/configuration.html#module-loaders
         */
        loaders: [
            /**
             * TypeScript loader
             *
             * See: https://github.com/s-panferov/awesome-typescript-loader
             */
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
                exclude: /(node_modules|bower_components|dist)/
            },

            /**
             * JSON loader
             *
             * See: https://github.com/webpack/json-loader
             */
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    }
};
