import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';



// ReactDOM : 라이브러리를 웹사이트에 출력해둠, 한 개의 컴포넌트를 출력(render)
// document 안에 element가 있는데, element ID('root')는 인덱스 html 파일에 있음
// application은 한번에 하나의 component만 출력할 수 있다
ReactDOM.render(<App />, document.getElementById('root'));
