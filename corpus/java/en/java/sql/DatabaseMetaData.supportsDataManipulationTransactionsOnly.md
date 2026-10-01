---
id: "java-en-function-databasemetadata-supportsdatamanipulationtransactionsonly"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.supportsDataManipulationTransactionsOnly"
signature: "boolean supportsDataManipulationTransactionsOnly() throws SQLException"
title: "DatabaseMetaData.supportsDataManipulationTransactionsOnly"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.supportsDataManipulationTransactionsOnly

```java
boolean supportsDataManipulationTransactionsOnly() throws SQLException
```

Retrieves whether this database supports only data manipulation
 statements within a transaction.

**返回**

- `true` if so; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs
