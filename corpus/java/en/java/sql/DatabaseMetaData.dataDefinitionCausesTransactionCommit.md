---
id: "java-en-function-databasemetadata-datadefinitioncausestransactioncommit"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.dataDefinitionCausesTransactionCommit"
signature: "boolean dataDefinitionCausesTransactionCommit() throws SQLException"
title: "DatabaseMetaData.dataDefinitionCausesTransactionCommit"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.dataDefinitionCausesTransactionCommit

```java
boolean dataDefinitionCausesTransactionCommit() throws SQLException
```

Retrieves whether a data definition statement within a transaction forces
 the transaction to commit.

**返回**

- `true` if so; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs
