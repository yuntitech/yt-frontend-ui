module.exports = {
  extends: [
    'stylelint-config-standard', // css规范配置
    'stylelint-config-prettier', //关闭所有不必要或可能与 Prettier 冲突的规则
    'stylelint-config-css-modules', //css-module的方案来处理样式文件
  ],
  plugins: ['stylelint-order'], //通过插件使用stylelint-order
  rules: {
    //大的规则集合，比如custom-properties类型的内容放前面，css属性的集合放在后面等，这是大的方向
    'order/order': ['custom-properties', 'declarations'],
    //具体配置css属性相关的摆放顺序，比如width放前面，紧接着是height等。
    'order/properties-order': [
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',
      'display',
      'justify-content',
      'align-items',
      'float',
      'clear',
      'overflow',
      'overflow-x',
      'overflow-y',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'border',
      'border-style',
      'border-width',
      'border-color',
      'border-top',
      'border-top-style',
      'border-top-width',
      'border-top-color',
      'border-right',
      'border-right-style',
      'border-right-width',
      'border-right-color',
      'border-bottom',
      'border-bottom-style',
      'border-bottom-width',
      'border-bottom-color',
      'border-left',
      'border-left-style',
      'border-left-width',
      'border-left-color',
      'border-radius',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',
      'font-size',
      'font-family',
      'font-weight',
      'text-align',
      'text-justify',
      'text-indent',
      'text-overflow',
      'text-decoration',
      'white-space',
      'color',
      'background',
      'background-position',
      'background-repeat',
      'background-size',
      'background-color',
      'background-clip',
      'opacity',
      'filter',
      'list-style',
      'outline',
      'visibility',
      'box-shadow',
      'text-shadow',
      'resize',
      'transition',
    ],
    'at-rule-no-unknown': true, //不允许未知的规则
    'block-no-empty': true, //禁止空块
    'color-no-invalid-hex': true, //禁止无效的十六进制颜色
    'comment-no-empty': true, //禁止空评论
    'custom-property-no-missing-var-function': true, //不允许var自定义属性缺少功能
    'declaration-block-no-duplicate-custom-properties': true, //不允许在声明块中重复自定义属性
    'declaration-block-no-duplicate-properties': [
      //禁止声明块中的重复属性
      true,
      {
        ignore: ['consecutive-duplicates-with-different-values'],
      },
    ],
    'declaration-block-no-shorthand-property-overrides': true, //禁止覆盖相关的冗长属性的简写属性
    'font-family-no-duplicate-names': true, //禁止重复的字体系列名称
    'font-family-no-missing-generic-family-keyword': true, //在字体系列名称列表中禁止丢失的通用字体
    'function-calc-no-unspaced-operator': true, //不允许在calc函数中使用无空格运算符。
    'function-linear-gradient-no-nonstandard-direction': true, // 不允许在根据标准语法linear-gradient()无效的调用中的方向值。
    'function-no-unknown': true, //禁止未知功能
    'keyframe-declaration-no-important': true, //!important:在关键帧声明中禁止
    'media-feature-name-no-unknown': true, //禁止未知媒体功能名称。
    'named-grid-areas-no-invalid': true, //不允许无效的命名网格区域。
    'no-descending-specificity': true, //不允许较低特异性的选择器出现在覆盖较高特异性的选择器之后。
    'no-duplicate-at-import-rules': true, //@import: 禁止样式表中的重复规则。
    'no-duplicate-selectors': true, //禁止样式表中出现重复的选择器。
    'no-empty-source': true, //禁止空源
    'no-extra-semicolons': true, //不允许额外的分号
    'no-invalid-double-slash-comments': true, //...: 禁止CSS 不支持的双斜线注释
    'no-invalid-position-at-import-rule': true, //@import: 禁止样式表中的无效位置规则。
    'no-irregular-whitespace': true,
    'property-no-unknown': true,
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-element-no-unknown': true,
    'selector-type-no-unknown': [
      true,
      {
        ignore: ['custom-elements'],
      },
    ],
    'string-no-newline': true,
    'unit-no-unknown': true,
    'alpha-value-notation': [
      //指定 alpha 值的百分比或数字表示法
      'percentage',
      {
        exceptProperties: ['opacity'],
      },
    ],
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['after-comment'],
      },
    ],
    'at-rule-name-case': 'lower',
    'at-rule-name-space-after': 'always-single-line',
    'at-rule-no-vendor-prefix': true,
    'at-rule-semicolon-newline-after': 'always',
    'block-closing-brace-empty-line-before': 'never',
    'block-closing-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always-multi-line',
    'block-closing-brace-space-before': 'always-single-line',
    'block-opening-brace-newline-after': 'always-multi-line',
    'block-opening-brace-space-after': 'always-single-line',
    'block-opening-brace-space-before': 'always',
    'color-function-notation': 'modern',
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['stylelint-commands'],
      },
    ],
    'comment-whitespace-inside': 'always',
    'custom-property-empty-line-before': [
      'always',
      {
        except: ['after-custom-property', 'first-nested'],
        ignore: ['after-comment', 'inside-single-line-block'],
      },
    ],
    'custom-media-pattern': [
      '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      {
        message: 'Expected custom media query name to be kebab-case',
      },
    ],
    'custom-property-pattern': [
      '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      {
        message: 'Expected custom property name to be kebab-case',
      },
    ],
    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-block-semicolon-newline-after': 'always-multi-line',
    'declaration-block-semicolon-space-after': 'always-single-line',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-single-line-max-declarations': 1,
    'declaration-block-trailing-semicolon': 'always',
    'declaration-block-no-redundant-longhand-properties': true,
    'declaration-colon-newline-after': 'always-multi-line',
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',
    'declaration-empty-line-before': [
      'always',
      {
        except: ['after-declaration', 'first-nested'],
        ignore: ['after-comment', 'inside-single-line-block'],
      },
    ],
    'font-family-name-quotes': 'always-where-recommended',
    'function-comma-newline-after': 'always-multi-line',
    'function-comma-space-after': 'always-single-line',
    'function-comma-space-before': 'never',
    'function-max-empty-lines': 0,
    'function-name-case': 'lower',
    'function-parentheses-newline-inside': 'always-multi-line',
    'function-parentheses-space-inside': 'never-single-line',
    'function-url-quotes': 'always',
    'function-whitespace-after': 'always',
    'hue-degree-notation': 'angle',
    indentation: 2,
    'keyframes-name-pattern': [
      '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      {
        message: 'Expected keyframe name to be kebab-case',
      },
    ],
    'length-zero-no-unit': true,
    'max-empty-lines': 1,
    'max-line-length': 120,
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-case': 'lower',
    'media-feature-name-no-vendor-prefix': true,
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',
    'media-query-list-comma-newline-after': 'always-multi-line',
    'media-query-list-comma-space-after': 'always-single-line',
    'media-query-list-comma-space-before': 'never',
    'no-empty-first-line': true,
    'no-eol-whitespace': true,
    'no-missing-end-of-source-newline': true,
    'number-leading-zero': 'always',
    'number-max-precision': 4,
    'number-no-trailing-zeros': true,
    'property-case': 'lower',
    'property-no-vendor-prefix': true,
    'rule-empty-line-before': [
      'always-multi-line',
      {
        except: ['first-nested'],
        ignore: ['after-comment'],
      },
    ],
    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-attribute-quotes': 'always',
    'selector-class-pattern': [
      '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      {
        message: 'Expected class selector to be kebab-case',
      },
    ],
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'selector-descendant-combinator-no-non-space': true,
    'selector-id-pattern': [
      '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      {
        message: 'Expected id selector to be kebab-case',
      },
    ],
    'selector-list-comma-newline-after': 'always',
    'selector-list-comma-space-before': 'never',
    'selector-max-empty-lines': 0,
    'selector-no-vendor-prefix': true,
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-element-case': 'lower',
    'selector-pseudo-element-colon-notation': 'double',
    'selector-type-case': 'lower',
    'shorthand-property-no-redundant-values': true,
    'string-quotes': 'double',
    'unit-case': 'lower',
    'value-keyword-case': 'lower',
    'value-list-comma-newline-after': 'always-multi-line',
    'value-list-comma-space-after': 'always-single-line',
    'value-list-comma-space-before': 'never',
    'value-list-max-empty-lines': 0,
    'value-no-vendor-prefix': true,
  },
  defaultSeverity: 'warning', //在其次要选项中未指定严重性的所有规则设置默认严重性级别
  overrides: [
    {
      files: ['*.scss', '**/*.scss'],
      customSyntax: 'postcss-scss',
    },
    {
      files: ['*.less', '**/*.less'],
      customSyntax: 'postcss-less',
    },
    {
      files: ['src/**/*.css', 'src/**/*.css'],
      rules: {},
    },
  ],
};
