module.exports = {
  automock: false, // 不需要手动jest.mock('[modules]')
  setupFiles: [
   './tools/test/setup.ts'
  ], // 每次test前执行定环境初始化脚本
  collectCoverageFrom: [
    'src/**/*.{ts.tsx}',
    'tools/**/*.{ts,tsx,js}',
    '!tools/build/*'
  ], // 覆盖率的统计来源
  coverageReporters: [
    'json', 'text-summary'
  ], // 覆盖率的输出形式
  modulePathIgnorePatterns: [
    '<rootDir>/assets/'
  ], // module引用排除环境
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.ts',
    '\\.(css|less)$': 'identity-obj-proxy'
  }, // module引用时匹配对应关系
  transform: {
    '^.+\\.(ts|tsx)?$': '<rootDir>/node_modules/ts-jest/preprocessor.js'
  }, // 匹配到相应的正则并使用相应的转换器
  transformIgnorePatterns: [
    '<rootDir>/dist/',
    '<rootDir>/node_modules/',
    '<rootDir>/tools/build/'
  ], // 相应的位置不需要做转换
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
  ], //  后缀名扩展，如果没有require没有匹配会从这找
  globals: {
    'ts-jest': {
      'tsConfigFile': './tsconfig.json'
    }
  }, // 在test environment中放入一些全局变量
  clearMocks: false, // 每次test之间调用jest.clearAllMocks()
  reporters: ['default'], // 可以按自己定意愿导出reports，详见文档
  mapCoverage: false, // 在需要transformer的情况下coverage时给予更多的sourcemap信息
  resetModules: true, // 在每次执行单个test之间重置
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ], // 快照测试时输出数据序列化
  testRegex: '(/__tests__/.*|(\\.|/)test)\\.(tsx?|jsx?)$', // 匹配需要测试的位置(正则)
  testPathIgnorePatterns: [
    '<rootDir>/dist/',
    '<rootDir>/node_modules/',
    '<rootDir>/tools/build/'
  ], // 不需要测试匹配
  timers: 'fake', // 用于设置假的setTimeout防止用到时等待时间过长
}