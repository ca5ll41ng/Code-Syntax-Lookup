---
id: "java-en-function-databasemetadata-supportsgroupbybeyondselect"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.supportsGroupByBeyondSelect"
signature: "boolean supportsGroupByBeyondSelect() throws SQLException"
title: "DatabaseMetaData.supportsGroupByBeyondSelect"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.supportsGroupByBeyondSelect

```java
boolean supportsGroupByBeyondSelect() throws SQLException
```

Retrieves whether this database supports using columns not included in
 the `SELECT` statement in a `GROUP BY` clause
 provided that all of the columns in the `SELECT` statement
 are included in the `GROUP BY` clause.

**返回**

- `true` if so; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs
