module.exports = function (webpackEnv) {
    return {
        resolve: {
            fallback: {
                "child_process": false,
                "fs": false,
                "os": false,
                "assert": false,
                util: require.resolve("util/"),
            }
        }
    }
}