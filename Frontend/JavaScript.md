## 1. JavaScript란?

- HTML이 구조, CSS가 디자인, **JavaScript는 동작/로직**을 담당하는 프로그래밍 언어.
- 브라우저 안에서 실행되어 클릭, 입력 같은 사용자 행동에 반응할 수 있다.

```html
<script src="script.js"></script>
```

---

## 2. 변수 선언

```javascript
let age = 25;        // 재할당 가능
const name = "Kim";  // 재할당 불가 (상수)
var old = "지양";     // 예전 방식, 지금은 거의 안 씀
```

- **기본은 `const`**, 값이 바뀔 일이 있을 때만 `let` 사용.
- `var`는 스코프 관련 버그가 잘 생겨서 실무에서 거의 사용 안 함.

---

## 3. 자료형(Data Type)

| 타입 | 예시 |
|---|---|
| `string` | `"hello"` |
| `number` | `42`, `3.14` |
| `boolean` | `true`, `false` |
| `undefined` | 값이 할당 안 된 상태 |
| `null` | 의도적으로 "값 없음"을 표현 |
| `object` | `{ key: "value" }` |
| `array` | `[1, 2, 3]` (사실 object의 일종) |

타입 확인: `typeof 변수명`

---

## 4. 연산자

```javascript
// 비교 연산자
5 == "5"    // true  (타입 변환 후 비교, 지양)
5 === "5"   // false (타입까지 비교, 권장)

// 논리 연산자
&&  // AND
||  // OR
!   // NOT
```

**`==` 대신 항상 `===` 사용하기** — 타입까지 정확히 비교해야 예상치 못한 버그를 막을 수 있다.

---

## 5. 조건문

```javascript
if (age >= 18) {
  console.log("성인");
} else if (age >= 13) {
  console.log("청소년");
} else {
  console.log("어린이");
}
```

---

## 6. 반복문

```javascript
// for문
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// 배열 순회 (실무에서 가장 많이 씀)
const fruits = ["apple", "banana"];
fruits.forEach((fruit) => {
  console.log(fruit);
});
```

---

## 7. 함수

```javascript
// 일반 함수
function add(a, b) {
  return a + b;
}

// 화살표 함수 (요즘 더 많이 씀)
const add = (a, b) => {
  return a + b;
};

// 한 줄이면 더 축약 가능
const add = (a, b) => a + b;
```

---

## 8. 배열(Array) 자주 쓰는 메서드

```javascript
const nums = [1, 2, 3, 4, 5];

nums.map((n) => n * 2);        // 각 요소 변형 → [2,4,6,8,10]
nums.filter((n) => n > 2);     // 조건에 맞는 것만 → [3,4,5]
nums.reduce((acc, n) => acc + n, 0); // 누적 계산 → 15
nums.find((n) => n > 3);       // 조건 맞는 첫 요소 → 4
```

이 4개(`map`, `filter`, `reduce`, `find`)는 실무에서 정말 자주 쓰이니 익숙해지는 게 중요.

---

## 9. 객체(Object)

```javascript
const person = {
  name: "Kim",
  age: 25,
  greet() {
    console.log(`안녕, ${this.name}`);
  }
};

person.name;      // 접근 방법 1
person["name"];   // 접근 방법 2
person.greet();   // 메서드 호출
```

---

## 10. DOM 조작 (브라우저 화면 다루기)

```javascript
// 요소 선택
const el = document.querySelector(".title");

// 내용 변경
el.textContent = "새 텍스트";

// 이벤트 처리
el.addEventListener("click", () => {
  console.log("클릭됨!");
});
```

- `querySelector`: CSS 선택자 문법으로 요소 하나 선택
- `querySelectorAll`: 조건에 맞는 요소 전부 선택 (배열 아님, NodeList)
- `addEventListener`: 클릭/입력 등 이벤트가 발생했을 때 실행할 함수 등록

---

## 11. 비동기 처리 (API 호출 등)

```javascript
// Promise 기반
fetch("https://api.example.com/data")
  .then((res) => res.json())
  .then((data) => console.log(data));

// async/await (요즘 더 많이 씀, 가독성 좋음)
async function getData() {
  const res = await fetch("https://api.example.com/data");
  const data = await res.json();
  console.log(data);
}
```

- 서버에서 데이터 가져오기처럼 "시간이 걸리는 작업"을 처리할 때 사용.
- `async/await`가 `.then()` 체인보다 코드가 위→아래로 읽혀서 더 직관적.

---

## 12. 자주 헷갈리는 개념

| 개념 | 설명 |
|---|---|
| **스코프(Scope)** | 변수가 유효한 범위. `{}` 블록 안에서 선언한 `let`/`const`는 그 블록 밖에서 접근 불가 |
| **호이스팅(Hoisting)** | `var`와 함수 선언은 코드 실행 전에 위로 끌어올려지는 특성 (헷갈림의 원인이라 `let`/`const` 권장) |
| **콜백(Callback)** | 함수의 인자로 전달되는 함수. `addEventListener`의 두 번째 인자가 대표적 |
| **템플릿 리터럴** | 백틱(`` ` ``)으로 문자열 안에 변수를 바로 넣는 문법: `` `안녕 ${name}` `` |

---

## 다음에 이어서 배우면 좋은 것

1. 배열/객체 구조 분해 할당 (`const { name } = person`)
2. ES6+ 모듈 시스템 (`import`/`export`)
3. React 시작 전에 필수: 화살표 함수, map/filter, 구조 분해, async/await 완전히 익히기

---

## 참고 자료
- [MDN - JavaScript 첫걸음](https://developer.mozilla.org/ko/docs/Learn_web_development/Core/Scripting)
- [MDN - JavaScript 레퍼런스](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference)