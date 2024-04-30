// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

config.resolver.assetExts.push(
  // Adds support for `.db` files for SQLite databases
  "glb",
  "gltf",
  "png",
  "jpg"
);

config.resolver.sourceExts.push("js", "jsx", "json", "ts", "tsx", "cjs", "mjs");

module.exports = config;
