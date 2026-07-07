---
title: "WINDOW FUNCTION 정리"
category: "SQL"
dialect: "Oracle"
date: 2026-07-03
tags: ["SQL", "WINDOW FUNCTION"]
---

## 개념
- WINDOW FUNCTION은 행을 그룹으로 묶지 않고도 집계 결과를 각 행에 붙일 수 있다.

## 예시
```sql
SELECT dept_id, salary,
       AVG(salary) OVER (PARTITION BY dept_id) AS dept_avg
FROM employees;
```
