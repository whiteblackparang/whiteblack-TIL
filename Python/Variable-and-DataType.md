---
title: "Variable and DataType"
category: "Python"
date: 2026-07-03
tags: ["Python", "DataType"]
---

# 변수 
변수는 데이터를 저장하는 이름이다. 

```python

df = 'Python'
df

```
---

# 변수 이름 작성법
- 카멜케이스camelCase (첫 단어는 소문자로 시작하고 이후 단어의 첫 글자를 대문자)
- 스네이크케이스snakecase는 모든 단어를 소문자로 쓰고 밑줄로 연결
- 파이썬 공식 스타일 가이드PEP 8는 스네이크케이스를 권장

---

# 변수 값 변경하기 
- 변수는 언제든 새 값으로 변경가능 
- 변수는 할당된 값을 가짐 

```python

score = 80
score = 95
score

```
---

# 정수 타입 

- 정수는 소수점이 없는 숫자
- 양수, 0, 음수 모두 정수
- 정수 타입은 int로 표시

# 실수 타입 
- 소수점이 있는 숫자
- 실수 타입은 float로 표시

# 문자열 타입 
- string은 타옴표를 이용해서 텍스트 작성 
- 문자열 타입은 str로 표시

```python
town = 'Seoul'
town
```

# 불린 타입 (True / False)
- 두 가지 값인 True / False를 가진 타입
- 첫 글자가 반드시 대문자여야 함
- 조건 판단, 비교 연산에서 주로 사용 

```python
active = True
active
```

# Type 함수 
- 값이나 변수의 데이터 타입을 알려줌 
- 괄호 안에 변수나 값을 넣으면 그것의 타입을 반환
- <class 'int', <class 'str' 같은 형태로 결과를 표시함
- 디버깅 / 타입 확인 할 때 유용

# len 함수
- 문자열의 길문자 개수를 반환 
- 공백, 특수문자, 한글 모두 각각 1로 계산
- 빈 문자열의 길이는 0

# int 변환 
- 다른 타입을 정수로 변환 
- 문자열은 숫자로만 이루어져 있어야함 

