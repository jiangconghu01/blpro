module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/recommended',
    'plugin:prettier/recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'vue',
    'prettier'
  ],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "vue/max-attributes-per-line": "off",
    "vue/html-self-closing": "off",
    "vue/require-default-prop":"off",
    "vue/name-property-casing":"off",
<<<<<<< HEAD
    "eol-last":'off',
    //"eslint eol-last": "never"
=======
    "eol-last":'off'
>>>>>>> f5c97c16e11c8e35981b017b27b2eb202e213ccf
  }
}
