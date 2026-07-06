---
title: "CSS 핵심 개념 정리"
category: "Frontend"
stack: "HTML/CSS"
date: 2026-07-03
tags: ["CSS", "개념정리"]
---

## 1. CSS란?

- **Cascading Style Sheets**의 약자. 
- HTML 요소가 화면에 "어떻게 보일지"를 정하는 언어.
- HTML이 구조(뼈대)라면, CSS는 디자인(외형)을 담당.

---

## 2. CSS를 적용하는 3가지 방법

```html
<!-- 1. 인라인: 요소 안에 직접 -->
<p style="color: red;">텍스트</p>

<!-- 2. 내부 스타일시트: head 안에 -->
<style>
  p { color: red; }
</style>

<!-- 3. 외부 스타일시트: 별도 파일로 분리 (실무에서 가장 많이 씀) -->
<link rel="stylesheet" href="style.css">
```

유지보수 측면에서 **외부 스타일시트**가 표준. HTML과 디자인 코드를 분리해서 관리 가능.

---

## 3. 기본 문법

```css
선택자 {
  속성: 값;
  속성: 값;
}
```

```css
p {
  color: blue;
  font-size: 16px;
}
```

---

## 4. 선택자(Selector)의 종류

| 선택자 | 문법 | 설명 |
|---|---|---|
| 태그 선택자 | `p { }` | 모든 `<p>` 요소 선택 |
| 클래스 선택자 | `.title { }` | `class="title"`인 모든 요소 선택 |
| 아이디 선택자 | `#header { }` | `id="header"`인 요소 하나만 선택 (id는 문서 내 유일해야 함) |
| 자손 선택자 | `div p { }` | `div` 안에 있는 모든 `p` |
| 자식 선택자 | `div > p { }` | `div`의 바로 아래 자식인 `p`만 |
| 그룹 선택자 | `h1, h2 { }` | 여러 선택자를 동시에 적용 |

**우선순위(specificity)**: id 선택자 > 클래스 선택자 > 태그 선택자. 겹치면 더 구체적인 게 이긴다.

---

## 5. Box Model (박스 모델)

모든 HTML 요소는 사각형 박스로 취급된다. 이 박스는 4개의 레이어로 구성됨.

```
┌─────────────────────────────┐
│         margin              │  (요소 바깥 여백)
│  ┌─────────────────────┐    │
│  │      border         │    │  (테두리)
│  │  ┌───────────────┐  │    │
│  │  │   padding     │  │    │  (테두리 안쪽 여백)
│  │  │  ┌─────────┐  │  │    │
│  │  │  │ content │  │  │    │  (실제 내용)
│  │  │  └─────────┘  │  |    │
│  │  └───────────────┘  │    │
│  └─────────────────────┘    │
└─────────────────────────────┘
```

```css
div {
  width: 200px;
  padding: 20px;
  border: 1px solid black;
  margin: 10px;
}
```

- `margin`: 요소와 요소 사이의 간격 (박스 바깥)
- `padding`: 내용과 테두리 사이의 여백 (박스 안)
- **헷갈리는 포인트**: `margin`은 배경색이 안 칠해지고, `padding`은 배경색이 칠해진다.

---

## 6. Display 속성

| 값 | 특징 |
|---|---|
| `block` | 한 줄 전체 차지, 새 줄에서 시작 (`div`, `p` 기본값) |
| `inline` | 필요한 만큼만 차지, 줄바꿈 없음 (`span`, `a` 기본값) |
| `inline-block` | inline처럼 줄 안에 있지만 width/height 지정 가능 |
| `none` | 화면에서 완전히 사라짐 (공간도 차지 안 함) |
| `flex` | 자식 요소들을 가로/세로로 유연하게 배치 (레이아웃의 핵심) |
| `grid` | 격자(행/열) 기반으로 배치 |

---

## 7. Flexbox 기본 (가장 많이 쓰는 레이아웃 도구)

```css
.container {
  display: flex;
  justify-content: center;   /* 가로 정렬 */
  align-items: center;       /* 세로 정렬 */
  gap: 10px;                 /* 요소 간 간격 */
}
```

| 속성 | 역할 |
|---|---|
| `justify-content` | 주축(가로) 정렬 — `center`, `space-between`, `flex-end` 등 |
| `align-items` | 교차축(세로) 정렬 — `center`, `stretch` 등 |
| `flex-direction` | 배치 방향 — `row`(기본), `column` |

---

## 8. 색상 지정 방법

```css
color: red;                 /* 이름 */
color: #ff0000;             /* HEX */
color: rgb(255, 0, 0);      /* RGB */
color: rgba(255, 0, 0, 0.5);/* RGB + 투명도 */
```

---

## 9. 단위

| 단위 | 설명 |
|---|---|
| `px` | 절대 크기 (고정) |
| `%` | 부모 요소 기준 상대 크기 |
| `em` | 부모 요소의 font-size 기준 |
| `rem` | **root**(html 태그)의 font-size 기준 — 반응형에서 자주 사용 |
| `vw` / `vh` | 뷰포트(화면) 너비/높이 기준 |

---

## 10. 자주 헷갈리는 것

- `width`/`height`는 기본적으로 **content 영역만** 계산한다. `padding`, `border`를 포함하고 싶으면:
```css
* {
  box-sizing: border-box;
}
```
이 한 줄이면 padding/border가 width 안에 포함되어 계산이 훨씬 직관적이 된다. (실무에서 거의 필수로 넣는 리셋)

---

## 다음에 이어서 배우면 좋은 것

1. Flexbox 실전 레이아웃 연습
2. Grid로 2차원 레이아웃 만들기
3. 반응형 디자인 (`@media` 쿼리)
4. CSS 변수(`--변수명`)와 Tailwind 같은 유틸리티 프레임워크

---

## 참고 자료
- [MDN - CSS 기초](https://developer.mozilla.org/ko/docs/Learn_web_development/Core/Styling_basics)
- [MDN - CSS 레퍼런스](https://developer.mozilla.org/ko/docs/Web/CSS/Reference)