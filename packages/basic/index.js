module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-rational-order',
    'stylelint-config-prettier'
  ],
  plugins: ['stylelint-declaration-block-no-ignored-properties'],
  overrides: [
    {
      files: '**/*.scss',
      customSyntax: 'postcss-scss'
    }
  ],
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
  }
}
