const {src, dest} = require(`gulp`);

const copy = () => {
  return src([
    `source/fonts/**/*.{woff,woff2}`,
    `source/img/*.{jpg,jpeg,png,webp,svg}`,
    `source/*.ico`
  ],
  {base: `source/`})
    .pipe(dest(`dist`));
};

module.exports = copy;
