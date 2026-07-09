---
title: "260707 [오라클 SQL] 기초: RDBMS 개념과 SQL 명령어 종류"
category: "SQL"
dialect: "Oracle"
date: 2026-07-07
tags: ["SQL", "Oracle"]
---
## SQL
- 데이터베이스에 접근하고 데이터를 조작하기 위한 표준 언어
- Structured Query Language(구조화된 쿼리 언어)의 약자
- 데이터베이스에 접근하고 데이터를 조작
- 1986년에 미국 국가표준협회(ANSI)의 표준, 1987년에는 국제표준화기구(ISO)의 표준

## DBMS
- Database Management System
- 데이터베이스 관리 시스템

## RDBMS
- Relational DBMS
- 관계형 데이터베이스

## SQL
#### DML (Data Manipulation Language) (데이터 조작어) 
- RDBMS 내 테이블의 데이터를 저장.수정.삭제하는 명령어
- 테이블 안에 있는 데이터를 관리
- select , insert , update , delete

#### DDL (Data Definition Language) : (데이터 정의어) 
- RDBMS 내 데이터 관리를 위해 테이블을 포함한 여러 객체를 생성, 수정, 삭제하는 명령어
- 테이블 자체를 관리
- create table , alter table , drop table

#### DCL (Data Control Language) 
- 데이터 사용 권한과 관련된 명령어
- grant , revoke

#### TCL (Transaction Control Language) 
- 트랜잭션 데이터의 영구 저장.취소 등과 관련된 명령어
- commit , rollback
