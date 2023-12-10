import React from 'react';
import Header from '../../Components/Header/Header';
import {
  StyledProgrammingLayout,
  StyledProgramminContainer,
} from './programming.styled';
import ProgrammingCard from '../../Components/Card/ProgrammingCard';

export default function ProgrammingPage() {
  let En = 'En';
  let Kr = 'Kr';
  return (
    <>
      <Header type="programming" />
      <StyledProgrammingLayout>
        <StyledProgramminContainer>
          <ProgrammingCard
            name={'JavaScript'}
            links={[
              {
                url: 'https://developer.mozilla.org/ko/docs/Web/JavaScript',
                title: `MDN (${En},${Kr})`,
              },
              {
                url: 'https://ecma-international.org',
                title: `ECMA International (${En})`,
              },
              {
                url: 'https://ko.javascript.info/',
                title: `모던 JavaScript 튜토리얼 (${En},${Kr})`,
              },
              {
                url: 'https://www.codecademy.com/learn',
                title: `Codecademy (${En})`,
              },
              {
                url: 'https://eloquentjavascript.net',
                title: `Eloquent JavaScript (${En})`,
              },
            ]}
          />
          <ProgrammingCard
            name={'HTML5'}
            links={[
              {
                url: 'https://www.htmldog.com/',
                title: `MDN (${En},${Kr})`,
              },
              {
                url: 'https://www.codecademy.com/enrolled/courses/learn-html',
                title: `Codecademy - Learn HTML (${En})`,
              },
              {
                url: 'https://www.htmldog.com/',
                title: `HTML Dog (${En})`,
              },
              {
                url: 'https://web.dev/?hl=ko',
                title: `HTML5 Rocks (${En},${Kr})`,
              },
            ]}
          />
          <ProgrammingCard
            name={'CSS'}
            links={[
              {
                url: 'https://developer.mozilla.org/ko/docs/Web/CSS',
                title: `MDN (${En},${Kr})`,
              },
              {
                url: 'https://flexboxfroggy.com/#ko',
                title: `Flexbox Froggy (${Kr})`,
              },
              {
                url: 'https://cssgridgarden.com/#ko',
                title: `Grid Garden (${Kr})`,
              },
              {
                url: 'https://www.smashingmagazine.com/',
                title: `Smashing Magazine - CSS Category  (${En})`,
              },
              {
                url: 'https://cssreference.io/',
                title: `CSS Reference (${En})`,
              },
              {
                url: 'https://cssbattle.dev/',
                title: `CSS Battle (${En})`,
              },
            ]}
          />
          <ProgrammingCard
            name={'NodeJs'}
            links={[
              {
                url: 'https://developer.mozilla.org/ko/docs/Learn/Server-side/Express_Nodejs',
                title: `MDN (${En},${Kr})`,
              },
              {
                url: 'https://nodejs.org/en',
                title: `Node.js 공식 사이트 (${En})`,
              },
              {
                url: 'https://www.codecademy.com/courses/learn-node-js/articles/welcome-to-learn-node-js',
                title: `Codecademy - Learn Node.js (${En})`,
              },
            ]}
          />
          <ProgrammingCard
            name={'Npm'}
            links={[
              {
                url: 'https://www.npmjs.com/',
                title: `npmjs (${En})`,
              },
            ]}
          />
          <ProgrammingCard
            name={'TypeScript'}
            links={[
              {
                url: 'https://www.typescriptlang.org/ko/',
                title: `TypeScript 공식 사이트 (${En},${Kr})`,
              },
              {
                url: 'https://basarat.gitbook.io/typescript/',
                title: `TypeScript Deep Dive (${En})`,
              },
              {
                url: 'https://typescript-kr.github.io/',
                title: `TypeScript-Handbook (${Kr})`,
              },
              {
                url: 'https://github.com/typescript-exercises/typescript-exercises',
                title: `TypeScript Exercises (${En})`,
              },
            ]}
          />
          <ProgrammingCard
            name={'React'}
            links={[
              {
                url: 'https://react.dev/',
                title: `React 공식 사이트 (${En})`,
              },
              {
                url: 'https://ko.react.dev/',
                title: `React 공식 사이트 (한글 번역) (${Kr})`,
              },
              {
                url: 'https://github.com/facebook/react',
                title: `React GitHub  (${En})`,
              },
              {
                url: 'https://github.com/velopert/learning-react',
                title: `React를 다루는 기술 (${En})`,
              },
              {
                url: 'https://github.com/enaqx/awesome-react',
                title: `awesome-react (${En})`,
              },
            ]}
          />
          <ProgrammingCard
            name={'Angular'}
            links={[
              {
                url: 'https://angular.io/',
                title: `Angular 공식 사이트 (${En})`,
              },
              {
                url: 'https://ko.react.dev/',
                title: `Angular 공식 사이트 (한글 번역) (${Kr})`,
              },
            ]}
          />
          <ProgrammingCard
            name={'Express'}
            links={[
              {
                url: 'https://expressjs.com',
                title: `Express.js 공식 사이트 (${En})`,
              },
              {
                url: 'https://expressjs.com/ko/',
                title: `Vue 공식 사이트(한글 번역) (${Kr})`,
              },
              {
                url: 'https://github.com/expressjs/express',
                title: `Express.js GitHub (${En})`,
              },
              {
                url: 'https://developer.mozilla.org/ko/docs/Learn/Server-side/Express_Nodejs',
                title: `MDN (${En},${Kr})`,
              },
            ]}
          />
          <ProgrammingCard
            name={'Jquery'}
            links={[
              {
                url: 'https://jquery.com/(',
                title: `jQuery 공식 사이트 (${En})`,
              },
              {
                url: 'https://github.com/jquery/jquery',
                title: `jQuery GitHub (${En})`,
              },
              {
                url: 'https://www.w3schools.com/jquery/',
                title: `W3Schools - jQuery Tutorial (${En})`,
              },
            ]}
          />
        </StyledProgramminContainer>
      </StyledProgrammingLayout>
    </>
  );
}
