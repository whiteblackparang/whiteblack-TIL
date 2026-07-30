---
title: "21. [R] : select(), filter(), arrange(), Pipeline(%>%) 활용"
category: "R"
date: 2026-07-29
tags: ["R", "dplyr", "select", "filter", "glimpse", "Data Wrangling"]
---

# select(), filter(), arrange(), Pipeline(%>%) (예제 포함) - Part 1

데이터 분석에서 가장 먼저 수행하는 작업은 **필요한 데이터를 선택하고 원하는 조건으로 추출하는 것**이다.

R의 **dplyr** 패키지는 이러한 데이터 전처리 과정을 매우 간단하게 만들어 주며, SQL을 사용해 본 사람이라면 SELECT, WHERE와 비슷한 방식으로 사용할 수 있어 배우기 쉽다.

dplyr의 가장 기본이 되는 함수인 **glimpse()**, **select()**, **filter()**를 중심으로 살펴본다.

## 이번 글에서 학습할 내용

- `glimpse()`로 데이터 구조 확인하기
- `select()`로 원하는 열 선택하기
- `filter()`로 원하는 행 추출하기
- 단일 조건과 복수 조건 필터링
- 실무에서 자주 사용하는 예제

---

# 실습 데이터

**travel_times** 데이터셋

이 데이터는 운전자의 출퇴근 이동 정보를 기록한 데이터로 약 200개의 관측치와 14개의 변수로 구성되어 있다.

대표 변수는 다음과 같다.

|변수|설명|
|---|---|
|DayOfWeek|요일|
|GoingTo|목적지(Home/GSK)|
|Distance|이동 거리|
|MaxSpeed|최고 속도|
|TotalTime|총 이동 시간(분)|

먼저 데이터를 불러온다.

```r
library(dplyr)

PATH <- "https://raw.githubusercontent.com/guru99-edu/R-Programming/master/travel_times.csv"

df <- read.csv(PATH)
```

---

# glimpse()

데이터를 분석하기 전에 가장 먼저 해야 하는 일은 **데이터 구조를 확인하는 것**이다.

R 기본 함수인 `str()`도 많이 사용하지만, dplyr에서는 **glimpse()**가 더 보기 쉽도록 출력해 준다.

```r
glimpse(df)
```

출력 결과

```text
Rows: 205
Columns: 14

$ Date ...
$ DayOfWeek ...
$ GoingTo ...
$ Distance ...
...
```

### glimpse()의 장점

- 데이터 크기 확인
- 변수 개수 확인
- 자료형 확인
- 일부 데이터 미리보기

즉, 데이터를 처음 받았을 때 가장 먼저 실행하는 함수라고 생각하면 된다.

---

## 예제 1

데이터 구조 확인하기

```r
glimpse(df)
```

---

## 예제 2

기본 함수 `str()`과 비교

```r
str(df)

glimpse(df)
```

`str()`보다 `glimpse()`가 가독성이 훨씬 좋으며, 열이 많은 데이터에서도 확인하기 쉽다.

---

# 결측치 확인

데이터를 살펴보면 **Comments** 열은 대부분 비어 있다.

빈 문자열의 개수를 확인해보자.

```r
sum(df$Comments == "")
```

결과

```text
[1] 181
```

총 205개의 데이터 중 181개가 빈 값이므로 해당 변수는 분석에 크게 도움이 되지 않을 수 있다.

---

# select()

`select()`는 **필요한 변수만 선택하거나 불필요한 변수를 제거**할 때 사용하는 함수이다.

SQL의 **SELECT**와 가장 비슷한 기능이다.

기본 문법

```r
select(데이터, 변수)
```

가장 많이 사용하는 형태는 다음과 같다.

```r
select(df, A, B, C)
```

특정 변수만 선택

```r
select(df, A:C)
```

연속된 변수 선택

```r
select(df, -C)
```

특정 변수 제외

---

# 예제 1 : Comments 제거

```r
step_1_df <- select(df, -Comments)
```

데이터 크기를 비교해보자.

```r
dim(df)
```

```
205 14
```

```r
dim(step_1_df)
```

```
205 13
```

Comments 열이 제거되어 열 개수가 하나 줄어든 것을 확인할 수 있다.

---

# 예제 2 : 필요한 변수만 선택

```r
travel <- select(df,
                 GoingTo,
                 DayOfWeek,
                 Distance,
                 TotalTime)

head(travel)
```

실무에서는 필요한 컬럼만 남겨두고 분석을 시작하는 경우가 매우 많다.

---

# 예제 3 : 연속된 열 선택

```r
select(df, Distance:MovingTime)
```

연속된 여러 변수를 한 번에 선택할 수 있다.

---

# 예제 4 : 여러 변수 제외

```r
select(df,
       -Comments,
       -FuelEconomy)
```

필요 없는 변수를 동시에 제거할 수도 있다.

---

# filter()

`filter()`는 **조건에 맞는 행(Row)만 추출**하는 함수이다.

SQL의 **WHERE** 절과 동일한 역할을 수행한다.

기본 문법은 다음과 같다.

```r
filter(데이터, 조건)
```

예를 들어 Home으로 이동한 데이터만 선택하려면 다음과 같이 작성한다.

```r
filter(df, GoingTo == "Home")
```

조건은 하나 이상 사용할 수 있으며, 여러 조건을 동시에 지정하는 것도 가능하다.

---

# 단일 조건 필터링

먼저 목적지별 데이터 개수를 확인해 보자.

```r
table(df$GoingTo)
```

결과

```text
GSK   105
Home  100
```

Home으로 이동한 데이터만 선택한다.

```r
select_home <- filter(df,
                      GoingTo == "Home")

dim(select_home)
```

```
100 14
```

GSK만 선택

```r
select_work <- filter(df,
                      GoingTo == "GSK")

dim(select_work)
```

```
105 14
```

---

# 예제 1 : 이동 시간이 40분 이상

```r
filter(df,
       TotalTime >= 40)
```

---

# 예제 2 : 최고 속도가 130 이상

```r
filter(df,
       MaxSpeed >= 130)
```

---

# 예제 3 : 이동 거리가 50km 이상

```r
filter(df,
       Distance >= 50)
```

---

- 여러 조건으로 데이터 추출
- Pipeline(`%>%`) 활용
- arrange()를 이용한 데이터 정렬
- 실무에서 자주 사용하는 파이프라인 예제
- 전체 내용 요약

---