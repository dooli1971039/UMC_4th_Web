# Chapter 6.  상태관리 라이브러리 : Redux

# 📝 학습 목표

---

1. 불가피하게 자식 컴포넌트에서 부모 컴포넌트의 데이터를 변경하려면 어떻게 해야할지 방법을 찾을 수 있다.
2. 기존의 리액트에서 모든 컴포넌트에서 동일한 state값을 쓰고싶다면 어떻게 해야할지 방법을 찾을 수 있다.

# 🎯 핵심 키워드

---

## Redux

Redux(리덕스)란 JavaScript(자바스트립트) 상태관리 라이브러리이다. Redux(리덕스)의 본질은 Node.js 모듈이다.

### **Redux의 기본 개념 : 세 가지 원칙**

**1. Single source of truth**

동일한 데이터는 항상 같은 곳에서 가지고 온다. 즉, 스토어라는 하나뿐인 데이터 공간이 있다는 의미이다.

**2. State is read-only**

리액트에서는 setState 메소드를 활용해야만 상태 변경이 가능하다. 리덕스에서도 액션이라는 객체를 통해서만 상태를 변경할 수 있다.

**3. Changes are made with pure functions**

변경은 순수함수로만 가능하다. 리듀서와 연관되는 개념이다.Store(스토어) – Action(액션) – Reducer(리듀서)

![https://i0.wp.com/hanamon.kr/wp-content/uploads/2021/07/리덕스-상태관리-단계.png?w=919&ssl=1](https://i0.wp.com/hanamon.kr/wp-content/uploads/2021/07/리덕스-상태관리-단계.png?w=919&ssl=1)

### store

리덕스에서 가장 중요한 객체로, 상태가 관리되는 오직 하나의 공간이다. 이 안에 현재 상태(데이터)를 가지고 있고, 액션값을 받은 디스패치함수가 리듀서로 전달한 상태값을 여기에 저장한다. 구독(subscribe)으로 상태가 업데이트 될 때 마다 다시 실행하게 해준다. 

### reducer

리듀서는 액션의 type에 따라 변화를 일으키는 함수이다. 즉 스토어에 상태값이 들어가기전 액션값에서 전탈된 'type'의 종류에 따라 어떤 상태값으로 스토어에 리턴될지 정하는 수이다. 스토어를 만드는 함수인 createStore()의 첫번째 파라미터에 들어가며 리듀서의 첫번째 파라미터엔 `초기 상태값`과 두번째 파라미터엔 액션값을 넣어주면 된다.

### dispatch

스토어의 메서드이고 상태값 업데이트를 실행하는 함수이다. 디스패치가 실행되면 파라미터로 전달받은 `액션값`이 리듀서의 두번째 파라미터 객체로 전달된다. 그러면 리듀서 안에있는 코드들로 인하여 스토어에 상태값이 저장된다.

### Action

디스패치의 파라미터로 전달될 데이터이다. 액션은 상태값이 어떻게 변할지 행동을 적어놓은 객체로, 나중에 리듀서가 액션을 전달받으면 액션의 값에 따라서 다른 작업을 하게 된다. 액션에는 규칙이 몇가지있는데, 액션은 무조건 객체여야한다. 그리고 액션 객체에는 `type` 프로퍼티를 무조건 가지고 있어야한다. (데이터 구분용, 스토어엔 저장안됨)

```jsx
{
  type: 'ACTION_CHANGE_USER', // 필수
  payload: { // 옵션
    name: '하나몬',
    age: 100
  }
}
```

### Subscribe

스토어의 데이터가 변할때마다 실행되는 메서드이다.

### Provider

Provider는 우리의 App이 Redux store에 접근할 수 있도록 해준다. Provider 컴포넌트로 App을 감싸주고 store속성 값에 생성한 Redux store를 넣어주면 된다.

```bash
import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import store from './store'

import App from './App'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
```

### Connect

React Redux는 connect() 함수를 제공하여 우리의 컴포넌트를 store에 연결할 수 있도록 해준다. connect는 HOC(Higher-Order Component) 패턴이라고 하며 HOC란 컴포넌트를 특정 함수로 감싸서 특정 값 또는 함수를 props로 받아와서 사용할 수 있게 해주는 패턴이다.

connect의 인수로는 mapStateToProps과 mapDispatchToProps를 받는다. mapStateToProps는 컴포넌트에 props로 넣어줄 리덕스 스토어의 상태에 관련된 함수이고, mapDispatchToProps는 컴포넌트에 props로 넣어줄 액션을 디스패치 함수에 관련된 함수이다.

```bash
import { connect } from 'react-redux'
import { increment, decrement, reset } from './actionCreators'

// const Counter = ...

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    counter: state.counter,
  }
}

const mapDispatchToProps = { increment, decrement, reset }

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
```

### Selector

[상태관리 Redux (3)](https://velog.io/@jay/state-management-redux-3)

### Immutable Data

![Untitled](Chapter%206%20%E1%84%89%E1%85%A1%E1%86%BC%E1%84%90%E1%85%A2%E1%84%80%E1%85%AA%E1%86%AB%E1%84%85%E1%85%B5%20%E1%84%85%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%87%E1%85%B3%E1%84%85%E1%85%A5%E1%84%85%E1%85%B5%20Redux%2011efe939a7594522b60a64bf22f6f12e/Untitled.png)

### Thunk

[4. redux-thunk · GitBook](https://react.vlpt.us/redux-middleware/04-redux-thunk.html)

## useSelector

## Redux DevTools

## Recoil

### Atom

atom은 하나의 상태라고 볼 수 있다. 컴포넌트가 구독할 수 있는 React state라고 생각하면 된다. atom의 값을 변경하면 그것을 구독하고 있는 컴포넌트들이 모두 다시 렌더링된다. atom을 생성하기 위해 어플리케이션에서 고유한 키 값과 디폴트 값을 설정해야한다. 디폴트 값은 정적인 값, 함수 또는 심지어 비동기 함수(나중에 지원 예정)가 될 수 있다.

```bash
export const nameState = atom({
  key: 'nameState',
  default: 'Jane Doe'
});
```

**useRecoilState —** atom의 값을 구독하여 업데이트할 수 있는 hook. `useState`와 동일한 방식으로 사용할 수 있다.

**useRecoilValue —** setter 함수 없이 atom의 값을 반환만 한다.

**useSetRecoilState —** setter 함수만 반환한다.

```jsx
import {nameState} from './someplace'
// useRecoilState
const NameInput = () => {
  const [name, setName] = useRecoilState(nameState);
  const onChange = (event) => {
   setName(event.target.value);
  };
  return <>
   <input type="text" value={name} onChange={onChange} />
   <div>Name: {name}</div>
  </>;
}
// useRecoilValue
const SomeOtherComponentWithName = () => {
  const name = useRecoilValue(nameState);
  return <div>{name}</div>;
}
// useSetRecoilState  
const SomeOtherComponentThatSetsName = () => {
  const setName = useSetRecoilState(nameState);
  return <button onClick={() => setName('Jon Doe')}>Set Name</button>;
}
```

### Selector

seletor는 상태에서 파생된 데이터로, 다른 atom에 의존하는 동적인 데이터를 만들 수 있게 해준다. Recoil의 selector는 기존에 우리가 알던 selector의 개념과는 조금 다르다. Redux의 `reselect`와 MobX의 `@computed`처럼 동작하는 "get" 함수를 가지고 있다. 하지만 하나 이상의 atom을 업데이트 할 수 있는 "set" 함수를 옵션으로 받을 수 있다. 

[Recoil - 또 다른 React 상태 관리 라이브러리?](https://ui.toast.com/weekly-pick/ko_20200616)

# ✅ 실습 체크리스트

---

- [x]  [redux를 활용하여 To-do list 구현해보기](https://react.vlpt.us/redux/07-implement-todos.html)

# ☑️ 실습 인증 파트

---

- [redux를 활용하여 To-do list 구현해보기](https://react.vlpt.us/redux/07-implement-todos.html)
    
    

# 🔥 미션

---

1. To-do list 뿐만 아니라 여러분들이 만들었던 웹서비스에 Redux를 사용하여 상태 관리를 해보세요!

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

- Recoil이라는 상태 라이브러리가 있는데, 요즘 핫한 기술이니 한번 찾아보시고 redux와의 차이점을 이해해보세요!
- 기존 css에서 상태값에 따라 스타일이 다를 때 어떻게 구현할 때 비효율이 있었나요? 있었다면 무엇이었나요?

# 🤔 참고 자료

---

[Redux(리덕스)란? (상태 관리 라이브러리) - 하나몬](https://hanamon.kr/redux란-리덕스-상태-관리-라이브러리/)

[6. 리덕스 개발자도구 적용하기 · GitBook](https://react.vlpt.us/redux/06-redux-devtools.html)

[리덕스(Redux)를 왜 쓸까? 그리고 리덕스를 편하게 사용하기 위한 발악 (i)](https://velopert.com/3528)