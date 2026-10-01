---
id: "java-en-function-databasemetadata-supportsstoredprocedures"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.supportsStoredProcedures"
signature: "boolean supportsStoredProcedures() throws SQLException"
title: "DatabaseMetaData.supportsStoredProcedures"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.supportsStoredProcedures

```java
boolean supportsStoredProcedures() throws SQLException
```

Retrieves whether this database supports stored procedure calls
 that use the stored procedure escape syntax.

**返回**

- `true` if so; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs
