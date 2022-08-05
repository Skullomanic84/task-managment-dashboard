import React, { Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/Header/Header';
import Board from './pages/Board/Board';

//global theming
const GlobalStyle = createGlobalStyle `

@import url("https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

:root {
	--c-gray-900: #000000;
	--c-gray-200: #f1f1f1;
	--c-gray-100: #ffffff;

	--c-green-500: #45ffbc;
	--c-olive-500: #e3ffa8;

	--c-white: var(--c-gray-100);

	--c-text-primary: var(--c-gray-100);

}

*,
*:before,
*:after {
	box-sizing: border-box;
}

body {
  line-height: 1.5;
	min-height: 100vh;
	font-family: "Be Vietnam Pro", sans-serif;
	font-size: 14px;
	background-color: var(--c-gray-900);
	color: var(--c-gray-200);

}

`

//styled-components
const AppWrapper = styled.div`
text-align: center;
`;

function App() {
  return (
    <Fragment>
    <GlobalStyle />
    <AppWrapper>
      <Header />
      <Board />
    </AppWrapper>

    </Fragment>
  );
}

export default App;
