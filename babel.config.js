module.exports = function (api) {
    api.cache(true);

    return {
        presets: ["babel-preset-expo"],
        plugins: [
            "react-native-reanimated/plugin",
            [
                "module-resolver",
                {
                    root: ["./src"],
                    alias: {
                        _COMPONENTS: "./src/components",
                        _SHARED: ["./src/components/shared"],
                        _ASSETS: ["./assets"],
                        _LIBS: ["./src/libs"],
                        _HOOKS: ["./src/hooks"],
                    },
                    extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json", ".png", ".glb"],
                },
            ],
        ],
    };
};
