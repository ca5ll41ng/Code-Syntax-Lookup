---
id: "java-en-function-databasemetadata-datadefinitionignoredintransactions"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.dataDefinitionIgnoredInTransactions"
signature: "boolean dataDefinitionIgnoredInTransactions() throws SQLException"
title: "DatabaseMetaData.dataDefinitionIgnoredInTransactions"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.dataDefinitionIgnoredInTransactions

```java
boolean dataDefinitionIgnoredInTransactions() throws SQLException
```

Retrieves whether this database ignores a data definition statement
 within a transaction.

**返回**

- `true` if so; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs
