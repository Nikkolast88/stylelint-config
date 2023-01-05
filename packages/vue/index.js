module.exports = {
  extends: [
    '@uni-daily/stylelint-config-basic',
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-prettier'
  ],
  plugins: [],
  rules: {
    'selector-class-pattern': [
      '^[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$',
      {
        // TODO: custom formatters(https://stylelint.io/developer-guide/formatters/)
        // message(prop, value) {
        //   return "https://github.com/AndyOGo/stylelint-declaration-strict-value/issues/142";
        // },
      }
    ]
  },
  overrides: [
    {
      files: '**/*.vue',
      customSyntax: 'postcss-html'
    }
  ]
}
