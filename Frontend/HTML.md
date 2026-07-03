# HTML 핵심 개념 정리

### 1. HTML이란?

- **프로그래밍 언어가 아니라 마크업 언어**다. 로직(if, for 등)을 짜는 게 아니라, 콘텐츠에 "This is Title", "This is Paragraph" 같은 의미를 부여하는 역할.
- 브라우저는 HTML을 읽고 화면에 어떻게 그릴지 결정한다.

---

### 2. 요소(Element)의 기본 구조

```html
<p>My book is very thick</p>
```

| 구성 | 설명 |
|---|---|
| 여는 태그 | `<p>` — 요소 시작 |
| 내용 | `My book is very thick` |
| 닫는 태그 | `</p>` — 요소 끝, 이름 앞에 `/` |
| 요소(Element) | 위 세 가지를 합친 전체 |

**주의사항**: 닫는 태그 빼먹기 → 레이아웃이 깨지는 원인 1위.

---

## 3. 속성(Attribute)

요소에 추가 정보를 주는 것. 여는 태그 안에 `이름="값"` 형태로 작성.

```html
<a href="https://example.com" target="_blank">링크</a>
```

- `href`: 이동할 주소
- `target="_blank"`: 새 탭에서 열기

---

## 4. 문서의 기본 뼈대

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>페이지 제목</title>
</head>
<body>
  <p>여기가 실제로 화면에 보이는 내용</p>
</body>
</html>
```

| 태그 | 역할 |
|---|---|
| `<!DOCTYPE html>` | HTML5 문서임을 브라우저에 선언 |
| `<html>` | 문서 전체를 감싸는 루트 요소 |
| `<head>` | 화면에 안 보이는 메타정보 (제목, 문자셋, CSS 연결 등) |
| `<body>` | 실제로 화면에 렌더링되는 내용 |

---

## 5. 자주 쓰는 태그 모음

### 텍스트
| 태그 | 역할 |
|---|---|
| `<h1>` ~ `<h6>` | 제목 (숫자가 작을수록 중요도 높음) |
| `<p>` | 문단 |
| `<span>` | 줄 안에서 일부 텍스트만 감싸기 (스타일링용) |
| `<strong>` | 의미상 중요 (굵게 보임) |
| `<em>` | 의미상 강조 (기울임으로 보임) |

### 구조 (시맨틱 태그)
의미 없는 `<div>`만 쓰기보다, 아래처럼 역할이 드러나는 태그를 쓰면 검색엔진(SEO)과 스크린리더(접근성)에 유리하다.

| 태그 | 역할 |
|---|---|
| `<header>` | 페이지/섹션 상단 영역 |
| `<nav>` | 내비게이션(메뉴) 영역 |
| `<main>` | 문서의 핵심 콘텐츠 |
| `<section>` | 주제별로 묶은 구역 |
| `<article>` | 독립적으로 배포 가능한 콘텐츠 (블로그 글 등) |
| `<footer>` | 페이지/섹션 하단 영역 |

### 리스트
```html
<ul>
  <li>순서 없는 항목</li>
</ul>

<ol>
  <li>순서 있는 항목</li>
</ol>
```

### 링크와 이미지
```html
<a href="주소">텍스트 링크</a>
<img src="이미지주소" alt="대체 텍스트">
```
- `alt`: 이미지가 안 보일 때 대신 표시되는 설명. 접근성 + SEO에 중요, 빼먹지 말 것.

### 폼(입력 요소)
```html
<form>
  <label for="name">이름</label>
  <input type="text" id="name" name="name">
  <button type="submit">제출</button>
</form>
```
- `<label>`의 `for`와 `<input>`의 `id`를 맞춰줘야 라벨 클릭 시 입력창에 포커스가 간다.

---

## 6. 블록 요소 vs 인라인 요소

| 구분 | 특징 | 예시 |
|---|---|---|
| **블록(Block)** | 항상 새 줄에서 시작, 가로 전체 차지 | `<div>`, `<p>`, `<h1>`, `<section>` |
| **인라인(Inline)** | 줄 안에서 필요한 만큼만 차지 | `<span>`, `<a>`, `<strong>`, `<img>` |

---

## 7. 주석

```html
<!-- 이 부분은 화면에 안 보임 -->
```

---

## 8. 자주 헷갈리는 규칙

- 태그 이름은 대소문자를 구분하지 않지만(`<P>`, `<p>` 동일 동작), 관례상 **소문자**로 작성한다.
- 작은따옴표(`'`)와 큰따옴표(`"`)는 속성값에서 기능 차이 없음. 팀/개인 컨벤션에 맞춰 통일해서 사용.
- `<br>`, `<img>`, `<input>` 같은 일부 태그는 **닫는 태그가 없다** (self-closing).

---

## 다음에 이어서 배우면 좋은 것

1. CSS로 스타일 입히기 (레이아웃, 색상, 폰트)
2. 시맨틱 태그를 활용한 실전 페이지 구조 짜보기
3. 웹 접근성(a11y) 기본 — `alt`, `label`, `aria-*` 속성

---

## 참고 자료
- [MDN - HTML 기초](https://developer.mozilla.org/ko/docs/Learn_web_development/Core/Structuring_content)
- [MDN - HTML 요소 레퍼런스](https://developer.mozilla.org/ko/docs/Web/HTML/Element)