module.exports = {
  extends: [
    '@uni-daily/stylelint-config-basic',
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-prettier'
  ],
  overrides: [
    {
      files: '**/*.vue',
      customSyntax: 'postcss-html'
    }
  ],
  rules: {}
}
