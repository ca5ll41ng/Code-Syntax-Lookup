---
id: "java-en-function-databasemetadata-supportsgetgeneratedkeys"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.supportsGetGeneratedKeys"
signature: "boolean supportsGetGeneratedKeys() throws SQLException"
title: "DatabaseMetaData.supportsGetGeneratedKeys"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.supportsGetGeneratedKeys

```java
boolean supportsGetGeneratedKeys() throws SQLException
```

Retrieves whether auto-generated keys can be retrieved after
 a statement has been executed

**返回**

- `true` if auto-generated keys can be retrieved after a statement has executed; `false` otherwise   If `true` is returned, the JDBC driver must support the returning of auto-generated keys for at least SQL INSERT statements

**异常**

- **SQLException** — if a database access error occurs

> *Since 1.4*
