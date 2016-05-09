# Build a Color Palette that scales nicely (AKA SCALOR)
This is an experiment in a couple ways for me. The goal was to make scaled color palettes with a little playground to see how the current color choices work together. The challenges were for me to see what I could get away with in just Sass & to start messing with node & gulp to get the hang of this new-wave stuff :)

## Built with
- HTML
- JS
- SCSS (is actually where all the generation happens for now)
- Node & Gulp to compile SCSS

## Instructions
1. Install [npm](https://www.npmjs.com/) *(only for compiling scss)*
1. **npm** project requires [gulp](https://www.npmjs.com/package/gulp), [browser-sync](https://www.browsersync.io/), [gulp-sass](https://www.npmjs.com/package/gulp-sass), [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) *(Only if you want to compile your scss that way)*
1. Set your colors under `// CORE BRAND COLORS HERE!` in [style.scss](Scalor/scss/style.scss) file.
1. Run `gulp` in terminal at the project root folder! **DONEZO**.

## Todo
- [ ] Get rid of/ rethink the circles... haha
- [ ] Allow tweeking of each color scale independently of others
- [ ] URL encode master colors to easily allow changing and trying different color scales.
- [ ] Make autoprefixer work in gulpfile
- [ ] Allow dynamic creation of number of colors.

*The idea started here http://codepen.io/okayjeffrey/pen/ONEOYM. Please note: This is all a little hacky & this project will be updated and refactored probably everytime I use it.*
