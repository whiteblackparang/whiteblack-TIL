# Frontmatter 템플릿 모음

---

## 공통 필드 (모든 글에 필수)

```yaml
---
title: "글 제목"
category: "카테고리명"   # Daily / Project / SQL / Backend / Frontend / Python / R / Statistics / Data-Science / Computer-Science / Book-Reading
date: 2026-07-03
tags: ["태그1", "태그2"]
---
```

## SQL 폴더 전용

```yaml
---
title: "GROUP BY와 HAVING 차이"
category: "SQL"
dialect: "Oracle"   # Oracle / SQL Server / BigQuery / MySQL / DuckDB / MongoDB
date: 2026-07-03
tags: ["SQL", "GROUP BY"]
---
```

## Frontend 폴더 전용

```yaml
---
title: "시맨틱 태그 정리"
category: "Frontend"
stack: "HTML/CSS"   # HTML/CSS / JavaScript / TypeScript / React
date: 2026-07-03
tags: ["HTML", "Frontend"]
---
```

## Backend 폴더 전용

```yaml
---
title: "Nest.js 모듈 구조 정리"
category: "Backend"
stack: "Nest.js"
date: 2026-07-03
tags: ["Nest.js", "Backend"]
---
```

## Data-Science / Computer-Science 폴더 전용

```yaml
---
title: "Gradient Descent 정리"
category: "Data-Science"
source: "Coursera"   # Coursera / edX / 자체학습
course: "Machine Learning Specialization"
date: 2026-07-03
tags: ["ML", "Gradient Descent"]
---
```

## Book-Reading 폴더 전용

```yaml
---
title: "클린 코드 - 3장 함수"
category: "Book-Reading"
book: "클린 코드"
author: "로버트 C. 마틴"
date: 2026-07-03
tags: ["독서", "클린코드"]
---
```

---

## 파일명 규칙

```
YYYY-MM-DD-제목-슬러그.md
```

예시:
- `2026-07-03-oracle-window-function.md`
- `2026-07-03-nestjs-module-structure.md`
- `2026-07-03-gradient-descent.md`
