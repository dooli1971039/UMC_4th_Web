# Chapter 7.  Styled-component, 반응형 웹

# 📝 학습 목표

---

1. state 값에 따라 컴포넌트에 조건부 스타일링을 적용할 수 있다.
2. 반응형 웹에 대해 이해하고 이를 서비스에 적용할 수 있는 시각을 키운다.

# 🎯 핵심 키워드

---

<aside>
💡 주요 내용들에 대해 조사해보고, 자신만의 생각을 통해 정리해보세요!
레퍼런스를 참고하여 정의, 속성, 장단점 등을 적어주셔도 됩니다.
조사는 공식 홈페이지 **Best**, 블로그(최신 날짜) **Not Bad**

</aside>

## Styled-component

CSS in Javascript 기술로, js 내에 css를 작성하는 라이브러리이다. 스타일 정의를 css 파일이 아니라 js로 작성된 컴포넌트에 바로 삽입하는 기술로, js의 동적인 값들을 온전하게 사용할 수 있다.

클래스명을 해시값으로 자동 생성하여, 클래스명 오염을 방지할 수 있다.

### Tagged template literals

`Tagged Template`은 백틱으로 작성한 템플릿 리터럴을 파싱한 뒤 실행되는 ********************함수********************이다.

![Untitled](Chapter%207%20Styled-component,%20%E1%84%87%E1%85%A1%E1%86%AB%E1%84%8B%E1%85%B3%E1%86%BC%E1%84%92%E1%85%A7%E1%86%BC%20%E1%84%8B%E1%85%B0%E1%86%B8%2067f2237f0a45462092311f1c11eaf14d/Untitled.png)

[(styled-component의 근간을 이루는) Tagged Template Literal](https://likejirak.tistory.com/258)

### Props

실제 스타일드 컴포넌트를 사용할 때는 `props`를 받아서 `Tagged Template`에 콜백을 전달할 일이 많다.

```jsx
import styled from "styled-components";

//스타일 설정
const StyledMyButton = styled(MyButton)`
  background-color: red;
  color: ${(props) => props.color || "blue"}; //props 활용
  font-size: 20px;
  padding: 0.25em 6em;
  border: solid 2px ${(props) => props.color || "blue"};  //props 활용
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 10px;
  :hover {
    border: solid 3px red;
  }
  ::before {
    content: "22";
  }
`;

function App() {
  return (
    <div className="App">
       <StyledMyButton color="pink"> 
            버튼
       </StyledMyButton>
    </div>
  );
}
```

[Styled Component 사용하기](https://hymndev.tistory.com/71)

## 반응형 디자인

반응형 웹 디자인은 감지된 화면 크기에 따라 자동으로 페이지가 재배열되는 유동적인 접근 방식이다. 반응형 디자인은 아래와 같은 장점이 있다.

- 모든 플랫폼에서 일관된 콘텐츠 경험
- 보편적이지 않은 화면 크기의 새로운 기기에서도 작동 가능

### 반응형 웹

반응형 웹 디자인을 사용하면 웹 페이지의 디자인과 레이아웃이 모든 화면 크기에 자동으로 맞춰진다. 이 디자인 기술은 CSS 미디어 쿼리(맞춤형 스타일 시트)를 사용하여 최종 사용자가 사용하는 기기의 특성을 검사한다. 그런 다음 웹사이트에서 검사된 내용을 바탕으로 자체적으로 렌더링된다.

## 미디어 쿼리

미디어쿼리는 반응형 웹 디자인의 기본이라고 할 수 있다. 다양한 디바이스들이 웹브라우징을 지원하면서 viewport에 따라 유연하게 컨텐츠를 배치하는 기술이 점점 중요해지고 있는데, 미디어 쿼리를 통해 처리할 수 있다. 미디어쿼리는 뷰포트 너비 뿐만 아니라, 다크모드 지원 등 다양한 용도로 쓰인다.

```css
// 800px보다 좁은 화면일 때 실행
@media (max-width: 800px) {
  .small-tomato {
    background-color: tomato;
  }
}

// 800px보다 넓은 화면일 때 실행
@media (min-width: 800px) {
  .large-tomato {
    color: tomato;
  }
}
```

## grid

- 레이아웃을 격자 형태로 조절할 수 있다.
- [grid 사용법 정리](https://github.com/dooli1971039/TIL/blob/main/Note/CSS/%EB%85%B8%EB%A7%88%EB%93%9C%EC%BD%94%EB%8D%94%20-%20CSS%20Layout%20%EB%A7%88%EC%8A%A4%ED%84%B0%ED%81%B4%EB%9E%98%EC%8A%A4/CH2.%20Grid.md)

## 컴포넌트 재사용성

비슷한 역할을 하는 컴포넌트를 매번 새로 구현하는 것은 비효율적이다. 조금 차이가 있다고 해서 매번 새로 개발하기 보다는, 컴포넌트를 분리하여 다시 사용할 수 있게 하는 것이 재사용에 더 좋다.

재사용성이 좋은 컴포넌트의 조건은 아래와 같다.

1. 비즈니스 로직이 없다.

2. 상태값이 없다. (단, 마우스 오버와 같은 UI 효과를 위한 상태값은 제외한다.)

# 📢 학습 후기

---

- 이번 주차 워크북을 해결해보면서 어땠는지 회고해봅시다.
- 핵심 키워드에 대해 완벽하게 이해했는지? 혹시 이해가 안 되는 부분은 뭐였는지?

# ✅ 실습 체크리스트

---

- [ ]  [html, css, javascript로 반응형 웹을 구현해보자.](https://www.youtube.com/watch?v=C3KttsKFkp4&feature=youtu.be)

# ☑️ 실습 인증 파트

---

- [html, css, javascript로 반응형 웹을 구현해보자.](https://www.youtube.com/watch?v=C3KttsKFkp4&feature=youtu.be)

# 🔥 미션

---

1. **스타일드 컴포넌트**에 대해 더 탐구해보고, 이를 사용하여 css 구현 해보기
    1. 기존의 비효율적이었던 css코드를 스타일드 컴포넌트로 교체해 보아요 ~!
2. 반응형 웹을 구현할 때 필요한 개념들을 학습하고, **자신이 선택한 서비스의 핵심 페이지 1개를 직접 반응형 웹으로 구현 해보기 (React, Styled-component) 사용!**

# ⚡ 트러블 슈팅

---

<aside>
💡 실습하면서 생긴 문제들에 대해서, **이슈 - 문제 - 해결** 순서로 작성해주세요.

</aside>

<aside>
💡 스스로 해결하기 어렵다면? 스터디원들에게 도움을 요청하거나 **너디너리의 지식IN 채널에 질문**해보세요!

</aside>

- ⚡이슈 No.1 (예시, 서식만 복사하시고 지워주세요.)
    
    **`이슈`**
    
    👉 앱 실행 중에 노래 다음 버튼을 누르니까 앱이 종료되었다.
    
    **`문제`**
    
    👉 노래클래스의 데이터리스트의 Size를 넘어서 NullPointException이 발생하여 앱이 종료된 것이었다. 
    
    **`해결`**
    
    👉  노래 다음 버튼을 눌렀을 때 데이터리스트의 Size를 검사해 Size보다 넘어가려고 하면 다음으로 넘어가는 메서드를 실행시키지 않고, 첫 노래로 돌아가게끔 해결
    
    **`참고레퍼런스`**
    
    - 링크

# 🤔 이것도 한 번 생각해봐요!

---

- 스타일링은 어느정도 이해하겠는데, 그럼 웹에선 어떤 데이터를 어떻게 받아서 보여줘야 하는걸까요?

# 🤔 참고 자료

---

[다양한 방식의 리액트 컴포넌트 스타일링 방식 CSS, Sass, CSS Module, styled-components](https://velog.io/@velopert/react-component-styling)

[Styled-Components를 이용한 React 컴포넌트 스타일링](https://blog.nerdfactory.ai/2019/10/25/react-styled-components.html)