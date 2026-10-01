---
id: "java-en-function-databasemetadata-supportsmultipletransactions"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.supportsMultipleTransactions"
signature: "boolean supportsMultipleTransactions() throws SQLException"
title: "DatabaseMetaData.supportsMultipleTransactions"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.supportsMultipleTransactions

```java
boolean supportsMultipleTransactions() throws SQLException
```

Retrieves whether this database allows having multiple
 transactions open at once (on different connections).

**返回**

- `true` if so; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs
