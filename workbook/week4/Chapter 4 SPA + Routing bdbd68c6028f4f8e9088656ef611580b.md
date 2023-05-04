# Chapter 4. SPA + Routing

# 📝 학습 목표

---

1. SPA의 장단점이 무엇인지 이해한다.
2. SSR / CSR의 차이점과 장단점을 파악한다.

# 🎯 핵심 키워드

---

<aside>
💡 주요 내용들에 대해 조사해보고, 자신만의 생각을 통해 정리해보세요!
레퍼런스를 참고하여 정의, 속성, 장단점 등을 적어주셔도 됩니다.
조사는 공식 홈페이지 **Best**, 블로그(최신 날짜) **Not Bad**

</aside>

## SPA

SPA는 'Single Page Application'의 약자로 단일 페이지로 구성된 웹 애플리케이션을 말한다. SPA가 등장하기 전 웹 애플리케이션을 구성하던 방식인 서버 사이드 렌더링(SSR)의 경우, 화면에 보여질 리소스를 서버로 요청하고, 서버로 부터 받아온 리소스를 렌더링 했다.

하지만 SPA의 경우 렌더링의 역할을 서버에게 넘기지 않고 브라우저에서 처리하는 방식이다. 웹 애플리케이션에 필요한 모든 정적 리소스를 최초에 한번 다운로드 하고, 이후 새로운 페이지 요청 시 페이지 갱신에 필요한 데이터만을 전달받아 페이지를 갱신하게 된다.

### SPA 장점

- 새로운 페이지 요청 시 전체를 렌더링 하지 않고 변경되는 부분만 갱신하기 때문에 **전체적인 트래픽 감소**와 **렌더링에서 좋은 효율**을 가진다.
- 새롭게 갱신되는 부분만 렌더하기 때문에 새로고침이 발생하지 않아 화면 깜빡임 없이 **빠른 화면 이동**이 가능하다.
- 트래픽의 감소와 속도,반응성의 향상으로 인해 **앱처럼 자연스러운 사용자 경험(UX)를 제공**하며 모바일 사용이 증가하는 시점에 이는 큰 장점이 된다.
- **모듈화** 또는 **컴포넌트별 개발**이 용이하다.
- 백엔드와 프론트엔드가 비교적 명확하게 구분된다.

### SPA 단점

- 웹 애플리케이션에 필요한 정적 리소스를 한번에 다운로드 하기 때문에 초기 구동 속도가 느리다.
- SPA 구조 상 데이터 처리를 클라이언트에서 하는 경우가 많은데, 해당 로직들은 JavaScript를 통해 구현되므로 코드가 외부에 노출되는 보안적인 문제가 있다.
- 검색엔진 최적화(SEO)가 어렵다.
⇒ 검색 엔진이 크롤링할 때 JavaScript를 실행하지 않고 어플리케이션이 로드되기 전의 빈 상태의 코드를 크롤링하기 때문에 인덱싱이 제대로 이루어지지 않는다.

### Optimizing performance (성능 최적화)

[React 의 성능을 조금 이라도 올려보자 (Performance Optimize)](https://pks2974.medium.com/react-의-성능을-조금-이라도-올려보자-performance-optimize-f1a51b8c406c)

## SSR

**React**: CSR(Client-Side-Rendering)

**Next.js**: SSR(Sever-Side-Rendering), SSG(Static-Site-Generation)

### SSR

SSR은 Server Side Rendering 약자로 처음 클라이언트가 접속했을때 브라우저에서 자바스크립트 코드를 다운로드 받아 해석 할 때까지 기다리지 않고 **서버에서 보여질 HTML을 미리 준비해 클라이언트한테 응답해주는 방식**을 서버 사이드 랜더링이라고 한다. 서버쪽에서 렌더링 준비를 끝마친 상태로 클라이언트에게 전달하기 때문에, JS가 다운로드 되는 동안 사용자는 무언가를 볼 수 있다.

![Untitled](Chapter%204%20SPA%20+%20Routing%20bdbd68c6028f4f8e9088656ef611580b/Untitled.png)

### Next.js

Next.js는 브라우저에 렌더링 할때 기본적으로 **pre-rendering(사전 렌더링)**을 해준다. 여기서 사전 렌더링이란 Server단에서 DOM 요소들을 Build하여 HTML 문서를 렌더링하는 것을 말한다.
서버에서 pre-rendering하는 것까지가 Next.js의 특징인 것이고, pre-rendering을 **동적**으로 해서 페이지를 생성하느냐, **정적**으로 페이지를 생성하느냐의 차이가 SSR(동적)과 SSG(정적)의 차이라고 생각면 된다.

## CSR

CSR은 Client Side Rendering의 약자로 SSR과 달리 **렌더링이 클라이언트 쪽에서 일어난다.** 즉, 서버는 요청을 받으면 클라이언트에 HTML과 JS를 보내, 클라이언트는 이를 받아 렌더링을 시작한다. SSR과 달리 클라이언트 측에서 렌더링을 하기 때문에 HTML과 JS를 다운받는 동안 유저는 아무것도 볼 수 없다.

![Untitled](Chapter%204%20SPA%20+%20Routing%20bdbd68c6028f4f8e9088656ef611580b/Untitled%201.png)

CDN: aws의 cloudflare를 생각하면 된다. 엔드 유저의 요청에 '물리적'으로 가까운 서버에서 요청에 응답하는 방식

[https://hahahoho5915.tistory.com/52](https://hahahoho5915.tistory.com/52)

## React-Router-dom

라우팅이란 사용자가 요청한 URL에 따라 해당 URL에 맞는 페이지를 보여주는 것이다. 리액트에는 다양한 라우팅 관련 라이브러리들이 있지만, react-router-dom이 많이 쓰인다.

- react-router - 웹&앱
- react-router-dom - 웹
- react-router-native -앱

우리는 웹을 만들 예정이기 때문에 **react-router-dom**를 사용하면 된다.

```bash
# yarn을 써도 된다.
npm i react-router-dom
```

## Route연결

- **BrowserRouter** - history API를 사용해 URL과 UI를 동기화하는 라우터이다.
- **Route** - 컴포넌트의 속성에 설정된 URL과 현재 경로가 일치하면 해당하는 컴포넌트, 함수를 렌더링한다.
- **Link** - 'a'태그와 비슷합니다. to속성에 설정된 링크로 이동한다. 기록이 history스택에 저장된다.
- **Switch** - 자식 컴포넌트 Route또는 Redirect중 매치되는 첫 번째 요소를 렌더링한다. Switch를 사용하면 BrowserRouter만 사용할 때와 다르게 **하나**의 매칭되는 요소만 렌더링한다는 점을 보장해준다.사용하지 않을 경우 매칭되는 모두를 렌더링한다.

```jsx
// App.js
import React ,{Component} from 'react';
import { BrowserRouter,Route, Link,Switch } from "react-router-dom";
import Rooms from './Rooms'            // 새로 만들 컴포넌트
class App extends Component {
  render() {
    return (
      <BrowserRouter>            // (1)
        <div style={{padding:20, border:'5px solid gray'}}>
          <Link to="/">홈</Link><br/>    //  (2)
          <Link to="/photo">사진</Link><br/>
          <Link to="rooms">방 소개</Link><br/>
          <Switch>                // (3)
            <Route exact path="/" component={Home}/>    (4)
            <Route path="/photo" component={Photo}/>
            <Route path="/rooms" component={Rooms}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
function Home({match}){
  return <h2>여기는 홈페이지입니다.</h2>
}
function Photo({match}) {
  return <h2>여기서 사진을 감상하세요.</h2>
}
export default App;
```

(1) 렌더링 부분을 보면 모든 태그를 BrowserRouter가 감싸고있습니다.

(2) Link는 클릭시 이동하는 url을 지정합니다.

(3) Switch태그는 Route요소들 중 매치되는 url을 렌더링해줍니다.

Switch로 감싸고 있기 때문에 Route가 중복되는 것이 있으면 첫 번 째 요소만 렌더링합니다.

(4) Route태그의 path는 매칭을 기다리는 url이며, 매칭되면 component를 렌더링합니다.

[https://velog.io/@kwonh/React-react-router-dom-시작하기](https://velog.io/@kwonh/React-react-router-dom-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0)

## Redirect

`Redirect`는 `react-router-dom`에서 `import`해서 사용한다. `Redirect` 컴포넌트는 랜더링되면 `to`로 지정된 경로로 이동한다.

```jsx
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import Links from "./components/Links"
import NavLinks from "./components/NavLinks"
import Login from "./pages/Login"
import { Redirect } from "react-router-dom"

const isLogin = true

function App() {
  return (
    <BrowserRouter>
      <Links />
      <NavLinks />
      <Switch>
        <Route
          path="/login"
          render={() => (isLogin ? <Redirect to="/" /> : <Login />)}
        />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/profile" component={Profile} />
        <Route path="/about" component={About} />
        <Route path="/" exact component={Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
```

- `Route`컴포넌트에서는 `component` 속성 말고도 `render` 속성을 사용해서 페이지 이동할 수 있다.
- `render` 속성의 `isLogin`값이 `true`이면 `/`경로로 이동하고 `false`면 `/login` 경로로 이동한다.

## History API

history API는 브라우저의 세션 기록을 조작할 수 있는 메소드를 담고 있는 객체이다. 기본적으로 뒤로가기, 앞으로 가기, 페이지 이동 등을 조작할 수 있다.

1. history.back()
뒤로가기
2. history.forward()
앞으로 가기
3. history.go()
원하는 위치의 페이지로 이동 가능. 인자로 이동할 만큼의 숫자를 넣으면 된다. 양수면 앞으로, 음수면 뒤로 페이지가 이동된다.

아래는 html5에 새로 추가된 url 변경 메소드이다. 해당 메소드를 사용하면 현재 페이지의 url을 변경할 수 있으며 페이지가 갱신되지는 않지만 실제로 페이지 이동으로 인식된다.

첫번째 인자는 데이터 객체를 전달 가능하며, history.state에 저장되어 사용 가능하다. 두번째 인자는 해당 페이지의 제목 변경의 가능한데, 브라우저에서 기능이 구현되어 있지 않아 null을 전달하면 된다. 세번째 인자는 변경할 url 주소를 넣어주면 된다. 단순한 경로 이동도 가능하고, query string도 추가할 수 있다.

1. history.pushState()
새로운 주소목록을 추가 하기 때문에 이전 url의 주소가 남아있어 브라우저의 뒤로가기 버튼이 활성화된다.
    
    ```jsx
    // 현재 url이 test라고 가정 했을 때 
    // 이전 url은 test, 현재 url은 test/pushpage로 변경된다.
    history.pushState({ data: 'testData1' }, null, '/pushpage')
    ```
    
2. history.replaceState()
pushState와 동일한 기능을 하지만, 동일한 기능을 하지만 주소목록에 추가하지 않기 때문에 뒤로가기 버튼이 활성화 되지 않는다.
    
    ```jsx
    // 현재 주소목록만 바뀌기 때문에 test에서 test/replacepage로 바뀌고
    // 이전 url인 test은 남지 않는다.
    history.replaceState({ data: 'testData2' }, null, '/replacepage')
    ```
    

## Dynamic routing

라우트 경로에 특정 값을 넣어 해당하는 페이지로 이동할 수 있게 하는 것을 **동적 라우팅**이라고 한다.

### path parameter

```
localhost:3000/product/2
localhost:3000/product/45
localhost:3000/product/125
```

2, 45, 125와 같이 라우트 경로 끝에 들어가는 각기 다른 id값들을 저장하는 매개 변수를 **Path Parameter**라고 한다.

```jsx
<Router>
	<Routes>
		<Route path='/product/:id' element={<productDetail />} />
	</Routes>
</Router>

function ProductDetail() {
	const params = useParams();
	const productId = params.id;
}
```

## Nested routes

1. 자식 Route를 가지는 부모 Route의 path 뒤에 다른 경로가 더 붙는다는 뜻으로 `/*`(와일드카드)를 붙여줘서 해당 Route 내부에서 또다른 Route가 렌더 될 수 있음을 명시한다.
    
    ![Untitled](Chapter%204%20SPA%20+%20Routing%20bdbd68c6028f4f8e9088656ef611580b/Untitled%202.png)
    
2. Router.tsx에서 자식 Route들을 부모 Route로 감싸준다.
    
    ![Untitled](Chapter%204%20SPA%20+%20Routing%20bdbd68c6028f4f8e9088656ef611580b/Untitled%203.png)
    

## 파라미터 & 쿼리

페이지 주소를 정의할 때, 유동적인 값을 전달해야할 때가 있다. 이럴때 파라미터와 쿼리로 나뉘어질 수 있다.

파라미터 - 특정 id나 이름을 가지고 조회할 때 사용
쿼리 - 특정 키워드 검색하거나, 요청할 때 필요한 옵션을 전달할 때 사용된다. ? 뒤에 쿼리 스트링을 붙이면 된다.

### 파라미터

```jsx
<Router>
  <Link to='/'>HOME</Link> <br/>
  <Link to='/hello/value1/value2'>HELLO</Link>
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/hello/:key1/:key2' component={Hello} />
  </Switch>
</Router>
```

```jsx
// hello.js

import React from 'react';

class Hello extends React.Component {
  render() {
  	const { params } = this.props.match;
    
    return(
      <div>
      	key1 : { params.key1 }, <br/>
        key2 : { params.key2 }
      </div>
    )
  }
}

export default Hello;
```

# 📢 학습 후기

---

- 이번 주차 워크북을 해결해보면서 어땠는지 회고해봅시다.
- 핵심 키워드에 대해 완벽하게 이해했는지? 혹시 이해가 안 되는 부분은 뭐였는지?

<aside>
📢

</aside>

# ✅ 실습 체크리스트

---

- [x]  react-router-dom을 이용하여 라우팅 및 페이지 이동방법을 이해하세요.
- [x]  SSR / CSR을 이용하여 각각 프로젝트에 한번씩 적용해보세요.

# ☑️ 실습 인증 파트

---

- react-router-dom을 이용하여 라우팅 및 페이지 이동방법을 이해하세요.
    
    
- SSR / CSR을 이용하여 각각 프로젝트에 한번씩 적용해보세요.
    
    

# 🔥 미션

---

1. 라우팅의 개념들을 여러분이 만드신 웹 서비스에 적용 시켜보세요.

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

- 라우팅에서 Link 태그와 useHistory를 사용하는 경우는?

# 🤔 참고 자료

---

[[React] SPA란 무엇이며 언제 사용하는지...](https://codingmania.tistory.com/328)

[[React] SPA란?](https://typeof-bong.tistory.com/19)

[리액트를 다루는 기술 [개정판]: 13.4.1 URL 파라미터](https://thebook.io/080203/ch13/04/01/)

[[React] react-router-dom 시작하기](https://velog.io/@kwonh/React-react-router-dom-시작하기)

---

Copyright © 2023 컴공선배 All rights reserved.