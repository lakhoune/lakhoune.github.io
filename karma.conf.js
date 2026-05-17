// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
const isCI = !!process.env.CI;

module.exports = function (config) {
  // Prefer Puppeteer's Chromium when available (works in CI and restricted macOS)
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    process.env.CHROME_BIN = require('puppeteer').executablePath();
  } catch (e) {
    // ignore if puppeteer isn't installed — fallback to system Chrome
  }

  config.set({
    basePath: "",
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-jasmine-html-reporter"),
      require("karma-coverage"),
      require("@angular-devkit/build-angular/plugins/karma"),
    ],
    client: {
      jasmine: {
        // you can add configuration options for Jasmine here
        // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
        // for example, you can disable the random execution with `random: false`
        // or set a specific seed with `seed: 4321`
      },
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
    },
    jasmineHtmlReporter: {
      suppressAll: true, // removes the duplicated traces
    },
    coverageReporter: {
      dir: require("path").join(__dirname, "./coverage/website"),
      subdir: ".",
      reporters: [{ type: "html" }, { type: "text-summary" }],
    },
    files: [
      {
        pattern: "src/assets/images/mock-preview-img-1.jpg",
        watched: false,
        included: false,
        served: true,
        type: "image/jpeg",
        mime: {
          "image/jpeg": ["jpg", "jpeg"],
        },
      },
    ],
    proxies: {
      "/assets/images/mock-preview-img-1.jpg":
        "/base/src/assets/images/mock-preview-img-1.jpg",
    },
    reporters: ["progress", "kjhtml"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: isCI ? ["ChromeHeadlessCI"] : ["ChromeHeadless"],
    customLaunchers: {
      ChromeHeadlessCI: {
        base: "ChromeHeadless",
        flags: [
          "--no-sandbox",
          "--disable-setuid-sandbox",
          "--disable-dev-shm-usage",
        ],
      },
    },
    singleRun: false,
    restartOnFileChange: true,
  });
};
