const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = function (webpackEnv) {
    return {

        entry: './src/index.js',
        module: { // ⬅️ ADD THIS SECTION
            rules: [
                {
                    test: /\.(js|jsx)$/, // Apply to .js and .jsx files
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            // Tell Babel which presets to use
                            presets: [
                                '@babel/preset-env', 
                                ['@babel/preset-react', { runtime: 'automatic' }]
                            ]
                        }
                    }
                },
                {
                    test: /\.(png|jpe?g|gif|svg|webp)$/i,
                    type: 'asset/resource', // Webpack 5 built-in feature
                    generator: {
                        // This specifies the output directory for the images in your build folder
                        filename: 'images/[name].[ext]' 
                    }
                }
            ]
        },

        plugins: [
            new ModuleFederationPlugin({
                name: 'spotifyApp', 
                filename: 'remoteEntry.js', 
                exposes: {
                    './ModuleIndex': './src/index.js',
                },
                
                // Libraries shared between the host and remote.
                // This ensures only one copy of major dependencies is loaded.
                shared: {
                    // Pull in all dependencies from package.json and share them.
                    ...require('./package.json').dependencies,
                    
                    // Explicitly configure React/React-DOM for singletons.
                    // This is CRITICAL for React apps to avoid errors (e.g., Hook errors).
                    react: { 
                        singleton: true, 
                        requiredVersion: '18.2.0' 
                    },
                    'react-dom': { 
                        singleton: true, 
                        requiredVersion: '18.2.0' 
                    },
                    'styled-components': { // Also good to share styling libraries
                        singleton: true,
                        requiredVersion: '5.3.6'
                    }
                },
            }),
        ],
        
        devServer: {
            // This is the key setting for CORS
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
                "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
            },
            port: 3000,
        },

        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            fallback: {
                "child_process": false,
                "fs": false,
                "os": false,
                "assert": false,
                util: require.resolve("util/"),
                "path": require.resolve("path-browserify"), 
                "module": false
            }
        },
        // IMPORTANT: You might need to adjust output.publicPath to ensure 
        // the remoteEntry.js file is loaded correctly by the host app.
        output: {
            publicPath: 'http://localhost:3000/',
            path: path.resolve(__dirname, 'build'),
            clean: true
        },
        
        mode: 'development', // Add explicit mode
        
        devtool: 'source-map' // Add source maps for debugging
    };
};
