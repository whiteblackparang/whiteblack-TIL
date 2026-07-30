---
title: "21. [R] : select(), filter(), arrange(), Pipeline(%>%) 활용"
category: "R"
date: 2026-07-30
tags: ["R", "dplyr", "pipeline", "arrange", "filter", "Data Wrangling"]
---

# select(), filter(), arrange(), Pipeline(%>%) (예제 포함) - Part 2

여러 작업을 한 번에 연결하는 **Pipeline(`%>%`)** 과 데이터를 정렬하는 **arrange()** 함수에 대해 알아본다.

---

# 복수 조건 필터링

`filter()`는 여러 조건을 동시에 사용할 수 있다.

- `&` : AND (모든 조건 만족)
- `|` : OR (하나 이상 만족)

예를 들어 Home으로 이동하면서 Wednesday인 데이터만 선택하려면 다음과 같이 작성한다.

```r
select_home_wed <- filter(df,
                          GoingTo == "Home" &
                          DayOfWeek == "Wednesday")

dim(select_home_wed)
```

결과

```text
23 14
```

총 23개의 데이터가 조건을 만족한다.

---

## 예제 1

월요일 데이터만 추출

```r
filter(df,
       DayOfWeek == "Monday")
```

---

## 예제 2

Home으로 이동하면서 이동거리가 50km 이상

```r
filter(df,
       GoingTo == "Home",
       Distance >= 50)
```

---

## 예제 3

최고 속도가 130 이상이고 이동 시간이 40분 이상

```r
filter(df,
       MaxSpeed >= 130,
       TotalTime >= 40)
```

---

## 예제 4

월요일 또는 금요일 데이터

```r
filter(df,
       DayOfWeek == "Monday" |
       DayOfWeek == "Friday")
```

---

# Pipeline (%>%)

데이터 분석은 보통 다음과 같은 과정을 반복한다.

- 데이터 불러오기
- 변수 선택
- 조건 필터링
- 정렬
- 새로운 변수 생성
- 요약 통계 계산

각 단계를 새로운 변수에 저장하면 코드가 길어지고 관리하기 어려워진다.

예를 들어 다음과 같이 작성할 수 있다.

```r
step1 <- read.csv(PATH)

step2 <- select(step1,
                GoingTo,
                DayOfWeek)

step3 <- filter(step2,
                GoingTo == "Home",
                DayOfWeek == "Wednesday")
```

동작에는 문제가 없지만 중간 객체가 계속 생성되어 코드가 복잡해진다.

이를 해결하기 위해 사용하는 것이 **Pipeline(%>%)** 이다.

---

## Pipeline 기본 문법

```r
새로운_데이터 <-
데이터 %>%
  작업1 %>%
  작업2 %>%
  작업3
```

앞 단계의 결과가 자동으로 다음 함수의 첫 번째 인수로 전달된다.

즉, **위에서 아래로 자연스럽게 읽을 수 있는 코드**를 만들 수 있다.

---

# 예제 1 : Pipeline으로 다시 작성

```r
filter_home_wed <-

  read.csv(PATH) %>%

  select(GoingTo,
         DayOfWeek) %>%

  filter(
    GoingTo == "Home",
    DayOfWeek == "Wednesday"
  )
```

동일한 결과인지 확인

```r
identical(step3,
          filter_home_wed)
```

결과

```text
TRUE
```

---

# 예제 2

Home 데이터만 선택한 뒤 이동 거리와 시간을 확인

```r
df %>%

select(GoingTo,
       Distance,
       TotalTime) %>%

filter(GoingTo == "Home")
```

---

# 예제 3

월요일 데이터만 추출 후 이동거리 확인

```r
df %>%

filter(DayOfWeek == "Monday") %>%

select(Distance,
       TotalTime)
```

---

# arrange()

`arrange()`는 데이터를 원하는 기준으로 정렬하는 함수이다.

기본적으로 오름차순이며, `desc()`를 사용하면 내림차순 정렬이 가능하다.

기본 문법

```r
arrange(df, 변수)
```

내림차순

```r
arrange(df, desc(변수))
```

두 개 이상의 변수 정렬

```r
arrange(df,
        변수1,
        변수2)
```

---

# 예제 1 : 목적지와 이동거리 정렬

```r
step_2_df <-

step_1_df %>%

arrange(GoingTo,
        Distance)

head(step_2_df)
```

GoingTo를 기준으로 먼저 정렬한 후, 같은 목적지에서는 Distance 순으로 정렬된다.

---

# 예제 2 : 이동거리 내림차순

```r
df %>%

arrange(desc(Distance))
```

가장 먼 이동거리부터 확인할 수 있다.

---

# 예제 3 : 이동시간 오름차순

```r
df %>%

arrange(TotalTime)
```

가장 빠른 이동 기록부터 출력된다.

---

# 예제 4 : 요일별 + 이동시간 정렬

```r
df %>%

arrange(DayOfWeek,
        TotalTime)
```

요일별로 그룹화된 것처럼 정렬되고, 같은 요일에서는 이동시간 순으로 정렬된다.

---

# 실무에서 자주 사용하는 형태

실무에서는 Pipeline을 이용하여 아래와 같이 작성하는 경우가 가장 많다.

```r
library(dplyr)

df %>%

select(GoingTo,
       Distance,
       TotalTime) %>%

filter(Distance >= 50) %>%

arrange(desc(TotalTime))
```

이 코드는 다음 순서로 수행된다.

1. 필요한 변수만 선택
2. 이동거리가 50km 이상인 데이터만 추출
3. 이동시간이 긴 순서대로 정렬

---

# 요약

|함수|목적|예시|
|---|---|---|
|`glimpse()`|데이터 구조 확인|`glimpse(df)`|
|`select()`|열 선택|`select(df, A, B)`|
|`select()`|열 제외|`select(df, -A)`|
|`filter()`|행 추출|`filter(df, A > 10)`|
|`filter()`|복수 조건|`filter(df, A > 10, B == "Yes")`|
|`arrange()`|오름차순 정렬|`arrange(df, A)`|
|`arrange()`|내림차순 정렬|`arrange(df, desc(A))`|
|`%>%`|작업 연결|`df %>% select() %>% filter()`|

---

## 마무리

`dplyr`의 `select()`, `filter()`, `arrange()`, 그리고 `Pipeline(%>%)`은 데이터 전처리에서 가장 자주 사용하는 함수들이다.

이 함수들을 익혀두면 데이터 선택, 조건 검색, 정렬을 간결한 코드로 수행할 수 있으며, 이후 학습할 `mutate()`, `group_by()`, `summarise()`와 함께 사용하면 대부분의 데이터 전처리 작업을 효율적으로 처리할 수 있다.