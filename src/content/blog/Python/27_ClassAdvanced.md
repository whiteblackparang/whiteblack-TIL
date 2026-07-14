---
title: "27_ClassAdvanced"
category: "Python"
date: 2026-07-14
tags: ["Python", "OOP", "Inheritance", "Class"]
---

# 클래스 고급 (Class Advanced)

클래스 고급에서는 상속, `__init__` 확장, `super()`, 메서드 오버라이딩, 다중 상속까지 포함하여 객체 지향 구조를 확장하는 방법을 다룬다.  
입력값 → 처리 로직 → 출력 검증을 하나의 흐름으로 묶어 작은 코드 단위로 점검하고, 재사용 가능한 구조로 만드는 것이 핵심이다.

---

## 흐름

1. **상속 기초 입력 확인** — 문자열, 숫자, 변수 같은 예제 값을 먼저 고정한다.  
2. **상속 + `__init__` 처리 실행** — 부모/자식 클래스 연결 상태를 확인한다.  
3. **`super()` 결과 검증** — 부모 호출이 정상적으로 동작하는지 출력으로 확인한다.  
4. **클래스 고급 재사용** — 완성 코드를 자동화 스크립트에 붙일 수 있게 정리한다.  

정리하면, 입력값을 고정 → 상속 구조 실행 → 결과 검증 → 재사용 가능한 구조로 정리하는 순서다.

---

## 1. 상속 기초 — 부모 클래스로부터 확장

### 왜 배우는가
기존 클래스를 그대로 쓰면서 일부만 확장하고 싶을 때 사용한다.  
실무에서는 공통 로직을 부모에 두고, 차이만 자식에서 구현하는 구조가 기본이다.

### 상세 설명
- 상속은 기존 클래스를 확장하는 구조다.
- `class 자식(부모):` 형태로 정의한다.
- 자식 클래스는 부모의 속성과 메서드를 그대로 사용 가능하다.
- "is-a 관계"를 표현한다.

```python
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return 'Some sound'

class Dog(Animal):
    pass
```

myDog = Dog('Buddy')
myDog.name

## 2. 상속과 __init__ — 자식 초기화
### 왜 배우는가

자식 클래스에서 새로운 속성을 추가하려면 __init__을 재정의해야 한다.
이때 부모 초기화를 직접 호출하지 않으면 데이터가 누락된다.

### 상세 설명
자식이 __init__을 정의하면 부모 __init__은 자동 실행되지 않는다
따라서 명시적으로 호출해야 한다

```python 
class Shape:
    def __init__(self, color):
        self.color = color

class Square(Shape):
    def __init__(self, color, size):
        Shape.__init__(self, color)
        self.size = size

sq = Square('red', 10)
sq.color, sq.size
```
