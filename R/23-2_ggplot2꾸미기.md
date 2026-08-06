---
title: "23. [R] : ggplot2 그래프 꾸미기 (scale, theme, ggsave 활용)"
category: "R"
date: "2026-07-30"
tags: ["R", "ggplot2", "Visualization", "scale", "theme", "ggsave"]
---

# ggplot2 그래프 꾸미기 (scale, theme, ggsave 활용)

그래프의 **축 눈금 조정**, **스타일 변경**, **그래프 저장 방법**



- `paste()`를 이용한 동적 제목 생성
- `scale_x_continuous()`
- `scale_y_continuous()`
- `seq()` 함수 활용
- `theme()`과 다양한 테마
- `ggsave()`를 이용한 그래프 저장

---

# 동적 제목 만들기

데이터 분석에서는 고정된 제목보다 분석 결과에 따라 변경되는 제목을 사용하는 경우가 많다.

예를 들어 평균값, 기간, 데이터 개수 등을 제목에 포함할 수 있다.

이를 위해 `paste()` 함수를 사용한다.

---

# paste() 함수

`paste()`는 문자열과 변수를 결합하는 함수이다.

기본 문법

```r
paste("문자열", 변수)
```

예제

```r
year <- 2026

paste(
  "Analysis Year :",
  year
)
```

결과

```text
[1] "Analysis Year : 2026"
```

---

# 여러 변수 연결하기

여러 개의 문자열과 변수를 함께 사용할 수 있다.

```r
start_year <- 2020
end_year <- 2026

paste(
  "Period :",
  start_year,
  "-",
  end_year
)
```

결과

```text
[1] "Period : 2020 - 2026"
```

---

# 그래프 제목에 변수 추가하기

평균 MPG 값을 계산하여 제목에 추가해보자.

```r
mean_mpg <- mean(mtcars$mpg)

my_graph +

labs(
  title =
    paste(
      "Average MPG :",
      round(mean_mpg,2)
    )
)
```

### 코드 설명

```r
mean(mtcars$mpg)
```

`mpg` 변수의 평균값을 계산한다.

```r
round(mean_mpg,2)
```

소수점 둘째 자리까지 표현한다.

```r
paste()
```

문자열과 계산 결과를 연결한다.

---

# 축 눈금 조정하기

기본적으로 `ggplot2`는 데이터를 기준으로 적절한 축 눈금을 자동 생성한다.

하지만 보고서나 발표 자료에서는 원하는 간격으로 직접 설정해야 하는 경우가 있다.

이때 사용하는 함수가 `scale_x_continuous()`와 `scale_y_continuous()`이다.

---

# scale_x_continuous()

x축의 범위와 눈금을 설정하는 함수이다.

기본 문법

```r
scale_x_continuous(
  breaks = 값
)
```

예제

```r
my_graph +

scale_x_continuous(
  breaks = seq(10,30,5)
)
```

결과적으로 x축 눈금이

```
10
15
20
25
30
```

형태로 표시된다.

---

# scale_y_continuous()

y축도 동일한 방식으로 변경할 수 있다.

```r
my_graph +

scale_y_continuous(
  breaks = seq(1,5,0.5)
)
```

---

# x축과 y축 동시에 조정하기

```r
my_graph +

scale_x_continuous(
  breaks = seq(10,30,5)
) +

scale_y_continuous(
  breaks = seq(1,5,0.5)
)
```

두 함수는 `+` 연산자로 연결하여 함께 사용할 수 있다.

---

# seq() 함수

`seq()`는 일정한 간격의 숫자를 생성하는 함수이다.

기본 문법

```r
seq(
  시작값,
  종료값,
  by = 증가값
)
```

예제

```r
seq(
  0,
  10,
  by = 2
)
```

결과

```text
0 2 4 6 8 10
```

---

# seq() 활용 예제

x축을 0부터 100까지 10 단위로 설정하려면

```r
scale_x_continuous(
  breaks = seq(
    0,
    100,
    10
  )
)
```

처럼 작성한다.

---

# ggplot2 테마(theme)

`ggplot2`는 다양한 기본 테마를 제공한다.

테마는 그래프의 배경, 격자, 글자 스타일 등을 변경한다.

대표적인 테마는 다음과 같다.

|함수|특징|
|---|---|
|`theme_gray()`|기본 테마|
|`theme_bw()`|흰색 배경|
|`theme_classic()`|깔끔한 보고서 스타일|
|`theme_light()`|밝은 배경|
|`theme_dark()`|어두운 배경|
|`theme_minimal()`|최소한의 디자인|
|`theme_void()`|배경 제거|

---

# theme_bw()

```r
my_graph +

theme_bw()
```

흰색 배경과 명확한 격자를 제공한다.

논문이나 보고서에서 많이 사용된다.

---

# theme_classic()

```r
my_graph +

theme_classic()
```

불필요한 격자를 제거하여 깔끔한 형태를 제공한다.

발표 자료에서 자주 사용된다.

---

# theme_minimal()

```r
my_graph +

theme_minimal()
```

가장 많이 사용하는 현대적인 스타일 중 하나이다.

불필요한 요소를 제거하여 데이터 자체를 강조한다.

---

# theme_dark()

```r
my_graph +

theme_dark()
```

어두운 배경의 그래프를 생성한다.

---

# 여러 요소 함께 적용하기

실무에서는 `labs()`와 `theme()`을 함께 사용하는 경우가 많다.

```r
my_graph +

labs(
  title = "Relationship between MPG and DRAT",
  x = "Miles Per Gallon",
  y = "Rear Axle Ratio",
  color = "Gear"
) +

theme_minimal()
```

---

# ggsave()를 이용한 그래프 저장

완성된 그래프는 이미지 파일로 저장할 수 있다.

`ggsave()` 함수를 사용한다.

기본 문법

```r
ggsave(
  "파일명.png"
)
```

---

# 그래프 저장 예제

```r
ggsave(
  "my_scatter_plot.png"
)
```

현재 작업 폴더에

```
my_scatter_plot.png
```

파일이 생성된다.

---

# 저장 위치 확인하기

현재 작업 디렉토리는 `getwd()` 함수로 확인할 수 있다.

```r
getwd()
```

결과 예시

```text
"C:/Users/User/Documents"
```

해당 위치에 저장된 파일을 확인할 수 있다.

---

# 저장 옵션 설정하기

크기와 해상도를 직접 지정할 수도 있다.

```r
ggsave(
  "my_graph.png",
  width = 8,
  height = 6,
  dpi = 300
)
```

주요 옵션

|옵션|설명|
|---|---|
|`width`|가로 크기|
|`height`|세로 크기|
|`dpi`|해상도|

보고서나 논문용 이미지는 보통 높은 `dpi` 값을 사용한다.

---

# 실무에서 가장 많이 사용하는 형태

실제 분석에서는 아래와 같은 형태를 자주 사용한다.

```r
library(ggplot2)

ggplot(
  mtcars,
  aes(
    x = mpg,
    y = drat,
    color = factor(gear)
  )
) +

geom_point(
  size = 3
) +

stat_smooth(
  method = "lm",
  se = FALSE
) +

labs(
  title = "MPG and DRAT Relationship",
  subtitle = "Grouped by Gear",
  x = "Miles Per Gallon",
  y = "Rear Axle Ratio",
  color = "Gear",
  caption = "Source : mtcars"
) +

theme_classic()
```

---

# 최종 요약

|함수|목적|예시|
|---|---|---|
|`labs()`|제목, 축, 범례 설정|`labs(title="")`|
|`paste()`|문자열과 변수 연결|`paste("Mean", value)`|
|`scale_x_continuous()`|x축 조정|`breaks=seq()`|
|`scale_y_continuous()`|y축 조정|`breaks=seq()`|
|`seq()`|숫자 간격 생성|`seq(0,10,2)`|
|`theme_*()`|그래프 스타일 변경|`theme_minimal()`|
|`ggsave()`|그래프 저장|`ggsave("plot.png")`|

---

# 마무리

`ggplot2`는 단순히 그래프를 생성하는 도구가 아니라, 분석 결과를 효과적으로 전달하기 위한 시각화 도구이다.

`geom_*()` 함수를 이용해 그래프를 만들고, `labs()`로 정보를 추가하며, `scale()`과 `theme()`을 이용하면 분석 목적에 맞는 완성도 높은 시각화를 만들 수 있다.

`ggsave()`를 활용하면 작성한 그래프를 보고서, 발표 자료, 분석 문서 등에 활용할 수 있다.
