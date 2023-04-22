# Chapter 1. HTML + CSS + JS

# 📝 학습 목표

---

1. Web이 무엇인지 인지하고, Web에 대해 이해한다.
2. 자신이 왜 Web을 공부해야 할 지 고민해본다.
3. HTML, CSS, JavaScript가 뭔지 역할을 이해한다.

# 🎯 핵심 키워드

---

## WEB

### 1. URI, URL, URN

1. **URI**
    
    Uniform Resource Locator - 자원의 위치뿐만 아니라 자원에 대한 고유 식별자
    
    > Uniform : 리소스를 식별하는 통일된 방식
    Resource : 자원, URI로 식별할 수 있는 모든 것여기서 자원은 웹 브라우저의 파일만 뜻하는 게 아니라, 실시간 교통정보 등 우리가 구분할 수 있는 것은 모든 게 리소스가 된다.
    Identifier : 다른 항목과 구분하는데 필요한 정보
    > 
    
    URI의 하위 개념으로 URL과 URN이 있다.
    
2. **URL**
    
    Uniform Resource Locator - 자원이 실재 존재하는 위치를 가리킴
    
    웹사이트 주소로 알고있지만, 컴퓨터 네트워크상의 자원을 모두 나타낸다.
    
    +) 해당 주소로 접속하려면 URL에 맞는 프로토콜(http, sftp,smp..) 을 알고, 그와 동일한 프로토콜로 접속해야 한다.
    
3. **URN**
    
    Uniform Resource Name - urn:scheme 을 사용하는 URI를 위한 역사적인 이름
    
    URN은 리소스에 이름을 부여하는 것인데, 리소스가 이름에 매핑되어있어야 하기 때문에 이름을 부여하면 거의 찾기가 힘들다. (그래서 대부분 URL만 쓴다)
    

![Untitled](Chapter%201%20HTML%20+%20CSS%20+%20JS%205ca3e3ffcfe044e1bc489e7f0eadc84c/Untitled.png)

![Untitled](Chapter%201%20HTML%20+%20CSS%20+%20JS%205ca3e3ffcfe044e1bc489e7f0eadc84c/Untitled%201.png)

[https://inpa.tistory.com/entry/WEB-🌐-URL-URI-차이](https://inpa.tistory.com/entry/WEB-%F0%9F%8C%90-URL-URI-%EC%B0%A8%EC%9D%B4)

### 2. WWW (World Wide Web)

- World Wide Web 은 (WWW, W3, The Web 이라고도 함) 인터넷을 통한 상호 연결된 웹페이지 시스템을 뜻한다.
- The Web은 HTTP 프로토콜을 기반으로 HTML로 작성된 하이퍼텍스트 페이지를 ‘웹 브라우저’라는 특정한 프로그램으로 읽을 수 있게 하도록 구성되어 있다.
- The Web은 인터넷을 통해 만들어진 수많은 어플리케이션 중에 하나이다. (The Web이 더 작은 개념이다.) 인터넷은 TCP/IP 프로토콜로 구현된 통신망이다.
- The Web의 구성요소는 아래와 같다.
    1. HTTP Protocol - 서버와 클라이언트와의 통신을 제어
    2. URI, URL
    3. HTML - 웹 문서를 보여주기 위해 가장 많이 쓰는 형식

### 3. http/https

- http, https 모두 서버와 클라이언트와 데이터를 주고 받기 위한 프로토콜이다.
- http는 80번 포트를, https는 443번 포트를 사용한다.

### http

- http는 5계층 애플리케이션 레벨의 프로토콜로, TCP/IP 위에서 작동한다.
- 상태를 갖고 있지 않은 stateless 프로토콜이며, Method, Path, Version, Headers, Body 등으로 구성된다.
- http는 암호화 되지 않은 평문 데이터를 전송하는 프로토콜로, 비밀번호나 주민등록번호 등을 주고 받으면 제 3자가 정보를 조회할 수 있다는 단점이 있다.

![https://blog.kakaocdn.net/dn/bkdJ4Q/btqK6AXLEtC/jBZzMuJBWzdLYmqILo5Ri1/img.png](https://blog.kakaocdn.net/dn/bkdJ4Q/btqK6AXLEtC/jBZzMuJBWzdLYmqILo5Ri1/img.png)

### https

- http에 데이터 암호화가 추가된 프로토콜이다. (네트워크 상에서 중간에 제 3자가 정보를 볼 수 없도록 암호화를 지원한다.)
- https는 대칭키 암호화 방식과 비대칭키 암호화 방식을 모두 사용한다.
    - 대칭키 암호화
        - 클라이언트와 서버가 동일한 키를 가지고 암호화/복호화를 진행
        - 키가 노출되면 매우 위험하지만, 연산 속도가 빠르다.
    - 비대칭키 암호화
        - 1개의 쌍으로 구성된 공개키와 개인키를 암호화/복호화 하는데 사용
        - 키가 노출되어도 비교적 안전하지만, 연산 속도가 느림
        - 공개키를 암호화 할 수도 있고, 개인키를 암호화 할 수도 있다.
            - 공개키 암호화: 공개키로 암호화를 하면 개인키로만 복호화할 수 있다. 
            -> 개인키는 나만 가지고 있으므로, 나만 볼 수 있다.
            - 개인키 암호화: 개인키로 암호화하면 공개키로만 복호화할 수 있다. 
            -> 공개키는 모두에게 공개되어 있으므로, 내가 인증한 정보임을 알려 신뢰성을 보장할 수 있다.

[https://mangkyu.tistory.com/98](https://mangkyu.tistory.com/98)

## 인터넷

- Internet이란 여러 통신망을 하나로 연갈한다는 의미의 Inter-Network라는 말에서 시작되었으며, 이제는 전 세계 컴퓨터들을 하나로 연결하는 **거대한 통신망**을 의미한다.
- 인터넷은 **클라이언트와 서버 + α로 구성되며, TCP/IP라는 기본 프로토콜을 통해 제공**되고 있다.

### 인터넷의 특징

- 인터넷은 서로 동시에 참여할 수 있는 쌍방향 통신을 제공한다.
- 컴퓨터는 저장이 가능하므로 메시지를 보내는 사람과 받는 사람 모두 시간에 제약을 받지 않고 컴퓨터가 네트워크에 연결만 되어 있다면 언제든지 메시지를 주고 받을 수 있습니다.
- 초기 인터넷에서는 텍스트로만 통신이 가능했지만 현재에는 이미지, 음성, 동영상 등 다양한 포맷으로 통신이 가능합니다.
- 인터넷은 직업이나 사회적 지위, 직책, 인종, 나이 등을 서로 알 수 없는 익명성을 제공합니다.

[http://www.tcpschool.com/webbasic/intro](http://www.tcpschool.com/webbasic/intro)

## 웹 1.0 / 2.0 / 3.0

### 웹 1.0

- 1990웹이 처음 등장한 이후부터 웹 2.0이 유행하기 전인 2004년까지 구간을 웹 1.0이라 부른다.
- 이 시기에 대부분의 유저는 정보를 단순히 소비하기만 했다. (**Read-Only의 기능이 컸다.**)

### 웹 2.0

- 2004년 전후로 페이스북, 유튜브 같은 플랫폼 서비스들이 등장하며 웹 시장이 변화했다.
- 단방향으로만 소통이 이루어지던 웹 1.0과 달리, **양방향 소통**이 가능했다.
- Read에 Write의 개념이 더해진 것이 웹 2.0이다.

![Untitled](Chapter%201%20HTML%20+%20CSS%20+%20JS%205ca3e3ffcfe044e1bc489e7f0eadc84c/Untitled%202.png)

### 웹 3.0

- 웹 2.0에서 논란이 된, 서비스에서 발생하는 데이터를 기업이 소유하는 문제를 해결하기 위해 **탈중앙화**에 초점이 맞춰지게 되었다.
- 탈중앙화란 데이터를 일부 기업이나 플랫폼이 독점하는 현상에서 벗어난다는 뜻으로, 웹 서비스를 이용하는 과정에서 생성된 데이터와 그로인해 파생된 재정적 보상을 개인이 온전히 소유해 데이터에 대한 통제권을 일반 사용자들이 가져오는 형태를 의미한다.
- 이를 위해 **블록체인** 이라는 기술이 등장한다. 블록체인은 쉽게 말하면, 데이터를 기록한 장부를 데이터를 만드는데 참여한 사람들에게 나누어주는 기술이다.
- 웹 3.0은 아직 그 정의가 명확하지 않으며, 아직 실현되지 않았다.

[https://brunch.co.kr/@swimjiy/42](https://brunch.co.kr/@swimjiy/42)

## 브라우저

- 인터넷에서 웹 서버의 모든 정보를 볼 수 있도록 하고, 문서 검색을 도와주는 응용 프로그램으로, 사이트에 접속할 수 있는 도구를 바로 **브라우저** 혹은 **웹 브라우저**라고 부른다.
- 구글 크롬, 애플 사파리, 네이버 웨일, 마이크로소프트 엣지 등이 있다.
- 브라우저의 공통적인 의도는 **사이트에 접속한다**라는 목적을 가지고 있다.

## HTML

1. DOM
    - 문서 객체 모델(DOM, Document Object Model)은 XML이나 HTML 문서에 접근하기 위한 일종의 인터페이스이다.
    - 이 객체 모델은 문서 내의 모든 요소를 정의하고, 각각의 요소에 접근하는 방법을 제공한다.
    
    ![Untitled](Chapter%201%20HTML%20+%20CSS%20+%20JS%205ca3e3ffcfe044e1bc489e7f0eadc84c/Untitled%203.png)
    
2. <div> 태그
    - 레이아웃을 나눈데 주로 쓰이며, span과 다르게 block이다.
3. <img> 태그
    - 이미지를 넣는 태그로, src 속성에 경로를 주면 된다.
    
    ![Untitled](Chapter%201%20HTML%20+%20CSS%20+%20JS%205ca3e3ffcfe044e1bc489e7f0eadc84c/Untitled%204.png)
    
4. <input> 태그
    - 사용자로부터 입력을 받을 수 있는 입력 필드(input filed)이다.
    - input 태그는 사용자가 데이터를 입력할 수 있는 입력 필드를 선언하기 위해 <form> 요소 내부에서 사용된다.
5. <a> 태그
    - 하이퍼 링크를 거는 태그
    
    ![Untitled](Chapter%201%20HTML%20+%20CSS%20+%20JS%205ca3e3ffcfe044e1bc489e7f0eadc84c/Untitled%205.png)
    
6. <span> 태그
    - div처럼 특별한 기능은 없지만, div와 다르게 display 속성이 inline이다.
7. id, class
    - 모든 태그에는 id 속성과 class 속성을 지정해 줄 수 있는데, 이를 이용하면 CSS
    나 JS에서 태그를 좀더 쉽게 다룰 수 있다.
    - id는 원칙상 하나의 id 당 하나의 태그만 적용할 수 있다.
8. Markup Language
    - 태그 등을 이용하여 문서나 데이터 구조를 명기하는 언어의 한 가지이다.
    - HTML, XML 등이 있다.
9. CSS
    - CSS는 어떤 태그들에게 스타일 효과를 주는 언어이다.
    1. 선택자
        - 어떤 태그에 CSS를 적용하는지를 정의하는 문법이 필요하게 되는데, 이때의 문법을 선택자 라고 한다.
        - 선택자 종류에는 **태그 선택자**, **id 선택자**, **class 선택자**가 있다.
    2. flex
        - 레이아웃을 수평 또는 수직으로 조절할 수 있다.
        - [flex 사용법 정리](https://github.com/dooli1971039/TIL/blob/main/Note/CSS/%EB%85%B8%EB%A7%88%EB%93%9C%EC%BD%94%EB%8D%94%20-%20CSS%20Layout%20%EB%A7%88%EC%8A%A4%ED%84%B0%ED%81%B4%EB%9E%98%EC%8A%A4/CH1.%20Flexbox.md)
    3. grid
        - 레이아웃을 격자 형태로 조절할 수 있다.
        - [grid 사용법 정리](https://github.com/dooli1971039/TIL/blob/main/Note/CSS/%EB%85%B8%EB%A7%88%EB%93%9C%EC%BD%94%EB%8D%94%20-%20CSS%20Layout%20%EB%A7%88%EC%8A%A4%ED%84%B0%ED%81%B4%EB%9E%98%EC%8A%A4/CH2.%20Grid.md)
    4. font-size
        - 글자의 크기를 지정한다.
    5. color
        - 글자 색을 지정한다.
    6. margin, padding
        - 아래의 형식으로 쓸 수 있다.
        
        ```markdown
        margin: [margin-top] [margin-right] [margin-bottom] [margin-left];
        margin: [margin-top] [margin-left = margin-right] [margin-bottom];
        margin: [margin-top=margin-bottom] [margin-left = margin-right];
        margin: [margin-top = margin-bottom = margin-left = margin-right];
        ```
        
        ![Untitled](Chapter%201%20HTML%20+%20CSS%20+%20JS%205ca3e3ffcfe044e1bc489e7f0eadc84c/Untitled%206.png)
        
    7. position
        - 태그를 어떻게 위치시킬지를 결정하며, 아래 5가지 값을 가진다.
        
        ![Untitled](Chapter%201%20HTML%20+%20CSS%20+%20JS%205ca3e3ffcfe044e1bc489e7f0eadc84c/Untitled%207.png)
        

# 📢 학습 후기

---

- 이번 주차 워크북을 해결해보면서 어땠는지 회고해봅시다.
- 핵심 키워드에 대해 완벽하게 이해했는지? 혹시 이해가 안 되는 부분은 뭐였는지?

<aside>
📢 평소에 URL, URI가 뭔지 정확히 몰랐는데, 이번에 알게 되었다.

</aside>

# ✅ 실습 체크리스트

---

- [x]  Web에 대한 본인만의 문서 정리를 해보세요.
- [x]  vscode를 사용하는 것 부터 시작해서 파일 만들고 실행하고 확인하는 법 등 본격적인 코딩을 시작하기전 환경 설정을 완료하세요.
- [x]  html, css, javascript의 전체적인 구조를 직접 만들어가며 프로젝트 구조를 익혀보세요.

# ☑️ 실습 인증 파트

---

- Web에 대한 본인만의 문서 정리를 해보세요.
    - 위에 정리함
- vscode를 사용하는 것 부터 시작해서 파일 만들고 실행하고 확인하는 법 등 본격적인 코딩을 시작하기전 환경 설정을 완료하세요.
    - 폴더 구조 세팅 + git 세팅
    - css ⇒ reset.css 포함시키기
- html, css, javascript의 전체적인 구조를 직접 만들어가며 프로젝트 구조를 익혀보세요.
    - 페이지별로 폴더를 나누어 작업
- 아이콘 링크: [https://feathericons.com/](https://feathericons.com/)
- 이미지 링크: [https://picsum.photos/250/141](https://picsum.photos/250/141)

# 🔥 미션

---

[UMC_4th_Web/week1 at main · dooli1971039/UMC_4th_Web](https://github.com/dooli1971039/UMC_4th_Web/tree/main/week1)

[Clone Netflix - Chrome 2023-03-27 23-05-28.mp4](Chapter%201%20HTML%20+%20CSS%20+%20JS%205ca3e3ffcfe044e1bc489e7f0eadc84c/Clone_Netflix_-_Chrome_2023-03-27_23-05-28.mp4)

프로필 고르는 화면, 홈 화면, 내가 찜한 콘텐츠 화면 제작함.

사진은 하나하나 다운받기가 너무 귀찮아서, [https://picsum.photos/250/141](https://picsum.photos/250/141) 이 링크를 사용함.

# ⚡ 트러블 슈팅

---

- ⚡이슈
    
    **`이슈`**
    
    👉 사진 로딩이 너무 오래걸린다.
    
    **`문제`**
    
    👉 [https://picsum.photos/250/141](https://picsum.photos/250/141) 이 주소에서 이미지를 가져오는데, 이미지 개수가 많아서 시간이 많이 걸리는 것이었다. 
    
    **`해결`**
    
    👉  해결하지 않음.
    
    - 해결 방법 : 사진을 하나하나 다운받아 resource 파일에 넣어둔다.

# 🤔 이것도 한 번 생각해봐요!

---

- 프로젝트를 만들어가면서 불편한 점은 없었나요?
    - 리액트였으면 컴포넌트 하나 만들어서 재사용 했을텐데 바닐라js는 그게 안 되어서 불편했다. (바닐라js도 그게 되나요…?)
    - 사진을 하나하나 찾기 너무 귀찮다. (백엔드에서 한번에 보내주면 좋을텐데)