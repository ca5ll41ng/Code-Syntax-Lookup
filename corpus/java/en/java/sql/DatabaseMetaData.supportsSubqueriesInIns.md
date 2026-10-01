---
id: "java-en-function-databasemetadata-supportssubqueriesinins"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.supportsSubqueriesInIns"
signature: "boolean supportsSubqueriesInIns() throws SQLException"
title: "DatabaseMetaData.supportsSubqueriesInIns"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.supportsSubqueriesInIns

```java
boolean supportsSubqueriesInIns() throws SQLException
```

Retrieves whether this database supports subqueries in
 `IN` expressions.

**返回**

- `true` if so; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs
