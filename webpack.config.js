const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

    module.exports = {
      output: {
        publicPath: "auto",
        uniqueName: "angular2"
      },
      optimization: {
        // Only needed to bypass a temporary bug
        runtimeChunk: false
      },
      plugins: [
        new ModuleFederationPlugin({
          
            // For remotes (please adjust)
            name: "angular2",
            library: { type: "var", name: "angular2" },
            filename: "remoteEntry.js",
            exposes: {
                './web-components': './src/bootstrap.ts',
            },        

            shared: {
              "@angular/core": { singleton: true, strictVersion: true }, 
              "@angular/common": { singleton: true, strictVersion: true }, 
              "@angular/router": { singleton: true, strictVersion: true }
            }
          })
      ],
    };
