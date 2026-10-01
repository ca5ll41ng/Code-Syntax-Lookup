---
id: "java-en-function-databasemetadata-supportstransactions"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.supportsTransactions"
signature: "boolean supportsTransactions() throws SQLException"
title: "DatabaseMetaData.supportsTransactions"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.supportsTransactions

```java
boolean supportsTransactions() throws SQLException
```

Retrieves whether this database supports transactions. If not, invoking the
 method `commit` is a noop, and the isolation level is
 `TRANSACTION_NONE`.

**返回**

- `true` if transactions are supported; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs
