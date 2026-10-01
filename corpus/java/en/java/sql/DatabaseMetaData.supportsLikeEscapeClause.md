---
id: "java-en-function-databasemetadata-supportslikeescapeclause"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.supportsLikeEscapeClause"
signature: "boolean supportsLikeEscapeClause() throws SQLException"
title: "DatabaseMetaData.supportsLikeEscapeClause"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.supportsLikeEscapeClause

```java
boolean supportsLikeEscapeClause() throws SQLException
```

Retrieves whether this database supports specifying a
 `LIKE` escape clause.

**返回**

- `true` if so; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs
