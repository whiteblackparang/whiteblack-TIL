---
title: "27_ClassAdvanced"
category: "Python"
date: 2026-07-13
tags: ["Python", "OOP", "Inheritance"]
---

# 클래스 고급 (Class Advanced)

클래스를 확장해서 새로운 클래스를 만드는 상속을 다룬다. 입력값을 정하고, 처리 로직을 실행하고, 출력 결과를 확인하는 흐름을 작은 코드 조각으로 하나씩 연결해서 익힌다.

## 흐름

1. **상속 기초 입력 확인** — 문자열, 숫자, 변수 같은 예제 값과 필요한 조건을 먼저 정한다.
2. **상속과 `__init__` 처리 실행** — 기초 문법 코드를 실행해서 중간 결과를 확인한다.
3. **`super()` 함수 결과 검증** — 출력 또는 마지막 표현식 결과를 기준으로 실행 결과를 비교한다.
4. **클래스 고급 재사용** — 완성한 코드를 작은 자동화 스크립트에 붙일 수 있도록 정리한다.

정리하면, 문자열·숫자·변수 같은 예제 값을 먼저 확인한 뒤 기초 문법에 맞는 코드를 고르고, 결과를 출력 또는 마지막 표현식 기준으로 즉시 점검하고, 완료한 코드는 이후 자동화 스크립트에 다시 활용할 수 있다.

---

## 1. 상속 기초 — 부모 클래스로부터 확장

### 왜 배우는가
비슷한 클래스를 매번 처음부터 새로 만들면 같은 코드를 계속 반복하게 된다. 상속은 이미 만들어둔 클래스를 기반으로 새 클래스를 만들어서, 공통되는 부분은 그대로 물려받고 다른 부분만 추가하거나 바꾸는 방법이다. 초보자에게는 "비슷한 것끼리 묶어서 정리하는 법"이고, 실무자에게는 코드 중복을 줄이는 기본 도구다.

### 상세 설명
- 상속은 기존 클래스를 확장해서 새로운 클래스를 만드는 기능이다.
- `class 자식클래스(부모클래스):` 형식으로 정의하며, 자식 클래스는 부모 클래스의 모든 속성과 메서드를 물려받는다.
- 코드 재사용성이 높아지고, 클래스 사이의 계층 구조를 표현할 수 있다.
- 상속은 "is-a" 관계를 나타낸다. 예를 들어 `Cat`은 `Animal`이다.

```python
class Staff:
    def __init__(self, name):
        self.name = name

    def workStatus(self):
        return 'on duty'

class Intern(Staff):
    pass

newIntern = Intern('Jimin')
newIntern.name
```

**코드 읽는 순서**
1. `Staff` 클래스는 `name` 속성과 `workStatus` 메서드를 가진다.
2. `class Intern(Staff):`으로 `Intern`이 `Staff`를 상속받도록 정의한다. `Intern` 안에는 별도 내용이 없으므로 `pass`만 쓴다.
3. `Intern('Jimin')`을 호출하면 `Intern`에 따로 정의된 `__init__`이 없으므로 부모 클래스인 `Staff`의 `__init__`이 그대로 사용된다.
4. `self.name`이 `'Jimin'`으로 저장된다.
5. `newIntern.name`을 실행하면 `'Jimin'`이 출력된다.

---

## 2. 상속과 `__init__` — 자식 클래스의 초기화

### 왜 배우는가
부모 클래스의 `__init__`을 그대로 쓰는 것만으로는 부족할 때가 있다. 자식 클래스에서만 필요한 추가 정보가 있다면 자식이 직접 `__init__`을 정의해야 한다. 이때 "부모의 초기화 로직은 자동으로 실행되지 않는다"는 점을 정확히 알아야 나중에 속성이 빠지는 실수를 막을 수 있다.

### 상세 설명
- 자식 클래스에서 `__init__`을 따로 정의하지 않으면, 부모 클래스의 `__init__`을 자동으로 사용한다.
- 자식 클래스가 `__init__`을 직접 정의하면, 부모의 `__init__`은 자동으로 호출되지 않는다. 필요하다면 명시적으로 호출해야 한다.
- 자식 `__init__`에서 부모 `__init__`을 호출할 때는 `self`를 통해 접근해야 한다(다음 섹션의 `super()`가 이 역할을 한다).

```python
class Vehicle:
    def __init__(self, brand):
        self.brand = brand

class Bicycle(Vehicle):
    pass

bike = Bicycle('Samchully')
bike.brand
```

**코드 읽는 순서**
1. `Vehicle`은 `brand` 속성을 초기화하는 `__init__`을 가진다.
2. `Bicycle(Vehicle)`은 자체 `__init__`을 정의하지 않았으므로, `Bicycle('Samchully')`를 호출하면 부모인 `Vehicle`의 `__init__`이 그대로 실행된다.
3. `self.brand`가 `'Samchully'`로 저장된다.
4. `bike.brand`를 실행하면 `'Samchully'`가 출력된다.

---

## 3. `super()` 함수 — 부모 클래스 참조

### 왜 배우는가
자식 클래스가 자신만의 `__init__`을 정의하면서도 부모가 이미 처리하던 초기화 로직은 그대로 재사용하고 싶을 때가 많다. `super()`는 "부모 클래스의 기능을 가져와서 쓰겠다"는 뜻을 명확히 표현하는 방법이며, 부모 클래스 이름을 직접 코드에 적는 것보다 더 안전하고 유연하다.

### 상세 설명
- `super()`는 부모 클래스를 참조하는 함수다.
- `super().__init__(...)` 형태로 부모의 `__init__`을 호출할 수 있다.
- 부모 클래스명을 직접 쓰는 방식보다 유연하며, 일반적으로 더 권장되는 방식이다.
- 여러 클래스를 동시에 상속받는 다중 상속 상황에서 특히 유용하다.
- `super()`를 사용하면 나중에 상속 구조가 바뀌더라도 코드를 수정할 부분이 최소화된다.

```python
class Person:
    def __init__(self, name):
        self.name = name

class Teacher(Person):
    def __init__(self, name, subject):
        super().__init__(name)
        self.subject = subject

t = Teacher('Sujin', 'Math')
t.name, t.subject
```

**코드 읽는 순서**
1. `Teacher('Sujin', 'Math')`를 호출하면 `Teacher`의 `__init__(self, name, subject)`가 실행된다.
2. `super().__init__(name)`이 실행되어 부모 클래스인 `Person`의 `__init__`이 호출되고, `self.name`이 `'Sujin'`으로 저장된다.
3. 이어서 `self.subject = subject`가 실행되어 `self.subject`가 `'Math'`로 저장된다.
4. `t.name, t.subject`를 실행하면 `('Sujin', 'Math')`가 출력된다.

---

## 4. 메서드 오버라이딩 — 부모 메서드 재정의

### 왜 배우는가
부모 클래스의 메서드가 모든 자식에게 똑같이 맞는 것은 아니다. 예를 들어 "동물은 소리를 낸다"는 공통 개념이지만, 실제로 내는 소리는 동물마다 다르다. 메서드 오버라이딩은 이렇게 "같은 이름의 동작이지만 세부 구현은 자식마다 다르게" 만드는 방법이다.

### 상세 설명
- 메서드 오버라이딩은 자식 클래스에서 부모 클래스의 메서드를 같은 이름으로 다시 정의하는 것이다.
- 자식 클래스에 같은 이름의 메서드를 정의하면, 부모의 메서드는 가려지고 자식의 메서드가 대신 실행된다.
- 필요하다면 `super()`로 부모의 메서드를 먼저 호출한 뒤, 그 결과에 추가 기능을 덧붙일 수도 있다.
- 오버라이딩은 같은 이름의 메서드 호출이 클래스마다 다르게 동작하게 만드는 다형성의 핵심이다.

```python
class Instrument:
    def play(self):
        return 'sound'

class Piano(Instrument):
    def play(self):
        return 'ding'

myPiano = Piano()
myPiano.play()
```

**코드 읽는 순서**
1. `Instrument`는 `play` 메서드에서 `'sound'`를 반환한다.
2. `Piano(Instrument)`는 같은 이름의 `play` 메서드를 다시 정의해서 `'ding'`을 반환하도록 재정의했다.
3. `myPiano.play()`를 호출하면 `Piano`에 정의된 `play`가 실행되어 `'ding'`이 반환된다. `Instrument`의 `play`는 실행되지 않는다.
4. 마지막 줄을 실행하면 `'ding'`이 출력된다.

---

## 5. 다중 상속 — 여러 부모 클래스 상속

### 왜 배우는가
어떤 대상은 하나의 성질만으로 설명되지 않는다. 예를 들어 오리는 "날 수도 있고" "헤엄칠 수도 있다". 다중 상속은 이렇게 서로 다른 여러 부모 클래스의 기능을 한 클래스에 동시에 물려받는 방법이다. 강력한 만큼 구조가 복잡해질 수 있어서 신중하게 사용해야 한다.

### 상세 설명
- 다중 상속은 하나의 클래스가 여러 부모 클래스를 동시에 상속받는 것이다.
- `class 자식(부모1, 부모2):` 형식으로 정의하며, 모든 부모의 속성과 메서드를 물려받는다.
- 부모들 사이에 같은 이름의 메서드가 있으면, 파이썬이 정한 탐색 순서(MRO)에 따라 괄호 안에서 더 왼쪽에 적힌 부모가 우선한다.
- 다중 상속은 강력하지만 구조가 복잡해지기 쉬우므로 신중하게 사용해야 한다.

```python
class Runner:
    def run(self):
        return 'running'

class Jumper:
    def jump(self):
        return 'jumping'

class Athlete(Runner, Jumper):
    pass

player = Athlete()
player.run(), player.jump()
```

**코드 읽는 순서**
1. `Runner`는 `run` 메서드를, `Jumper`는 `jump` 메서드를 각각 가진다.
2. `class Athlete(Runner, Jumper):`로 두 클래스를 동시에 상속받는다.
3. `player = Athlete()`로 인스턴스를 만들면, `player`는 `Runner`의 `run`과 `Jumper`의 `jump`를 모두 사용할 수 있다.
4. `player.run(), player.jump()`를 실행하면 `('running', 'jumping')`이 출력된다.

---

## 6. 상속 실전 예제 — 계층 구조 설계

### 왜 배우는가
지금까지 배운 상속 문법을 실제로 어떻게 활용하는지 작은 예제로 확인하는 단계다. 기본이 되는 클래스를 하나 만들어두고, 그 위에서 조금씩 다른 여러 자식 클래스를 만드는 방식은 실무에서 "공통 규칙은 한 곳에, 차이점만 각자"라는 설계 원칙으로 자주 쓰인다.

### 상세 설명
- 기본 클래스(부모)를 정의하고, 여러 자식 클래스로 확장해서 코드 재사용성을 높인다.
- 상속은 비슷하지만 세부적으로 조금씩 다른 여러 클래스를 효율적으로 관리하는 도구다.

```python
class Beverage:
    def __init__(self, volumeMl):
        self.volumeMl = volumeMl

class Americano(Beverage):
    def __init__(self):
        super().__init__(355)

cup = Americano()
cup.volumeMl
```

**코드 읽는 순서**
1. `Beverage`는 `volumeMl` 속성을 받는 `__init__`을 가진 부모 클래스다.
2. `Americano(Beverage)`는 자신만의 `__init__`을 정의하면서, 항상 고정된 값 `355`를 `super().__init__(355)`로 부모에게 전달한다.
3. `Americano()`를 호출하면 인자 없이도 내부에서 `355`가 자동으로 채워진다.
4. `cup.volumeMl`을 실행하면 `355`가 출력된다.

---

## 7. 현업 흐름 검증 — 결제 수단을 다형성으로 처리하기

### 왜 배우는가
지금까지 배운 개념(상속, `__init__`, `super()`, 메서드 오버라이딩)을 하나로 합쳐서, 실무에서 실제로 쓰는 형태에 가깝게 연습하는 단계다. 결제 수단처럼 "공통 규칙은 같지만 수단마다 세부 처리 방식이 다른" 상황은 상속과 오버라이딩으로 깔끔하게 표현할 수 있다.

### 상세 설명
- 상속은 공통 규칙을 부모 클래스에 두고, 달라지는 부분만 자식 클래스에서 바꿀 때 효과가 크다.
- 아래 예시는 카드 결제와 계좌이체 결제를 같은 방식으로 다루되, 각 결제 수단만의 검증 규칙과 처리 방식을 자식 클래스에서 따로 구현한다.
- 여러 자식 인스턴스를 리스트에 담아 똑같은 방식(`process(...)`)으로 호출해도, 실제로는 각자 오버라이딩한 메서드가 실행된다. 이것이 다형성이다.

```python
class Payment:
    def __init__(self, payer):
        if not payer:
            raise ValueError('payer is required')
        self.payer = payer

    def process(self, amount):
        if amount <= 0:
            raise ValueError('amount must be positive')
        return {
            'method': 'base',
            'payer': self.payer,
            'amount': amount,
        }

class CardPayment(Payment):
    def __init__(self, payer, cardNumber):
        if len(cardNumber) != 16:
            raise ValueError('card number must be 16 digits')
        super().__init__(payer)
        self.cardNumber = cardNumber

    def process(self, amount):
        receipt = super().process(amount)
        receipt['method'] = 'card'
        receipt['last4'] = self.cardNumber[-4:]
        return receipt

class BankTransferPayment(Payment):
    def __init__(self, payer, bankCode):
        if not bankCode.isdigit():
            raise ValueError('bank code must contain digits only')
        super().__init__(payer)
        self.bankCode = bankCode

    def process(self, amount):
        receipt = super().process(amount)
        receipt['method'] = 'bank_transfer'
        receipt['fee'] = round(amount * 0.01)
        return receipt

payers = [
    CardPayment('Jihoon', '1234567812345678'),
    BankTransferPayment('Yerin', '004'),
]

receipts = []
for payer in payers:
    receipts.append(payer.process(50000))

assert [item['method'] for item in receipts] == ['card', 'bank_transfer']
assert receipts[0]['last4'] == '5678'
assert receipts[1]['fee'] == 500

try:
    CardPayment('Doyoon', '1234')
except ValueError as exc:
    assert 'card number' in str(exc)

print('결제 다형성 흐름 통과')
```

**코드 읽는 순서**
1. `Payment`는 결제자(`payer`)가 비어 있지 않은지 확인하고, `process` 메서드에서 금액이 양수인지 검증한 뒤 기본 영수증(딕셔너리)을 만든다.
2. `CardPayment`는 `__init__`에서 카드번호가 16자리인지 먼저 검증하고, `super().__init__(payer)`로 부모의 초기화를 재사용한다.
3. `CardPayment.process`는 `super().process(amount)`로 부모의 기본 검증과 영수증 생성을 먼저 처리한 뒤, `method`를 `'card'`로 바꾸고 카드 뒷자리 4자리를 추가한다.
4. `BankTransferPayment`도 같은 방식으로 은행 코드가 숫자로만 되어 있는지 검증하고, `process`에서 수수료(`fee`)를 추가로 계산한다.
5. `payers` 리스트에 서로 다른 두 결제 수단을 담고, 똑같이 `payer.process(50000)`을 호출해도 각자 오버라이딩한 `process`가 실행되어 서로 다른 결과가 나온다.
6. `assert`로 `method` 값이 각각 `'card'`, `'bank_transfer'`인지, 카드 뒷자리와 수수료 계산이 맞는지 확인한다.
7. `CardPayment('Doyoon', '1234')`는 카드번호가 16자리가 아니므로 `ValueError`가 발생하고, 에러 메시지 안에 `'card number'`가 포함되어 있는지 확인한다.
8. 모든 `assert`를 통과하면 마지막 줄에서 `'결제 다형성 흐름 통과'`가 출력된다.

---

## 8. Day 23 종합 복습 — 클래스 고급 마스터하기

### 왜 배우는가
1~7번에서 따로 배운 개념(상속 기초, 상속과 `__init__`, `super()`, 메서드 오버라이딩, 다중 상속, 상속 실전 예제, 현업 흐름 검증)을 한 번에 복습하면서 스스로 얼마나 이해했는지 점검하는 단계다.

### 상세 설명
Day 23에서 배운 클래스 고급 개념을 난이도별로 복습한다. 기본 미션부터 시작해서 심화 미션까지 순서대로 도전할 수 있다.

```python
class Furniture:
    def __init__(self, material):
        self.material = material

    def describe(self):
        return self.material + ' furniture'

class Chair(Furniture):
    def __init__(self, material, legs):
        super().__init__(material)
        self.legs = legs

    def describe(self):
        base = super().describe()
        return base + f' with {self.legs} legs'

# 기본 미션: 부모 클래스만으로 인스턴스 만들고 속성 확인하기
table = Furniture('wood')
tableInfo = table.describe()

# 심화 미션: 자식 클래스에서 오버라이딩된 메서드 결과 확인하기
chair = Chair('metal', 4)
tableInfo = chair.describe()

tableInfo
```

---

## 전체 핵심 요약

| 문법 | 언제 쓰는가 | 한 줄 요약 |
|---|---|---|
| `class 자식(부모):` | 기존 클래스를 확장해서 새 클래스를 만들고 싶을 때 | 부모의 속성과 메서드를 물려받는다 |
| 자식의 `__init__` | 자식만의 추가 데이터를 초기화하고 싶을 때 | 정의하는 순간 부모의 `__init__`은 자동 호출되지 않는다 |
| `super()` | 부모의 기능을 재사용하면서 확장하고 싶을 때 | 부모 클래스를 안전하게 참조한다 |
| 메서드 오버라이딩 | 같은 이름의 동작을 자식마다 다르게 구현하고 싶을 때 | 부모 메서드를 자식에서 재정의한다 |
| 다중 상속 | 서로 다른 여러 성질을 동시에 물려받고 싶을 때 | 여러 부모 클래스를 한 번에 상속받는다 |
| 상속 + 오버라이딩 조합 | 공통 규칙은 같지만 세부 처리가 다른 대상을 다룰 때 | 같은 호출로 서로 다른 결과를 얻는 다형성을 구현한다 |