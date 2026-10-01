---
id: "java-en-function-databasemetadata-supportsnamedparameters"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.supportsNamedParameters"
signature: "boolean supportsNamedParameters() throws SQLException"
title: "DatabaseMetaData.supportsNamedParameters"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.supportsNamedParameters

```java
boolean supportsNamedParameters() throws SQLException
```

Retrieves whether this database supports named parameters to callable
 statements.

**返回**

- `true` if named parameters are supported; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs

> *Since 1.4*
