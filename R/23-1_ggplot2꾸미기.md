---
title: "23. [R] : ggplot2 그래프 꾸미기 (labs() 활용)"
category: "R"
date: "2026-07-30"
tags: ["R", "ggplot2", "Visualization", "labs", "Plot"]
---

# ggplot2 그래프 꾸미기 (labs() 활용)

**그래프를 더욱 보기 쉽고 전달력이 높도록 꾸미는 방법**을 알아본다.

`ggplot2`에서는 `labs()` 함수를 이용하여 그래프 제목, 부제목, 축 이름, 범례 등을 손쉽게 변경할 수 있다.

보고서나 발표 자료에서는 그래프 자체만큼이나 **제목과 축 이름을 명확하게 작성하는 것**이 중요하다.

---

# labs() 함수란?

`labs()`는 그래프에 다양한 설명(Label)을 추가하는 함수이다.

기본 문법은 다음과 같다.

```r
labs(
  title = "",
  subtitle = "",
  caption = "",
  x = "",
  y = "",
  color = ""
)
```

주요 옵션은 다음과 같다.

|옵션|설명|
|---|---|
|`title`|그래프 제목|
|`subtitle`|부제목|
|`caption`|캡션(출처 또는 설명)|
|`x`|x축 이름|
|`y`|y축 이름|
|`color`|범례 제목 변경|

---

# 그래프 객체 준비하기

이번 장에서는 이전 장에서 만든 그래프를 그대로 사용한다.

```r
my_graph <-

ggplot(
  mtcars,
  aes(
    x = mpg,
    y = drat
  )
) +

geom_point(
  aes(color = factor(gear))
) +

stat_smooth(
  method = "lm",
  se = FALSE,
  linewidth = 1
)
```

그래프를 변수에 저장해두면 같은 코드를 반복해서 작성하지 않아도 된다.

---

# 제목(Title) 추가하기

가장 먼저 그래프의 제목을 추가해보자.

```r
my_graph +

labs(
  title = "Relationship between MPG and DRAT"
)
```

### 코드 설명

```r
title = "Relationship between MPG and DRAT"
```

그래프 상단에 제목이 표시된다.

보고서에서는 제목만으로도 그래프의 의미를 이해할 수 있도록 작성하는 것이 좋다.

---

# 부제목(Subtitle) 추가하기

부제목은 제목 아래에 표시되며, 그래프에 대한 추가 설명을 제공한다.

```r
my_graph +

labs(
  title = "Relationship between MPG and DRAT",
  subtitle = "Grouped by Gear"
)
```

### 코드 설명

```r
subtitle = "Grouped by Gear"
```

기어(gear) 그룹별로 데이터를 구분했다는 정보를 전달한다.

부제목은 그래프의 조건이나 분석 대상을 설명할 때 자주 사용된다.

---

# 캡션(Caption) 추가하기

캡션은 그래프 하단에 표시되며 데이터 출처나 작성자를 기록할 때 사용한다.

```r
my_graph +

labs(
  title = "Relationship between MPG and DRAT",
  subtitle = "Grouped by Gear",
  caption = "Source : mtcars"
)
```

또는

```r
caption = "Author : JH Lee"
```

처럼 작성할 수도 있다.

실무에서는 데이터 출처를 남기는 것이 일반적이다.

---

# 제목, 부제목, 캡션 함께 사용하기

```r
my_graph +

labs(
  title = "Relationship between MPG and DRAT",
  subtitle = "Grouped by Gear",
  caption = "Source : mtcars"
)
```

이처럼 여러 옵션을 함께 사용할 수 있으며, 각 항목은 쉼표(`,`)로 구분한다.

---

# x축 이름 변경하기

데이터셋의 변수명은 축 이름으로 사용하기에 적절하지 않은 경우가 많다.

이때 `x` 옵션을 이용하면 원하는 이름으로 변경할 수 있다.

```r
my_graph +

labs(
  x = "Miles Per Gallon"
)
```

### 변경 전

```
mpg
```

### 변경 후

```
Miles Per Gallon
```

독자가 의미를 이해하기 훨씬 쉬워진다.

---

# y축 이름 변경하기

y축도 같은 방법으로 변경할 수 있다.

```r
my_graph +

labs(
  y = "Rear Axle Ratio"
)
```

필요하다면 단위(Unit)를 함께 작성하는 것이 좋다.

예를 들어

```r
labs(
  y = "Distance (km)"
)
```

처럼 작성할 수도 있다.

---

# x축과 y축 함께 변경하기

```r
my_graph +

labs(
  x = "Miles Per Gallon",
  y = "Rear Axle Ratio"
)
```

실무에서는 축 이름을 거의 항상 수정하여 사용한다.

---

# 범례 제목 변경하기

색상을 그룹별로 지정하면 기본적으로 변수명이 범례 제목으로 사용된다.

예를 들어

```r
aes(color = factor(gear))
```

를 사용하면 범례 제목이 다음과 같이 표시된다.

```
factor(gear)
```

이보다 이해하기 쉬운 이름으로 변경하는 것이 좋다.

```r
my_graph +

labs(
  color = "Gear"
)
```

범례 제목이

```
Gear
```

로 변경된다.

---

# 모든 라벨을 한 번에 지정하기

`labs()`는 필요한 옵션을 한 번에 작성하는 것이 일반적이다.

```r
my_graph +

labs(
  title = "Relationship between MPG and DRAT",
  subtitle = "Grouped by Gear",
  x = "Miles Per Gallon",
  y = "Rear Axle Ratio",
  color = "Gear",
  caption = "Source : mtcars"
)
```

보고서나 논문에서도 가장 많이 사용하는 형태이다.

---

# labs()를 사용하는 이유

`labs()`를 활용하면 다음과 같은 장점이 있다.

- 그래프의 의미를 명확하게 전달할 수 있다.
- 축 이름을 이해하기 쉬운 형태로 변경할 수 있다.
- 범례를 직관적으로 표현할 수 있다.
- 데이터 출처를 함께 기록할 수 있다.
- 발표 자료와 보고서의 가독성을 높일 수 있다.

---

# 요약

|옵션|역할|예시|
|---|---|---|
|`title`|그래프 제목|`labs(title = "Sales")`|
|`subtitle`|부제목|`labs(subtitle = "2025 Data")`|
|`caption`|출처 및 설명|`labs(caption = "Source : Kaggle")`|
|`x`|x축 이름|`labs(x = "Age")`|
|`y`|y축 이름|`labs(y = "Income")`|
|`color`|범례 제목|`labs(color = "Group")`|

---

## 마무리

`labs()`는 `ggplot2`에서 그래프의 제목, 축 이름, 범례 등을 설정하는 가장 기본적인 함수이다. 그래프의 내용이 아무리 뛰어나더라도 제목과 축 이름이 명확하지 않다면 전달력이 크게 떨어질 수 있다. 따라서 그래프를 작성할 때는 `labs()`를 활용하여 독자가 쉽게 이해할 수 있는 형태로 꾸미는 습관을 들이는 것이 좋다.