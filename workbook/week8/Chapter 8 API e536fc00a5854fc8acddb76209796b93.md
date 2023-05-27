# Chapter 8. API

# 📝 학습 목표

---

1. API에 대해 이해하고, 서버와의 소통을 통해 웹서비스에서 원하는 데이터 값을 보여줄 수 있다.
2. HTTP에 대해 이해하고, http 메서드를 정확히 사용하여 서버와 통신할 수 있다.

# 🎯 핵심 키워드

---

<aside>
💡 주요 내용들에 대해 조사해보고, 자신만의 생각을 통해 정리해보세요!
레퍼런스를 참고하여 정의, 속성, 장단점 등을 적어주셔도 됩니다.
조사는 공식 홈페이지 **Best**, 블로그(최신 날짜) **Not Bad**

</aside>

## API

application programming interface의 약자로, API는 프로그램끼리 서로 소통하도록 도와준다. API를 사용하는 사람은 API의 작동 방식을 알 수 없기 때문에 API를 쉽게 이해하지 못 할 수도 있다.

REST API라는 것이 있는데, 여기서 REST는 representational state transfer의 약자로 설계 철학을 의미한다. REST API는 URL에서 동사를 제외하고, HTTP의 메서드(GET, POST, PUT, DELETE)를 사용하여 나타낸다.  URL 1개로 조회, 생성, 수정, 삭제가 모두 가능하다. (GET 방식에서는 쿼리를 도입하여 추가 정보를 전할 수도 있다)

## 서버

서버는 서비스를 제공하는 컴퓨터로 그냥 컴퓨터이다. (보통 모니터가 없거나 1개만 있다) 항상 인터넷에 연결되어 있어야 하며, 저장소와 메모리의 크기가 매우 커야 한다. 클라이언트에서 웹 주소를 보내오기를 항상 기다린다. 웹 주소를 보내오면, 그에 맞는 웹 페이지를 꺼내서 보내줘야 한다.

⇒ 서버는 항상 켜져있는 컴퓨터이면서, 인터넷에 연결되어 있고, 접속 요청에 응답하는 컴퓨터다

## 클라이언트

클라이언트는 네트워크를 이용하여 서버측에 서비스를 요청하는 컴퓨터이다.

[클라이언트와 서버가 뭘까?](https://contents.premium.naver.com/3mit/wony/contents/221026180431854iw)

## Web Server

HTTP를 다른 말로는 WEB 서버라고도 한다. 웹 서버라는 것은 웹을 제공하는 서버라는 뜻이고, HTTP 서버라는 것은 HTTP라는 웹서비스를 사용할 수 있도록 도와주는 공통된 약속 규약을 사용하는 서버라는 뜻이다. 그래서 웹 서버라고 부르고 HTTP 서버라고도 한다.

## Backend Language

[The Best 10 Backend Programming Languages](https://blog.back4app.com/backend-programming-languages-list/)

## DBMS

**Database Management System**: 데이터베이스 관리 시스템

데이터베이스를 ‘데이터의 집합’이라고 정의한다면, 이런 **데이터베이스를 관리하고 운영하는 소프트웨어를 DBMS**라고 한다. 다양한 데이터가 저장되어 있는 데이터베이스는 여러 명의 사용자나 응용 프로그램과 공유하고 동시에 접근이 가능해야 한다.

DBMS의 종류로는 **대표적으로 MySQL, 오라클(Oracle), SQL 서버, MariaDB** 등이 있다.

DBMS의 유형은 계층형(Hierarchical), 망형(Network), 관계형(Relational), 객체지향형(Object-Oriented), 객체관계형(Object-Relational) 등으로 분류된다. **현재 사용되는 DBMS 중에는 관계형 DBMS가 가장 많은 부분을 차지하며**, MySQL도 관계형 DBMS에 포함된다.

[[데이터베이스 이해하기] Database(DB), DBMS, SQL의 개념](https://hongong.hanbit.co.kr/데이터베이스-이해하기-databasedb-dbms-sql의-개념/)

## HTTP

**HyperText Transper Protoco**l : 인터넷에서 정보를 주고 받기 위한 프로토콜

HTTP는 stateless하다. 서버가 데이터를 우리에게 전부 보내면, 우리와의 연결 상태를 끊고 누구인지 잊어버린다. (근데 가끔은 우리가 누구인지 기억해야 하기도 해서 쿠키를 쓴다.)

### GET

GET은 보통 조회를 할 때 사용한다.

### POST

POST는 보통 데이터를 추가할 때 사용한다.

### PUT

PUT은 데이터를 전체 수정할 때 사용한다.

### PATCH

PATCH는 데이터를 부분 수정할 때 사용한다.

### DELETE

DELETE는 데이터를 삭제할 때 사용한다.

[HTTP request methods - HTTP | MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)

## packet

HTTP 통신으로 보내는 패킷은 크게 헤더(Header)와 바디(Body)부분으로 나뉜다. 헤더는 데이터 이외에 HTTP 선두에 삽입되는 부분을 말하며, 목적에따라 응답/요청 헤더로 나뉜다. 바디는 실제 데이터 부분이다. 페이로드(Payload)라고도 하며 html 텍스트 이외에도 이미지등과 같은 이진데이터도 가능하다.

## Path Variable

query string 말고도 데이터를 넘기는 방법에는 path variable이 있다.

Path Variable 은 이름에서도 알 수 있듯이 경로를 변수로서 사용한다. 게시물이 존재하며 각각의 게시물을 볼 수 있는 경우를 생각해보면, 각각의 게시물을 보기 위해서는 게시물의 id를 서버에 넘겨줘야 한다.

이를 Path Variable 를 사용하면 다음과 같이 나타낸다.

```
/post/6
```

## Query String

사용자가 입력 데이터를 전달하는 방법중의 하나로, url 주소에 미리 협의된 데이터를 파라미터를 통해 넘기는 것을 말한다. 

Query Parameter 은 경로 뒤에 입력 데이터를 함께 제공하는 식으로 사용한다.

```
/post?post_id=6
```

예시는 위와 같다. ? 이후의 부분을 query string이라고 하며 뒤는 key, value의 쌍으로 이루어진다. 다음과 같이 &로 연결하여 여러 개의 데이터를 넘길 수도 있다.

```
/post?post_id=6&key1=value1
```

[[Web] Path Variable VS Query Parameter](https://ssungkang.tistory.com/entry/Web-Path-Variable-VS-Query-Parameter)

## Axios

Axios는 브라우저, Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리이다. 쉽게 말해서 backend, frontend 통신을 쉽게 하기 위해 Ajax와 더불어 사용한다. 자바스크립트에는 fetch api 가 있지만, 프레임워크에서 ajax를 구현할때는 axios를 쓴다.

- 운영 환경에 따라 브라우저의 XMLHttpRequest 객체 또는 Node.js의 http api 사용
- Promise(ES6) API 사용
- 요청과 응답 데이터의 변형
- HTTP 요청 취소
- HTTP 요청과 응답을 JSON 형태로 자동 변경

axios는 별도의 설치가 필요하다는 단점이 있지만 그것을 커버할 만한 fetch 보다 많은 기능 지원과 문법이 조금이나마 간소화 된다는 장점이 있다.

## Fetch

Fetch API는 네트워크 요청을 위해 `fetch()`라는 메서드를 제공하는 인터페이스입니다. 모던 브라우저에 내장되어 있어 따로 설치할 필요가 없다. Fetch 와 axios는 모두 promise 기반의 HTTP 클라이언트입니다. 즉 이 클라이언트를 이용해 네트워크 요청을 하면 이행(resolve) 혹은 거부(reject)할 수 있는 promise가 반환된다.

![Untitled](Chapter%208%20API%20e536fc00a5854fc8acddb76209796b93/Untitled.png)

## CORS

[[Web] CORS (Cross Origin Resource Sharing) 이해하기](https://it-eldorado.tistory.com/163)

# 📢 학습 후기

---

- 이번 주차 워크북을 해결해보면서 어땠는지 회고해봅시다.
- 핵심 키워드에 대해 완벽하게 이해했는지? 혹시 이해가 안 되는 부분은 뭐였는지?

# ✅ 실습 체크리스트

---

- [x]  OPEN API 활용하여 프로그래밍 하기(SDK 사용 지양)
    - [공공데이터포털](https://www.data.go.kr/)에서 다양하고 재미있는 데이터들이 많으니 어떤 데이터를 사용할지부터 어떤 서비스를 제공할지까지 자유롭게 사고하여 여러분이 만족할만한 웹 서비스를 만들어보세요 ☺️

# ☑️ 실습 인증 파트

---

- OPEN API 활용하여 프로그래밍 하기(SDK 사용 지양)

# 🔥 미션

---

1. 소셜 로그인 한가지 이상 구현해보기 (이름, 이메일 값 가져오기)
    1. 카카오, 페이스북, 애플(비추천) 등등
    2. 계정 정보까지 가져오는걸 목표로 해보자구요! (데이터 관리도 필수!)

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

- 로그인이나 다른 API 접근할 때 아무나 접근할 수 있을까요? 권한 설정은 어떻게 하는걸까요?

# 🤔 참고 자료

---

[https://www.youtube.com/watch?v=CRKk0Baj9eU](https://www.youtube.com/watch?v=CRKk0Baj9eU)

컴공선배가 말하는 API!

[https://www.youtube.com/watch?v=2j9uMMK2d-M&embeds_euri=https://softsquared.notion.site/&feature=emb_imp_woyt](https://www.youtube.com/watch?v=2j9uMMK2d-M&embeds_euri=https://softsquared.notion.site/&feature=emb_imp_woyt)

컴공선배가 1분요약 해준다! CRUD