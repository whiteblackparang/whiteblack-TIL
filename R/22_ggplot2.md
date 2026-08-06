---
title: "22. [R] : ggplot2를 이용한 산점도(Scatter Plot)"
category: "R"
date: 2026-08-01
tags: ["R", "ggplot2", "Scatter Plot", "Visualization", "Data Visualization"]
---

# ggplot2를 이용한 산점도(Scatter Plot)

데이터 분석의 순서

1. 데이터 수집(Data Collection)
2. 데이터 전처리(Data Wrangling)
3. 데이터 분석(Data Analysis)
4. 데이터 시각화(Data Visualization)

**R에서 가장 많이 사용하는 시각화 패키지인 `ggplot2`**를 이용하여 산점도(Scatter Plot)를 만드는 방법

---

# ggplot2란?

`ggplot2`는 R의 대표적인 데이터 시각화 패키지이다.

2005년 Leland Wilkinson의 **Grammar of Graphics** 이론을 기반으로 Hadley Wickham이 개발하였으며, 복잡한 그래프도 일관된 문법으로 작성할 수 있도록 설계되어 있다.

`ggplot2`를 사용하면 다음과 같은 그래프를 쉽게 생성할 수 있다.

- 산점도(Scatter Plot)
- 막대그래프(Bar Plot)
- 선그래프(Line Plot)
- 히스토그램(Histogram)
- 박스플롯(Box Plot)
- 밀도그래프(Density Plot)

사용하기 전에 패키지를 불러온다.

```r
library(ggplot2)
```

> **참고**
>
> `ggplot2`는 정적인(static) 그래프를 만드는 패키지이다.
> 인터랙티브 그래프가 필요한 경우에는 `plotly` 등의 패키지와 함께 사용할 수 있다.

---

# ggplot2 기본 문법

`ggplot2`의 기본 구조는 다음과 같다.

```r
ggplot(data = 데이터,
       aes(x = x축,
           y = y축)) +

geom_point()
```

각 요소의 의미는 다음과 같다.

|구성 요소|설명|
|---|---|
|`data`|그래프를 생성할 데이터|
|`aes()`|축, 색상, 크기 등의 매핑|
|`geom_point()`|산점도 생성|

`+` 기호는 그래프에 새로운 요소를 계속 추가한다는 의미이다.

---

# 기본 산점도

먼저 `mtcars` 데이터셋의 `drat`과 `mpg`의 관계를 산점도로 표현해보자.

```r
library(ggplot2)

ggplot(
  mtcars,
  aes(
    x = drat,
    y = mpg
  )
) +

geom_point()
```

### 코드 설명

- `mtcars` 데이터를 사용한다.
- `drat`을 x축으로 지정한다.
- `mpg`를 y축으로 지정한다.
- `geom_point()`를 이용하여 산점도를 생성한다.

각 점(Point)은 자동차 한 대를 의미한다.

---

# 산점도의 해석

산점도는 두 변수 사이의 관계를 가장 직관적으로 확인할 수 있는 그래프이다.

다음과 같은 정보를 빠르게 확인할 수 있다.

- 두 변수의 상관관계
- 이상치(Outlier)
- 데이터의 분포
- 군집(Cluster)
- 선형 관계 여부

예를 들어,

- 점들이 우상향하면 양의 상관관계
- 점들이 우하향하면 음의 상관관계
- 점들이 무작위라면 상관관계가 거의 없는 것으로 해석할 수 있다.

---

# 그룹별 산점도

범주형 변수(Category)가 있다면 색상을 이용하여 그룹을 구분할 수 있다.

```r
ggplot(
  mtcars,
  aes(
    x = mpg,
    y = drat
  )
) +

geom_point(
  aes(
    color = factor(gear)
  )
)
```

### 코드 설명

`gear` 변수는 기어 수(3단, 4단, 5단)를 의미한다.

현재는 숫자형 변수이므로 색상을 그룹별로 구분하기 위해 `factor()`를 사용하여 범주형 변수로 변환한다.

```r
factor(gear)
```

만약 `factor()`를 사용하지 않으면 연속형 변수로 인식하여 색상이 연속적인 그라데이션으로 표현될 수 있다.

---

# 점 크기 변경

점의 크기는 `size` 옵션으로 변경할 수 있다.

```r
ggplot(
  mtcars,
  aes(
    mpg,
    drat
  )
) +

geom_point(
  size = 3
)
```

값이 커질수록 점의 크기도 커진다.

---

# 점의 투명도 설정

데이터가 많으면 점이 서로 겹칠 수 있다.

이 경우 `alpha` 옵션을 사용하면 투명도를 조절할 수 있다.

```r
ggplot(
  mtcars,
  aes(
    mpg,
    drat
  )
) +

geom_point(
  size = 3,
  alpha = 0.5
)
```

`alpha`의 범위는 다음과 같다.

|값|의미|
|---|---|
|0|완전 투명|
|1|완전 불투명|

실무에서는 보통 `0.4 ~ 0.7` 정도를 많이 사용한다.

---

# 점 색상 변경

모든 점의 색상을 동일하게 변경하려면 `color` 옵션을 사용한다.

```r
ggplot(
  mtcars,
  aes(
    mpg,
    drat
  )
) +

geom_point(
  color = "steelblue",
  size = 3
)
```

사용 가능한 색상은 다음과 같다.

- `"red"`
- `"blue"`
- `"green"`
- `"orange"`
- `"purple"`
- `"black"`
- `"gray"`
- `"steelblue"`

---

# 여러 옵션 함께 사용하기

실무에서는 색상, 크기, 투명도를 함께 사용하는 경우가 많다.

```r
ggplot(
  mtcars,
  aes(
    mpg,
    drat
  )
) +

geom_point(
  color = "steelblue",
  size = 3,
  alpha = 0.7
)
```

이처럼 `geom_point()` 안에서 다양한 옵션을 조합하여 원하는 형태의 산점도를 만들 수 있다.

---

# 축 변환하기

데이터를 분석하다 보면 값의 범위가 매우 크거나 분포가 한쪽으로 치우친 경우가 많다.

이러한 경우에는 **로그 변환(Log Transformation)** 과 같은 방법을 이용하여 데이터를 변환하면 변수 간의 관계를 더욱 명확하게 확인할 수 있다.

`ggplot2`에서는 `aes()` 안에서 직접 함수를 적용하여 축을 변환할 수 있다.

---

## 로그 변환(Log Transformation)

다음 예제는 `mpg`와 `drat`에 로그(Log)를 적용한 산점도이다.

```r
ggplot(
  mtcars,
  aes(
    x = log(mpg),
    y = log(drat)
  )
) +

geom_point(
  aes(color = factor(gear))
)
```

### 코드 설명

```r
log(mpg)
```

`mpg` 값을 로그로 변환하여 x축에 표시한다.

```r
log(drat)
```

`drat` 값을 로그로 변환하여 y축에 표시한다.

로그 변환을 적용하면 값의 범위가 압축되어 데이터의 패턴을 더 쉽게 확인할 수 있다.

---

## 로그 변환을 사용하는 경우

다음과 같은 상황에서 자주 사용된다.

- 데이터의 범위가 매우 큰 경우
- 오른쪽으로 치우친(Skewed) 분포인 경우
- 변수 간 관계를 직선 형태로 확인하고 싶은 경우
- 이상치의 영향을 줄이고 싶은 경우

예를 들어,

- 소득(Income)
- 매출(Sales)
- 인구(Population)

등의 데이터는 로그 변환을 자주 사용한다.

---

# 산점도에 회귀선 추가하기

산점도만으로도 변수 간 관계를 확인할 수 있지만,

실무에서는 **추세선(Trend Line)** 또는 **회귀선(Regression Line)** 을 함께 표현하는 경우가 매우 많다.

`ggplot2`에서는 `stat_smooth()` 함수를 이용하여 쉽게 추가할 수 있다.

---

## 기본 회귀선

```r
ggplot(
  mtcars,
  aes(
    mpg,
    drat
  )
) +

geom_point() +

stat_smooth(
  method = "lm"
)
```

### 코드 설명

`method = "lm"`은 **선형회귀(Linear Model)** 를 의미한다.

산점도 위에 회귀선이 자동으로 생성된다.

기본적으로 회귀선 주변에는 **95% 신뢰구간(Confidence Interval)** 도 함께 표시된다.

---

# 신뢰구간 제거하기

보고서에서는 신뢰구간 없이 회귀선만 표현하는 경우도 많다.

```r
ggplot(
  mtcars,
  aes(
    mpg,
    drat
  )
) +

geom_point() +

stat_smooth(
  method = "lm",
  se = FALSE
)
```

### 코드 설명

```r
se = FALSE
```

신뢰구간(회색 영역)을 제거한다.

---

# 회귀선 색상 변경

회귀선의 색상을 변경할 수도 있다.

```r
ggplot(
  mtcars,
  aes(
    mpg,
    drat
  )
) +

geom_point() +

stat_smooth(
  method = "lm",
  color = "red"
)
```

또는

```r
color = "steelblue"
```

처럼 원하는 색상을 지정할 수도 있다.

---

# 회귀선 두께 변경

선의 두께는 `linewidth` 옵션으로 조절한다.

```r
ggplot(
  mtcars,
  aes(
    mpg,
    drat
  )
) +

geom_point() +

stat_smooth(
  method = "lm",
  linewidth = 1.2
)
```

> **참고**
>
> 예전 버전의 `ggplot2`에서는 `size`를 사용했지만,
> 최근 버전에서는 `linewidth` 사용이 권장된다.

---

# 회귀선 색상과 옵션 함께 사용하기

```r
ggplot(
  mtcars,
  aes(
    mpg,
    drat
  )
) +

geom_point(
  aes(color = factor(gear))
) +

stat_smooth(
  method = "lm",
  color = "red",
  linewidth = 1,
  se = FALSE
)
```

실무에서 가장 많이 사용하는 형태 중 하나이다.

---

# stat_smooth()의 주요 옵션

|옵션|설명|
|---|---|
|`method = "lm"`|선형회귀선|
|`method = "loess"`|부드러운 곡선(기본값)|
|`se = FALSE`|신뢰구간 제거|
|`color`|선 색상|
|`linewidth`|선 두께|
|`linetype`|선 스타일|

---

# 그래프를 객체에 저장하기

복잡한 그래프를 계속 작성하는 것은 비효율적이다.

따라서 완성된 그래프를 변수에 저장하여 사용하는 경우가 많다.

```r
my_graph <-

ggplot(
  mtcars,
  aes(
    x = log(mpg),
    y = log(drat)
  )
) +

geom_point(
  aes(color = factor(gear))
) +

stat_smooth(
  method = "lm",
  color = "red",
  linewidth = 1,
  se = FALSE
)
```

이제 `my_graph`에는 그래프 객체가 저장되어 있다.

---

# 저장된 그래프 출력하기

그래프를 출력하려면 변수 이름만 입력하면 된다.

```r
my_graph
```

동일한 그래프가 다시 출력된다.

---

# 저장된 그래프에 새로운 요소 추가하기

그래프 객체를 저장하면 기존 코드를 다시 작성하지 않아도 된다.

예를 들어 제목을 추가하려면

```r
my_graph +

labs(
  title = "Relationship between MPG and DRAT"
)
```

처럼 기존 그래프에 새로운 요소만 추가하면 된다.

---

# 그래프 객체를 저장하는 이유

그래프를 객체로 저장하면 다음과 같은 장점이 있다.

- 동일한 그래프를 여러 번 사용할 수 있다.
- 코드 중복을 줄일 수 있다.
- 제목이나 테마를 쉽게 변경할 수 있다.
- 보고서 작성 시 다양한 버전을 빠르게 생성할 수 있다.

실무에서는 복잡한 그래프일수록 객체에 저장한 뒤 필요한 요소를 계속 추가하는 방식을 가장 많이 사용한다.