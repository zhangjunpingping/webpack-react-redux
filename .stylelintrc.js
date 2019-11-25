module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-config-prettier'
  ],
  plugins: [
    'stylelint-order',
    'stylelint-declaration-block-order',
    'stylelint-config-rational-order/plugin'
  ],
  rules: {
    'order/properties-order': [],
    'plugin/declaration-block-order': [],
    'plugin/rational-order': [
      true,
      {
        'border-in-box-model': false,
        'empty-line-between-groups': false
      }
    ]
  }
}
