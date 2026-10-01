---
id: "java-en-function-databasemetadata-supportstransactionisolationlevel"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.supportsTransactionIsolationLevel"
signature: "boolean supportsTransactionIsolationLevel(int level) throws SQLException"
title: "DatabaseMetaData.supportsTransactionIsolationLevel"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.supportsTransactionIsolationLevel

```java
boolean supportsTransactionIsolationLevel(int level) throws SQLException
```

Retrieves whether this database supports the given transaction isolation level.

**参数**

- **level** — one of the transaction isolation levels defined in `java.sql.Connection`

**返回**

- `true` if so; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs

**参见**

- Connection
