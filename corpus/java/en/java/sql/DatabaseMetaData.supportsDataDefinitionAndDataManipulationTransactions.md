---
id: "java-en-function-databasemetadata-supportsdatadefinitionanddatamanipulationtransactions"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.supportsDataDefinitionAndDataManipulationTransactions"
signature: "boolean supportsDataDefinitionAndDataManipulationTransactions() throws SQLException"
title: "DatabaseMetaData.supportsDataDefinitionAndDataManipulationTransactions"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.supportsDataDefinitionAndDataManipulationTransactions

```java
boolean supportsDataDefinitionAndDataManipulationTransactions() throws SQLException
```

Retrieves whether this database supports both data definition and
 data manipulation statements within a transaction.

**返回**

- `true` if so; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs
