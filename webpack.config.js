let path = require('path');

module.exports = {
  mode: 'production', // 모드 설정, production이 기본 모드고 development로 개발모드를 켤 수 있어요

	// 최초 진입점을 설정해요. entry에서 사용되는 파일은 자동으로 entry화 함께 번들링돼요.
	// 엔트리를 여러 개 설정해서 번들링시 여러 파일로 나눌 수 있어요
  entry: './src/main.ts',
  output: {
		// 번들링 결과를 담을 파일 이름을 정해줄 수 있어요.
		// 옵션 제거 시 기본값은 entry 파일 이름이에요
    filename: 'bundle.js',

    path: path.resolve(__dirname, './dist'), // 결과를 담을 폴더 이름이에요
    clean: true, // 번들링할 때 기존 폴더 내용을 삭제합니다.
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'], // 모듈 해석 방식을 지정해줘요
  },
  stats: { children: true }, // 자식에 대한 정보 제공를 추가해줘요.
  module: {
    rules: [
      {
				// 웹팩에서 TS를 해석하기 위한 모듈 설정이에요
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};