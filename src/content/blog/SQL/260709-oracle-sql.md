---
title: "260709 [오라클 SQL] 기초 : 데이터 사전과 데이터 관리"
category: "SQL"
dialect: "Oracle"
date: 2026-07-09
tags: ["SQL", "Oracle"]
---

# 오라클 SQL 기초 및 데이터 사전 요약

## 데이터 사전 (Data Dictionary)

데이터 사전은 오라클 데이터베이스를 구성하고 운영하는 메타데이터를 저장하는 특수한 테이블입니다. 오라클 사용자가 직접 수정하거나 접근할 수 없지만, 사용자가 조회할 수 있도록 **데이터 사전 뷰(Data Dictionary View)**를 제공합니다.

### 데이터 사전 뷰의 대표적인 접두어
* **`USER_`**: 현재 접속한 사용자가 소유하는 객체(테이블, 인덱스 등) 목록을 조회할 때 사용합니다.
* **`ALL_`**: 현재 사용자가 소유한 객체를 포함하여, 다른 사용자가 소유하고 있지만 나에게 사용 허가(권한)가 되어 있는 객체를 조회할 때 사용합니다.
* **`DBA_`**: 데이터베이스 관리(DBA) 권한을 가진 사용자만 조회할 수 있습니다. 일반 계정(예: SCOTT)으로 조회 시 보안 문제로 인해 존재하지 않는다는 메시지가 표시되거나 접근이 차단됩니다.

### 데이터 사전 뷰 조회 예시

#### USER_TABLES
```sql
SELECT table_name
FROM user_tables;
```

---

ALL_TABLES 
```sql
SELECT owner, table_name
FROM all_tables;
```

## CREATE 테이블 생성
기존 테이블을 바탕으로 새로운 이름의 임시 테이블(CO_DEPT_SRC, CO_EMP_SRC)을 생성하는 방법입니다.