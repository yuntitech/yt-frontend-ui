export default {
  cjs: { type: 'babel', lazy: true },
  esm: {
    type: 'babel',
  },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
      'antd',
    ],
  ],
};
