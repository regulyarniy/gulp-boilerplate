const {src, dest} = require(`gulp`);
const plumber = require(`gulp-plumber`);
const sass = require(`gulp-sass`);
const postcss = require(`gulp-postcss`);
const mqpacker = require(`css-mqpacker`);
const autoprefixer = require(`autoprefixer`);
const minify = require(`gulp-clean-css`);
const rename = require(`gulp-rename`);
const sourcemaps = require(`gulp-sourcemaps`);
const empty = require(`gulp-empty-pipe`);

const generateCSS = (options) => {
  return function _generateCSS() {
    return src(`source/sass/style.scss`)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({
        browsers: [
          `last 1 version`,
          `last 2 Chrome versions`,
          `last 2 Firefox versions`,
          `last 2 Opera versions`,
          `last 2 Edge versions`
        ]
      }),
      mqpacker({sort: true})
    ]))
    .pipe(minify())
    .pipe(rename(`style.min.css`))
    .pipe(options.sourceMap ? sourcemaps.write(`.`) : empty())
    .pipe(dest(`dist/css`));
  };
};

module.exports = generateCSS;
