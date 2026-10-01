---
id: "java-en-function-databasemetadata-getmaxtablesinselect"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.getMaxTablesInSelect"
signature: "int getMaxTablesInSelect() throws SQLException"
title: "DatabaseMetaData.getMaxTablesInSelect"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.getMaxTablesInSelect

```java
int getMaxTablesInSelect() throws SQLException
```

Retrieves the maximum number of tables this database allows in a
 `SELECT` statement.

**返回**

- the maximum number of tables allowed in a `SELECT` statement; a result of zero means that there is no limit or the limit is not known

**异常**

- **SQLException** — if a database access error occurs
