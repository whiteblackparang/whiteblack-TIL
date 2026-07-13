---
title: "22_scope and closure "
category: "Python"
date: 2026-07-10
tags: ["Python", "Scope"]
---

## 스코프와 클로저

---

#### 0. 전체 구조 한눈에 보기

파이썬 변수는 아래 4단계 스코프 구조를 따른다 (LEGB 규칙)

1. Local (지역)
2. Enclosing (외부 함수)
3. Global (전역)
4. Built-in (내장)

변수는 이 순서로 탐색된다.

---

#### 1. 스코프(Scope)란?

변수를 사용할 수 있는 유효 범위

```python
x = 10  # 전역 변수

def func():
    x = 20  # 지역 변수
    print(x)

func()       # 20
print(x)     # 10
```

같은 이름이어도 위치에 따라 다른 변수로 동작한다.

---

#### 2. 지역 변수 (Local Scope)

## 개념

* 함수 내부에서 선언된 변수
* 함수 안에서만 사용 가능

## 특징

* 함수 실행이 끝나면 자동 삭제
* 외부에서 접근 불가

## 왜 중요한가

함수의 독립성을 보장하고 사이드 이펙트를 방지한다.

## 실무 포인트

* 대부분의 코드는 지역 변수 중심으로 작성
* 테스트와 디버깅이 쉬움

---

#### 3. 전역 변수 (Global Scope)

## 개념

* 함수 밖에서 선언된 변수

## 특징

* 어디서든 읽기 가능
* 함수 내부에서 수정은 제한됨

```python
x = 10

def func():
    print(x)

func()
```

---

## 문제점 (실무 기준)

전역 변수는 다음과 같은 문제를 만든다.

* 디버깅 어려움
* 상태 추적 어려움
* 협업 시 충돌 위험

따라서 실무에서는 사용을 최소화한다.

---

#### 4. global 키워드

## 개념

함수 내부에서 전역 변수를 수정할 수 있게 하는 키워드

```python
x = 10

def func():
    global x
    x = x + 5

func()
print(x)  # 15
```

---

## 실무 평가

남용하면 안 된다.

이유:

* 상태가 함수 외부에서 변경됨
* 코드 예측이 어려워짐

대체 방법:

* return으로 값 전달
* 함수형 구조 유지

---

#### 5. 중첩 함수 (Nested Function)

## 개념

함수 내부에 정의된 함수

```python
def outer():
    def inner():
        return "hello"
    return inner()
```

---

## 특징

* 내부 함수는 외부 함수 안에서만 사용 가능
* 외부 함수의 변수에 접근 가능

---

## 실무 활용 이유

1. 로직 캡슐화
2. 헬퍼 함수 은닉
3. 코드 가독성 향상

---

#### 6. Enclosing Scope (외부 함수 스코프)

```python
def outer():
    x = 10

    def inner():
        print(x)

    inner()
```

내부 함수는 외부 함수의 변수에 접근할 수 있다.

---

#### 7. nonlocal 키워드

## 개념

외부 함수의 변수를 수정할 수 있게 하는 키워드

```python
def outer():
    x = 10

    def inner():
        nonlocal x
        x += 5

    inner()
    return x

print(outer())  # 15
```

---

## global vs nonlocal 차이

| 구분       | 범위       |
| -------- | -------- |
| global   | 전역 변수    |
| nonlocal | 바로 바깥 함수 |

---

## 실무 핵심

클로저를 구현할 때 필수적으로 사용된다.

---

#### 8. 클로저 (Closure)

## 정의

외부 함수가 종료된 이후에도 외부 변수의 상태를 기억하는 함수 구조

---

## 구조 조건

1. 중첩 함수 존재
2. 외부 변수 참조
3. 내부 함수 반환

---

## 기본 예제

```python
def makeAdder(n):
    def add(x):
        return x + n
    return add
```

```python
add5 = makeAdder(5)
add5(10)  # 15
```

---

## 핵심 포인트

makeAdder 실행이 끝난 이후에도 n 값이 유지된다.

---

#### 9. 클로저 동작 원리

일반 함수:

* 실행 종료 후 변수 삭제

클로저:

* 함수 종료 후에도 변수 유지

이유:

* 내부 함수가 외부 변수를 참조하고 있기 때문

---

#### 10. 클로저 vs 클래스

## 클로저

```python
def counter():
    cnt = 0

    def inc():
        nonlocal cnt
        cnt += 1
        return cnt

    return inc
```

---

## 클래스

```python
class Counter:
    def __init__(self):
        self.cnt = 0

    def inc(self):
        self.cnt += 1
        return self.cnt
```

---

## 비교

| 구분 | 클로저   | 클래스    |
| -- | ----- | ------ |
| 코드 | 간결    | 구조적    |
| 상태 | 유지 가능 | 유지 가능  |
| 사용 | 단순 상태 | 복잡한 구조 |

---

#### 11. 클로저 사용 사례

## 1. 상태 유지

* 카운터
* 누적 값
* 캐싱

---

## 2. 함수 팩토리

```python
def makeMultiplier(n):
    def multiply(x):
        return x * n
    return multiply
```

---

## 3. 설정 고정

```python
def makeLogger(prefix):
    def log(msg):
        print(prefix, msg)
    return log
```

---

## 4. 데코레이터

클로저 기반의 대표적인 고급 활용 패턴

---

#### 12. 설계 원칙

1. global 사용 최소화
2. 지역 변수 중심 설계
3. 상태가 필요하면 클로저 또는 클래스 사용
4. 단순 상태는 클로저
5. 복잡 구조는 클래스

---

#### 13. 흐름 연결

입력 → 처리 → 출력 구조

```python
def makeProcessor(rate):
    def process(x):
        return x * rate
    return process

processor = makeProcessor(1.1)
print(processor(100))
```

---

#### 14. 핵심 요약

* 스코프: 변수의 유효 범위
* global: 전역 변수 수정 (지양)
* nonlocal: 외부 함수 변수 수정
* 클로저: 상태를 유지하는 함수

---

# 15. 면접 대비 핵심 질문

Q. 클로저를 사용하는 이유는 무엇인가

상태를 유지하면서 클래스 없이 로직을 간결하게 구성하기 위해 사용한다.

---

Q. global을 지양하는 이유는 무엇인가

사이드 이펙트로 인해 유지보수와 디버깅이 어려워지기 때문이다.

---

Q. 클로저와 클래스의 차이는 무엇인가

단순한 상태 관리에는 클로저가 적합하고, 복잡한 구조에는 클래스가 적합하다.

---

# 16. 결론

좋은 코드는 다음을 만족한다.

* 상태를 최소화한다
* 스코프를 명확하게 유지한다
* 필요한 경우에만 상태를 유지한다

이때 클로저는 상태를 안전하게 유지하기 위한 핵심 도구이다.

