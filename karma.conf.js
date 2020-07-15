module.exports = function(config) {
    config.set({
        basePath: ".",
        files: ["example.spec.js"],
        frameworks: ["jasmine"],
        singleRun: true,
        autoWatch: false,
        browsers: ["CustomElectron"],
        customLaunchers: {
            CustomElectron: {
                base: "Electron",
                flags: ["--no-sandbox"]
            }
        }
    });
};
