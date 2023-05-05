# Chapter 5. 라이프 사이클(useEffect), 훅

# 📝 학습 목표

---

1. 라이프 사이클(생명주기)을 왜 쓰는건지 이해한다.
2. useEffect, useRef의 사용용도를 이해한다.

# 🎯 핵심 키워드

---

<aside>
💡 주요 내용들에 대해 조사해보고, 자신만의 생각을 통해 정리해보세요!
레퍼런스를 참고하여 정의, 속성, 장단점 등을 적어주셔도 됩니다.
조사는 공식 홈페이지 **Best**, 블로그(최신 날짜) **Not Bad**

</aside>

## Life Cycle

![https://blog.kakaocdn.net/dn/Vp5XH/btrJwYsaH3H/BqQ17RT04U7lDl8XxPK9Tk/img.png](https://blog.kakaocdn.net/dn/Vp5XH/btrJwYsaH3H/BqQ17RT04U7lDl8XxPK9Tk/img.png)

### Mounting

- constructor : 컴포넌트를 만들면서 가장 먼저 실행되는 메서드. 함수형에서는 useState hook을 써서 초기 상태를 설정할 수 있다.
- getDerivedStateFromProps : 리액트 16.3 버전 이후에 생긴 메서드이다. getDerivedStateFromProps는 props로 받아 온 값을 state에 동기화시키는 용도로 사용하며, 컴포넌트가 마운트 될 때와 업데이트될 때 호출된다. getDerivedStateFromProps는 최초 마운트 시와 갱신 시 모두에서 render 메서드를 호출하기 직전에 호출된다. state를 갱신하기 위한 객체를 반환하거나, null을 반환하여 아무것도 갱신하지 않을 수 있다. 처음 렌더링 되기 전에도 실행되고, 리렌더되게 전에도 매번 실행된다.
- render : 컴포넌트를 **렌더링 할 때 필요한 메서드로 유일한 필수 메서드**이다. 함수형 컴포넌트에서는 render없이 컴포넌트 렌더링을 할 수 있다.
- componentDidMount : 컴포넌트의 첫 번째 렌더링이 마치고 나면 호출되는 메서드이다. 이 메서드가 호출되는 시점에는 우리가 만든 컴포넌트가 화면에 나타난 상태이다. 여기선 외부 라이브러리 연동하거나 해당 컴포넌트에서 필요로 하는 데이터를 요청하기 위해 axios, fetch 등을 통하여 데이터를 요청하기, DOM의 속성을 읽거나 직접 변경하는 작업을 진행한다. 함수형에서는 useEffect를 사용하면 된다.

### Updating

- getDerivedStateFromProps : 마운트에서 설명했듯이 리렌더 되기 전에 실행된다. 컴포넌트의 props 나 state 가 바뀌었을 때도 이 메서드가 호출된다.
- shouldComponentUpdate : 이 메서드는 props나 state를 변경했을 때, 리 렌더링을 할지 말지 결정하는 메서드이다. 이 메서드에서는 반드시 true나 false를 반환해야 하며, 이 메서드는 **목적은 오직 성능 최적화**만을 위한 것이다. 렌더링 목적을 방지하는 목적으로 사용하게 된다면 버그로 이어질 수 있다. 클래스형도 보통은 [PureComponent](https://ko.reactjs.org/docs/react-api.html#reactpurecomponent)를 추천한다고 하고, Hooks에서도 props는 React.memo, state는 useMemo를 활용하면 렌더링 성능을 개선할 수 있다.
- render : 업데이트 될 때의 render를 리렌더라고 부른다.
- getSnapshotBeforeUpdate : 이 메서드는 render에서 만들어진 결과가 브라우저에 실제로 반영되기 직전(컴포넌트에 변화가 일어나기 직전의 DOM 상태)의 DOM 상태를 가져와서 특정 값을 반환하면 그다음 발생하게 되는 componentDidUpdate 함수에서 받아와서 사용을 할 수 있다. 함수형에서는 아직 이 기능을 대체할만한 hook이 없다고 한다.
- componentDidUpdate : componentDidUpdate는 리 렌더링이 완료한 후 실행합니다, 화면에 우리가 원하는 변화가 모두 반영되고 난 뒤 호출되는 메서드입니다. 3번째 파라미터로 getSnapshotBeforeUpdate에서 반환한 값을 조회할 수 있다.

### Unmounting

언마운트라는것은, 컴포넌트가 화면에서 사라지는 것을 의미합니다. 언마운트에 관련된 생명주기 메서드는 componentWillUnmount 하나이다.

- componentWillUnMount : 이 메서드는 컴포넌트가 화면에서 사라지기 직전(DOM에서 제거할 때)에 호출된다. componentDidMount에서 등록한 이벤트가 있다면 여기서 제거 작업을 해야한다. 함수형 컴포넌트에서는 useEffect CleanUp 함수를 통해 해당 메서드를 구현할 수 있다.

### React가 리렌더링을 하는 조건

- props가 변경되었을 때
- state가 변경되었을 때
- 부모 컴포넌트가 렌더링되었을 때
- forceUpdate() 를 실행하였을 때

## useEffect

useEffect는 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 실행할 수 있도록 하는 hook이다. mount 됐을 때, update 됐을 때, unmount 됐을 때 특정 작업을 할 수 있다.

1. 의존성 배열 X (mount, update)
    
    ```jsx
    /* 렌더링이 될 때 마다 실행된다. */
    useEffect(() => {
        console.log("useEffect!!", count);
      });
    ```
    
2. 의존성 배열을 [] 빈 배열로 넘기면, 최초 렌더링 시에만 실행된다. (mount)
    
    ```jsx
    /* 최초 렌더링 시에만 실행된다. */
    useEffect(() => {
        console.log("useEffect!!", count);
      }, []);
    ```
    

1. 의존성 배열 안의 값이 변하면 실행된다. (update)
    
    ```jsx
    /* 특정 값이 변경될 때에만 실행된다. */
    useEffect(() => {
        console.log("useEffect!!", count);
      }, [count]);
    ```
    
2. clean up 함수 (unmount)
    
    ```jsx
    useEffect(() => {
        console.log("useEffect!!", count);
    
        return () => {
          // clean up
          console.log("cleanup!!", count);
        }
      }, [count]);
    ```
    
    만약 컴포넌트가 마운트 될 때 이벤트 리스너를 통해 이벤트를 추가하였다면 컴포넌트가 언마운트 될 때 이벤트를 삭제 해주어야 한다. 그렇지 않으면 컴포넌트가 리렌더링 될 때마다 새로운 이벤트 리스너가 핸들러에 바인딩 될 것이다. 이는 자주 리렌더링 될 경우 메모리 누수가 발생할 수 있다.
    

## useContext

일반적으로 부모 컴포넌트에서 자식 컴포넌트로 props를 통해 데이터를 전달하는데, 만약 그 깊이가 깊어질수록 거쳐가야 하는 컴포넌트들이 많아지고 코드를 반복적으로 작성해야 한다. 변수명이라도 바뀌면 거쳐가는 모든 컴포넌트에서 변수명을 수정해야 하는 등 비효율적인 문제가 있다.

Context를 사용하게 되면 전역적으로 데이터를 공유하기 때문에, 중간에 거쳐가는 컴포넌트들을 건너뛰고 데이터가 필요한 컴포넌트에서 바로 사용이 가능하게 된다. useContext는 이런 context를 좀 더 편하게 사용할 수 있게 해주는 hook이다.

## useRef

useRef는 **저장공간 또는 DOM요소에 접근하기 위해 사용되는 React Hook**이다. 여기서 Ref는 reference, 즉 참조를 뜻한다. 우리가 자바스크립트를 사용 할 때에는, 우리가 특정 DOM 을 선택하기 위해서 querySelector 등의 함수를 사용한다. React를 사용하는 프로젝트에서도 가끔씩 DOM 을 직접 선택해야 하는 상황이 필요하다. 그럴때 우리는 useRef라는 React Hook을 사용한다.

> `useRef` 는 .current 프로퍼티로 전달된 인자(initialValue)로 초기화된 **변경 가능한 ref 객체**를 반환합니다. 반환된 객체는 컴포넌트의 전 생애주기를 통해 유지될 것입니다.
> 

useRef로 관리하는 값은 값이 변해도 화면이 렌더링되지 않는다. (useState 였으면 화면이 렌더링 되었을 것이다.)

```jsx
//변수 관리 예시
function App() {
  const [count, setCount] = useState(1);
  const renderingCount = useRef(1);

  useEffect(() => {
    console.log("renderingCount : ", renderingCount.current);
    ++renderingCount.current; // ref 객체는 리렌더링에 포함되지 않는다.
  });

  return (
    <div>
      <div>Count : {count}</div>
      <button onClick={() => setCount(count + 1)}> count up </button>
    </div>
  );
}
```

```jsx
//Dom 요소 선택 예시
function App() {
  const inputRef = useRef();

  function focus() {
    inputRef.current.focus();
    console.log(inputRef.current);
  }

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="아이디 또는 이메일" />
      <button>Login</button>
      <br />
      <button onClick={focus}>focus</button>
    </div>
  );
}

export default App;
```

## useMemo

useMemo는 리액트에서 컴포넌트의 성능을 최적화 하는데 사용되는 훅이다.

useMemo에서 memo는 **memoization**을 뜻하는데 이는 그대로 해석하면 **‘메모리에 넣기’**라는 의미이며 컴퓨터 프로그램이 동일한 계산을 반복해야 할 때, 이전에 계산한 값을 메모리에 저장함으로써 동일한 계산의 반복 수행을 제거하여 프로그램 실행 속도를 빠르게 하는 기술이다.

쉽게 말해 동일한 값을 반환하는 함수를 반복적으로 호출해야한다면 처음 값을 계산할 때 해당 값을 메모리에 저장해 필요할 때마다 다시 계산하지 않고 메모리에서 꺼내서 재사용하는 것이다.

리액트에서 함수형 컴포넌트는 렌더링 => 컴포넌트 함수 호출 => 모든 내부 변수 초기화의 순서를 거친다. 즉, 렌더링 될 때마다 변수&함수가 불필요하게 재호출된다는 것인데 만약 무겁고 복잡한 함수가 있다면 매우 비효율적일 것이다. 그렇기 때문에 우리는 `useMemo` 훅을 사용하는 것인데 `useMemo`를 사용하면 렌더링 => 컴포넌트 함수 호출 => memoize된 함수 재사용하는 순서를 거친다.

`useMemo`는 처음에 계산된 값을 메모리에 저장해, 컴포넌트가 계속 렌더링되어도 함수를 다시 호출하지 않고 메모리에 저장되어있는 계산된 값을 가져와 재사용할 수 있게 해준다.

`useMemo`는 `useEffect`처럼 첫 번째 인자로 콜백 함수, 두 번째 인자로 의존성 배열(dependancyArray)을 받는다. 의존성 배열 안에있는 값이 업데이트 될 때에만 콜백 함수를 다시 호출하여 메모리에 저장된 값을 업데이트 해준다. 만약 빈 배열을 넣는다면 `useEffect`와 마찬가지로 마운트 될 때에만 값을 계산하고 그 이후론 계속 memoization된 값을 꺼내와 사용한다.

```jsx
const value = useMemo(() => {
    return calculate();
},[item])
```

[[React] useMemo란?](https://velog.io/@jinyoung985/React-useMemo란)

[[React] useMemo 사용법 및 예제](https://itprogramming119.tistory.com/entry/React-useMemo-사용법-및-예제)

## useCallback

`useMemo`와 마찬가지로 메모제이션 기법을 이용한 Hook으로, **함수의 재사용**을 위해 사용하는 Hook이다. 특정 함수를 새로 만들지 않고 재사용하고 싶을 때 useCallback을 사용한다.

```jsx
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
); 
// a 또는 b가 바뀌었을 때 함수가 리렌더링 된다.
```

React는 기본적으로 JavaScript의 문법을 따라가며, JavaScript에서 함수는 객체이다. 객체는 메모리에 저장할 때, 값이 아닌 주소를 저장하기 때문에 반환 값이 같더라도 메모리 주소 값이 다르기 때문에 같다고 볼 수 없다. 따라서, 새로 만들어 호출된 함수는 기존의 함수와 같은 함수가 아니다.

그러나 `useCallback` 을 이용해 함수 자체를 저장해서 재사용 시, **메모리 주소 값을 저장했다가 재사용하는 것과 같다**고 볼 수 있기 때문에 다음과 같은 목적으로 유용하게 쓸 수 있다.

단순히 컴포넌트 내에서 함수를 반복해서 생성하지 않기 위해 사용하는 것이 아니라,

- React 컴포넌트 함수 내에서 다른 함수의 인자로 함수를 넘길때
- 자식 컴포넌트의 prop으로 함수를 전달해줄때

재실행이 일어나는 횟수가 줄어들기 때문에 예상치 못한 성능 문제를 방지할 수 있다.

## useState

일반적으로 컴포넌트의 내부에서 변경 가능한 데이터를 관리해야할 때에 사용한다. 프로퍼티(props)의 특징은 컴포넌트 내부에서 값을 바꿀 수 없다는 것이었다. 하지만 값을 바꿔야 하는 경우도 분명 존재하며, 이럴때 state라는 것을 사용한다. 값을 저장하거나 변경할 수 있는 객체로 보통 이벤트와 함께 사용된다.

즉, 컴포넌트에서 동적인 값을 state(상태)라고 부르며, 동적인 데이터를 사용할 때 사용된다.

아래와 같은 방법으로 선언한다. 초기값은 생략 가능하다.

```jsx
const [state, setState] = useState(initialState);
```

```jsx
import React, { useState } from 'react';

const Main = () => {
    const [ cnt, setCnt ] = useState(0)
    const updateCnt = () => setCnt(cnt + 1);
    const clearCnt = () => setCnt(0);
    return (
        <div>
            클릭한 횟수는 {cnt}번 입니다.
            <div>
                <button onClick={updateCnt}> 클릭해 보세요! </button>
                <button onClick={clearCnt}> 초기화 하기! </button>
            </div>
        </div>
    );
};

export default Main;
```

## useDebugValue

커스텀 훅 안에서 useDebugValue 훅을 사용하면 리액트 개발자 도구에 풍부한 정보 제공이 가능하다. 디버깅할 때 더 편리해진다. 

이 디버그 정보는 React 개발 도구 내에 표시된다. 이 도구는 모든 주요 브라우저에서 다운로드할 수 있는 확장 기능의 일부이며, 콘솔/네트워크 정보에 액세스하는 것과 마찬가지로 브라우저의 개발 도구 내에서 탭으로 액세스할 수 있다.

```jsx
export default function useUser() {
  const [user, setUser] = useState(getUser())

  useDebugValue(user == null ? 'No User' : user.name)

  return [user, setUser]
}
```

# ✅ 실습 체크리스트

---

- [x]  useEffect를 사용하여 각 단계별 생명주기를 구현 해보기

# ☑️ 실습 인증 파트

---

- useEffect를 사용하여 각 단계별 생명주기를 구현 해보기
    
    

# 🔥 미션

---

1. 생명주기를 적용하여 여러분이 만드신 웹 서비스 디벨롭하기.
    1. 내용들이 어려워 이전 미션들을 제대로 수행하지 못했을 수 있습니다! 이번 미션이 빨리 끝나면 이전 미션들도 다시 복습 겸 진행해보세요 🙂 현업에서 많이 사용하는 개념들이니 익숙해질 때 까지 익히셔야 합니다.

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

- 불가피하게 자식 컴포넌트에서 부모 컴포넌트의 데이터를 변경하려면 어떻게 해야할까?
    
    

# 🤔 참고 자료

---

[Strict 모드 – React](https://ko.reactjs.org/docs/strict-mode.html)

[https://youtu.be/QQYeipc_cik](https://youtu.be/QQYeipc_cik)

[React Hooks: useRef 사용법](https://www.daleseo.com/react-hooks-use-ref/)

[](https://www.zerocho.com/category/React/post/579b5ec26958781500ed9955)