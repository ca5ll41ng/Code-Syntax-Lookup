---
id: "java-en-function-databasemetadata-alltablesareselectable"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.allTablesAreSelectable"
signature: "boolean allTablesAreSelectable() throws SQLException"
title: "DatabaseMetaData.allTablesAreSelectable"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.allTablesAreSelectable

```java
boolean allTablesAreSelectable() throws SQLException
```

Retrieves whether the current user can use all the tables returned
 by the method `getTables` in a `SELECT`
 statement.

**返回**

- `true` if so; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs
